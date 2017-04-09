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


	var lowEnd = 19;
	var highEnd = 120;
	var arr = [];
	while (lowEnd <= highEnd) {
		arr.push(lowEnd++);
	}
	randomNumberChallenge = arr[Math.floor(Math.random()*arr.length)];
	console.log(randomNumberChallenge);

	$("#randomNumber").html(randomNumberChallenge);
});


// $("#blueGem").on("click", function(){

// })



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
