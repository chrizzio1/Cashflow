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
    vm.getRoundLog = getRoundLog;
    vm.getCurrentRound = getCurrentRound;

    // ######

    var currentRound = 0;
    var currentPlayer = 0;
    var gameCompleted = false;
    var roundLog = [];

    var players = [{
        name: 'Chris',
        cash: 200
      },
      { name: 'Hendrik' }
    ];
    var ratRace = cfActions.getActions();


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



        // 3. Execute the event on the new field
        try {
          ratRace[thisPlayer.position].event(thisPlayer);
        } catch (err) {
          //nothing
        }

        roundLog.push({ content: currentRound + ": " + thisPlayer.name + " würfelt eine " + rolledDice+ " und landet auf " + ratRace[thisPlayer.position].type});

        // 4. Financial actions
        // todo

        // End of round
        nextPlayer();

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

    function getRoundLog() {
      return roundLog;
    }


    function getRatrace() {
      return ratRace;
    }

    function getCurrentRound() {
      return currentRound;
    }

  }
})();
