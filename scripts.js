(function () {

var names = ["Damon", "Stephan", "Joey", "Chandler", "Paul", "Jackson", "Paxton", "Paula", "Elena", "Jasper"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();