/*JavaScript added on this page */

  jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });

  function validationEvent() {
    var a = document.forms["form-one"]["first-name"].value;
    var b = document.forms["form-one"]["last-name"].value;
    var c = document.forms["form-one"]["email"].value;
    var d = document.forms["form-one"]["reason"].value;
    if ((a == "") || (b == "") || (c == "") || (d == "") {
      alert("All of the sections must be filled out.");
    }
    else{
      alert("Thank you for contacting us. We will get back to you soon!");
    }
  }
