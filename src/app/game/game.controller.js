(function() {
  'use strict';

  angular
    .module('cashflow')
    .controller('GameController', GameController);

  /** @ngInject */
  function GameController(cfActions) {
    var vm = this;
    vm.roll = roll;
    vm.getPlayers = getPlayers;
    vm.getCurrentRound = getCurrentRound;

    // ######

    var gameCompleted = false;
    var players = [{
        name: 'Chris',
        cash: 200
      },
      { name: 'Hendrik' }
    ];
    var currentPlayer = 0;

    var ratRace = cfActions.getActions();
    console.log(ratRace)

    var currentRound = 0;

    function getCurrentRound() {
      return currentRound;
    }

    // Start game
    gameLoop();

    function gameLoop() {

      while (!gameCompleted) {
        // TODO

        var thisPlayer = players[currentPlayer];
        // Runde

        // 1. rolle the die
        var rolledDice = roll();

        // 2. Set player to new position
        if (thisPlayer.position === undefined) {
          thisPlayer.position = 0;
        }
        thisPlayer.position += rolledDice;
        console.log(thisPlayer.name + " würfelt eine " + rolledDice);

        // 3. Execute the event on the new field
        ratRace[thisPlayer.position].event(thisPlayer);

        console.log(thisPlayer.name + " landet auf " + ratRace[thisPlayer.position].type);

        // 4. Financial actions
        // todo

        // End of round
        nextPlayer();


        // console.log(players[currentPlayer].name)

        currentRound++;

        if (currentRound == 10) {
          gameCompleted = true;
        }
      }
    }

    function nextPlayer() {
      currentPlayer = ++currentPlayer % players.length
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
