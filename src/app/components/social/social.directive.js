(function () {
  'use strict';

  angular
    .module('jasonNew')
    .directive('socialMedia', socialMedia);

    function socialMedia() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/social/social.html',
        controller: SocialController,
        bindToController: true
      };

      return directive;

      /** @ngInject */
      function SocialController() {

      }
    }

}());
