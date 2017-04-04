function pokemonDamage(yt, ot, attack, defense) {

  var types = {
    fire: 0,
    grass: 1,
    water: 2,
    electric: 3
  };

  var map = [
    // F  G  W  E
    [1, 2, .5, 1], //F
    [.5, 1, 1, 1], //G
    [2, .5, 1, .5], //W
    [1, 1, 2, 1] //E
  ];
  var damage = 50 * (attack / defense) * map[types[yt]] types[ot];

  return Math.ceil(damage);
}

String.prototype.toSeconds = function () {
  var r = /^\d{2}(:[0-5]\d){2}$/gm;
  if (!r.test(this)) return null;

  function convertTime(h, m, s) {
    h = 3600 * h; //356
    m = m * 60;
    var total = h + m + s;
    return total;
  };

  return this.replace(r, e => {
    if (test) {
      var z = e.split(":");
      return convertTime(z[0], z[1], z[2]);
    };
  });
}


/*  Write your program/code/algorithm here.
 *  If you're really stuck as to what exactly to define, go to the
 *  "Description" and click on the pseudo-link to reveal the answer
 */
String.prototype.capitalize = function () {
  var fl = this.charCodeAt(0);
  if (fl > 96 && fl < 123) fl -= 32
  String.fromCharCode(fl) + this.slice(1);

}
