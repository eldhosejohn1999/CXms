'use strict';

/* App Module */
var zanMiApp = angular.module('zanMi', [
    'ngRoute',
    'ngResource',
    'ngIdle',
    'ngCookies',
    'ui.bootstrap',
    'zanMiServices',
    'home',
    'login',
    'dashboard',
    'plans',
    'profile',
    'config'
 ])

/* Adding the auth interceptor here, to check every $http request*/
.config(function ($httpProvider) {
   $httpProvider.interceptors.push([
     '$injector',
     function ($injector) {
       return $injector.get('AuthInterceptor');
     }
   ]);
})

zanMiApp.config(['$routeProvider','$locationProvider', '$httpProvider', '$idleProvider', '$keepaliveProvider',
    function ($routeProvider, $locationProvider, $httpProvider, $idleProvider, $keepaliveProvider) {

        var actorViewBase = 'apps/actors/views/';
        var activityViewBase = 'apps/activities/views/';        
      
        $routeProvider.
            when('/home', {
                templateUrl: 'app/modules/home/views/home.html',
                caseInsensitiveMatch: true,
                controller: 'homeController'
            }).
            when('/signin', {
                templateUrl: 'apps/login/views/signin.html',
                caseInsensitiveMatch: true,
                controller: 'SigninController'
            }).
            when('/plans', {
                templateUrl: 'apps/plans/views/plan.html',
                caseInsensitiveMatch: true,
                controller: 'planController'
            }).
            when('/dashboard', {
                templateUrl: 'app/modules/dashboard/views/dashboard.html',
                caseInsensitiveMatch: true,
                controller: 'dashboardController'
            }).
            when('/profile', {
                templateUrl: 'app/modules/profile/views/profile.html',
                caseInsensitiveMatch: true,
                controller: 'profileController'
            }).
            otherwise({
                redirectTo: '/home'
            });
        }
])


.run(function($rootScope, $document, authorizationService, $window, Session, $cookieStore, $location) {

    
    if ($window.sessionStorage["userInfo"] && $cookieStore.get("isLoggedIn")) {
        Session.create($window.sessionStorage["userInfo"]);
    }
    
    $rootScope.logout = function(){    
        authorizationService.logout();      
        Session.destroy();
        $window.sessionStorage.removeItem("userInfo");
        $cookieStore.remove("isLoggedIn");        
        $location.path('/signin');
    };

});
