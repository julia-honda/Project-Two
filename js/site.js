/*JavaScript added on this page */

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
