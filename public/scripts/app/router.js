// The backbone router
define([
    'order!lib/require/jQueryWithBootstrap',
    'order!Underscore',
    'order!Backbone'
],
    function(
        $,
        _,
        Backbone) {

        var AppRouter = Backbone.Router.extend({
            routes: {
                // Catch All
                '*actions': 'defaultAction'
            },

            initialize: function() {
                alert("Init page frame");
            },

            defaultAction: function(actions) {
                alert("default action");
                console.log('No route:', actions);
            }
        });

        var initialize = function(session) {
            var appRouter = new AppRouter();
            Backbone.history.start();
            return appRouter;
        };

        return {
            initialize: initialize
        };
    });