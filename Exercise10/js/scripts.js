// SECTION 1
console.log(1+2);
console.log("apple"+"orange");
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1+true);
console.log(0 == false);
console.log(1 === true);
console.log(2 == "2");

//SECTION 2
//1
var playersList = ["Shane Watson","Rayudu","Raina","Sam Curran","Jadeja","Malinga","Ashwin","Bhuvneshwar","Rashid Khan","Bravo","Siddharth Kaul"];
console.log("Players list :"+playersList);

//2
playersList.shift();
console.log("Players list after removing the first player :"+playersList);

//3
console.log("Number of players after removing first player: "+playersList.length);

//4
playersList.push("Virat Kohli");
console.log("Players list after adding one player:"+playersList);

//5
playersList.sort();
console.log("Players list after sorting:"+playersList);

//6
var jerseyNumber = 0;
playersListIWithJerseyNum = playersList.map(playerName => playerName+"-"+(++jerseyNumber));
console.log("New players list with jersey number :"+playersListIWithJerseyNum);

//7
playersListInUppercase = playersList.map(playerName => playerName.toUpperCase());
console.log("New players list with names in uppercase :"+playersListInUppercase);

//SECTION 3
//1
function displayNumbers(){
    for(var i=1;i<=100;i++){
        console.log(i);
    }
}
displayNumbers();

//2
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
if (day < 10) day = '0' + day;
if (month < 10) month = '0' + month;
const formattedDate = day + '/' + month + '/' + year;
console.log(formattedDate);

//3
var celsius = parseFloat(prompt("Enter the temperature in celsius: ")); 
while(isNaN(celsius)){
    celsius = parseFloat(prompt("Enter a valid temperature in celsius: "));
}
function convertToFahrenheit(celsius){
    return celsius * (9/5) + 32;
}
console.log("Celsius: "+celsius+" Fahrenheit: "+convertToFahrenheit(celsius));

//4
function averageOfArray(array){
       return array.reduce((num1,num2)=>num1+num2) / array.length;
}
array = [20,20,20,40];
console.log(averageOfArray(array));

//5
var str = "This is a string";
var splitString = str.split(""); 
var reversedStringArray = splitString.reverse();
var reversedString = reversedStringArray.join("");
console.log(reversedString);