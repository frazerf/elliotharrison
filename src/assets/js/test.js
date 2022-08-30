/* ------------------------------------ */
/* Swiper */
/* ------------------------------------ */

const swiper = new Swiper('.hero--swiper', {
    effect: "fade",
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 2000,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

/* ------------------------------------ */
/* Waypoints */
/* ------------------------------------ */
  var waypoint = new Waypoint({
    element: document.getElementById('firstVideoTrigger'),
    handler: function(direction) {
        document.getElementById("firstVideo").play();
    },
    offset: '75%'
  })

  var waypoint = new Waypoint({
    element: document.getElementById('secondVideoTrigger'),
    handler: function(direction) {
        document.getElementById("secondVideo").play();
    },
    offset: '75%'
  })

  var waypoint = new Waypoint({
    element: document.getElementById('thirdVideoTrigger'),
    handler: function(direction) {
        document.getElementById("thirdVideo").play();
    },
    offset: '75%'
  })

/* ------------------------------------ */
/* Scroll To Functionality */
/* ------------------------------------ */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });