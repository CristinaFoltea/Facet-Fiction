(function() {
  'use strict';

  angular
    .module('jasonNew')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      })
      .state('books', {
        url: '/books',
        templateUrl: 'app/books/books.html',
        controller: 'BooksController',
        controllerAs: 'books'
      });
    $urlRouterProvider.otherwise('/');
  }
})();
