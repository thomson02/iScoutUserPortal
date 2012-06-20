define([
    // Load the original jQuery source file
    'order!lib/require/jQuery',
    'order!lib/bootstrap/bootstrap'
], function($) {
    // Tell Require.js that this module returns a reference to bootstrap
    return $;
});