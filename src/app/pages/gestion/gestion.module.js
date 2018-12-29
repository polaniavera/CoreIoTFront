/**
 * @author c.polania
 * created on 13.08.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.gestion', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main.gestion', {
          url: '/gestion',
          templateUrl: 'app/pages/gestion/gestion.html',
          abstract: true,
          title: 'Gestion',
          sidebarMeta: {
            icon: 'ion-model-s',
            order: 300,
          },
          authenticate: true
        })

        .state('main.gestion.drivers',
        {
          url: '/drivers',
          templateUrl: 'app/pages/gestion/drivers/drivers.html',
          controller: 'DriversCtrl',
          title: 'Conductores',
          sidebarMeta: {
            order: 200,
          },
          authenticate: true
        })
        .state('main.gestion.trucks', {
          url: '/trucks',
          templateUrl: 'app/pages/gestion/trucks/trucks.html',
          controller: 'TrucksCtrl',
          title: 'Vehiculos',
          sidebarMeta: {
            order: 100,
          },
          authenticate: true
        });
  }

})();
