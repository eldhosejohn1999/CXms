'use strict';

(function() {

    var searchService = function($http, serviceConf, authorizationService, DashboardService) {
        var getDefaultValues = function() {
            var defaultValues = {
                "verbs": [], "platforms": []
            };

            DashboardService.getMasterValues(function(data, status) {
                if (status == '401') {
                    $scope.error = "Unauthorized";
                } else if (status == '200') {                                                 
                    angular.forEach(data['platforms'], function(value, key) { 
                        var platformVal = {                   
                            "name": value,
                            "checked": false
                        };
                         
                        defaultValues.platforms.push(platformVal);                    
                    }, defaultValues.platforms);

                    angular.forEach(data['verbs'], function(value, key) {                  
                        var verbVal = {                   
                            "name": value,
                            "checked": false
                        };
                        defaultValues.verbs.push(verbVal);  
                    }, defaultValues.verbs);
                                    
                }    
            });                     
            return defaultValues;
        };

        var getSearchResults = function(curPage, numberOfResultsPerPage, searchCriteria, callback) {

            var service = authorizationService.getHeader(serviceConf.searchAPI);
            if (service) {
                $http({
                    method: 'POST',
                    url: service.url,
                    data: {searchInput: searchCriteria, 'page': curPage, 'perPage': numberOfResultsPerPage},
                    contentType: 'application/json; charset=utf-8',
                    headers: { 'X-Experience-API-Version': service.APIVersion, 
                    'Authorization' : service.Authorization
                }})
                .success(function(data, status, headers, config) {
                    callback(data, status);
                })
                .error(function(data, status, headers, config) {
                    callback(data, status);
                });
            }
        };

        return {
            getSearchResults: getSearchResults,
            getDefaultValues: getDefaultValues
        };

    };


    var module = angular.module("walrsServices");
    module.factory("SearchService", searchService);

}());

