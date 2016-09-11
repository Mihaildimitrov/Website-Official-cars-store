// This file contains the information required for the performance of the app.
// This file contains information for company products.

// This is variable for function pictureSliderMini, call function with this variable.
var model1 = "picture1",
    model2 = "picture2",
    model3 = "picture3",
    model4 = "picture4",
    model5 = "picture5",
    model6 = "picture6";

// This is variable for function pictureSliderMini, call function with this variable.
var folderPathImg1 = "images/firstmodel/car1.",
    folderPathImg2 = "images/secondmodel/car2.",
    folderPathImg3 = "images/thirdmodel/car3.",
    folderPathImg4 = "images/fourthmodel/car4.",
    folderPathImg5 = "images/fifthmodel/car5.",
    folderPathImg6 = "images/sixthmodel/car6.";



// This object with name "template" contains html templates.
var template = {
    // Template if choose car with ID 1.
    1: {
        // This html img elements with function for current car.
        startPicture: '<img id="picture1" src="images/firstmodel/car1.1.png" alt="car">',
        leftButton: '<img onclick="pictureSliderMini(-1, model1, folderPathImg1)" id="leftButton" src="images/leftarrow.png" alt="button">',
        rightButton: '<img onclick="pictureSliderMini(1, model1, folderPathImg1)" id="rightButton" src="images/rightarrow.png" alt="button">',
        // This is title for current car.
        title: '<h1>The new SUV PHP V6 Turbo</h1>'
    },
    // Template if choose car with ID 2.
    2: {
        // This html img elements with function for current car.
        startPicture: '<img id="picture2" src="images/secondmodel/car2.1.png" alt="car">',
        leftButton: '<img onclick="pictureSliderMini(-1, model2, folderPathImg2)" id="leftButton" src="images/leftarrow.png" alt="button">',
        rightButton: '<img onclick="pictureSliderMini(1, model2, folderPathImg2)" id="rightButton" src="images/rightarrow.png" alt="button">',
        // This is title for current car.
        title: '<h1>The new SUV PYTHON V12 4X4</h1>'
    },
    // Template if choose car with ID 3.
    3: {
        // This html img elements with function for current car.
        startPicture: '<img id="picture3" src="images/thirdmodel/car3.1.png" alt="car">',
        leftButton: '<img onclick="pictureSliderMini(-1, model3, folderPathImg3)" id="leftButton" src="images/leftarrow.png" alt="button">',
        rightButton: '<img onclick="pictureSliderMini(1, model3, folderPathImg3)" id="rightButton" src="images/rightarrow.png" alt="button">',
        // This is title for current car.
        title: '<h1>The new SUV RUBY V6 Turbo</h1>'
    },
    // Template if choose car with ID 4.
    4: {
        // This html img elements with function for current car.
        startPicture: '<img id="picture4" src="images/fourthmodel/car4.1.png" alt="car">',
        leftButton: '<img onclick="pictureSliderMini(-1, model4, folderPathImg4)" id="leftButton" src="images/leftarrow.png" alt="button">',
        rightButton: '<img onclick="pictureSliderMini(1, model4, folderPathImg4)" id="rightButton" src="images/rightarrow.png" alt="button">',
        // This is title for current car.
        title: '<h1>The new SUV JAVA V12 Turbo</h1>'
    },
    // Template if choose car with ID 5.
    5: {
        // This html img elements with function for current car.
        startPicture: '<img id="picture5" src="images/fifthmodel/car5.1.png" alt="car">',
        leftButton: '<img onclick="pictureSliderMini(-1, model5, folderPathImg5)" id="leftButton" src="images/leftarrow.png" alt="button">',
        rightButton: '<img onclick="pictureSliderMini(1, model5, folderPathImg5)" id="rightButton" src="images/rightarrow.png" alt="button">',
        // This is title for current car.
        title: '<h1>The new SUV C++ V10 SPORT</h1>'
    },
    // Template if choose car with ID 6.
    6: {
        // This html img elements with function for current car.
        startPicture: '<img id="picture6" src="images/sixthmodel/car6.1.png" alt="car">',
        leftButton: '<img onclick="pictureSliderMini(-1, model6, folderPathImg6)" id="leftButton" src="images/leftarrow.png" alt="button">',
        rightButton: '<img onclick="pictureSliderMini(1, model6, folderPathImg6)" id="rightButton" src="images/rightarrow.png" alt="button">',
        // This is title for current car.
        title: '<h1>The new SUV C# V8 Turbo</h1>'
    },
};


// This object with name "tableTemplate" contains information for table fields for each car in company.
var tableTemplate = {
    // This is object for first model with prop for table fields.
    1: {
        modelName: 'PHP V6 TURBO',
        model: 'PHP',
        engine: '4.0 TDI V6',
        power: '435 hp/3750–5000 rpm.',
        maxSpeed: '340 km/h',
        acceleration: '4.8 sec',
        fuelSystem: 'Diesel Commonrail',
        cylinders: '6',
        fuelType: 'Diesel',
        gears: '8',
        consumption: '7.4 l/100 km.',
        emission: '194 g/km'
    },
    // This is object for second model with prop for table fields.
    2: {
        modelName: 'Python V12 4X4',
        model: 'PYTHON',
        engine: '5.4 TDI V6',
        power: '615 hp/3750–5000 rpm.',
        maxSpeed: '375 km/h',
        acceleration: '3.8 sec',
        fuelSystem: 'Diesel Commonrail',
        cylinders: '12',
        fuelType: 'Diesel',
        gears: '8',
        consumption: '9.4 l/100 km.',
        emission: '254 g/km'
    },
    // This is object for third model with prop for table fields.
    3: {
        modelName: 'RUBY V6 TURBO',
        model: 'RUBY',
        engine: '3.2 TDI V6',
        power: '364 hp/3750–5000 rpm.',
        maxSpeed: '315 km/h',
        acceleration: '4.5 sec',
        fuelSystem: 'Direct injection',
        cylinders: '6',
        fuelType: 'Petrol',
        gears: '7',
        consumption: '10.4 l/100 km.',
        emission: '224 g/km'
    },
    // This is object for fourth model with prop for table fields.
    4: {
        modelName: 'JAVA V12 TURBO',
        model: 'JAVA',
        engine: '5.0 TDI V12',
        power: '521 hp/3750–5000 rpm.',
        maxSpeed: '375 km/h',
        acceleration: '4.5 sec',
        fuelSystem: 'Diesel Commonrail',
        cylinders: '12',
        fuelType: 'Diesel',
        gears: '7',
        consumption: '8.4 l/100 km.',
        emission: '154 g/km'
    },
    // This is object for fifth model with prop for table fields.
    5: {
        modelName: 'C++ V10 SPORT',
        model: 'C++',
        engine: '5.2 TFSI V6',
        power: '564 hp/3750–5000 rpm.',
        maxSpeed: '315 km/h',
        acceleration: '5.5 sec',
        fuelSystem: 'Direct injection',
        cylinders: '6',
        fuelType: 'Petrol',
        gears: '7',
        consumption: '10.4 l/100 km.',
        emission: '224 g/km'
    },
    // This is object for sixth model with prop for table fields.
    6: {
        modelName: 'C# V8 TURBO',
        model: 'C#',
        engine: '4.0 TDI V6',
        power: '435 hp/3750–5000 rpm.',
        maxSpeed: '340 km/h',
        acceleration: '4.8 sec',
        fuelSystem: 'Diesel Commonrail',
        cylinders: '6',
        fuelType: 'Diesel',
        gears: '8',
        consumption: '7.4 l/100 km.',
        emission: '194 g/km'
    }
};