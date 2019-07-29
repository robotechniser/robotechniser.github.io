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

// For swipes on a touchscreen
// Credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function swipedetect(el, callback) {
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        // e.preventDefault()
    }, false)
  
    // touchsurface.addEventListener('touchmove', function(e){
    //     e.preventDefault() // prevent scrolling when inside DIV
    // }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        // e.preventDefault()
    }, false)
}

$(document).ready(function() {
    var $toggleButton = $('.toggle-button'),
    $menuWrap = $('.menu-sidebar');

    if (document.documentElement.clientWidth > 1124) {
        window.onscroll = function() {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                if ($toggleButton.hasClass('button-open') && $menuWrap.hasClass('menu-show')) {
                    $toggleButton.removeClass('button-open');
                    $menuWrap.removeClass('menu-show');
                    if ($('#global-overlay').hasClass('dimmed')) {
                        $('#global-overlay').removeClass('dimmed');
                    }
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
            if ($toggleButton.hasClass('button-open') && $menuWrap.hasClass('menu-show')) {
                $toggleButton.removeClass('button-open');
                $menuWrap.removeClass('menu-show');
                if ($('#global-overlay').hasClass('dimmed')) {
                    $('#global-overlay').removeClass('dimmed');
                }
            }
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                document.getElementById("backToTop").style.display = "block"; // For backToTop
            }
            else {
                document.getElementById("backToTop").style.display = "none"; // For backToTop
            }
        }
    }

    // For Hamburger Menu
    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
        $('#global-overlay').toggleClass('dimmed');
        $('#logo').toggleClass('dimmed');
    });

    // Detects and responds to swipe events - For swipeable Nav-Side-Bar
    var el = document.getElementById('global-overlay');
    swipedetect(el, function(swipedir) {
        if (swipedir == "left") { // For (towards) left swipe (opens nav-bar)
            $toggleButton.addClass('button-open');
            $menuWrap.addClass('menu-show');
            $('#global-overlay').addClass('dimmed');
        }
        else if (swipedir == "right") { // For (towards) right swipe (closes nav-bar)
            $toggleButton.removeClass('button-open');
            $menuWrap.removeClass('menu-show');
            $('#global-overlay').removeClass('dimmed');
        }
        else { // For up and down scroll/swipe
            $toggleButton.removeClass('button-open');
            $menuWrap.removeClass('menu-show');
            $('#global-overlay').removeClass('dimmed');
        }
    });
});

// Parallax Fix for Android and iOS devices - DOESN'T WORK
$("#home, #about, #proj, #team, #connect").parallax({
  iosFix: true,
  androidFix: true,
  overScrollFix: true
});