'use strict';

angular.module('myApp.widgets', [])

.component('widgets', {
  
  bindings: {
    widgets: '<'
  },  

  templateUrl: 'widgets/widgets.html',
  
  controller: function($scope, WidgetsService, $uibModal) {
    
    $scope.title = 'Widgets';
    $scope.widgets = [];    
    $scope.selectedWidgetId = 0;
    $scope.selectedRow = 0;

    this.$onInit = function() {      
      $scope.widgets = this.widgets;
    }

    $scope.setClickedRow = function(index){
        $scope.selectedRow = index;       
        $scope.selectedWidgetId = $scope.widgets.length > index ? $scope.widgets[index].id : 0;
    }

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
            $scope.broadcastItemRemoved();
        }, function () {        
        });
    } 

    $scope.broadcastItemRemoved = function() {
        $scope.$broadcast('itemRemoved', $scope.widgets);
    };

    $scope.$on('dataModified', function(event, data) {      
        $scope.getList();            
    });   
    
    $scope.getList = function() {
        $scope.widgets = WidgetsService.getList();
    }
  }

})