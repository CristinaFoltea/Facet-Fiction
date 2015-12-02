(function () {
  'use strict';
  var $header = $('header');
  var $footer = $('.for-bg')
  console.log($footer);
  $(window).scroll(scrollingThisWindow)
  function scrollingThisWindow() {
    var distance = this.pageYOffset
    $header.css('top', 0 - distance * 0.5 + 'px')
  }
}())
// (function () {
//   'use strict';
//   var header = document.querySelector('header');
//   window.addEventListener('scroll', scrollingThisWindow)
//   function scrollingThisWindow() {
//     var distance = this.pageYOffset
//     header.style.top = '-' + distance * 0.5 + 'px';
//   }
// }())
