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
      templateUrl: 'app/components/block-footer/footer.html'
    };
    return directive;
  }

  function link(scope, element, attr) {
  }
})();
