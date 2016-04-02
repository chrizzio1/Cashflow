(function() {
  'use strict';

  angular
    .module('cashflow')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menu'
      })
      .state('game', {
        url: '/game',
        templateUrl: 'app/game/game.html',
        controller: 'GameController',
        controllerAs: 'game',
        params: {
          game: {}
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
