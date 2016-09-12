// Select the wrapper element.     
var wrapper = document.getElementById("template-wrapper");

function displayModel(event) {
    // Get the current id of the button which is clicked and save in variable.
    var id = event.target.attributes.id.value;

    // Check if the element has no class with name ‘modal’ added him.
    if (wrapper.classList.value.indexOf("modal") == -1) {
        wrapper.classList += "modal";
    }
    // Call this function and change some HTML elements. 
    replacementSectionContent(id);
    // Call this function and change fields in table.
    replacementModelInfo(id);
}



// This function replaced some content in some HTML elements.
function replacementSectionContent(elementID) {
    // Get from Template object information for current elements, and save in variable.
    var selectedSection = template[elementID];

    // Selected some element from main section element and save in variable.
    var titleModel = document.getElementById('titleModel');
    var startPicture = document.getElementById('startPicture');
    var leftButton = document.getElementById('leftButton');
    var rightButton = document.getElementById('rightButton');

    // Change content in this elements.
    titleModel.innerHTML = selectedSection.title;
    startPicture.innerHTML = selectedSection.startPicture;
    leftButton.innerHTML = selectedSection.leftButton;
    rightButton.innerHTML = selectedSection.rightButton;
}

// This function change content in table.
function replacementModelInfo(elementID) {
    // Get from Templatetable object information for current table, and save in variable.
    var selectedModel = tableTemplate[elementID];

    // Selected element in table from table element and save in variable.
    var modelName = document.getElementById('modelName');
    var model = document.getElementById('model');
    var engine = document.getElementById('engine');
    var power = document.getElementById('power');
    var maxSpeed = document.getElementById('maxSpeed');
    var acceleration = document.getElementById('acceleration');
    var fuelSystem = document.getElementById('fuelSystem');
    var cylinders = document.getElementById('cylinders');
    var fuelType = document.getElementById('fuelType');
    var gears = document.getElementById('gears');
    var consumption = document.getElementById('consumption');
    var emission = document.getElementById('emission');

    // Chnage content in table fields.
    modelName.innerHTML = selectedModel.modelName;
    model.innerHTML = selectedModel.model;
    engine.innerHTML = selectedModel.engine;
    power.innerHTML = selectedModel.power;
    maxSpeed.innerHTML = selectedModel.maxSpeed;
    acceleration.innerHTML = selectedModel.acceleration;
    fuelSystem.innerHTML = selectedModel.fuelSystem;
    cylinders.innerHTML = selectedModel.cylinders;
    fuelType.innerHTML = selectedModel.fuelType;
    gears.innerHTML = selectedModel.gears;
    consumption.innerHTML = selectedModel.consumption;
    emission.innerHTML = selectedModel.emission;
}

// Function for close window information .
function closeInfo() {

    // Save in variable element with ID "main-tag".
    var mainElement = document.getElementById('main-tag');

    // Change style options:
    // Change width, height, backgroundColor, borderRadius and margin.
    mainElement.style.width = "auto";
    mainElement.style.height = "auto";
    mainElement.style.borderRadius = "0";
    mainElement.style.margin = "0";
    mainElement.style.backgroundColor = "transparent";

    wrapper.classList.value = "";
}

// With this varable count picture in slider.
var imagecount = 1;
// This variable is number of picture in slider.
var totalImage = 4;


// This function with name "pictureSlider1" change the picture in slider if the buttons are clicked.
function pictureSliderMini(number, imageModel, folderPath) {
    // In this variable save selected element from DOM.
    var image = document.getElementById(imageModel);
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
    image.src = folderPath + imagecount + ".png";
}