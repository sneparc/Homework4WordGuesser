var wordLetters ["D", "O", "G", "G","Y"];

var guessedLetters= ["_","_","_","_","_"];

function guessLetter(letterTheUserGuessed){
	
		for(var i= 0; i <wordLetters.length; i++)
		{ 

			var letterToCheck = wordLetters[i];

			if(letterToCheck === letterTheUserGuessed)
			{
				guessedLetters[i] = letterToCheck
				console.log("Congrats! You found a letter")
			}

		}
		

		console.log(guessedLetters);

		//if there are no blanks, you win

		if(guessedLetters.indexOf(" ") === -1)
		{
			console.log("You Win!");
		}

}
