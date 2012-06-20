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
    'order!lib/require/jqueryWithBootstrap',
    'order!lib/underscore/underscore',
    'order!lib/backbone/backbone-min',
    'order!app/router'
],
    function($, _, Backbone, Router) {
        Router.initialize();
    });