const vowels = "aouåeiyäö";
// a = index 0
// o = index 1
// u = index 2

function translateToPirate(input) 
{
	let textToReturn = "";

	// "Hello" = 5 in length
	// "Hi" = 2 in length
	// Loop through each letter
	for(let i = 0; i < input.length; i++)
	{
		let currentLetter = input[i];

		//textToReturn += vowels.includes(currentLetter) || currentLetter === " " ? currentLetter : `${currentLetter}o${currentLetter}`;

		// && and (both must be true)
		// || or (one must be true)
		if (vowels.includes(currentLetter) || currentLetter === " ")
		{
			textToReturn += currentLetter;
		}
		else
		{
			//textToReturn += `${currentLetter}o${currentLetter}`;

			// Currentletter = "J"
			textToReturn += currentLetter; // Texttureturn : J
			textToReturn += "o"; // Texttureturn : Jo
			textToReturn += currentLetter; // Texttureturn : JoJ
		}
	}

	console.log(textToReturn);
}

translateToPirate("Hello World");