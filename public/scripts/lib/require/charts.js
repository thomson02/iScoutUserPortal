define([
    // Load the original jQuery source file
    'order!lib/require/jQuery',
    'order!lib/charts/excanvas.min',
    'order!lib/charts/jquery.flot',
    'order!lib/charts/jquery.flot.orderBars',
    'order!lib/charts/jquery.flot.pie',
    'order!lib/charts/jquery.flot.resize',
], function($) {
    // Tell Require.js that this module returns a reference to bootstrap
    return $;
});