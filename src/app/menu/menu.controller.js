(function () {
  'use strict';

  angular
    .module('cashflow')
    .controller('MenuController', MenuController)
    .controller('CreateGameModalController', CreateGameModalController)
    .controller('JoinGameModalController', JoinGameModalController);

  /** @ngInject */
  function MenuController($uibModal, $firebaseArray, firebaseUrl) {
    var vm = this;

    var ref = new Firebase(firebaseUrl + 'games');
    vm.games = $firebaseArray(ref);
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
          hostPlayer: function () {
            // TODO: Player Object anlegen und laden
            return {name: 'Hendrik'};
          },
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
          game: game
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
  function CreateGameModalController($uibModalInstance, games, hostPlayer) {
    var vm = this;

    vm.newGame = {
      name: '',
      password: '',
      hostName: hostPlayer.name,
      players: [hostPlayer]
    };
    vm.cancel = cancel;
    vm.createGame = createGame;

    function cancel() {
      $uibModalInstance.dismiss('cancel');
      console.log('Create game canceled');
    }

    function createGame() {
      games.$add(vm.newGame);
      console.log('Created new game: %s', vm.newGame);
      $uibModalInstance.close();
    }
  }

  /** @ngInject */
  function JoinGameModalController($state, $uibModalInstance, game) {
    var vm = this;

    vm.game = game;
    vm.password = '';
    vm.cancel = cancel;
    vm.joinGame = joinGame;

    function cancel() {
      $uibModalInstance.dismiss('cancel');
      console.log('Joining game canceled');
    }

    function joinGame() {
      if (game.password === vm.password) {
        console.log('Joining Game: %s', game.$id);
        $uibModalInstance.close();
        $state.go('game', {id: game.$id});
      } else {
        console.error('Wrong password! Try again');
      }
    }
  }
})();
