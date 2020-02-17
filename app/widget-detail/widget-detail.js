'use strict';

angular.module('myApp.widgetDetail', [])

.component('widgetDetail', {

    templateUrl: 'widget-detail/widget-detail.html',

    controller: function($scope, $stateParams, localStorageService) {
        $scope.detail = [];
        $scope.widgetId = $stateParams.widgetId;
        $scope.title = `Detail of Widget # ${$scope.widgetId}`;
            
        this.getDetail = function() {
            var table = localStorageService.get('widgetTable');
            var widget = table.find(el => {return el.id == $scope.widgetId});

            $scope.detail = widget.detail;
        }

        this.getDetail();
    }
    
  });