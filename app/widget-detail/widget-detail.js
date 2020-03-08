'use strict';

angular.module('myApp.widgetDetail', [])

.component('widgetDetail', {

    bindings: {
        widgetName: '<'
    }, 

    templateUrl: 'widget-detail/widget-detail.html',

    controller: function($scope, $stateParams, $state, WidgetsService) {
        $scope.detail = [];
        $scope.widgetId = $stateParams.widgetId;
        $scope.title = '';
        
        this.$onInit = function() {
            $scope.title = `${this.widgetName} Detail`;
            $scope.getDetail();
        }

        $scope.getDetail = function() {
            $scope.detail = WidgetsService.getDetail($scope.widgetId);
        }

        $scope.$on('itemRemoved', function(event, data) {            
            if(data == $scope.widgetId) {                
                $state.go('widgets');
            }                       
        });        
    }
    
  });