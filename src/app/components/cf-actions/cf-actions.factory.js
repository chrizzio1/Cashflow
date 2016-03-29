(function() {
  'use strict';

  angular
    .module('cashflow')

  .factory('cfActions', [function() {
    var actions = [{
        'type': 'deal',
        event: function(player) {
          player.cash -= 100;
        }
      },
      { 'type': 'charity' }, { 'type': 'deal' }, { 'type': 'payday' }, { 'type': 'deal' }, { 'type': 'event' }, { 'type': 'deal' }, { 'type': 'cost' }, { 'type': 'deal' }, { 'type': 'baby' }, { 'type': 'deal' }, { 'type': 'payday' }, { 'type': 'deal' }, { 'type': 'event' }, { 'type': 'deal' }, { 'type': 'cost' }, { 'type': 'deal' }, { 'type': 'debt' }, { 'type': 'deal' }, { 'type': 'payday' }, { 'type': 'deal' }, { 'type': 'event' }, { 'type': 'deal' }, { 'type': 'cost' }
    ];

    return {
      getActions: function getActions() {
        return actions;
      }
    };
  }])

})();
