// Brand blue: #1866ee
// Brand red: #f9556c
// Brand grey: #aaaaaa
// Brand white: #eeeeee

// HTML element selectors
const sliderEl = document.querySelector('#slider');
const playbackRateEl = document.querySelector('.playback-rate');

// Global values
const defaultPlaybackRate = 1.0;

/**
 * Given a value, this function filters the value
 * against the main playback rate values
 *
 * @param value - Playback value
 */
const filterSmallValues = value => !![0.1, 1.0, 2.0, 5.0].includes(value) ? 1 : 0

/**
 * Finds the video element on the current tab and sets currentPlaybackRate to be its playback rate
 *
 * @param currentPlaybackRate - Playback rate set by the slider
 */
const changePlaybackRate = currentPlaybackRate => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                code: `document.querySelectorAll('video').forEach(v => v.playbackRate = ${currentPlaybackRate})`
            }
        )
    })
}

/**
 * Create slider on sliderEl element
 */
noUiSlider.create(sliderEl, {
    range: {
        'min': [0.1, 0.1],
        '30%': [1.0, 0.1],
        '60%': [2.0, 0.5],
        'max': [5.0]
    },
    start: defaultPlaybackRate,
    behaviour: 'tap-drag',
    tooltips: true,
    pips: {
        mode: 'steps',
        density: 20,
        filter: filterSmallValues

    }
});

/**
 * Set the slider value to default playback rate
 */
document.querySelector('.button-reset').addEventListener('click', () => {
    sliderEl.noUiSlider.set(defaultPlaybackRate)
    changePlaybackRate(defaultPlaybackRate)

});

/**
 * Sets the playback rate text to current playback rate whenever the slider value is updated
 */
sliderEl.noUiSlider.on('update', () => {
    playbackRateEl.textContent = `Videos playing at ${sliderEl.noUiSlider.get()}x speed.`
    changePlaybackRate(sliderEl.noUiSlider.get())
})



