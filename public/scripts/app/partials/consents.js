define([
    'underscore',
    'jQueryWithBootstrap',
    'backbone',
    'text!app/templates/consents.html'
],
    function(_, $, Backbone, ConsentsTemplate) {

        var publics = {};


        /* MODEL */
        publics.Model = Backbone.Model.extend({
            url: '/consents'
        });


        /* VIEW */
        publics.View = Backbone.View.extend({

            el: $("#main-content"),

            initialize: function(options){
                _.bindAll(this, 'render');
                this.model.bind('change', this.render);
            },

            render: function(){
                this.$el.empty().html(_.template(ConsentsTemplate, this.model.toJSON()));
            }
        });

        return publics;
    });
