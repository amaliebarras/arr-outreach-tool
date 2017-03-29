'use strict';

// Initialize Firebase
var config = {
apiKey: "AIzaSyBDAPLC_v8wvbQGsGPTQfQTnZNKi_J9s_c",
authDomain: "arr-outreach-tool.firebaseapp.com",
databaseURL: "https://arr-outreach-tool.firebaseio.com",
storageBucket: "arr-outreach-tool.appspot.com",
messagingSenderId: "155159530979"
};
firebase.initializeApp(config);

var sliderForm = document.getElementById('sliderForm');
var knowledgeInput = document.getElementById('knowledgeSlider');  
var systemInput = document.getElementById('systemSlider');
var motivationInput = document.getElementById('motivationSlider');

function submitSliderValues(knowledge, system, motivation) {
  firebase.database().ref('sliders/').push({
    knowledge: knowledge,
    system: system,
    motivation: motivation
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

    submitSliderValues(knowledge, system, motivation);
  };
}, false);