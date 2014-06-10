define([
    'underscore',
    'jquery',
    'backbone',
    'text!templates/main-chat/chat-area.tpl',
    'views/main-chat/new-message-view',
    'views/main-chat/message-view',
    'collections/messages'
], function(_, $, Backbone, Template, NewMessageView, MessageView, MessagesCollection){
    'use strict';

    return Backbone.View.extend({

        //id : 'messages-area',

        currentMessageContainer: '#current-messages-area',
        
        template : _.template(Template),

        initialize: function() {
            if (MessagesCollection.length > 0) {
                return;
            }
            for (var i = 0; i < 5; i++) {
                MessagesCollection.add({
                    isOpponent  : (i % 2 === 0),
                    date        : (new Date()).toJSON(),
                    avatar      : '',
                    message     : ['Duis aute irure dolor in reprehenderit in voluptate velit esse',
                                    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
                                    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                ].join(' ')
                });
            }
        },

        render: function() {
            $(Backbone.areas.main).html(this.template()).append((new NewMessageView()).render().el);
            

            // (new NewMessageView()).render();


            //(new MessagesView()).render();
            this.renderMessages();
            return this;
        },

        renderMessages: function(length) {
            if (!length || length > MessagesCollection.length) {
                length = 0;
            } else {
                length = MessagesCollection.length - length;
            }
            $(this.currentMessageContainer).html('');
            for (var i = MessagesCollection.length - 1; i > length; i--) {
                $(this.currentMessageContainer).append((new MessageView({ model: MessagesCollection.models[i] })).render().el);
            }
        }

    });
});
