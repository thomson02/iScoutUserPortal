// The backbone router
define([
    'jQueryWithBootstrap',
    'underscore',
    'backbone',
    'text!app/templates/shared/accountDetails.html'
],
    function(
        $,
        _,
        Backbone,
        AccountDetailsTemplate) {

        var AppRouter = Backbone.Router.extend({
            routes: {
                // Catch All
                'dashboard': 'dashboard',
                '*actions': 'defaultAction'
            },

            initialize: function() {
                //alert("Init page frame");
                $("#accountDetails").html(AccountDetailsTemplate);
            },

            dashboard: function(){

            },

            defaultAction: function(actions) {
                alert("default action");
                console.log('No route:', actions);
            }
        });

        var initialize = function(session) {
            var appRouter = new AppRouter();
            Backbone.history.start({});
            return appRouter;
        };

        return {
            initialize: initialize
        };
    });