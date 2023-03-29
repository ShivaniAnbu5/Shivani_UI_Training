// ELEMENT SELECTORS
var shapesSection = document.querySelector(".shape-section");
var valueSection = document.querySelector(".value-section");
var resultSection = document.querySelector(".result-section");

var shapesContainer= document.querySelector(".shapes-container");

var circle = document.querySelector(".circle");
var triangle = document.querySelector(".triangle");
var square = document.querySelector(".square");

var nextButton = document.querySelector(".next-button");
var calculateButton = document.querySelector(".calculate-button");
var startButton = document.querySelector(".start-button");

var valueHeading = document.querySelector(".value-heading");
var resultHeading = document.querySelector(".result-heading");

var property = document.querySelector(".property");

var inputBox = document.querySelector(".input-box");

const icon = document.createElement("i");

// OBJECT TO STORE IN SESSION STORAGE
var shapeObject={
    selectedShape:"",
}

// IF THE OBJECT IS NOT NULL,THEN GET THAT AND ASSIGN
if(sessionStorage.getItem("shapeObject") != null){
    var object = JSON.parse(sessionStorage.getItem("shapeObject"));
    nextButton.style.display = "inline";
    icon.setAttribute("class","fa-solid fa-check icon "+object.selectedShape+"Icon");
    document.getElementsByClassName(object.selectedShape)[0].appendChild(icon);
 
    shapeObject={
        selectedShape: object.selectedShape,
    }
}

// ARRAY OF OBJECTS CONTAINING THE SHAPES
const shapes = [
   circle = {
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
    triangle = {
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
    square = {
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
    var shapeName = event.target.className;
    const parentNode = document.getElementsByClassName(shapeName)[0];
    if(!parentNode.contains(icon)){
        icon.setAttribute("class","fa-solid fa-check icon "+shapeName+"Icon");
        document.getElementsByClassName(shapeName)[0].appendChild(icon);
    } 
    nextButton.style.display = "inline";
    shapeObject.selectedShape = shapeName;
    sessionStorage.setItem("shapeObject",JSON.stringify(shapeObject));
});


// CLICK EVENT LISTENER FOR THE NEXT BUTTON
nextButton.addEventListener("click",()=>{
    shapesSection.style.display = "none";
    valueSection.style.display = "block";  
    for(let shape of shapes){
        if(shape.shapeName == shapeObject.selectedShape){
            valueHeading.innerHTML = shape.shapeInputText;
            break;
        }
    }
    
})

// CLICK EVENT LISTENER FOR THE CALCULATE BUTTON
calculateButton.addEventListener("click",()=>{
    valueSection.style.display = "none";
    resultSection.style.display = "block";
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

})

// CLICK EVENT LISTENER FOR THE START AGAIN BUTTON
startButton.addEventListener("click",()=>{
    shapesSection.style.display = "block";
    resultSection.style.display = "none";
    nextButton.style.display = "none";

    document.getElementsByClassName(shapeObject.selectedShape)[0].removeChild(icon);
    inputBox.value = "";

    sessionStorage.removeItem("shapeObject");
})