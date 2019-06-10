(function($){


  let $navbar = $('.navbar');
  let navbar_offset = $navbar.innerHeight();

  /* ---------------------------------------------------------------------------
   * Add smooth scrolling to all links inside the main navbar.
   * --------------------------------------------------------------------------- */

  $('.author-urls li.sidebar-item a.sidebar-link').on('click', function(event) {
    // Store requested URL hash.
    let hash = this.hash;

    // If we are on a widget page and the navbar link is to a section on the same page.
    if ( this.pathname === window.location.pathname && hash && $(hash).length && ($(".js-widget-page").length > 0)) {
      // Prevent default click behavior.
      event.preventDefault();

      // Use jQuery's animate() method for smooth page scrolling.
      // The numerical parameter specifies the time (ms) taken to scroll to the specified hash.
      $('html, body').animate({
        scrollTop: $(hash).offset().top - navbar_offset
      }, 800);
    }
  });

})(jQuery);
  