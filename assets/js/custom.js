(function ($) {
  $(function () {
    // Define variables
    const $body = $("body");

    // Slick init
    if (!$("[data-slick]").hasClass('slick-initialized')) {
      $("[data-slick]").slick();
    }

    // Tab slider bind
    if ($('.tab-slider').length > 0) {
      $('.tab-slider').each((index, element) => {
        $(element).find('> div > div[data-slick]').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
          event.preventDefault();
          $(element).find('> div > div[data-slick]').slick('slickGoTo', nextSlide);
        });
      });
      
    }

    // Header scroll
    const scrollTop = () => {
      const scroll = $(window).scrollTop();

      if (scroll >= 10) {
        $body.addClass("on-scrolled");
      } else {
        $body.removeClass("on-scrolled");
      }
    };

    window.onscroll = scrollTop;
    window.onload = scrollTop;
  });
})(jQuery);