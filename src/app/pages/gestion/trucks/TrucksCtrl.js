/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.gestion')
        .controller('TrucksCtrl', TrucksCtrl);

    /** @ngInject */
    function TrucksCtrl($rootScope) {
        $rootScope.showBtnTruck = false;
    }
})();