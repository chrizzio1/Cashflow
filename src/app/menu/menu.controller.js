(function () {
  'use strict';

  angular
    .module('cashflow')
    .controller('MenuController', MenuController)
    .controller('CreateGameModalController', CreateGameModalController)
    .controller('JoinGameModalController', JoinGameModalController);

  /** @ngInject */
  function MenuController($uibModal, $firebaseArray, $firebaseObject, firebaseUrl) {
    var vm = this;

    var ref = new Firebase(firebaseUrl + 'games');
    vm.games = $firebaseArray(ref);
    //vm.player = $stateParams.player;
    vm.openCreateGameModal = openCreateGameModal;
    vm.openJoinGameModal = openJoinGameModal;

    function openCreateGameModal() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'createGameModal.html',
        controller: 'CreateGameModalController',
        controllerAs: 'gameModal',
        size: 'sm',
        resolve: {
          games: function () {
            return vm.games;
          }
        }
      });

      modalInstance.result.then(function () {
        console.log('success');
      }, function () {
        console.log('failure');
      });
    }

    function openJoinGameModal(game) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'joinGameModal.html',
        controller: 'JoinGameModalController',
        controllerAs: 'gameModal',
        size: 'sm',
        resolve: {
          game: function () {
            return $firebaseObject(ref.child(game.$id));
          }
        }
      });

      modalInstance.result.then(function () {
        console.log('success');
      }, function () {
        console.log('failure');
      });
    }
  }

  /** @ngInject */
  function CreateGameModalController(games, $state, $uibModalInstance, $localStorage, $firebaseObject) {
    var vm = this;

    vm.newGame = {
      name: '',
      password: '',
      hostName: $localStorage.player.name,
      players: [$localStorage.player]
    };
    vm.cancel = cancel;
    vm.createGame = createGame;

    function cancel() {
      $uibModalInstance.dismiss('cancel');
      console.log('Create game canceled');
    }

    function createGame() {
      games.$add(vm.newGame).then(function (ref) {
        console.log(ref.key());
        console.log('Created new game: %s', vm.newGame.name);
        $uibModalInstance.close();
        $state.go('game', {game: $firebaseObject(ref)});
      });
    }
  }

  /** @ngInject */
  function JoinGameModalController(game, $state, $uibModalInstance, $localStorage) {
    var vm = this;

    vm.password = '';
    vm.game = game;
    vm.cancel = cancel;
    vm.joinGame = joinGame;

    function cancel() {
      $uibModalInstance.dismiss('cancel');
      console.log('Joining game canceled');
    }

    function joinGame() {
      if (vm.game.password === vm.password) {
        console.log('Joining Game: %s', vm.game.$id);

        // Checks if a player with same name isn't already in game
        var name = $localStorage.player.name;
        if (vm.game.players.every(function (player) {
            return player.name !== name;
          })) {

          vm.game.players.push($localStorage.player);
          console.log('Added new player');
          console.log(vm.game);
        }

        vm.game.$save().then(function (ref) {
          $uibModalInstance.close();
          $state.go('game', {game: vm.game});
        });
      } else {
        console.error('Wrong password! Try again');
      }
    }
  }
})();
