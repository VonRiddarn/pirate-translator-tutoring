const vowels = "aouåeiyäö";
// a = index 0
// o = index 1
// u = index 2

function translateToPirate(input) 
{
	// "Hello" = 5 in length
	// "Hi" = 2 in length
	// Loop through each letter
	for(let currentLetterIndexNumber = 0; currentLetterIndexNumber < input.length; currentLetterIndexNumber++)
	{
		console.log(input[currentLetterIndexNumber]);
	}
}

translateToPirate("Hej! Jag heter Tompa Tjompa!");