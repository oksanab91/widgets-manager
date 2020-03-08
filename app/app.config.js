angular.module('myApp').config(function($stateProvider,$urlRouterProvider,
                                        $locationProvider,
                                        localStorageServiceProvider) {    
    
    $urlRouterProvider.when("", "/");    

    localStorageServiceProvider        
        .setNotify(true, true);

    var states = [       
        {
            name: 'widgets.edit',
            url: 'edit/{widgetId}', 
            component: 'widgetEdit'                   
        },
        {
            name: 'widgets.add',
            url: 'edit/', 
            component: 'widgetEdit'            
        },                       
        {             
            name: 'widgets', 
            url: '/',
            component: 'widgets',            
            resolve: {
                widgets: function (WidgetsService){
                    WidgetsService.initList();
                    return WidgetsService.getList();
                }
            }
        },
        {             
            name: 'widgets.widget',
            url: '{widgetId}', 
            component: 'widgetDetail',
            resolve: {
                widgetName: function(WidgetsService, $transition$) {
                    const widg = WidgetsService.getWidget($transition$.params().widgetId);                    
                    return widg == null ? '' : widg.name;
                  }                
            }
        }    

    ]

    states.forEach(function(state) {
        $stateProvider.state(state);
    }); 

    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

  });