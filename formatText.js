var str = "Sice oeohgrisfo uamn acoe, cjxtnp uwcoe axi. Cmyscna cejhin ccc itsn uqrnpayen myc.";

function format(text, width) {

  var cl = '';
  return text.split(' ').reduce(function (newText, word) {
    //newLine is 1 car long that's why -1
    var ostatak = width - cl.length - 1;

    if (ostatak > word.length) {
      cl += word + " "
    } else {
      newText.push(cl + '\n');
      cl = '';
    }
    return newText;
  }, []);
}


function change(string) {
    var r = /[a-zA-Z]/,current = 0;

  return string.split('').reduce((output, letter) => {
          var condition = r.test(letter);
    if (condition) {
      current = 1;
        return output + current;
    } else {
      current = 0;
      return output + current;
    }
  }, '')
}

