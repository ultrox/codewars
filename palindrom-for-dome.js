/*
 Our goal is to determine whether or not a given string is a valid palindrome or not.
"Amore, Roma" => valid
"A man, a plan, a canal: Panama" => valid
"No 'x' in 'Nixon'" => valid
"Abba Zabba, you're my only friend" => invalid
*/
function palindrome(string) {
   //base case
    if(string.length < 1) return true;
    var s = string.match(/\w+/g).join('').toLowerCase();
    //recursive case
    return s[0] === s.slice(-1) ?  palindrome(s.slice(1,-1)): false;
}
