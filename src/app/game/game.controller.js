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
    vm.getCurrentRound = getCurrentRound;


    // ######
    var gameCompleted = false;
    var players = [
      { 'name': 'Chris' },
      { 'name': 'Hendrik' }
    ];
    var currentPlayer = 0;

    var ratRace = [{ 'type': 'deal' },
      { 'type': 'charity' },
      { 'type': 'deal' },
      { 'type': 'payday' },
      { 'type': 'deal' },
      { 'type': 'event' },
      { 'type': 'deal' },
      { 'type': 'costs' },
      { 'type': 'deal' },
      { 'type': 'baby' },
      { 'type': 'deal' },
      { 'type': 'payday' },
      { 'type': 'deal' },
      { 'type': 'event' },
      { 'type': 'deal' },
      { 'type': 'cost' },
      { 'type': 'deal' },
      { 'type': 'debt' },
      { 'type': 'deal' },
      { 'type': 'payday' },
      { 'type': 'deal' },
      { 'type': 'event' },
      { 'type': 'deal' },
      { 'type': 'cost' }
    ];

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

        // 3. Execute the Event on the new field
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
      if (currentPlayer + 1 >= players.length) {
        currentPlayer = 0;
      } else {
        currentPlayer++;
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
