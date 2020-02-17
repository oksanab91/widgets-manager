'use strict';

angular.module('myApp.widgets', [])

.component('widgets', {

  templateUrl: 'widgets/widgets.html',
  
  controller: function($scope, localStorageService, $uibModal) {    
    $scope.title = 'Widgets';
    $scope.widgets = [];     
    $scope.table = []; 

    function removeItem(id) {
        $scope.table = localStorageService.get('widgetTable');        

        for(var i=0; i<$scope.widgets.length; i++){
            if($scope.widgets[i].id == id){
                $scope.table.splice(i, 1); 
            }
        }
        
        localStorageService.set('widgetTable', $scope.table);    
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
            removeItem(item);
            $scope.getList();
        }, function () {        
        });
    } 

    $scope.getList = function() {
        $scope.widgets = [];

        $scope.table = localStorageService.get('widgetTable');
        $scope.table.forEach(row => {
            var item = {'id': row.id, 'name': row.name};
            $scope.widgets.push(item);
        });
    }

    $scope.initList = function() {
        localStorageService.clearAll();

        var widgetsItems = [
            {
                id: 1,
                name: 'Widget Jobs',
                detail: [
                    {'key': 'id', 'value': '10'},
                    {'key': 'description', 'value': 'Job as job'},
                    {'key': 'type', 'value': 'Full time'},
                    {'key': 'status', 'value': 'New'},
                    {'key': 'city', 'value': 'The city'},
                ]
            },
            {
                id: 2,
                name: 'Widget Flowers',
                detail: [
                    {'key': 'name', 'value': 'Tulip'},
                    {'key': 'color', 'value': 'Red'},
                    {'key': 'size', 'value': 'Large'},
                    {'key': 'price', 'value': '200'},
                    {'key': 'status', 'value': 'Available'},
                ]
            }
        ];

        localStorageService.set('widgetTable', widgetsItems); 
    }

    $scope.initList();
    $scope.getList();
  }

})