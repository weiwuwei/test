var cardealership;
(function (cardealership) {
    angular.module('cardealership', ['ui.router', 'ngResource', 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: cardealership.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: cardealership.Controllers.AboutController,
            controllerAs: 'aboutController'
        })
            .state('search', {
            url: '/search',
            templateUrl: 'ngApp/views/search.html',
            controller: cardealership.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(cardealership || (cardealership = {}));
