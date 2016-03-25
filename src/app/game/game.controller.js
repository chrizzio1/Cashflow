(function() {
  'use strict';

  angular
    .module('cashflow')
    .controller('GameController', GameController);

  /** @ngInject */
  function GameController() {
    var vm = this;
    vm.roll = roll;
    vm.getPlayers = getPlayers;


    // ######
    var gameCompleted = false;
    var players = {
      'player1': { 'name': 'Chris' },
      'player2': { 'name': 'Hendrik' }
    };
    var ratRace = [];

    function gameLoop() {
      while (!gameCompleted) {
        // TODO
        gameCompleted = !gameCompleted;
      }
    }

    function roll() {
      return Math.round(Math.random() * (6 - 1) + 1);
    }

    function getPlayers() {
      return players;
    }


    function getRatrace() {
      return ratRace;
    }

  }
})();
