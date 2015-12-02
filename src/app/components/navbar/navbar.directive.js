(function() {
  'use strict';

  angular
    .module('jasonNew')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      link : link,
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;
      vm.showbar = false;
      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }

    function link(scope, elem, attr) {
      var leftPos, newWidth, $el,
          $ = jQuery,
          $nav = $('#nav-parent'),
          $magic = $('#magic-line'),
          $links = $('#nav-parent a');

      $magic
        .width($('.active').width())
        .css('left', $('.active').position().left);

      $('#nav-parent a').hover(function() {
          $el = $(this);
          leftPos = $el.position().left;
          newWidth = $el.width();
          $magic.stop().animate({
              left: leftPos,
              width: newWidth
          });
      }, function() {
          $magic.stop().animate({
              left: $('.active').position().left,
              width: $('.active').width()
          });
      });
      $('#nav-parent a').click(function () {
        console.log($(this));
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active')
      })
    }
  }

})();
//
// $(function() {
//
//     var $el, leftPos, newWidth,
//         $mainNav = $("#example-one");
//
//     $mainNav.append("<li id='magic-line'></li>");
//     var $magicLine = $("#magic-line");
//
//     $magicLine
//         .width($(".current_page_item").width())
//         .css("left", $(".current_page_item a").position().left)
//         .data("origLeft", $magicLine.position().left)
//         .data("origWidth", $magicLine.width());
//
//     $("#example-one li a").hover(function() {
//         $el = $(this);
//         leftPos = $el.position().left;
//         newWidth = $el.parent().width();
//         $magicLine.stop().animate({
//             left: leftPos,
//             width: newWidth
//         });
//     }, function() {
//         $magicLine.stop().animate({
//             left: $magicLine.data("origLeft"),
//             width: $magicLine.data("origWidth")
//         });
//     });
// });
