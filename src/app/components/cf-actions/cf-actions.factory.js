angular
  .module('cashflow')
  .service('cfActionsService', cfActionsService);

function cfActionsService() {
  'use strict';

  var self = this;
  self.getActions = getActions;

  ///////////

  var actions = [
    { 'type': 'deal', event: dealCallback },
    { 'type': 'charity', event: charityCallback },
    { 'type': 'deal', event: dealCallback },
    { 'type': 'payday', event: paydayCallback },
    { 'type': 'deal', event: dealCallback },
    { 'type': 'event', event: eventCallback },
    { 'type': 'deal', event: dealCallback },
    { 'type': 'cost', event: costCallback },
    { 'type': 'deal', event: dealCallback },
    { 'type': 'baby', event: babyCallback },
    { 'type': 'deal', event: dealCallback },
    { 'type': 'payday', event: paydayCallback },
    { 'type': 'deal', event: dealCallback },
    { 'type': 'event', event: eventCallback },
    { 'type': 'deal', event: dealCallback },
    { 'type': 'cost', event: costCallback },
    { 'type': 'deal', event: dealCallback },
    { 'type': 'debt', event: debtCallback },
    { 'type': 'deal', event: dealCallback },
    { 'type': 'payday', event: paydayCallback },
    { 'type': 'deal', event: dealCallback },
    { 'type': 'event', event: eventCallback },
    { 'type': 'deal', event: dealCallback },
    { 'type': 'cost', event: costCallback }
  ];

  /**
   * Returns action for the game board's rat race.
   */
  function getActions() {
    return actions;
  }

  // TODO: Implement real actions:

  function babyCallback(game) {
    game.roundLog.push({ content: 'Baby!' });
    // 50% +/- 20%
    subtractRelativeCash(game, 0.50 + (Math.random() * 0.40 - 0.20));
  }

  function charityCallback(game) {
    game.roundLog.push({ content: 'Charity!' });
    subtractRelativeCash(game, 0.05);
  }

  function costCallback(game) {
    game.roundLog.push({ content: 'Cost!' });
    var amounts = [200, 577, 1233, 50, 66, 1, 999];
    subtractAbsoluteCash(game, amounts[Math.floor(Math.random() * amounts.length)]);
  }

  function dealCallback(game) {
    game.roundLog.push({ content: 'Deal!' });
    addRelativeCash(game, Math.random() * 0.45);
  }

  function debtCallback(game) {
    game.roundLog.push({ content: 'Debt!' });
    // 7% +/- 5%
    subtractRelativeCash(game, 0.07 + (Math.random() * 0.10 - 0.05));
  }

  function eventCallback(game) {
    game.roundLog.push({ content: 'Event!' });
    if (Math.random() < 0.5)
      addRelativeCash(game, Math.random() * 0.40);
    else
      subtractRelativeCash(game, Math.random() * 0.30);
  }

  function paydayCallback(game) {
    game.roundLog.push({ content: 'Payday!' });
    addAbsoluteCash(game, 2000);
  }

  // TODO: Evtl. in Playerprototype
  function addAbsoluteCash(game, amount) {
    var currentPlayer = game.players[game.currentPlayerIdx];
    game.roundLog.push({ content: currentPlayer.name + ' bekommt ' + amount + '!' });
    currentPlayer.cash += amount;
  }

  function subtractAbsoluteCash(game, amount) {
    var currentPlayer = game.players[game.currentPlayerIdx];
    game.roundLog.push({ content: currentPlayer.name + ' verliert ' + amount + '!' });
    currentPlayer.cash -= amount;
  }

  function addRelativeCash(game, percent) {
    var currentPlayer = game.players[game.currentPlayerIdx];
    game.roundLog.push({ content: currentPlayer.name + ' bekommt ' + Math.round(percent * 100) + '% (' + Math.round(currentPlayer.cash * percent) + ')!' });
    currentPlayer.cash += Math.round(currentPlayer.cash * percent);
  }

  function subtractRelativeCash(game, percent) {
    var currentPlayer = game.players[game.currentPlayerIdx];
    game.roundLog.push({ content: currentPlayer.name + ' verliert ' + Math.round(percent * 100) + '% (-' + Math.round(currentPlayer.cash * percent) + ')!' });
    currentPlayer.cash -= Math.round(currentPlayer.cash * percent);
  }
}
