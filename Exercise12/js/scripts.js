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

// IF THE OBJECT IS NOT NULL,THEN GET THAT AND ASSIGN
if(sessionStorage.getItem("shapeObject") != null){
    const object = JSON.parse(sessionStorage.getItem("shapeObject"));
    nextButton.style.display = "inline";

    document.getElementsByClassName(object.selectedShape)[0].appendChild(tick);
 
    shapeObject={
        selectedShape: object.selectedShape,
    }
}

// ARRAY OF OBJECTS CONTAINING THE SHAPES
const shapes = [
   {
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
    {
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
    {
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
]

// CLICK EVENT LISTENER FOR THE SHAPE CONTAINER
shapesContainer.addEventListener("click",(event)=>{
    const shapeName = event.target.className;
    const parentNode = document.getElementsByClassName(shapeName)[0];
    document.getElementsByClassName(shapeName)[0].appendChild(tick);
    nextButton.style.display = "inline";
    shapeObject.selectedShape = shapeName;
    sessionStorage.setItem("shapeObject",JSON.stringify(shapeObject));
});


// CLICK EVENT LISTENER FOR THE NEXT BUTTON
function nextButtonClick(){
    shapesSection.style.display = "none";
    valueSection.style.display = "block";  
    for(let shape of shapes){
        if(shape.shapeName == shapeObject.selectedShape){
            valueHeading.innerHTML = shape.shapeInputText;
            break;
        }
    }
}

// CLICK EVENT LISTENER FOR THE CALCULATE BUTTON
function calculateButtonClick(){
    valueSection.style.display = "none";
    resultSection.style.display = "block";
    document.querySelector("#result-shape").setAttribute("class",shapeObject.selectedShape);
    for(let shape of shapes){
        if(shape.shapeName == shapeObject.selectedShape){
            resultHeading.innerHTML = shape.shapeResultHeading;
            property.innerHTML = shape.property1;
            inputvalue = inputBox.value;

            document.querySelector(".formula").innerHTML = shape.formula;
            document.querySelector(".area-formula").innerHTML = shape.areaFormula;
            document.querySelector(".perimeter-formula").innerHTML = shape.perimeterFormula;

            document.querySelector(".result1").innerHTML = inputvalue +" cm";
            document.querySelector(".result2").innerHTML = shape.getArea(inputvalue).toFixed(2) +" sq cm";
            document.querySelector(".result3").innerHTML = shape.getPerimeter(inputvalue).toFixed(2) +" cm";

            break;
        }
    }
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