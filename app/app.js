'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'LocalStorageModule',
  'ui.router',
  'ui.router.state',
  'ui.bootstrap',
  'myApp.widgetsService',
  'myApp.alertService',
  'myApp.appAlert',
  'myApp.appAlert.directive',
  'myApp.widgets',
  'myApp.widgetDetail',
  'myApp.widgetRemove',
  'myApp.widgetEdit'
]);