define([
    'underscore',
    'jQueryWithBootstrap',
    'backbone',
    'text!app/templates/medical.html'
],
    function(_, $, Backbone, MedicalTemplate) {

        var publics = {};


        /* MODEL */
        publics.Model = Backbone.Model.extend({
            url: '/medical'
        });


        /* VIEW */
        publics.View = Backbone.View.extend({

            el: $("#main-content"),

            initialize: function(options){
                _.bindAll(this, 'render');
                this.model.bind('change', this.render);
            },

            render: function(){
                this.$el.empty().html(_.template(MedicalTemplate, this.model.toJSON()));
            }
        });

        return publics;
    });
