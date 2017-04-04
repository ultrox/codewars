// Description:
//
// Write a function format that takes two arguments, text and width, and formats the text to fit the width.
//
// Your function should divide the given text into lines using newline characters. It should fit as many words into each line as possible without exceeding the given width or splitting any words between two lines. There should not be a space at the beginning or end of any line.
function format(txt,w) {
  var words = txt.split(/\s/);
  var result = [],line = '';
  
  while(words.length) {
    line = words.shift();
    while(line.length <= w && words[0] && (w - line.length -1) >= words[0].length) {
    line += ' ' + words.shift();
    }
    result.push(line);
    line = '';
  }
  return result.join('\n');
}
