(function () {
  'use strict';
  var $header = $('header');
  var $footer = $('.for-bg');
  $(window).scroll(scrollingThisWindow)
  function scrollingThisWindow() {
    var heightWithoutFooter = $('.container-fluid').height() + $header.height() + $('acme-navbar').height();
    var scrolledDistance = $(this).scrollTop() + $(this).height();
    var distance = $(this).scrollTop();
    $header.css('top', 0 - distance * 0.5 + 'px')
    if (distance >= $(window).height()) {
      $footer.css({
        'position' : 'fixed',
        'top' : $(window).height() - 93 + 'px'})
    }
    if (heightWithoutFooter <= scrolledDistance){
      $footer.css('top', ($footer.position().top) + (heightWithoutFooter + 190 - scrolledDistance) * 0.5 + 'px' )
    }
  }
}())
