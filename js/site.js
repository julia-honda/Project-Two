/*JavaScript added on this page */

  var Content = document.getElementById("about-us-content-title").onclick = function(){
    showhideContent()
  };
  function showhideContent() {
    if (document.getElementById("about-us-content-title").onclick){
      if(document.getElementById("about-us-content").style.display === 'none'){
        document.getElementById("about-us-content").style.display = 'block';
      }else {
        document.getElementById("about-us-content").style.display = 'none';
      }
    }
  }
  var History = document.getElementById("about-us-history-title").onclick = function(){
    showhideHistory()
  };
  function showhideHistory() {
    if (document.getElementById("about-us-history-title").onclick){
      if(document.getElementById("about-us-history").style.display === 'none'){
        document.getElementById("about-us-history").style.display = 'block';
      }else {
        document.getElementById("about-us-history").style.display = 'none';
      }    
  var Const = document.getElementById("about-us-const-title").onclick = function(){
    showhideConst()
  };
  function showhideConst() {
    if (document.getElementById("about-us-const-title").onclick){
      if(document.getElementById("about-us-constitition").style.display === 'none'){
        document.getElementById("about-us-constitition").style.display = 'block';
      }else {
        document.getElementById("about-us-constitition").style.display = 'none';
      }
    }
  }
  var Journal = document.getElementById("about-us-journal-title").onclick = function(){
    showhideJournal()
  };
  function showhideJournal() {
    if (document.getElementById("about-us-journal-title").onclick){
      if(document.getElementById("about-us-journal").style.display === 'none'){
        document.getElementById("about-us-journal").style.display = 'block';
      }else {
        document.getElementById("about-us-journal").style.display = 'none';
      }
    }
  }

/*New code used for form validation*/

function validationEvent(event) {
  form.textContent = `Thank you for reaching out to us! We will get back to you soon.`;
  event.preventDefault();
}
const form = document.getElementById('form-one')
const fname = document.getElementById('first-name')
const lname = document.getElementById('last-name')
const email = document.getElementById('email')
const reason = document.getElementById('reason')

form.addEventListener('submit', validationEvent);

/*document.getElementById("form-one").onsubmit = function() {validationEvent()};

function validationEvent() {
  var x = document.form["first-name"]["last-name"]["email"]["reason"].value;
  if (x == "") {
    alert("Please be sure all fields are filled out!");
    return false;
  }
}*/

/*old code that used js code in html*/
/*
  jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });
  function validationEvent() {
    var a = document.forms["form-one"]["first-name"].value;
    var b = document.forms["form-one"]["last-name"].value;
    var c = document.forms["form-one"]["email"].value;
    var d = document.forms["form-one"]["reason"].value;
    if ((a == "") || (b == "") || (c == "") || (d == "")) {
      alert("All of the sections must be filled out.");
    }
  }
 */
