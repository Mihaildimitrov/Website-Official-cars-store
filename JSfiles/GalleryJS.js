// With this varable count picture in slider(use to counter).
var imagecount = 1;
// This variable is number of picture in slider.
var totalImages = 10;

// This function with name "pictureSlider" change the picture in slider if the buttons are clicked.
function pictureSlider(number) {
    // In this variable save selected element from DOM.
    var image = document.getElementById('picture');
    // Upgrade counter "imagecount"
    imagecount = imagecount + number;
    // When 'imagecount' is greater than total picture in slider, 'imagecount' is equal to 1, and show first picture in slider.
    if (imagecount > totalImages) {
        imagecount = 1;
    }
    // When 'imagecount' is less than one, 'imagecount' is equal to total picture in slider, and show last picture in slider.
    if (imagecount < 1) {
        imagecount = totalImages;
    }
    // Change property "src" of "image" variable, and change picture in slider.
    image.src = "images/Slider/car" + imagecount + ".png";
}

// This function with name "setInterval" change picture in slider automatically.
window.setInterval(
    function pictureSliderAutomatically() {
        var image = document.getElementById('picture');
        imagecount = imagecount + 1;
        // When 'imagecount' is greater than total picture in slider, 'imagecount' is equal to 1, and show first picture in slider.
        if (imagecount > totalImages) {
            imagecount = 1;
        }
        // When 'imagecount' is less than one, 'imagecount' is equal to total picture in slider, and show last picture in slider.
        if (imagecount < 1) {
            imagecount = totalImages;
        }
        image.src = "images/Slider/car" + imagecount + ".png";
        // After function we set how many seconds to change picture in slider.
    }, 3000);