'use strict';

angular.module('myApp.widgets', [])

.component('widgets', {
  
  bindings: {
    widgets: '<'
  },  

  templateUrl: 'widgets/widgets.html',
  
  controller: function($scope, WidgetsService, $uibModal, rx) {
    
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
            $scope.broadcastItemRemoved();
        }, function () {        
        });
    } 

    $scope.broadcastItemRemoved = function() {
        $scope.$broadcast('itemRemoved', $scope.widgets);
    };

    // var dataFromAServer = rx.Observable.interval(500);
		// dataFromAServer			
		// 	.map(function() {
    //     $scope.widgets = WidgetsService.getList();
    //     $scope.$apply();
    //   }).subscribe();
      
      
    var scheduler = new rx.ScopeScheduler($scope);

    rx.Observable.interval(500, scheduler)
      .subscribe(function () {
        $scope.widgets = WidgetsService.getList();
      });
  }

})