// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
//
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For more than 4 names, the number in and 2 others simply increases.
//
function likes(names) {
	var len = names.length;
	var name = len > 3 ? len - 2 + " others" : names.pop();
	var prefix = " and " + name + " like this";
	return names.length ? names.splice(0,2).join(', ') + prefix : name ?  name + ' likes this' : "no one likes this";
}
