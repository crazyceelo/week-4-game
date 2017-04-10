/*notes
- There will be four crystals displayed as buttons on 
	the page.
-- dynamically load the images
-- Each crystal should have a random hidden value 
	between 1 - 12.
-- The player will have to guess the answer by 
	clicking on each image
	if player clicks on image, the counter goes up.
-- When the player clicks on a crystal, it will 
	add a specific amount of 
	points to the player's total score.
	--- Your game will hide this amount until 
		the player clicks a crystal.
	--- When they do click one, update the 
		player's score counter.
==============================*/
$(document).ready(function(){

// Initial Variables
var wins = 0;
var losses = 0;
var gemLowEnd = 1;
var gemHighEnd = 12;
var gemArr = [];
var blueGem = 0;
var greenGem = 0;
var orangeGem = 0;
var pinkGem = 0;
var lowEnd = 19;
var highEnd = 120;
var arr = [];
var totalScore = 0;
var randomNumber = 0;


// this resets the game.
function resetGame(){
	var randomGemValue1 = gemArr[Math.floor(Math.random()*gemArr.length)];
	var randomGemValue2 = gemArr[Math.floor(Math.random()*gemArr.length)];
	var randomGemValue3 = gemArr[Math.floor(Math.random()*gemArr.length)];
	var randomGemValue4 = gemArr[Math.floor(Math.random()*gemArr.length)];
	blueGem = randomGemValue1;
	greenGem = randomGemValue2;
	orangeGem = randomGemValue3;
	pinkGem = randomGemValue4;
	$("#blueGem").attr("value", blueGem);
	$("#greenGem").attr("value", greenGem);
	$("#orangeGem").attr("value", orangeGem);
	$("#pinkGem").attr("value", pinkGem);

	while (lowEnd <= highEnd) {
		arr.push(lowEnd++);
	}
	randomNumberChallenge = arr[Math.floor(Math.random()*arr.length)];
	randomNumber = randomNumberChallenge;
	$("#randomNumber").html(randomNumber);
	totalScore = 0;
	$("#totalScore").html(totalScore);
}

//initial random variables
	while (gemLowEnd <= gemHighEnd) {
		gemArr.push(gemLowEnd++);
	}
	var randomGemValue1 = gemArr[Math.floor(Math.random()*gemArr.length)];
	var randomGemValue2 = gemArr[Math.floor(Math.random()*gemArr.length)];
	var randomGemValue3 = gemArr[Math.floor(Math.random()*gemArr.length)];
	var randomGemValue4 = gemArr[Math.floor(Math.random()*gemArr.length)];
	blueGem = randomGemValue1;
	greenGem = randomGemValue2;
	orangeGem = randomGemValue3;
	pinkGem = randomGemValue4;
	$("#blueGem").attr("value", blueGem);
	$("#greenGem").attr("value", greenGem);
	$("#orangeGem").attr("value", orangeGem);
	$("#pinkGem").attr("value", pinkGem);

	while (lowEnd <= highEnd) {
		arr.push(lowEnd++);
	}
	randomNumberChallenge = arr[Math.floor(Math.random()*arr.length)];
	randomNumber = randomNumberChallenge;
	$("#randomNumber").html(randomNumber);


	$("#wins").html(wins);
	$("#losses").html(losses);
	$("#totalScore").html(totalScore);


// onclick function
		$(".allGems").on("click", function(){
		var gemBtns = ($(this).attr("value"));
		gemBtns = parseInt(gemBtns);
		totalScore += gemBtns;
		$("#totalScore").html(totalScore);
		
		if (randomNumber === totalScore) {
			wins++;
			$("#wins").html(wins);
			$("#totalScore").html(totalScore);
			alert("you win");
			resetGame();
		}
		else if (totalScore > randomNumber) {
			losses++;
			$("#losses").html(losses);
			$("#totalScore").html(totalScore);
			alert("you lose");
			resetGame();

		}
	})
})







// gemImage = new Image();
// gemImage.src = "";

// gemImages = new Array();
// gemImages [0] = gemImage.src;
// gemImages [1] = "../images/GreenGem.jpg";

// var gemDiv = $(".gemSlot")

// 	for (var i = 0; i < gemImages.length; i++){
// 		$(".gemSlot").append(gemImages[i]);
// 		var gemDivNew = $("<div>" + "</div>");
// 		gemDiv.append(gemDivNew);
// 	}
// })



/*
- The player will be shown a random number 
at the start of the game.
-- use jquery to initialize this
-- The random number shown at the 
start of the game should be between 19 - 120.
===============================

- The player wins 
-- if total score === random number from the beginning of the game.
-- game also restarts 
---- All the crystals will have four new hidden values. 
---- the user's score (and score counter) will reset to zero.
===============================

- The player loses 
-- if their score > random number.
-- game also restarts
---- All the crystals will have four new hidden values. 
---- the user's score (and score counter) will reset to zero.
===============================

- When the game begins again, 
-- the player should see a new random number. 

- The app should show the number of games the player wins and loses. 
-- To that end, do not refresh the page as a means to restart the game.

Option 1 Game design notes
*/
