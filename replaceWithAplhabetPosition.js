// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

function alphabetPosition(text) {
	var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	return text.split('').reduce(function(numbers,letter) {
		letter = letter.toUpperCase();
		if(abc.indexOf(letter)+1) {
			var num = abc.indexOf(letter) + 1;
			return numbers + num.toString() + ' ';
		} else {
			return numbers;
		}
	},'').trim();
}
