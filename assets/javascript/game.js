var guessCounter;
var winCounter;
var lossCounter;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var guesses = [];


var randomLetter = Math.floor(Math.random() * 25);

document.getElementById("guessWhich").textContent = guessCounter
document.getElementById("wins").textContent = winCounter
document.getElementById("losses").textContent = lossCounter

document.onkeyup = function () {
	guesses.push = event.key;
}

if (guesses[guesses.length] = randomLetter) {
	winCounter++;
}

for (guessCounter = 9; i === 0; i--) {
	if (i === 0) {
		lossCounter++;
		guessCounter = 9;
	}

}

