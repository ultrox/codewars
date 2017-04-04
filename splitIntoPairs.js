/*
Splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/
function solution(str){
  var isOdd = !!(str.length % 2);
  var splited = str.replace(/\w{2}/g,'$&%');

  if (isOdd) splited += '_';
  return splited.split('%').filter(function(n){ return n != '' });
}
