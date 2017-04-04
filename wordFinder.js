// var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
// fruits.getMatchingWords('lemon');     // must return []
// fruits.getMatchingWords('cherr??');   // must return []
// fruits.getMatchingWords('?a?a?a');    // must return ['banana', 'papaya']
// fruits.getMatchingWords('??????');    // must return ['banana', 'papaya', 'cherry']
// Additional Notes:
//
// the words and patterns are all lowercase
// the order of the returned words doesn't matter
function Dictionary(words) {
	this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
	var r = new RegExp('\\b' + pattern.replace(/\?/g,'\\w') + '\\b');
	return this.words.filter(m => r.test(m));
}
