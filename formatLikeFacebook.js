/* 
 Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
 returns 'Bart'

list([])
returns ''

*/
function list(names){

	var simpsons = names.map((item,index) => index == names.length -2 ? item.name + " &" : item.name + ",").join(' ');

	return simpsons.slice(0,-1);
}
