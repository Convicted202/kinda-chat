define([
    'jquery',
    'backbone',
    'views/main-chat/chat-view'
    ], function($, Backbone, ChatView) {

    $.extend(Backbone, {
        areas: {
            main: '#main-area',
            chat: '#current-messages-area'
        }
    });

    var Renderer = new function () {
        this.chat = function () {
            console.log('chat');
            new ChatView().render();
        }
    }

    return Backbone.Router.extend({

        initialize: function () {
            // init login area here 
        },

        routes: {
            "":         Renderer.chat, 
            "#/chat":   Renderer.chat     // #chat
        }
        //,

        // chat: function() {
        //     console.log('chat');
        //     new ChatView().render();
        // }
    });
});