// divisors(12); //should return [2,3,4,6]
// divisors(25); //should return [5]
// divisors(13); //should return "13 is prime"
// You can assume that you will only get positive integers as inputs.

function divisors(num) {
	var arr = [];
	for (i = 2; i < num; i++) {
		var result = num % i;
		if (!result) {
			arr.push(i);
		}
	};
	return (arr.length) ? arr: num + ' is prime';
};
