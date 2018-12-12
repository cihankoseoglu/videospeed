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



const slider = document.getElementById('slider');
const defaultPlaybackRate = 1.0;
const filterSmallValues = (value, type) => {
    if (type == 0) {
        return value / 1 == 1 ? 1 : -1
    }

}

noUiSlider.create(slider, {
    range: {
        'min': [0.1, 0.1],
        '30%': [1.0, 0.1],
        '60%': [2.0, 0.5],
        'max': [5.0]
    },

    start: defaultPlaybackRate,


    // Put '0' at the bottom of the slider
    orientation: 'horizontal',

    // Move handle on tap, bars are draggable
    behaviour: 'tap-drag',
    tooltips: true,

    // Show a scale with the slider
    pips: {
        mode: 'steps',
        density: 20,
        filter: filterSmallValues

    }
});

// Set the slider value to default playback rate
document.querySelector('.button-reset').addEventListener('click', () => {
    slider.noUiSlider.set(defaultPlaybackRate);

    //set storage value to 1
    //set video speed to 1

});


