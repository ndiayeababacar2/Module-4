(function (window) {

var yaakovGreeter = {};

yaakovGreeter.name = "John";

var greeting ="Good By";

yaakovGreeter.sayhello = function() {

console.log(greeting + yaakovGreeter.name);

}

window.yaakovGreeter=yaakovGreeter;

}) (window);

