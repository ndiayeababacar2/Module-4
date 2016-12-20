(function (window) {

var helloSpeaker = {};
  
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var speakWord ="hello";

helloSpeaker.speak = function(names) {

console.log(speakWord + " " + names);

}

window.helloSpeaker=helloSpeaker;

}) (window);
