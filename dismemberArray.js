/*As a part of this Kata, you need to write a function to dismember functions. You need to extract the names of all formal arguments of the function from its definition as an array.

For example, given is a function as shown below:

function add (a, b) {
    return a + b;
}
Running dismember on the function would provide:

dismember(add) => ["a", "b"]
*/

function dismember(func) {
    var str = func.toString();
    return str.match(/\(.*\)/g).join(',').match(/\w+/g) || [];
}
