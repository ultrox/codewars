/*
 Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

*/
const pigIt = str => str.replace(/(\b\w)(\B[a-zA-Z.]+)/g,'$2$1'+ 'ay');
