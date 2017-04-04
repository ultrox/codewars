// deleteNth ([1,1,1,1],2) // return [1,1]
//
// deleteNth ([20,37,20,21],1) // return [20,37,21]
function deleteNth(arr,x){
	// ...
	var map = {};
	var inside = [];

	for(let i = 0; i < arr.length;i++) {
		var broj = arr[i];
		var howManyIn = map[broj];

		if(howManyIn === undefined) map[broj] = 0;

		if(map[broj] < x) {
			inside.push(broj);
			map[broj]++;
		}
	}
	return inside;
}
