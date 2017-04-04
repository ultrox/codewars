/*
 Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
 */

function spinWords(str){
  return str.split(' ').map(word => {
    return word.length >= 5 ? reverse(word) : word;
  }).join(' ');
}

function reverse(word) {
  return word.split('').reverse().join('');
}
