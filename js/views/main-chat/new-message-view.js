define([
    'underscore',
    'jquery',
    'backbone',
    'text!templates/main-chat/new-message-area.tpl',
    'collections/messages',
    'views/main-chat/message-view',

    'caret'
], function(_, $, Backbone, Template, MessagesCollection, MessageView){
    'use strict';

    return Backbone.View.extend({

        id : 'new-message-area',

        template : _.template(Template),

        events: { 
            'keydown #message-input' : 'handleNewMessage',
            'click #button-smile': 'hh'
        },

        render: function() {
            this.$el.html(this.template());            

            //$(Backbone.areas.main).append(this.template());
            return this;
        },
 
        hh : function () {
            console.log('asdfasdfdsf');
        },

        handleNewMessage: function(e) {
            if (e.keyCode === 13) {
                if (e.ctrlKey) {
                    var th = $(this.getSelectionStart()),
                        cur = null
                    if (th.attr('id') === 'message-input') {
                        th.append('<div data-current><br></div>');
                    } else {
                        th.after('<div data-current><br></div>');
                    }
                    cur = $('div[data-current]');
                    cur.caret(0);
                    cur.removeAttr('data-current');
                } else {
                    this.addNewMessage();
                }
                return;
            } 
        },

        addNewMessage: function() {
            MessagesCollection.add({
                isOpponent  : false,
                date        : (new Date()).toJSON(),
                avatar      : '',
                message     : $('#message-input').html()
            });
            new MessageView({ model: MessagesCollection.models[MessagesCollection.models.length - 1] }).render().reflow();
            $('#message-input').html('');
        },

        getSelectionStart: function() {
           var node = document.getSelection().anchorNode;
           return (node.nodeType == 3 ? node.parentNode : node);
        }
    });
});
