// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase(title, mW) {
	if(!title) return title;

	//very intesting bug with indexOf when used on the string
	return title.toLowerCase().split(' ').map((m,index) => {
		return ((mW || '').toLowerCase().split(' ')).indexOf(m) + 1 && index ? m : m[0].toUpperCase() + m.substr(1);
	}).join(' ');
}
