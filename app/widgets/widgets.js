'use strict';

angular.module('myApp.widgets', [])

.component('widgets', {

  templateUrl: 'widgets/widgets.html',
  
  controller: function($scope, WidgetsService, $uibModal) {    
    $scope.title = 'Widgets';
    $scope.widgets = [];

    $scope.removeItem = function(id) {
        WidgetsService.removeItem(id);
    }

    $scope.openModal = function(id) {
        var modalInstance = $uibModal.open({
          templateUrl: 'widget-remove/widget-remove.html',
          controller: 'WidgetRemoveController', 
          animation: false,         
          resolve: {
            widgetId: function () {
              return id;
            }
          }
        });
    
        modalInstance.result.then(function (item) {
            $scope.removeItem(item);
            $scope.getList();
        }, function () {        
        });
    } 

    $scope.getList = function() {
        $scope.widgets = WidgetsService.getList();
    }

    WidgetsService.initList();
    $scope.getList();
  }

})