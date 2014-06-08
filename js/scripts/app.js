require([
    'jquery', 
    'backbone',
    'route'
], function ($, Backbone, Router) {
    'use strict';

    console.log('we\'re inside of app');
    
    $(function () {
        new Router();
        Backbone.history.start();
    });
});