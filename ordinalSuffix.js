/*
 numberToOrdinal(1) ==> '1st'
numberToOrdinal(2) ==> '2nd'
numberToOrdinal(3) ==> '3rd'
numberToOrdinal(4) ==> '4th'
*/
function numberToOrdinal(n) {
if(!n) return n.toString();

var suff = 'th';
var last2 = n.toString().match(/\d{1,2}$/)[0];
var last =  n.toString().match(/\d$/)[0];

var rules = {0:'th',1: 'st',2: 'nd',3: 'rd',4:'th',
  exeptions: ['11','12','13']

}
var isExeption = rules['exeptions'].indexOf(last2) > -1;

if(!isExeption) {
    var num = Number(last);
    suff = rules[Math.min(num,4)];
}

  return n.toString() + suff;
}
