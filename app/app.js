'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'LocalStorageModule',
  'ui.router',
  'ui.router.state',
  'ui.bootstrap',
  'myApp.widgets',
  'myApp.widgetDetail',
  'myApp.widgetRemove'
]);