// Require.js allows us to configure shortcut alias
require.config({
    baseUrl: "/scripts/",
    paths: {
        jQueryWithBootstrap: 'lib/require/jQueryWithBootstrap',
        Underscore: 'lib/require/underscore',
        Backbone: 'lib/require/backbone',
        order: 'lib/require/plugins/order',
        text: 'lib/require/plugins/text'
    }
});

require([
    'order!lib/require/jQueryWithBootstrap',
    'order!lib/underscore/underscore-min',
    'order!lib/backbone/backbone',
    'order!app/router'
],
    function($, _, Backbone, Router) {
        Router.initialize();
    });