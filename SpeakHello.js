(function (window) {

var helloSpeaker = {};
  
helloSpeaker.names = "Paula";

var speakWord ="hello";
  
helloSpeaker.speak = function() {

console.log(speakWord + " " + names);

}

window.helloSpeaker=helloSpeaker;

}) (window);
 
