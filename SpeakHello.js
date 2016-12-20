(function (window) {

var helloSpeaker = {};

var speakWord ="hello";

helloSpeaker.speak = function(names) {

console.log(speakWord + " " + names);

}

window.helloSpeaker=helloSpeaker;

}) (window);
