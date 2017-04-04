// Create a function named "rotate" that takes an array and returns a new one with the elements inside rotated n spaces.


function rotate(arr,n) {
console.log(arr,n);
  'use strict';
    var na = new Array(...arr);

  if(n > 0) {
    for(let i = 0;i < n;i++) na.unshift(na.pop());
  } else {
     for(let i = 0;i < (~n +1);i++) na.push(na.shift());
  }
return na;

}
