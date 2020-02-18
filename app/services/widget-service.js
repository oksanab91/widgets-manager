'use strict';

angular.module('myApp.widgetsService', []).service('WidgetsService', function (localStorageService) {    
    this.table = []; 

    this.removeItem = function(id) {
        for(var i=0; i<this.table.length; i++){
            if(this.table[i].id == id){
                this.table.splice(i, 1); 
            }
        }
        
        localStorageService.set('widgetTable', this.table);
        this.table = localStorageService.get('widgetTable');
    }

    this.getList = function() {
        let widgets = [];

        this.table.forEach(row => {
            var item = {'id': row.id, 'name': row.name};
            widgets.push(item);
        });
        return widgets;
    }

    this.getDetail = function(widgetId) {        
        let widget = this.table.find(el => {return el.id == widgetId});

        return widget == null || widget == undefined ? [] : widget.detail;
    }

    this.initList = function() {
        localStorageService.clearAll();

        let widgetsItems = [
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
        this.table = localStorageService.get('widgetTable'); 
    }

})