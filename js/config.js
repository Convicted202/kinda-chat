var require = {
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jQuery',
        underscore: 'vendor/underscore',
        text: 'vendor/require.text',
        templates: '../templates'
    },
    shim: {
        underscore: {
            exports : '_'
        },
        jquery : {
            exports : '$'
        }
    }
};