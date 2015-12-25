(function() {
  'use strict';

  angular
    .module('jasonNew')
    .directive('blockFooter', blockFooter);

  /** @ngInject */
  function blockFooter() {
    var directive = {
      restrict: 'E',
      link : link,
      templateUrl: 'app/components/block-footer/footer.html',
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true //
    };
    return directive;
  }
  function FooterController() {
    var vm = this
    vm.gotoTop = function () {
      $("html, body").animate({ scrollTop: 0 }, 300);
    }
  }
  function link(scope, element, attr) {
  }
})();
