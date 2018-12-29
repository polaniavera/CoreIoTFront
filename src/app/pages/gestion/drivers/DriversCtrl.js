/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.gestion')
        .controller('DriversCtrl', DriversCtrl);

    /** @ngInject */
    function DriversCtrl($rootScope, $scope, toastr) {
        $rootScope.showBtnTruck = false;
        $scope.info = {};

        $scope.createDriver = function () {
            console.log($scope.info);
            // LLamada al servicio POST desde el factory
            dataFactory.setDriver()
                .then(function (response) {
                    toastr.success('Conductor creado con exito', 'Creado');
                }, function (error) {
                    toastr.error('Se presento un error', 'Error');
                });
        };

    }
})();