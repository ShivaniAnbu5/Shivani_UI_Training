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
playersListIWithJerseyNum = playersList.map(playerName => playerName+"-"+Math.ceil(Math.random()*20));
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
