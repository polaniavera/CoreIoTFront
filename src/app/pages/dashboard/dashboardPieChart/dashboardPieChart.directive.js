/**
 * @author c.polania
 * created on 23.07.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('dashboardPieChart', dashboardPieChart);

  /** @ngInject */
  function dashboardPieChart() {
    return {
      restrict: 'E',
      controller: 'DashboardPieChartCtrl',
      templateUrl: 'app/pages/dashboard/dashboardPieChart/dashboardPieChart.html'
    };
  }
})();