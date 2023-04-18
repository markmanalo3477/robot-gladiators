var playerName = window.prompt(" What's your robot's name");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = " Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    

// Subtract the value of ' playerAttack ' from the value of ' enemyHealth '
enemyHealth = enemyHealth - playerAttack;

//Log a resulting message to the console so we know that it worked.
console.log( 
    playerName + " attacked " + enemyName + "." + enemyName+ " now has " + enemyHealth + " healthRemaining ");

// execute function
};
//  check enemy's health
if ( enemyHealth <= 0)  {
    window.alert(enemyName + " has died !");

}
else { 
    window.alert(enemyName + "still has " + enemyHealth + " health left ");
}


fight();
 