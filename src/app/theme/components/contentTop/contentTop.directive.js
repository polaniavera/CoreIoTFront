/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('contentTop', contentTop);

  /** @ngInject */
  function contentTop($location, $state, $rootScope) {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/contentTop/contentTop.html',
      link: function($scope) {
        $scope.$watch(function () {
          $scope.activePageTitle = $state.current.title;
          if ($state.current.title == "Maps") {
            $rootScope.isVisible = true;
            $rootScope.showBtnTruck = true;
        } else {
            $rootScope.isVisible = false;
            $rootScope.showBtnTruck = false;
        }
        });
      }
    };
  }

})();