// Blog - Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding = null;
      panel.style.boxShadow = null;
      // -moz-box-shadow: 0 0 3rem 0 rgba(0,0,0,0.85);
      // box-shadow: 0 0 3rem 0 rgba(0,0,0,0.85);"
      
    } else {
      panel.style.maxHeight = panel.scrollHeight + "%";
      panel.style.padding = "4rem";
      panel.style.boxShadow = "0 0 3rem 0 rgba(0,0,0,0.85)";
    } 
  });
}