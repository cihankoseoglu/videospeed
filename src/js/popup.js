// Brand blue: #1866ee
// Brand red: #f9556c
// Brand grey: #aaaaaa
// Brand white: #eeeeee


// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', data => {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
// };



const sliderEl = document.querySelector('#slider');
const playbackRateEl = document.querySelector('.playback-rate');

const defaultPlaybackRate = 1.0;
let currentPlaybackRate = 1.0;
const largeValues = [0.1, 1.0, 2.0, 5.0];

const filterSmallValues = (value, type) => {
    return !!largeValues.includes(value) ? 1 : 0
}

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

// Set the slider value to default playback rate
document.querySelector('.button-reset').addEventListener('click', () => {
    sliderEl.noUiSlider.set(defaultPlaybackRate);
    currentPlaybackRate = sliderEl.noUiSlider.get()

    //set storage value to 1
    //set video speed to 1

});

sliderEl.noUiSlider.on('update', () => {
    currentPlaybackRate = sliderEl.noUiSlider.get()
    playbackRateEl.textContent = `Videos playing at ${currentPlaybackRate}x speed.`
})



