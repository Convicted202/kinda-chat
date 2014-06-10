define([
    'underscore',
    'jquery',
    'backbone',
    'text!templates/profile/profile.tpl',
], function(_, $, Backbone, Template){
    'use strict';

    return Backbone.View.extend({
        
        template : _.template(Template),

        initialize: function() {
            
        },

        render: function() {
            $(Backbone.areas.main).html(this.template());

            return this;
        }

    });
});
