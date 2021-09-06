(function ($) {
  $(function () {
    const $body = $("body");

    const scrollTop = () => {
      const scroll = $(window).scrollTop();

      if (scroll >= 10) {
        $body.addClass("on-scrolled");
      } else {
        $body.removeClass("on-scrolled");
      }

      if ($("#wpadminbar").length) {
        if (scroll >= 10) {
          $body.addClass("has-adminbar");
        } else {
          $body.removeClass("has-adminbar");
        }
      }
    };

    window.onscroll = scrollTop;
    window.onload = scrollTop;
  });
})(jQuery);