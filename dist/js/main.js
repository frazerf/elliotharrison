"use strict";var swiper=new Swiper(".swiper",{effect:"fade",direction:"horizontal",loop:!0,autoplay:!0,speed:2e3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}}),console.log("Testing JS import file two.");