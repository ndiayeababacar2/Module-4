(function (window) {

var helloSpeaker = {};
  
helloSpeaker.names = "Paula";

var speakWord ="hello";
  
helloSpeaker.speak = function() {

console.log(speakWord + " " + names);
  console.log("test");
  

}

window.helloSpeaker=helloSpeaker;

}) (window);
 
