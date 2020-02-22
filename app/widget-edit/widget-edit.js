'use strict';

angular.module('myApp.widgetEdit', [])

.component('widgetEdit', {

    templateUrl: 'widget-edit/widget-edit.html',

    controller: function($scope, $stateParams, $state, WidgetsService, AlertService) {        
        $scope.widget = {
            id: 0,
            name: '',
            detail: [
                {'key': '', 'value': ''}                
            ]
        };                       
        $scope.widgetId = $stateParams.widgetId;
        $scope.title = `Edit Widget`;
        $scope.mode = 'edit';       
        
        $scope.getWidget = function() {
            if($scope.widgetId > 0) {
                $scope.widget = WidgetsService.getWidget($scope.widgetId);                
            }                
            else{
                $scope.title = `Add Widget`;
                $scope.mode = 'add';
            }                
        }

        $scope.emitDataModified = function() {
            $scope.$emit('dataModified', $scope.widgetId);
        }

        $scope.submit = function() {
            if(WidgetsService.validateUniqueName($scope.widget)) {
                $scope.widgetId = WidgetsService.saveWidget($scope.widget);                                     
                $scope.emitDataModified();
                $scope.close();
            }
            else {                
                $scope.addAlert('danger', 'The name is not unique.');
            }            
        }
      
        $scope.close = function () {            
            $state.go('widgets');
        }

        $scope.delete = function(index) {            
            if(index < $scope.widget.detail.length)            
                $scope.widget.detail.splice(index, 1);            
        }

        $scope.add = function() {            
            $scope.widget.detail.push({'key': '', 'value': ''});
        }

        $scope.setBtnShow = function(index, widget) {
            let deleteShow = index>=0 && index<widget.detail.length && widget.detail.length>1;
            let addShow = index==widget.detail.length-1;

            return {'delete': deleteShow, 'add': addShow};
        }

        $scope.addAlert = function(type, msg) {
            AlertService.add(type, msg);            
        };    
        
        $scope.getWidget();
    }
    
  });