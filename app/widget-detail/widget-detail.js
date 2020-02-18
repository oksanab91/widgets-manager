'use strict';

angular.module('myApp.widgetDetail', [])

.component('widgetDetail', {

    templateUrl: 'widget-detail/widget-detail.html',

    controller: function($scope, $stateParams, WidgetsService) {
        $scope.detail = [];
        $scope.widgetId = $stateParams.widgetId;
        $scope.title = `Detail of Widget # ${$scope.widgetId}`;
            
        $scope.getDetail = function() {
            $scope.detail = WidgetsService.getDetail($scope.widgetId);
        }

        $scope.$on('itemRemoved', function(event, data) {            
            $scope.getDetail();            
        });

        $scope.getDetail();
    }
    
  });