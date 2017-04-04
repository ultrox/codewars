// Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.


function findOdd(arr) {
	var obj = {};  
	arr.forEach(n => {
		obj[n] ? obj[n]++ : obj[n] = 1;
	});
	for (p in obj) {
		if (obj[p] % 2) {
			return Number(p);

		}
	};
}
