(
    function () {
        'use strict';
    
        angular
            .module('app', ['ngRoute', 'ngCookies'])
            .config(config)
            .run(run);
    
        config.$inject = ['$routeProvider', '$locationProvider'];
        function config($routeProvider, $locationProvider) {
            $routeProvider
            .when('/', {
                    controller: 'LoginController',
                    templateUrl: 'app/views/login.html',
                    controllerAs: 'vm'
                })
    
                .when('/home', {
                    controller: 'HomeController',
                    templateUrl: 'app/views/home.html',
                    controllerAs: 'vm',
                })            
                .when('/register', {
                    controller: 'RegisterController',
                    templateUrl: 'app/views/register.html',
                    controllerAs: 'vm'
                })
                .otherwise({ redirectTo: '/login' });
        }    
        run.$inject = ['$rootScope'];
        
        function run(){
          console.clear();
        }
    })();