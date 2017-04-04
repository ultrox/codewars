/* 
 * Create a function christmasTree(height) that returns a christmas tree of the correct height
christmasTree(5) should return:
    *    
   ***   
  *****  
 ******* 
*********
*/
function makeLine(line,tree) {
    
  //base case
  if(line.match(/[*]/g).length == 1) {
    tree.push(line);
    return tree.reverse().join('\n');
  }
  var reg = /^\s*\*|\*\s*$/g;
  tree.push(line);
  var newline = addSpaces(line);
  return makeLine(newline,tree);
}

function addSpaces(line) {
  let first = line.indexOf('*'),last = line.lastIndexOf('*');
  line = line.split('');
  line[first] = ' ',line[last] = ' ';
  return line.join('');
}

function christmasTree(height) {
if(!height) return '';
  var genLine = '*'.repeat(height * 2 -1);
  return makeLine(genLine,[]);
}
// I was messing around with recursion I have proble for some time now, this is my first recursion other then palindrom thing.
//mainly I had problem how to 'catch' value and pass it to another recursion, and return it afterwards.
8 months ago
