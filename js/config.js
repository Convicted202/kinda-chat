var require = {
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jQuery',
        caret: 'vendor/jQuery.caret',
        underscore: 'vendor/underscore',
        text: 'vendor/require.text',
        backbone: 'vendor/backbone',
        templates: '../templates'
    },
    shim: {
        underscore: {
            exports : '_'
        },
        jquery : {
            exports : '$'
        },
        caret : {
            deps: ['jquery']
        },
        backbone : {
            deps : ['underscore', 'jquery'],
            exports : 'Backbone'
        }
    }
};