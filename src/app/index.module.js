(function() {
  'use strict';

  angular
    .module('jasonNew', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'firebase'])
    .controller('ScrollController', ScrollController);

      /** @ngInject */
    function ScrollController($scope, $location, $anchorScroll) {
      $scope.gotoTop = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('top');

        // call $anchorScroll()
        $anchorScroll();
      };
    }

    // .controller('ScrollController', ['$scope', '$location', '$anchorScroll',
    //   function ($scope, $location, $anchorScroll) {
    //     $scope.gotoTop = function() {
    //       // set the location.hash to the id of
    //       // the element you wish to scroll to.
    //       $location.hash('#');
    //
    //       // call $anchorScroll()
    //       $anchorScroll();
    //     };
    //   }]);
})();
