var require = {
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jQuery',
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
        backbone : {
            deps : ['underscore', 'jquery'],
            exports : 'Backbone'
        },
    }
};