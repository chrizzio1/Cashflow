(function () {
  'use strict';

  angular
    .module('cashflow')
    .controller('GameController', GameController);

  /** @ngInject */
  function GameController($q, $stateParams, $localStorage, cfActions) {
    var vm = this;

    var ratRace = cfActions.getActions();
    var audioKatsching = new Audio('/assets/sounds/katsching.mp3');

    vm.localPlayer = $localStorage.player;

    console.log('load game...');
    vm.game = $stateParams.game;
    vm.game.$loaded().then(function () {
      console.log('game loaded');

      initGame();
      initPlayer();

      vm.game.$save().then(function () {
        vm.beginGame = beginGame;
        vm.makeTurn = makeTurn;
      });
    });

    function initGame() {
      console.debug('init game');
      if (vm.game.status !== 'initiated') {
        vm.game.currentPlayerIdx = -1;
        vm.game.rolled = 0;
        vm.game.roundLog = [{ content: 'Die Spieler versammeln sich zum abcashen' }];
        vm.game.status = 'initialized';
      }
    }

    function initPlayer() {
      console.debug('init player');

      vm.game.players.find(function (player, idx) {
        if (player.name === vm.localPlayer.name && player.status !== 'initialized') {
          vm.game.players[idx].position = 0;
          vm.game.players[idx].cash = 300;
          player.status = 'initialized'
        }
      })
    }

    function beginGame() {
      if (vm.game.currentPlayerIdx === -1) {
        vm.game.roundLog.push({ content: 'Das Spiel beginnt' });
        vm.game.status = 'started';
        nextPlayer();
      }
    }

    function makeTurn() {
      //TODO: Semaphore to avoid parallel execution
      roll()                        // 1. Roll the dice
        .then(movePlayer)           // 2. Move player to new position
        .then(executeFieldAction)   // 3. Execute the event on the new field
        .then(checkGameState)       // 4. Check if a player wins
        .then(financialStatement)   // 4. Financial actions
        .then(nextPlayer);          // 5. Next player's turn
    }

    function roll() {
      console.debug('roll');

      var deferred = $q.defer();

      console.debug(vm.game);
      var max = 6;
      var min = 1;

      vm.game.rolled = Math.floor(Math.random() * (max - min + 1) + min);
      //vm.game.rolled = Math.ceil(Math.random() * 6);
      vm.game.$save().then(deferred.resolve);
      return deferred.promise;
    }

    function movePlayer() {
      console.debug('move player');

      var deferred = $q.defer();

      var log = vm.game.players[vm.game.currentPlayerIdx].name + ' würfelt eine ' + vm.game.rolled + ' und rückt von ' + vm.game.players[vm.game.currentPlayerIdx].position + ' auf ' + (vm.game.players[vm.game.currentPlayerIdx].position + vm.game.rolled) % ratRace.length;
      vm.game.roundLog.push({ content: log });
      vm.game.players[vm.game.currentPlayerIdx].position = (vm.game.players[vm.game.currentPlayerIdx].position + vm.game.rolled) % ratRace.length;
      vm.game.$save().then(deferred.resolve);
      return deferred.promise;
    }

    function executeFieldAction() {
      console.debug('field action');

      var deferred = $q.defer();
      var currentPlayer = vm.game.players[vm.game.currentPlayerIdx];
      var cash = ratRace[currentPlayer.position].event();

      currentPlayer.cash += cash;


      if (cash > 0) {
        var log = currentPlayer.name + ' casht ab: +' + cash + ' €!';
        audioKatsching.play();
      } else {
        var log = currentPlayer.name + ' verliert ' + cash + ' €. LAPPEN!';
      }
      vm.game.roundLog.push({ content: log });
      vm.game.$save().then(deferred.resolve);
      return deferred.promise;
    }

    function checkGameState() {
      console.debug('check state');

      var deferred = $q.defer();

      vm.game.$save().then(deferred.resolve);
      return deferred.promise;
    }

    function financialStatement() {
      console.debug('financial statement');

      var deferred = $q.defer();

      vm.game.$save().then(deferred.resolve);
      return deferred.promise;
    }

    function nextPlayer() {
      console.debug('next player');

      var deferred = $q.defer();

      vm.game.currentPlayerIdx = ++vm.game.currentPlayerIdx % vm.game.players.length;
      console.debug('current player:');
      console.debug(vm.game.players[vm.game.currentPlayerIdx]);
      vm.game.$save().then(deferred.resolve);
      return deferred.promise;
    }
  }
})();
