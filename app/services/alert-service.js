'use strict';

angular.module('myApp.alertService', []).service('AlertService', function ($rootScope) {
    $rootScope.alerts = [];
    
    this.alerts = function() { 
        return $rootScope.alerts; 
    } 

    this.add = function(type, msg) {
        $rootScope.alerts.push({ type: type, msg: msg });
    };

    this.close = function(index) {
        $rootScope.alerts.splice(index, 1);
    };
})