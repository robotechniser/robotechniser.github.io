// Blog - Accordion
var acc = document.getElementsByClassName("accordion");
// var logo = 
// var toggle = document.getElementById("toggle");
var b2T = document.getElementById("backToTop");
var blog = document.getElementById("blog");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    b2T.style.zIndex = "50";
    
    document.getElementById("logo").style.opacity = "0"; /* DOES NOT WORK */
    document.getElementsByClassName("toggle-button").style.opacity = "0"; /* DOES NOT WORK */
    // blog.style.visibility = "none";
    // if (panel[0].style.maxHeight == true){
    //   document.getElementsByTagName("footer")[0].style.display = "none";
      // logo.style.opacity = "0";
      // toggle.style.opacity = "0";
      // panel.style.padding = null; CHANGED THIS - unaffected
      
    // } else {
      // logo.style.opacity = "1";
      // toggle.style.opacity = "1";
      // panel.style.padding = "3rem"; CHANGED THIS - Padding unaffected
    // } 
  });
}
