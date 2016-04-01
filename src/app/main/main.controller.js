(function () {
  'use strict';

  angular
    .module('cashflow')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.player = '';
    vm.classAnimation = '';


  }
})();
