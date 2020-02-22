'use strict';

angular.module('myApp.appAlert', [])

.controller('AlertController', ['$scope', 'AlertService',
    function ($scope, AlertService) {        
        $scope.alerts = AlertService.alerts();      
        
        $scope.closeAlert = function(index) {
            AlertService.close(index);            
        };
    }    
    
]);