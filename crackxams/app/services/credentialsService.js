    'use strict';

    (function() {

        var credentialsService = function($http, serviceConf, authorizationService) {

            var generateAuthCredentials = function(callback) {
                var service = authorizationService.getHeader(serviceConf.authCredentialsAPI);
                if (service) {
                    $http({
                        method: 'GET',
                        url: service.url,
                        headers: { 'X-Experience-API-Version': service.APIVersion, 
                        'Authorization' : service.Authorization,
						contentType: 'application/json; charset=utf-8'
                    }})
                    .success(function(data, status, headers, config) {
                        callback(data, status);
                    })
                    .error(function(data, status, headers, config) {
                        callback(data, status);
                    });    
                }
                
            };

            var generateBasicCredentials = function(callback) {
                var service = authorizationService.getHeader(serviceConf.basicCredentialsAPI);
                if (service) {
                    $http({
                        method: 'GET',
                        url: service.url,
                        headers: { 'X-Experience-API-Version': service.APIVersion, 
                        'Authorization' : service.Authorization,
						contentType: 'application/json; charset=utf-8'
                    }})
                    .success(function(data, status, headers, config) {
                        callback(data, status);
                    })
                    .error(function(data, status, headers, config) {
                        callback(data, status);
                    });
                }

            };

            var getbasicCredentialDetails = function(callback) {
                var service = authorizationService.getHeader(serviceConf.getClientsAPI);
                if (service) {
                    $http({
                        method: 'GET',
                        url: service.url,
                        headers: { 'X-Experience-API-Version': service.APIVersion, 
                        'Authorization' : service.Authorization,
						contentType: 'application/json; charset=utf-8'
                    }})
                    .success(function(data, status, headers, config) {
                        callback(data, status);
                    })
                    .error(function(data, status, headers, config) {
                        callback(data, status);
                    });
                }

            };

            var getauthCredentialDetails = function(callback) {
                var service = authorizationService.getHeader(serviceConf.getTokensAPI);
                if (service) {
                 $http({
                    method: 'GET',
                    url: service.url,
                    headers: { 'X-Experience-API-Version': service.APIVersion, 
                    'Authorization' : service.Authorization,
					contentType: 'application/json; charset=utf-8'
                }})
                 .success(function(data, status, headers, config) {
                    callback(data, status);
                })
                 .error(function(data, status, headers, config) {
                    callback(data, status);
                }); 
             }


         };
         var getauthStatusChange = function(consumerkey, secretkey, active, callback) {
            var service = authorizationService.getHeader(serviceConf.updateStatusCredentialsAPI);
            if (service) {
                $http({
                    method: 'POST',
                    url: service.url,
                    headers: { 'X-Experience-API-Version': service.APIVersion, 
                        'Authorization' : service.Authorization,
						contentType: 'application/json; charset=utf-8'
                    },
                    data: {
                        consumerKey: consumerkey,
                        secretKey: secretkey,
                        status: active
                    }
                    
                })
                .success(function(data, status, headers, config) {
                    callback(data, status);
                })
                .error(function(data, status, headers, config) {
                    callback(data, status);
            });
          }

      };
      var getbasicStatusChange = function(consumerkey, secretkey, active, callback) {
        var service = authorizationService.getHeader(serviceConf.updateStatusCredentialsAPI);
        if (service) {
        $http({
            method: 'POST',
            url: service.url,
            headers: { 'X-Experience-API-Version': service.APIVersion, 
                'Authorization' : service.Authorization,
				contentType: 'application/json; charset=utf-8'
            },
            data: {
                consumerKey: consumerkey,
                secretKey: secretkey,
                status: active
            }                
            
        })
        .success(function(data, status, headers, config) {
            callback(data, status);
        })
        .error(function(data, status, headers, config) {
            callback(data, status);
        });
      }

  };
  var updateLabel = function(labelToAdd, consumerkey, secretkey, callback) {
      var service = authorizationService.getHeader(serviceConf.addRemoveLabelAPI);
        if (service) {
        $http({
            method: 'POST',
            url: service.url,
			contentType: 'application/json; charset=utf-8',
            
            headers: { 'X-Experience-API-Version': service.APIVersion, 
                'Authorization' : service.Authorization                
            },
            data: {
                consumerKey: consumerkey,
                secretKey: secretkey,
                labels: labelToAdd
            }                
            
        })
        .success(function(data, status) {
            callback(data, status);
        })
              }
  
  };
return {
    getbasicCredentialDetails: getbasicCredentialDetails,
    getauthCredentialDetails: getauthCredentialDetails,
    generateAuthCredentials: generateAuthCredentials,
    generateBasicCredentials: generateBasicCredentials,
    updateLabel: updateLabel,
    getauthStatusChange: getauthStatusChange,
    getbasicStatusChange: getbasicStatusChange
};
};

var module = angular.module("walrsServices");
module.factory("CredentialsService", credentialsService);

}());