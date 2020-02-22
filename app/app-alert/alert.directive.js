'use strict';

angular.module('myApp.appAlert.directive', [])

.directive('ngAlert', function() {
    
    return {    
      templateUrl: 'app-alert/alert.directive.html',   
      transclude: true,
      replace: true   
    };
  });