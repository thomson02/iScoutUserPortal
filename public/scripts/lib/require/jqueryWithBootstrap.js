define([
    // Load the original jQuery source file
    'order!lib/require/jquery',
    'order!lib/bootstrap/bootstrap'
], function($) {
    // Tell Require.js that this module returns a reference to bootstrap
    return $;
});