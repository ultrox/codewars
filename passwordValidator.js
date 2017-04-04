// You need to write regex that will validate a password to make sure it meets the following criteria:
//
// 	At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
	console.log(password);
	var reg = /^(?=\w+$)(?=\w{6,})(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)/;
	return reg.test(password);
}
