'use strict';

(function() {

    var activityService = function($http, $q, serviceConf, authorizationService) {

        var getCourses = function(curPage, searchTerm, numberOfCoursesPerPage, callback) {
            var service = authorizationService.getHeader(serviceConf.activityAPI);
            if (service) {
                $http({
                    method: 'POST',                
                    url: service.url,
                    data: {page: curPage, activityName: searchTerm, perPage: numberOfCoursesPerPage},
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


        var getCourse = function(id, lazyCount, doExport, callback) {
            var service = authorizationService.getHeader(serviceConf.activityDetailsAPI);
            if (service) {
                $http({
                    method: 'POST',
                    url: service.url,
                    data: {activityId: id, lazyCount: lazyCount, exportExcel: doExport},
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


        var getActivityDetails = function(popup, callback) {
            var service = authorizationService.getHeader(serviceConf.popupAPI);
            if (service) {
                $http({
                    method: 'POST',
                    url: service.url,
                    data: {id: popup},
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


        var getCourseArray = function(autopopulateTerm,callback) {
            var service = authorizationService.getHeader(serviceConf.activityNamesAPI);
            if (service) {
            
                $http({
                    method: 'POST',
                    url: service.url,
                    data: {activityName:autopopulateTerm},
		    contentType: 'application/json; charset=utf-8',
                    headers: { 'X-Experience-API-Version': service.APIVersion, 
                    'Authorization' : service.Authorization
                }})
                .success(function(data, status, headers, config) {
                        callback(data);
                    })
                .error(function(data, status, headers, config) {
                    callback(data);
                });
            }

        };

        return {
            getCourses: getCourses, //grid
            getCourse: getCourse, // detail page
            getActivityDetails: getActivityDetails, //popup
            getCourseArray: getCourseArray
        };

    };

    var module = angular.module("walrsServices");
    module.factory("ActivityService", activityService);
}());
