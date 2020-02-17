'use strict';

angular.module('myApp.widgetRemove', [])

    .controller('WidgetRemoveController', ['$scope', '$uibModalInstance', 'widgetId', 
                function ($scope, $uibModalInstance, widgetId) {
                    
        $scope.title = 'Remove Widget';
        $scope.message = `Are you sure you want to delete widget # ${widgetId}?`;
       
        $scope.ok = function () {            
            $uibModalInstance.close(widgetId);
        };
        
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
      }
    
    ]);