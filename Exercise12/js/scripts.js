// ELEMENT SELECTORS
const shapesSection = document.querySelector(".shape-section");
const valueSection = document.querySelector(".value-section");
const resultSection = document.querySelector(".result-section");

const shapesContainer= document.querySelector(".shapes-container");

const circle = document.querySelector(".circle");
const triangle = document.querySelector(".triangle");
const square = document.querySelector(".square");

const nextButton = document.querySelector(".next-button");
const calculateButton = document.querySelector(".calculate-button");
const startButton = document.querySelector(".start-button");

const valueHeading = document.querySelector(".value-heading");
const resultHeading = document.querySelector(".result-heading");

const property = document.querySelector(".property");

const inputBox = document.querySelector(".input-box");

const tick = document.createElement("div");
tick.setAttribute("id","tick");

// OBJECT TO STORE IN SESSION STORAGE
var shapeObject={
    selectedShape:"",
}

var shapeName;
// IF THE OBJECT IS NOT NULL,THEN GET THAT AND ASSIGN
if(sessionStorage.getItem("shapeObject") != null){
    const object = JSON.parse(sessionStorage.getItem("shapeObject"));
    nextButton.style.display = "inline";
    shapeName = object.selectedShape;
    document.getElementsByClassName(object.selectedShape)[0].appendChild(tick);
}

//OBJECT CONTAINING THE SHAPES
const shapes = {
   circle :{
        shapeNo : 1,
        shapeName : "circle",
        shapeInputText : "2. Enter radius",
        shapeResultHeading : "Circle",
        property1 : "RADIUS",
        formula : "r",
        areaFormula : "πr²",
        perimeterFormula : "2πr",
        getArea: (value) => 3.14 * value * value,
        getPerimeter: (value) => 2 * 3.14 * value,
    },
    triangleContent :{
        shapeNo : 2,
        shapeName : "triangle",
        shapeInputText : "2. Enter Side(Base & Height)",
        shapeResultHeading : "Equilateral Triangle",
        property1 : "SIDE",
        formula : "s",
        areaFormula : "0.433 * s * s",
        perimeterFormula : "3 * s",
        getArea: (value) => 0.433 * value * value,
        getPerimeter: (value) => 3 * value,
    },
    square: {
        shapeNo : 3,
        shapeName : "square",
        shapeInputText : "2. Enter side",
        shapeResultHeading : "Square",
        property1 : "SIDE",
        formula : "s",
        areaFormula : "s * s",
        perimeterFormula : "4 * s",
        getArea: (value) => value * value,
        getPerimeter: (value) => 4 * value,
    }
}


// CLICK EVENT LISTENER FOR THE SHAPE CONTAINER
shapesContainer.addEventListener("click",(event)=>{
    shapeName = event.target.className;
    document.querySelector("."+shapeName).appendChild(tick);
    nextButton.style.display = "inline";
    shapeObject.selectedShape = shapeName;
    sessionStorage.setItem("shapeObject",JSON.stringify(shapeObject));
});


// CLICK EVENT LISTENER FOR THE NEXT BUTTON
function nextButtonClick(){
    shapesSection.style.display = "none";
    valueSection.style.display = "block";  
    valueHeading.innerHTML = shapes[shapeName].shapeInputText;

}

// CLICK EVENT LISTENER FOR THE CALCULATE BUTTON
function calculateButtonClick(){
    valueSection.style.display = "none";
    resultSection.style.display = "block";
    document.querySelector("#result-shape").setAttribute("class",shapeName);

    resultHeading.innerHTML = shapes[shapeName].shapeResultHeading;
    property.innerHTML = shapes[shapeName].property1;
    inputvalue = inputBox.value;

    document.querySelector(".formula").innerHTML = shapes[shapeName].formula;
    document.querySelector(".area-formula").innerHTML = shapes[shapeName].areaFormula;
    document.querySelector(".perimeter-formula").innerHTML = shapes[shapeName].perimeterFormula;

    document.querySelector(".result1").innerHTML = inputvalue +" cm";
    document.querySelector(".result2").innerHTML = shapes[shapeName].getArea(inputvalue).toFixed(2) +" sq cm";
    document.querySelector(".result3").innerHTML = shapes[shapeName].getPerimeter(inputvalue).toFixed(2) +" cm";
}

// CLICK EVENT LISTENER FOR THE START AGAIN BUTTON
function startButtonClick(){
    shapesSection.style.display = "block";
    resultSection.style.display = "none";
    nextButton.style.display = "none";

    document.getElementsByClassName(shapeObject.selectedShape)[0].removeChild(tick);

    inputBox.value = "";

    sessionStorage.removeItem("shapeObject");
}