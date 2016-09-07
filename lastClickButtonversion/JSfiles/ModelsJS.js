// Select the wrapper element.     
var wrapper = document.getElementById("template-wrapper");
    
var currentElementID = '';

function displayModel(event) {
    // Get the current id and save in variable.
    var id = event.target.attributes.id.value;
    currentElementID = id;

    // Check if the element does not this class it added.
    // -1 becouse if class does not exist show -1.
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
    var mainSection = document.getElementById('mainSection');
    var titleModel = document.getElementById('titleModel');
    var closeIcon = document.getElementById('closeIcon');
    var startPicture = document.getElementById('startPicture');
    var leftButton = document.getElementById('leftButton');
    var rightButton = document.getElementById('rightButton');

    // Change content in this elements.
    mainSection.id = selectedSection.mainSection;
    secondWrap = mainSection.id;
    titleModel.innerHTML = selectedSection.title;
    closeIcon.innerHTML = selectedSection.closeIcon;
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
    var selectedSectionElement = template[currentElementID];
    var templateCurrentElement = selectedSectionElement.mainSection 
    // Save in variable element with ID .
    var element = document.getElementById(templateCurrentElement);
   
    // Save in variable element with ID "main-tag".
    var mainElement = document.getElementById('main-tag');

    var templateElement = document.getElementById('template-wrapper');

    // Change style options:

    // Change width, height, backgroundColor, borderRadius and margin.
    mainElement.style.width = "auto";
    mainElement.style.height = "auto";
    mainElement.style.borderRadius = "0";
    mainElement.style.margin = "0";
    mainElement.style.backgroundColor = "transparent";

    // Set current element new id with name "mainSection".
    element.id = 'mainSection';
    currentElementID = '';
    templateElement.classList.value = "";
}