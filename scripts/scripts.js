// For smooth scrolling to page sections
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $id.offset().top;
    
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

// Pure JS code for the sidebar
window.onload = function () {
    function toggleClassMenu() {
        myMenu.classList.add("menu--animatable");
        if(!myMenu.classList.contains("menu--visible") && !oppMenu.classList.contains("button-open")) {		
            myMenu.classList.add("menu--visible");
            oppMenu.classList.add("button-open");
        } else {
            myMenu.classList.remove("menu--visible");
            oppMenu.classList.remove("button-open");
        }	
    }
    
    function OnTransitionEnd() {
        myMenu.classList.remove("menu--animatable");
    }
    
    var myMenu = document.querySelector(".menu");
    var oppMenu = document.querySelector(".toggle-button");
    myMenu.addEventListener("transitionend", OnTransitionEnd, false);
    oppMenu.addEventListener("click", toggleClassMenu, false);
    myMenu.addEventListener("click", toggleClassMenu, false);

    if (document.documentElement.clientWidth > 1124) {
        window.onscroll = function() {
            if (document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) {
                if (oppMenu.classList.contains('button-open') && myMenu.classList.contains('menu--visible')) {
                    oppMenu.classList.remove('button-open');
                    myMenu.classList.remove('menu--visible');
                }
                document.getElementById("backToTop").style.display = "block"; // For backToTop
                document.getElementById("toggle").style.display = "block"; // For Hamburger Menu
                document.getElementById("menu").style.display = "block"; // For Hamburger Menu
            } else {
                document.getElementById("backToTop").style.display = "none"; // For backToTop
                document.getElementById("toggle").style.display = "none"; // For Hamburger Menu
                document.getElementById("menu").style.display = "none"; // For Hamburger Menu
            }
        }
    }

    if (document.documentElement.clientWidth < 1124) {
        window.onscroll = function() {
            if (oppMenu.classList.contains('button-open') && myMenu.classList.contains('menu--visible')) {
                oppMenu.classList.remove('button-open');
                myMenu.classList.remove('menu--visible');
            }
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                document.getElementById("backToTop").style.display = "block"; // For backToTop
            }
            else {
                document.getElementById("backToTop").style.display = "none"; // For backToTop
            }
        }
    }
}