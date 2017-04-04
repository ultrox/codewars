// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){
	return string.replace(/\w{1,2}/g,match => {
		return match[0].toUpperCase() + match.substring(1); 
	})
}
