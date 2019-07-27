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

$(document).ready(function() {
  var $toggleButton = $('.toggle-button'),
      $menuWrap = $('.menu-sidebar');

  window.onscroll = function() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      document.getElementById("backToTop").style.display = "block";
      document.getElementById("toggle").style.display = "block";
    } else {  
      document.getElementById("backToTop").style.display = "none";
      document.getElementById("toggle").style.display = "none";
    }
  }

  $toggleButton.on('click', function() {
      $(this).toggleClass('button-open');
      $menuWrap.toggleClass('menu-show');
  });
});

// Parallax Fix for Android and iOS devices - DOESN'T WORK
$("#home, #about, #proj, #team, #connect").parallax({
  iosFix: true,
  androidFix: true,
  overScrollFix: true
});