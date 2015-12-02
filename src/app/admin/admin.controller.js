(function() {
  'use strict';

  angular
    .module('jasonNew')
    .controller('AdminController', AdminController);

  /** @ngInject */
  function AdminController() {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1444806082779;
  }
})();
