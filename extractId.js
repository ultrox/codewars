function extractIds(data){
	if (!data.id) return [];
	var objects = [];
	var curent = data.items;
	objects.push(data);

	while(curent) {

		for(var i =0; i < curent.length; i++) {
			objects.push(curent[i])
		}
		curent = curent[i-1].items;
	}

	return objects.map(object => object.id);


}
