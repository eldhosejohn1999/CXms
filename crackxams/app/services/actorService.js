'use strict';

(function() {

    var actorService = function($http, $q, serviceConf, authorizationService) {

        var getActors = function(curPage, searchTerm, numberOfActorsPerPage, callback) {

            var deferred = $q.defer();            
            var service = authorizationService.getHeader(serviceConf.actorAPI);
            if (service) {
                $http({
                method: 'POST',
                url: service.url,
                data: {page: curPage, actorName: searchTerm, perPage: numberOfActorsPerPage},
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


        var getActor = function(id, lazyCount, numberOfCompletionsByMonthPerLoad, callback) {
            var deferred = $q.defer();
            var idArray = id.split("+");
            var actorAccountHomePage = idArray[0];
            actorAccountHomePage = actorAccountHomePage.replace(/-/g, "/");
            var actorAccountName = idArray[1];
            var service = authorizationService.getHeader(serviceConf.actorDetailsAPI);
            if (service) {
                $http({
                method: 'POST',
                url: service.url,
                data: { actorAccountHomePage: actorAccountHomePage, actorAccountName: actorAccountName, lazyCount: lazyCount, perLoad: numberOfCompletionsByMonthPerLoad },
                contentType: 'application/json; charset=utf-8',
				headers: { 'X-Experience-API-Version': service.APIVersion, 
                           'Authorization' : service.Authorization
                         }
                })
                    .success(function(data, status, headers, config) {
                        callback(data,status);
                    })
                    .error(function(data, status, headers, config) {
                        callback(data,status);
                    });
            }
            
        };

        var getCompletionDetails = function() {
            return completionDetails;
        }

        var getActorArray = function(autopopulateTerm,callback) {
            var service = authorizationService.getHeader(serviceConf.actorNamesAPI);
            if (service) {
                $http({
                method: 'POST',
                url: service.url,
                data: {actorName:autopopulateTerm},
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

        var getActorDetails = function(popup) {
            var deferred = $q.defer();
            var service = authorizationService.getHeader(serviceConf.actorPopupAPI);
            if (service) {
                $http({
                method: 'POST',
                url: service.url,
                data: { id: popup },               
                contentType: 'application/json; charset=utf-8',
                headers: { 'X-Experience-API-Version': service.APIVersion, 
                           'Authorization' : service.Authorization
                         }
               
                })
                    .success(
                            function(response) {
                                deferred.resolve(response);
                            })
                    .error(
                            function(response) {
                                deferred.reject(response.responseStatus);
                            }
                    );
                return deferred.promise;
            }
            
        };

        return {
            getActors: getActors,
            getActor: getActor,
            getActorDetails: getActorDetails,
            getActorArray: getActorArray

        };

    };

    var module = angular.module("walrsServices");
    module.factory("ActorService", actorService);

}());
