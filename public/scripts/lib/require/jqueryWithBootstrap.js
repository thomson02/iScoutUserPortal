define([
    // Load the original jQuery source file
    'order!lib/jquery/jquery-1.7.2.min',
    'order!lib/bootstrap/bootstrap'
], function($) {
    // Tell Require.js that this module returns a reference to bootstrap
    return $;
});