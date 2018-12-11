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

noUiSlider.create(slider, {
    start: [80],
    range: {
        'min': [0],
        'max': [100]
    }
});

// Set the slider value to 1.00
document.querySelector('.button-reset').addEventListener('click', () => {
    slider.noUiSlider.set(1.00);

    //set storage value to 1
    //set video speed to 1

});


