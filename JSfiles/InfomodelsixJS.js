// With this varable count picture in slider.
var imagecount = 1;
// This variable is number of picture in slider.
var totalImage = 4;


// This function with name "pictureSlider" change the picture in slider if the buttons are clicked.
function pictureSlider6(number) {
    // In this variable save selected element from DOM.
    var image = document.getElementById('picture6');
    // Upgrade counter "imagecount"
    imagecount = imagecount + number;
    // When 'imagecount' is greater than total picture in slider, 'imagecount' is equal to 1, and show first picture in slider.
    if (imagecount > totalImage) {
        imagecount = 1;
    }
    // When 'imagecount' is less than one, 'imagecount' is equal to total picture in slider, and show last picture in slider.
    if (imagecount < 1) {
        imagecount = totalImage;
    }
    //Change property "src" of "image" variable, and change picture in slider.
    image.src = "images/sixthmodel/car6." + imagecount + ".png";
}

// Function for close window information.
function closeInfo6() {
    // Save in variable element with ID "model6".
    var element = document.getElementById('model6');
    // Save in variable element with ID "row1-models".
    var firstSectionFromMainTag = document.getElementById('row1-models');
    // Save in variable element with ID "row2-models".
    var secondSectionFromMainTag = document.getElementById('row2-models');
    // Save in variable element with ID "main-tag".
    var mainElement = document.getElementById('main-tag');

    // Change style options:
    // Hide this element.
    element.style.display = "none";

    // Change width, height, backgroundColor, borderRadius and margin.
    mainElement.style.width = "auto";
    mainElement.style.height = "auto";
    mainElement.style.borderRadius = "0";
    mainElement.style.margin = "0";
    mainElement.style.backgroundColor = "transparent";

    // Show this elements.
    firstSectionFromMainTag.style.display = "block";
    secondSectionFromMainTag.style.display = "block";

}