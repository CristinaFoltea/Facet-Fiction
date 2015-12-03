(function () {
  'use strict';
  var $header = $('header');
  var $footer = $('.for-bg');
  var offseter = $(window).height();
  console.log($('.container-fluid').width());
  $(window).scroll(scrollingThisWindow)
  function scrollingThisWindow() {
    var distance = this.pageYOffset
    $header.css('top', 0 - distance * 0.5 + 'px')
    if (distance >= offseter) {
      $footer.css({
        'position' : 'fixed',
        'bottom' : '0'})
    }
  }
}())
