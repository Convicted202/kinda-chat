define([
    'jquery',
    'backbone',
    'views/main-chat/chat-view',
    'views/rooms/rooms-view',
    'views/profile/profile-view'
    ], function($, Backbone, ChatView, RoomsView, ProfileView) {

    $.extend(Backbone, {
        areas: {
            main: '#main-area'
        }
    });

    var Renderer = new function () {
        this.chat = function () {
            console.log('chat');
            new ChatView().render();
        },
        this.rooms = function() {
            console.log('rooms');
            new RoomsView().render();
        },
        this.profile = function() {
            console.log('profile');
            new ProfileView().render();
        }
    }

    return Backbone.Router.extend({

        initialize: function () {
            // init login area here 
        },

        routes: {
            "":         Renderer.chat,
            // "#":       Renderer.chat,
            "chat":     Renderer.chat,         // chat
            "rooms":    Renderer.rooms,        // rooms
            "profile":  Renderer.profile,    // profile
        }
        //,

        // chat: function() {
        //     console.log('chat');
        //     new ChatView().render();
        // }
    });
});