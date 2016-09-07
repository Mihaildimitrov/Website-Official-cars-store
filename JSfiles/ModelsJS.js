// Select the wrapper element.     
var mainWrapper = document.getElementById("template-wrapper");
// In this variable save id of current element.
var secondWrap = '';

function selectedModel(event) {
    // Save in variable element with ID "row1-models".
    var firstSectionFromMainTag = document.getElementById('row1-models');
    // Save in variable element with ID "row2-models".
    var secondSectionFromMainTag = document.getElementById('row2-models');
    // Get the current id of element, and save in variable.
    var id = event.target.attributes.id.value;
    // Call this function and change some HTML elements. 
    replacementSectionContent(id);
    // Call this function and change fields in table.
    replacementModelInfo(id);

    // Save in variable element with ID "template-wrapper".
    var modelInfo = document.getElementById('template-wrapper');
    var secondWrapper = document.getElementById(secondWrap);
    // Save in variable element with ID "main-tag".
    var mainElement = document.getElementById('main-tag');

    // Change style options:
    // Hide this element.
    firstSectionFromMainTag.style.display = "none";
    // Hide this element.
    secondSectionFromMainTag.style.display = "none";
    // Show this elements.
    modelInfo.style.display = "block";
    secondWrapper.style.display = "block";

    // Change width, height, backgroundColor, borderRadius and margin.
    mainElement.style.width = "85%";
    mainElement.style.height = "85%";
    mainElement.style.borderRadius = "10px 10px 10px 10px";
    mainElement.style.margin = "1% auto";
    mainElement.style.backgroundColor = "#525252";
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