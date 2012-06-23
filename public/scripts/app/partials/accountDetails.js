define([
    'underscore',
    'jQueryWithBootstrap',
    'backbone',
    'text!app/templates/shared/accountDetails.html'
],
function(_, $, Backbone, AccountDetailsTemplate) {

    var publics = {};


    /* MODEL */
    publics.Model = Backbone.Model.extend({
        url: '/user'
    });


    /* VIEW */
    publics.View = Backbone.View.extend({

        el: $("#accountDetails"),

        model: new publics.Model(),

        initialize: function(options){
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.model.fetch();
        },

        render: function(){
            this.$el.html(_.template(AccountDetailsTemplate, this.model.toJSON()));
        }
    });

    return publics;
});
