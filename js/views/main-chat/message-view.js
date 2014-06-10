define([
    'underscore',
    'jquery',
    'backbone',
    'text!templates/main-chat/message.tpl'
], function(_, $, Backbone, Template){
    'use strict';

    return Backbone.View.extend({

        //id : 'current-messages-area',

        template : _.template(Template),

        initialize: function() {
            
        },

        render: function() {
            this.$el.append(this.template({ data: this.model.toJSON() }));
            //$(Backbone.areas.chat).append(this.template({ data: this.model.toJSON() }));
            return this;
        },

        reflow: function() {
            var messages = $('#messages-area');
            $('#current-messages-area').append(this.$el);
            messages.scrollTop(messages.height());
            return this;
        }

    });
});
