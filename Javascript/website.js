$(function(){
    adjustTopMenuItem();
  });

  function adjustTopMenuItem() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    if (filename === "index.html") {
        $("#home-button").css("color", "#66BCFA");
    } else if (filename === "resume.html") {
        $("#resume-button").css("color", "#66BCFA");
    } else if (filename === "projects.html") {
        $("#projects-button").css("color", "#66BCFA");
    } else if (filename === "contact.html") {
        $("#contact-button").css("color", "#66BCFA");
    } 
  }