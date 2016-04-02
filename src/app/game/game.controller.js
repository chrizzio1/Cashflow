(function () {
  'use strict';

  angular
    .module('cashflow')
    .controller('GameController', GameController);

  /** @ngInject */
  function GameController($scope, $q, $state, $stateParams, $localStorage, cfActions) {
    var vm = $scope;

    var currentRound = 0;
    var ratRace = cfActions.getActions();


    vm.localPlayer = $localStorage.player;

    console.log('local player:');
    console.log(vm.localPlayer);
    // Save game manually
    // vm.game = $stateParams.game;
    // vm.game.test= 'heehehe';
    // vm.game.$save().then(function() {
    //   ...
    // );

    // Save game automatically
    if (!$stateParams.game.$bindTo) {
      $state.go('menu');
    } else {
      $stateParams.game.$bindTo(vm, 'game').then(function () {
        //vm.game.players = [
        //  {name: 'Chris', cash: 200, position: 0},
        //  {name: 'Hendrik', cash: 300, position: 0}
        //];
        vm.game.currentPlayerIdx = -1;
        vm.game.rolled = 0;
        vm.game.roundLog = [];

        // Init the player before the user can take action
        nextPlayer();
        vm.startTurn = startTurn;

        function startTurn() {
          roll()                        // 1. Roll the dice
            .then(movePlayer)           // 2. Move player to new position
            .then(executeFieldAction)   // 3. Execute the event on the new field
            .then(checkGameState)       // 4. Check if a player wins
            .then(financialStatement)   // 4. Financial actions
            .then(nextPlayer);          // 5. Next player's turn
        }

        function checkGameState() {
          console.log('check state');
          var deferred = $q.defer();
          deferred.resolve();
          return deferred.promise;
        }

        function executeFieldAction() {
          console.log('field action');
          var deferred = $q.defer();
          deferred.resolve();
          return deferred.promise;
        }

        function financialStatement() {
          console.log('financial statement');
          var deferred = $q.defer();
          deferred.resolve();
          return deferred.promise;
        }

        function movePlayer() {
          console.log('move player');
          var deferred = $q.defer();
          var log = vm.game.currentPlayer.name + ' würfelt eine ' + vm.game.rolled + ' und rückt von ' + vm.game.currentPlayer.position + ' auf ' + (vm.game.currentPlayer.position + vm.game.rolled) % ratRace.length;
          console.log(vm.game);
          vm.game.roundLog.$add({content: log});
          vm.game.currentPlayer.position = (vm.game.currentPlayer.position + vm.game.rolled) % ratRace.length;
          deferred.resolve();
          return deferred.promise;
        }

        function nextPlayer() {
          console.log('next player');
          vm.game.currentPlayer = vm.game.players[++vm.game.currentPlayerIdx % vm.game.players.length];
          console.log('current player:');
          console.log(vm.game.currentPlayer);
        }

        function roll() {
          console.log('roll');
          var deferred = $q.defer();
          vm.game.rolled = Math.ceil(Math.random() * 6);
          deferred.resolve();
          return deferred.promise;
        }
      });
    }

  }
})();
