/* global $ */
angular.module('villaEventsAndEntertainments', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        // $stateProvider
        //     // route for the home page
        //     .state('app', {
        //         url:'/',
        //         views: {
        //             // 'header': {
        //             //     templateUrl : 'views/header.html',
        //             // },
        //             'content': {
        //                 controller  : 'IndexController'
        //             }
        //             //,
        //             // 'footer': {
        //             //     templateUrl : 'views/footer.html',
        //             // }
        //         }

        //     }
        $locationProvider.html5Mode(true);
        // $urlRouterProvider.otherwise('/');
    })
;