require([
    'jquery', 
    'backbone',
    'route'
], function ($, Backbone, Router) {
    'use strict';

    console.log('we\'re inside of app');
    
    $(function () {
        var route = new Router();
        Backbone.history.start();
    });
});