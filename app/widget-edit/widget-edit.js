'use strict';

angular.module('myApp.widgetEdit', [])

.component('widgetEdit', {

    templateUrl: 'widget-edit/widget-edit.html',

    controller: function($scope, $stateParams, WidgetsService) {        
        $scope.widget = {
            id: 0,
            name: '',
            detail: [
                {'key': '', 'value': ''},
                {'key': '', 'value': ''},
                {'key': '', 'value': ''},
                {'key': '', 'value': ''},
                {'key': '', 'value': ''},
            ]
        };        
        $scope.widgetId = $stateParams.widgetId;
        $scope.title = `Edit Widget`;
        
        $scope.reset = function () {
            $scope.widgetId = 0;
            $scope.widget = {
                id: 0,
                name: '',
                detail: [
                    {'key': '', 'value': ''},
                    {'key': '', 'value': ''},
                    {'key': '', 'value': ''},
                    {'key': '', 'value': ''},
                    {'key': '', 'value': ''},
                ]
            }; 
        }

        $scope.getWidget = function() {
            if($scope.widgetId > 0)
                $scope.widget = WidgetsService.getWidget($scope.widgetId);            
        }

        $scope.emitDataModified = function() {
            $scope.$emit('dataModified', $scope.widgetId);
        };

        $scope.submit = function() {
            $scope.widgetId = WidgetsService.saveWidget($scope.widget);
            $scope.getWidget();
            $scope.reset();
            $scope.emitDataModified();
        }
      
        $scope.getWidget();
    }
    
  });