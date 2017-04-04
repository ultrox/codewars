/*
// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")

*/
function toCamelCase(str){
	var re = /[-_](\w)/g;
	return str.replace(re,(m,g) => g.toUpperCase());
}
