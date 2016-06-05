'use strict';

(function() {

    var dashboardService = function($http, $q, authorizationService, serviceConf) {

        var getVerbclouddetails = function() {
            return verbclouddetails;
        };

        var getActorArray = function(callback) {
            var service = authorizationService.getHeader(serviceConf.actorNamesAPI);
            if (service) {
                $http({
                method: 'POST',
                url: service.url,
                data: {},
        		contentType: 'application/json; charset=utf-8',
                headers: { 'X-Experience-API-Version': service.APIVersion, 
                           'Authorization' : service.Authorization
                         }
                })
                    .success(function(data, status, headers, config) {
                        callback(data);
                    })
                    .error(function(data, status, headers, config) {
                        callback(data);
                    });
            }
            
        };
        
        var getActivityStreamDetails = function(count, numberOfActivityPerLoad, callback) {

            var service = authorizationService.getHeader(serviceConf.streamAPI);
            if (service) {
                $http({
                    method: 'POST',
                    url: service.url,                
                    data: { lazyCount: count, perLoad: numberOfActivityPerLoad },
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

        var getIndividualActivityStreamDetails = function(popup, callback) {
            var service = authorizationService.getHeader(serviceConf.popupAPI);
            if (service) {
                $http({
                    method: 'POST',
                    url: service.url,
                    data: { id: popup },
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

        var getCheckedFilters = function(forValue) {
            var allFilters = [], checkedFilters = [];
            angular.forEach(forValue, function(value, key) {
                allFilters.push(value['name']);
                if (value['checked'] == true) {
                    checkedFilters.push(value['name']);
                }
            }, allFilters, checkedFilters);
            if (checkedFilters.indexOf("All Vocab Terms") == 0) {
                return allFilters.slice(1);
            } else if (checkedFilters.length > 0 && checkedFilters.indexOf("All Vocab Terms") == -1) {
                return checkedFilters;
            } else {
                return [];
            }
        };

        var getChart1Details = function(fromValue, onValue, forValue, forValueDB, platformsCombined,  callback) {            
            var verb = getCheckedFilters(forValue);
            var filters = [
            {
                'from': fromValue,
                'verb': verb,
                'platform': onValue,
                'combinedPlatform': platformsCombined,
                'verbsDB': forValueDB,
            }];

            var service = authorizationService.getHeader(serviceConf.lineChartAPI);
            if (service) {
                $http({
                    method: 'POST',
                    url: service.url,
                    data: { searchInput: filters },
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

        var getChart2Details = function(fromvalue, onvalue, forValue, callback) {

            var verb = getCheckedFilters(forValue);
            var filters = [{
                'from': fromvalue,
                'platform': onvalue,
                'verb': verb
            }];

            var service = authorizationService.getHeader(serviceConf.cloudAPI);
            if (service) {
                $http({
                    method: 'POST',
                    url: service.url,
                    data: { searchInput: filters },
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

        var getMasterValues = function(callback) {
            var service = authorizationService.getHeader(serviceConf.getPlatformsAndVerbsAPI);
            if (service) {
                $http({
                    method: 'POST',
                    url: service.url,                                    
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
            getVerbclouddetails: getVerbclouddetails,
            getActivityStreamDetails: getActivityStreamDetails,
            getIndividualActivityStreamDetails: getIndividualActivityStreamDetails,
            getChart1Details: getChart1Details,
            getChart2Details: getChart2Details,
            getMasterValues: getMasterValues
        };
    };

    var module = angular.module("walrsServices");
    module.factory("DashboardService", dashboardService);

}());
