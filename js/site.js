/*JavaScript added on this page */
/*New code used for form validation*/
var form;
var fname;
var lname;
var email;
var reason;

if(document.body.contains(document.getElementById("form-content"))){
  form = document.getElementById('form-one');
  fname = document.getElementById('first-name');
  lname = document.getElementById('last-name');
  email = document.getElementById('email');
  reason = document.getElementById('reason');
  form.addEventListener('submit', validationEvent);
}

function validationEvent(event) {
  var a = form.value;
  var b = fname.value;
  var c = lname.value;
  var d = email.value;
  var e = reason.value;

  if((a == "") || (b == "") || (c == "") || (d == "") || (e == "")) {
    event.preventDefault();
    alert("All of the sections must be filled out.");
  }
  else {
    alert("Thank you for reaching out to us! We will get back to you soon.");
    /*form.textContent = 'Thank you for reaching out to us! We will get back to you soon.';*/
    /*not running possibly because we aren't submitting the form anywhere*/
  }
};

/*about us javascript*/
if(document.body.contains(document.getElementById("about-us-content"))) {
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
    }
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
}

/*document.getElementById("form-one").onsubmit = function() {validationEvent()};

function validationEvent() {
  var x = document.form["first-name"]["last-name"]["email"]["reason"].value;
  if (x == "") {
    alert("Please be sure all fields are filled out!");
    return false;
  }
}

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
