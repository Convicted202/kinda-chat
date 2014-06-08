define([
    'backbone',
    'models/message'
], function(Backbone, Message) {
    'use strict';

    var Collection = Backbone.Collection.extend({

        model : Message

    });

    return new Collection();
});
