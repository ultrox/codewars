// solution('camelCasing') // => should return 'camel Casing'

function solution(string) {
	return string.replace(/([A-Z].*?)/g,' $1');
}
