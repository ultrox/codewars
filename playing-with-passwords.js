/* choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
*/
function playPass(s, n) {
var string = transtr(shifting(s,n));

return [...string].reverse().join('');
}



var shifting = function(str, amount) {
	console.log(str,amount);
	var output = '';
	for (var i = 0; i < str.length; i ++) {
		var caracter = str[i];
		// If it's a letter...
		if (caracter.match(/[a-z]/i)) {
			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				caracter = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				caracter = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
		output += caracter;
	}
	return output;
}

function transtr(str) {
	str = str.toLowerCase();
	var newstr = '';
	for (let i = 0; i < str.length; i++) {
		var char = str[i];
		if (/\d/.test(char)) {
			newstr += 9 - +char;
		} else {
			if (i % 2 === 0) {
				newstr += char.toUpperCase();
			} else {
				newstr += char;
			}
		}
	}
	return newstr;
}
