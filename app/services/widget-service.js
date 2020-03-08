'use strict';

angular.module('myApp.widgetsService', []).service('WidgetsService', function (localStorageService) {    
    let table = []; 

    this.removeItem = function(id) {
        for(var i=0; i<table.length; i++){
            if(table[i].id == id){
                table.splice(i, 1); 
            }
        }
        
        localStorageService.set('widgetTable', table);
        table = localStorageService.get('widgetTable');
    }

    this.getWidget = function(widgetId) {
        let widget = table.find(el => {return el.id == widgetId});

        return widget == null || widget == undefined ? {} : widget;
    }

    this.getList = function() {
        let widgets = [];

        table = localStorageService.get('widgetTable');
        table.forEach(row => {
            var item = {'id': row.id, 'name': row.name};
            widgets.push(item);
        });
        return widgets;        
    }

    this.getDetail = function(widgetId) {        
        let widget = table.find(el => {return el.id == widgetId});

        return widget == null || widget == undefined ? [] : widget.detail;
    }

    this.addWidget = function(widget) {
        let widgets = table;
                
        let item = widgets.find(el => {return el.id == widget.id});

        if(item == null || item == undefined) {
            widget.id = widgets.length + 1;
            widgets.push(widget);            
        }

        localStorageService.set('widgetTable', widgets);
        table = localStorageService.get('widgetTable'); 

        return widget.id;
    }

    this.updateWidget = function(widget) {
        let widgets = table;

        for(var i=0; i < widgets.length; i++){
            if(widgets[i].id == widget.id){
                widgets[i] = widget; 
            }
        }

        localStorageService.set('widgetTable', widgets);
        table = localStorageService.get('widgetTable'); 

        return widget.id;       
    }

    this.saveWidget = function(widget) {
        if(widget.id == 0) return this.addWidget(widget);

        return this.updateWidget(widget);
    }

    this.validateUniqueName = function(widget) {
        let wid = table.find(el => {return el.name == widget.name && el.id != widget.id});

        return wid == undefined ? true : false;        
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
        table = localStorageService.get('widgetTable'); 
    }

})