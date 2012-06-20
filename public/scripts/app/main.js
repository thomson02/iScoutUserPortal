// Require.js allows us to configure shortcut alias
require.config({
    baseUrl: "/scripts/",
    paths: {
        jQueryWithBootstrap: 'lib/require/jqueryWithBootstrap',
        Underscore: 'lib/require/underscore',
        Backbone: 'lib/require/backbone',
        order: 'lib/require/plugins/order',
        text: 'lib/require/plugins/text'
    }
});

require([
    'order!jQueryWithBootstrap',
    'order!Underscore',
    'order!Backbone',
    'order!app/router'
],
    function($, _, Backbone, Router) {
        Router.initialize();
    });