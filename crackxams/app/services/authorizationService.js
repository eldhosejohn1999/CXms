zanMiApp.factory('authorizationService', function ($resource, $q, $http, $rootScope, $location, Session, $window, AUTH_EVENTS, $cookieStore, serviceConf) {
   return {
        //Cache the permission for the session,to avoid roundtrip to server for subsequent requests
        permissionModel: {
            permission: {},
            isPermissionLoaded: false
        },

        permissionCheck: function (currentRoute) {
            var deferred = $q.defer();
            var parentPointer = this;

            //Checking if permission object(list of roles for logged in user) is already filled from service
            if (this.permissionModel.isPermissionLoaded) {
                //Check if the current user has required role to access the route
                this.getPermission(this.permissionModel, currentRoute, deferred);
            } else {    
                var service = this.getHeader(serviceConf.permissionCheckAPI);  
				if (service) {	
					var sessionObj = JSON.parse($window.sessionStorage["userInfo"])
                			var role = sessionObj.nsrole;
                
					$resource(service.url, {role: role }, 'GET', { headers: { 'X-Experience-API-Version': service.APIVersion, 
							'Authorization' : service.Authorization
							}}).query().$promise.then(function (response) {  
						//when server service responds then we will fill the permission object
						parentPointer.permissionModel.permission = response;

						//Indicator is set to true that permission object is filled and 	
						//can be re-used for subsequent route request for the session of the user
						parentPointer.permissionModel.isPermissionLoaded = true;
                        $rootScope.permissionModel = response;                       
                  
						//Check if the current user has required role to access the route
						parentPointer.getPermission(parentPointer.permissionModel, currentRoute, deferred);
					});
				}

            }
            return deferred.promise;
        },

        //Method to check if the current user has required role to access the route
        //'permissionModel' has permission information obtained from server for current user
        //'currentRoute' is the route of the page in which the user is accessing.
        //'deferred' is the object through which shall resolve promise
        getPermission: function (permissionModel, currentRoute, deferred) {
            var ifPermissionPassed = false;
            var permissions = permissionModel.permission;            
            if(Session.user && permissions.indexOf(currentRoute) != -1) {
                ifPermissionPassed = true;
            }
            if (!ifPermissionPassed) {
                //If user does not have required access, we will route the user to unauthorized access/login page
                $location.path('/signin');
                //As there could be some delay when location change event happens, keep a watch on $routeChangeSuccess event
                // and would resolve promise when this event occurs.
                $rootScope.$on('$routeChangeSuccess', function (next, current) {
                    if (!Session.user) {
                        // user is not allowed
                        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                    }
                    deferred.resolve();
                });
            } else {
                deferred.resolve();
            }
        },
   
        //log out the user and broadcast the logoutSuccess event
        logout: function() {      
            this.permissionModel.permission = {};
            this.permissionModel.isPermissionLoaded = false;
            $rootScope.permissionModel = "";

            var service = this.getHeader(serviceConf.logoutAPI);
            if (service) {
                $http({
                method: 'POST',
                url: service.url,
                data: { 'session' : service.Authorization },
                contentType: 'application/json; charset=utf-8',
                headers: { 'X-Experience-API-Version': service.APIVersion, 
                           'Authorization' : service.Authorization
                         }
                })
                    .success(function(data, status, headers, config) {                           
                        $location.path('/signin');                           
                        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);                              
                    })
                    .error(function(data, status, headers, config) {
                        console.warn("Logout failed");                        
                    });
            }
            
           
        },

        getHeader: function(serviceURL) {
            if ($window.sessionStorage["userInfo"]) {
                var userInfo =  JSON.parse($window.sessionStorage["userInfo"]);
                var sessionVal = userInfo.SessionID;
                var CurrentSessionID = "SessionID " + sessionVal;
                var apiUrl = serviceConf.API_URL;            
                var restURL = apiUrl.concat(serviceURL);                          
                       
                var result = {
                    'url' : restURL,
                    'APIVersion' : serviceConf.XAPIVersion,
                    'Authorization' : CurrentSessionID
                }  
                return result;

            } else {
                $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                //$rootScope.loginError = AUTH_EVENTS.notAuthorizedMessage; 
                $location.path('/signin');
            }
        },

    };
});
