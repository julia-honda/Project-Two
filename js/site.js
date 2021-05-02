/*JavaScript added on this page */

/*
  var History = document.getElementById("about-us-history-title").onclick = function() {
    showhideHistory()
  };

  var Const = document.getElementById("about-us-const-title").onclick = function() {
    document.getElementById("about-us-constitition").style.display = "block";
  };

  var Journal = document.getElementById("about-us-journal-title")

  function showhideHistory() {
    document.getElementById("about-us-history").style.display = "block"
  }
  */
/*
  function toggleit(){
    var Const = document.getElementById("about-us-const-title").onclick;
    if (Const.style.display === "none") {
      Const.style.display = "block";
    } else{
      text.style.display = "none"
    }
  }
*/
/*
  var Test = document.getElementById("about-us-const-title");
  var Second = document.getElementById("about-us-constitution");
  Test.addEventListener('click', function(){
    Second.toggleDisplayById("about-us-constitution");
    if (Second.style.display === "none") {
      Second.style.display = "block";
    } else {
      Second.style.display = "none";
    }
  });
*/

  var History = document.getElementById("about-us-history-title").onclick = function(){
    showhideHistory()
  };
  function showhideHistory() {
    if (document.getElementById("about-us-history-title").onclick){
      document.getElementById("about-us-history").style.display = 'block';
    } else {
      document.getElementById("about-us-history").style.display = 'none'
    }
  }

  var Const = document.getElementById("about-us-const-title").onclick = function(){
    showhideConst()
  };
  function showhideConst() {
    if (document.getElementById("about-us-const-title").onclick){
      document.getElementById("about-us-constitition").style.display = 'block';
    } else {
      document.getElementById("about-us-constitition").style.display = 'none'
    }
  }

  var History = document.getElementById("about-us-history-title").onclick = function(){
    showhideHistory()
  };
  function showhideHistory() {
    if (document.getElementById("about-us-history-title").onclick){
      document.getElementById("about-us-history").style.display = 'block';
    } else {
      document.getElementById("about-us-history").style.display = 'none'
    }
  }

  var Journal = document.getElementById("about-us-journal-title").onclick = function(){
    showhideJournal()
  };
  function showhideJournal() {
    if (document.getElementById("about-us-journal-title").onclick){
      document.getElementById("about-us-journal").style.display = 'block';
    } else {
      document.getElementById("about-us-journal").style.display = 'none'
    }
  }
