(function() {
  'use strict';

  angular
    .module('cashflow')

  .factory('cfActions', [function() {
    var actions = [{
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'charity',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'payday',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'event',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'cost',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'baby',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'payday',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'event',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'cost',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'debt',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'payday',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'event',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'deal',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }, {
      'type': 'cost',
      event: function(player) {
        var num = Math.floor(Math.random() * 13000) + 1;
        num *= Math.floor(Math.random() * 8) == 1 ? -1 : 1;
        return num;
      }
    }];

    return {
      getActions: function getActions() {
        return actions;
      }
    };
  }])

})();
