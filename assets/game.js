// this creates a function named "fight"
function fight() {
    window.alert ("The fight has begun!");
    // window.prompt ("What is your robot's name?");
    var playerName = window.prompt("What is your robot's name?");
    var playerHealth = 100;
    var playerAttack =10;
    var playerMoney= 10;

  //you can also log many values at once like this 
  console.log (playerName, playerAttack, playerHealth);
  var enemyName ="Roborto";
  var enemyHealth = 50;
  var enemyAttack = 12;
  console.log (enemyName, enemyAttack, enemyHealth);

  var fight = function (){
    //Alert players that thyer are startingg the round
  window.alert("Welcome to robot gladiators!");
//Substract the value of 'plaerAttack' from the value of enemyHealth' and use that result to update the value in the enemyHealth' variable
//log a resulting message to the console s owe know it worked.
  console.log(playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining");

//check enemy's heaalth
  if (enemyHealth<=0) {
    window.alert(enemyName + "has died");
  }
  else{
    window.alert(enemyName + "still has" + enemyHealth + "health left");
  }
  //substract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playHealth' variable
  //log a resulting message to theb cosole so we know it worked
  }
  {
    window.alert("Welcome to Robot Gladiators!");
  };



    console.log(playerName);
    console.log("This logs a string, good for leaving yourself a message")
    //this will do math and log 20
    console.log(10+10)
    //What is this?
    console.log("Our robot's name is " + playerName);
    var name ="your name";
    console.log(name);
}

// if player choses to fight, then fight
if (promptFight ==="fight" ⎜│ promptFight === "FIGHT"); {
  //remove enemy'e]s health by substracting the amount set in the players'playerAttack variable
  enemyHealth =enemyHealth - playerAttack;
  console.log(
    playerName +"attacked" + enemyHealth +"." + enemyName +"now has" + enemyHealth+"health remaining.");
//check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + "has died!");
} else {
  window.alert(enemyHealth +"still has"+ enemyHealth +"health left.");
}
// remove player's health by substracting the amount set in the enemyAttack variable
playerHealth=playerHealth-enemyAttack;
console.log(
  enemyName +"attacked"+ playerName +"."+playerName+"now has"+"playerHealth"+"health remaining");

//check player's health
if (playerHealth <= 0) {
  window.alert(playerName + "has died!);
} else {
  window.alert(playerName +"still has" + playerHealth +"Health left.");
}
//if player chooses to skip
else if (promptFight === "skip" ⎜│ promptFight === "SKIP") {
  window.alert(playerName +"has chosen to skip the fight!");
} 
else{
  window.alert("You need to try a valid Option. Try again!");

if (promptFight === "FIGHT" ⎜│ promptFight === "fight");

}
//if player decides to skip he gets 2 points taken away from his player money


else if (promptFight === "skip" ⎜│ promptFight === "SKIP") {
  //confirm player wants to skip

  var confirmSkip= window.confirm ("Are you sure you would like to quit?");

  //if yes (true), leave fight
  if (confirmSkip){
    window.alert(playerName +"has decided to skip this fight. Goodbye");
    //substract money from playerMoney for skipping
    playerMoney = playerMoney-2;
  }
  //if no (false), ask question again by running fight () again else {


fight()
}
}
