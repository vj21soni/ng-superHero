(function () {
    'use strict';
    angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/components/home/home.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/components/contact/contact.html',
                controller: 'contactController',
                controllerAs: 'contactCtrl'
            })
            $locationProvider.html5Mode(false);
    }])
})();