(function () {
  'use strict';

  angular
    .module('cashflow')
    .controller('GameController', GameController);

  /** @ngInject */
  function GameController($q, cfActions) {
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

    var players = [
      {
        name: 'Chris',
        cash: 200,
        position: 0
      },
      {
        name: 'Hendrik',
        cash: 300,
        position: 0
      }
    ];
    var ratRace = cfActions.getActions();


    // Start game
    gameLoop();

    function gameLoop() {

      while (!gameCompleted) {
        // TODO

        var thisPlayer = players[currentPlayer];
        // Runde


        // Financial action
        // - Dialog
        // - Balance Sheet
        // -
        // financialAction(currentPlayer);

        console.log(thisPlayer);

        // 1. rolle the die
        roll()
        // 2. Set player to new position
          .then(movePlayer(thisPlayer))
          .then(function(){
            // 3. Execute the event on the new field
            try {
              ratRace[thisPlayer.position].event(thisPlayer);
            } catch (err) {
              //nothing
            }

            //roundLog.push({content: currentRound + ": " + thisPlayer.name + " würfelt eine " + rolledDice + " und landet auf " + ratRace[thisPlayer.position].type});

          })




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
      var deferred = $q.defer();
      var number = (Math.round(Math.random() * (6 - 1) + 1));
      console.log('Gewürfelt: %s', number);
      deferred.resolve();
      return deferred.promise;
    }

    function movePlayer(player) {
      var deferred = $q.defer();

      return function (number) {
        console.log(number);
        console.log(player);
        player.position = (player.position + number) % ratRace.length;
        console.log('Spielerposition: %s', player.position);
        deferred.resolve();
        return deferred.promise;
      }
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
