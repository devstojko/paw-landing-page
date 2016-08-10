(function($){

  var $doc = $(document);
  var $win = $(window);

  $win.on('load', function() {
    $(".preloader").delay(200).fadeOut(500).remove();
  });

  $doc.ready(function() {
    var burger = document.getElementById('burger');
    var nav = document.getElementById('nav');

    burger.onclick = function() {

      nav.classList.toggle('is-active');
      this.classList.toggle('is-active');
    }

    function smoothScroll() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        $('html, body').clearQueue();
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            if ($(window).width() <= 700) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 2200);
            }
            else {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
            }
            return false;
          }
        }
      });
    }

    smoothScroll();

    // skillbar

    function skillBar() {

      var el = $('.skillbar__progress-count');

      el.each(function() {
        var percentage = $(this).attr('data-percentage');
        $(this).css('width', percentage + "%" );
      });


    }

    skillBar();

  });

})(jQuery)
