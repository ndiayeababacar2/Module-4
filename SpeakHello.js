(function (window) {
var names = "Yaakov";
var speakWord = "Hello";

var helloSpeaker  = function () {

console.log(speakWord + " " + names);

};

window.helloSpeaker.speak= helloSpeaker;

})(window);
