/*
 You are given an array of valid words and a string. Test if the string is made up by one or more words from the aray. For example:

string[] dictionary = ["code", "wars"]; 

string s = "codewars"; // true 

string s1 = "codewar"; // false

*/

var validWord = (d, w) => {
console.log(d);
  reg = new RegExp('^(' + d.join('|') + ')+$');
  return reg.test(w);
};
