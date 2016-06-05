'use strict';

var app = angular.module('courses');

app.controller('coursesController', ['$scope', 'LoginService', '$location', '$rootScope', '$window', 'Session', 'AUTH_EVENTS', '$cookieStore',
    function($scope, LoginService, $location, $rootScope, $window, Session, AUTH_EVENTS, $cookieStore) {

        $scope.signin = function() {
            
            $scope.signindetails = LoginService.signindetails($scope.userName, $scope.password, function(data, status, headers) {
                if (data.status == 0) {
                    data.SessionID = headers('authorization');
                    console.log("Login Successful");  
                    //set the browser session, to avoid relogin on refresh
                    $window.sessionStorage["userInfo"] = JSON.stringify(data);                    
                    Session.create(data);
                    $rootScope.currentUser = data;                    
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    $location.path("/dashboard");
                } else  {
                    console.log("Login Failed");                      
                    $scope.loginError = data.message;   
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    $location.path("/signin");
                }
            });
        };

        $scope.signupPath = function() {
            $location.path("/signin");
        };

        var setUserData = function() {
            $cookieStore.put("isLoggedIn", true); 
        };

        var removeUserData = function() {
            Session.destroy();
            $window.sessionStorage.removeItem("userInfo");
            $cookieStore.remove("isLoggedIn");
        };

        var showNotAuthorized = function(){
           alert("Not Authorized");
           $location.path('/signin');
        }

        //listen to events of unsuccessful logins, to run the login dialog
        // $rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
        // $rootScope.$on(AUTH_EVENTS.notAuthenticated, showLoginDialog);
        $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUserData);
        $rootScope.$on(AUTH_EVENTS.loginFailed, removeUserData);
        $rootScope.$on(AUTH_EVENTS.loginSuccess, setUserData);
}]);
