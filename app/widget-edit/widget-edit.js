'use strict';

angular.module('myApp.widgetEdit', [])

.component('widgetEdit', {

    templateUrl: 'widget-edit/widget-edit.html',

    controller: function($scope, $stateParams, WidgetsService) {        
        $scope.widget = {
            id: 0,
            name: '',
            detail: [
                {'key': '', 'value': ''}                
            ]
        };        
        $scope.widgetId = $stateParams.widgetId;
        $scope.title = `Edit Widget`;
        
        $scope.getWidget = function() {
            if($scope.widgetId > 0)
                $scope.widget = WidgetsService.getWidget($scope.widgetId);            
        }

        $scope.emitDataModified = function() {
            $scope.$emit('dataModified', $scope.widgetId);
        };

        $scope.submit = function() {
            $scope.widgetId = WidgetsService.saveWidget($scope.widget);                      
            $scope.emitDataModified();
            $scope.close();
        }
      
        $scope.close = function () {
            $scope.widgetId = 0;
            $scope.widget = null;
        }

        $scope.delete = function(index) {            
            if(index < $scope.widget.detail.length)            
                $scope.widget.detail.splice(index, 1);            
        }

        $scope.add = function() {            
            $scope.widget.detail.push({'key': '', 'value': ''});
        }

        $scope.getWidget();
    }
    
  });