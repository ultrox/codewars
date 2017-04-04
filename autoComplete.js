// autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']

function autocomplete(input, dictionary){
	console.log(input);
	var result = dictionary.filter(word => {
		var cw = input.replace(/[\W_\d]/g,'');
		var reg = new RegExp("^" + cw,'i');
		return reg.test(word);

	});

	return result.slice(0,5);

}
