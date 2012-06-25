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

            events: {
              'blur :input': 'save'
            },

            save: function(){
                this.model.set({ test: "ASDFGHJKL" }, {
                    wait:true,
                    success:function(model, response) {
                        console.log('Successfully saved!');
                    },
                    error: function(model, error) {
                        console.log(model.toJSON());
                        console.log('error.responseText');
                    }
                });
                this.model.save();
            },

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
