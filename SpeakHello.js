(function (window) {

var helloSpeaker.speak = {};

var speakWord = "Hello";

helloSpeaker.speak  = function (names) {

console.log(speakWord + " " + names);

}

window.helloSpeaker.speak= helloSpeaker;

})(window);
