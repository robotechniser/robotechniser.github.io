// Blog - Accordion
var acc = document.getElementsByClassName("accordion");
var logo = document.getElementById("logo");
var toggle = document.getElementById("toggle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      logo.style.display = "none";
      toggle.style.display = "none";
      panel.style.padding = null;
      
    } else {
      logo.style.display = "block";
      toggle.style.display = "block";
      panel.style.padding = "3rem";
    } 
  });
}