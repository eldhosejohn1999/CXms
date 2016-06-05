  'use strict';

  (function () {


    var debugService = function ($http, serviceConf, authorizationService) {

     var getdebugActivityStreamDetails = function (lazyCount,recordsperLoad,callback){
      var service = authorizationService.getHeader(serviceConf.debugAPI);
      if (service) {
         $http({
          method: 'POST',
          url: service.url,
          data: {lazyCount: lazyCount, perLoad: recordsperLoad},
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


    var getdebugIndividualActivityStreamDetails = function(popup, callback) {
      var service = authorizationService.getHeader(serviceConf.debugPopupAPI);
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

    return {
      getdebugActivityStreamDetails:getdebugActivityStreamDetails,
      getdebugIndividualActivityStreamDetails:getdebugIndividualActivityStreamDetails
    };
  };

  var module = angular.module("walrsServices");
  module.factory("DebugService", debugService);

  }());
