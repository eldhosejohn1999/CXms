'use strict';

var app = angular.module('searchApp');

app.controller('errorController', function($scope, $modalInstance, errorMessage) {

    $scope.errorMessage = errorMessage;
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});
