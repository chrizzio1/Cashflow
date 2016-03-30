/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('cashflow')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('firebaseUrl', 'https://cash-up.firebaseio.com/');
})();
