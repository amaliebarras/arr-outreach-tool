'use strict';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAoYcZDncfwA2gLuqTMq64-LyEml5HIMq8",
    authDomain: "arr-outreach-tool-4a622.firebaseapp.com",
    databaseURL: "https://arr-outreach-tool-4a622.firebaseio.com",
    storageBucket: "arr-outreach-tool-4a622.appspot.com",
    messagingSenderId: "162375636414"
  };
firebase.initializeApp(config);

var sliderForm = document.getElementById('sliderForm');
var knowledgeInput = document.getElementById('knowledgeSlider');
var systemInput = document.getElementById('systemSlider');
var motivationInput = document.getElementById('motivationSlider');

function submitSliderValues(knowledge, system, motivation, timestamp) {
  return firebase.database().ref('sliders/').push({
    knowledge: knowledge,
    system: system,
    motivation: motivation,
    timestamp: timestamp
  });
};

// Bindings on load.
window.addEventListener('load', function() {
  firebase.auth().signInAnonymously().catch(function(error) {
    // TODO: Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  // Saves message on form submit.
  sliderForm.onsubmit = function(e) {
    e.preventDefault();
    var knowledge = knowledgeInput.value;
    var system = systemInput.value;
    var motivation = motivationInput.value;
    var date = new Date();

    submitSliderValues(knowledge, system, motivation, date.toLocaleDateString() + " " + date.toLocaleTimeString()).then(function() {
      location = "./";
    });
  };
}, false);
