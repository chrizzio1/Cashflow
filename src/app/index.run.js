(function() {
  'use strict';

  angular
    .module('cashflow')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
