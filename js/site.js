/*JavaScript added on this page */



  var History = document.getElementById("about-us-content-title").onclick = function(){
    showhideHistory()
  };
  function showhideHistory() {
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
