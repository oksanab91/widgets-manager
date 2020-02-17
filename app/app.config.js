angular.module('myApp').config(function($stateProvider,$urlRouterProvider,
                                        $locationProvider,
                                        localStorageServiceProvider) {    
    
    $urlRouterProvider.when("", "/");    

    localStorageServiceProvider        
        .setNotify(true, true);

    var states = [       
        
        {             
            name: 'widgets.widget',
            url: '{widgetId}', 
            component: 'widgetDetail'
        },        
        {             
            name: 'widgets', 
            url: '/',
            component: 'widgets'
        }     

    ]

    states.forEach(function(state) {
        $stateProvider.state(state);
    }); 

    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

  });