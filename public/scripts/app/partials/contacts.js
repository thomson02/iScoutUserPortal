define([
    'underscore',
    'jQueryWithBootstrap',
    'backbone',
    'text!app/templates/contacts.html'
],
    function(_, $, Backbone, ContactsTemplate) {

        var publics = {};


        /* MODEL */
        publics.Model = Backbone.Model.extend({
            url: '/contacts'
        });


        /* VIEW */
        publics.View = Backbone.View.extend({

            el: $("#main-content"),

            initialize: function(options){
                _.bindAll(this, 'render');
                this.model.bind('change', this.render);
            },

            render: function(){
                this.$el.empty().html(_.template(ContactsTemplate, this.model.toJSON()));
            }
        });

        return publics;
    });
