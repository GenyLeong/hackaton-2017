$(document).ready(function() {
    "use strict";
    var altura = window.innerHeight;
    var intro_altura = document.getElementById("storymap");
        intro_altura.style.height = altura + 'px';

    $('.smooth').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1100);
                return false;
            }
        }
    });

$(window).resize(function() {
    var altura = window.innerHeight;
    var intro_altura = document.getElementById("storymap");
          intro_altura.style.height = altura + 'px';
  });

});
