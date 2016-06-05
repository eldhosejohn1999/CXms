/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("e_learning", ["ngStorage"]);
app.controller("e_controller", function ($scope, $timeout, $localStorage) {
    if ($localStorage.isLoggedIn) {
        $scope.isLoggedIn = $localStorage.isLoggedIn;
     
    }
    else {
        $localStorage.isLoggedIn=false;
        $scope.isLoggedIn = false;
    }
    $scope.isIndicator = false;//for hiding the indicator

    if (!$scope.isLoggedIn) {
        showLoginPane();

    }
    $scope.onLogin = function () {
        $scope.isIndicator = true;//for showing the indicator
        console.log($scope.user);
//write logic for login


        $timeout(function () {
            closeLoginPane();
        }, 5000);

    };

    $scope.onsignup = function () {
        console.log($scope.user);
        $scope.isIndicator = true;
//write logic for signin


        $timeout(function () {
            closeLoginPane();
        }, 5000);

    };
    function showLoginPane() {
        // Get the modal
        var modal = document.getElementById('login_Modal');
        modal.style.display = "block";
    }
    ;

    function closeLoginPane() {
// Get the modal
        var modal = document.getElementById('login_Modal');
        modal.style.display = "none";
        $localStorage.isLoggedIn=true;
        $scope.isLoggedIn = true;//set the user as loggedIn
    }
    ;

});


