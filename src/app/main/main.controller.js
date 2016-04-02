(function () {
  'use strict';

  angular
    .module('cashflow')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $localStorage) {
    var vm = this;

    vm.player = $localStorage.player ? $localStorage.player : {name: ''};
    vm.katsching = katsching;

    function katsching() {
      $localStorage.player = vm.player;
      $state.go('menu');
    }
  }
})();
