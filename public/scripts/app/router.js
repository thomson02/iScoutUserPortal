// The backbone router
define([
    'underscore',
    'jQueryWithBootstrap',
    'backbone',
    'app/partials/accountDetails',
    'app/partials/contacts',
    'app/partials/consents'
],
    function(
        _,
        $,
        Backbone,
        AccountDetails,
        Contacts,
        Consents) {

        var AppRouter = Backbone.Router.extend({
            routes: {
                // Catch All
                'dashboard': 'dashboard',
                'contacts': 'contacts',
                'medical': 'medical',
                'consents': 'consents',
                'payments': 'payments',
                'achievements': 'achievements',
                'badgeLibrary': 'badgeLibrary',
                '*actions': 'defaultAction'
            },

            initialize: function() {
                new AccountDetails.View();
            },

            dashboard: function(){
                this.initPageName("Dashboard", "icon-home");
            },

            contacts: function() {
                this.initPageName("Contacts", "icon-user");
                var contacts = new Contacts.Model();
                new Contacts.View( { model: contacts });
                contacts.fetch();
            },

            medical: function(){
                this.initPageName("Medical Info", "icon-heart");
            },

            consents: function() {
                this.initPageName("Consents", "icon-check");
                var consents = new Consents.Model();
                new Consents.View( { model: consents });
                consents.fetch();
            },

            payments: function() {
                this.initPageName("Payments", "icon-shopping-cart");
            },

            achievements: function(){
                this.initPageName("Achievements", "icon-trophy");
            },

            badgeLibrary: function() {
                this.initPageName("Badge Library", "icon-list");
            },

            initPageName: function(name, cssName) {
                $("h1.page-title span").text(name);
                $("h1.page-title i").removeClass().addClass(cssName);
                $("#main-nav li").removeClass("active");
                $("#main-nav li a i." + cssName).parent().parent().addClass("active");
            },

            defaultAction: function(actions) {
                console.log('No route:', actions);
                this.dashboard();
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