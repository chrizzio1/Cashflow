/* global moment:false */
(function() {
  'use strict';

  angular
    .module('cashflow')
    .constant('moment', moment)
    .constant('firebaseUrl', 'https://cash-up.firebaseio.com/');
})();
