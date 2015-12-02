(function() {
  'use strict';

  angular
    .module('jasonNew')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }
  
})();
