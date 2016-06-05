'use strict';

angular.module('config', [])
.constant('serviceConf', {       

    API_URL : "http://localhost:8085/SegNo/Dev/SegnoLRSBE/public",    

    loginAPI : "/login",
    searchAPI : "/dashSearch",
    lineChartAPI : "/dashGraph",
    cloudAPI : "/getVerbBreakDown",
    streamAPI : "/statements/stream",        

    actorAPI : "/statements/actors/grid",
    actorDetailsAPI : "/statements/actors/details",
    actorNamesAPI : "/statements/actors/names",
    actorPopupAPI : "/statements/actors/popup",
    
    activityNamesAPI : "/statements/activity/names",
    activityAPI : "/statements/activity/grid",
    activityDetailsAPI : "/statements/activity/details",
    popupAPI : "/statements/activity/popup",
    
    debugAPI : "/debug",
    debugPopupAPI : "/debug/popup",

    authCredentialsAPI : "/generateAuthCredentials",
    basicCredentialsAPI : "/generateBasicCredentials",
    getClientsAPI : "/getClients",
    getTokensAPI : "/getTokens",
    updateStatusCredentialsAPI : "/updateStatusCredentials",
	addRemoveLabelAPI : "/addRemoveLabelToClient",
    permissionCheckAPI : "/permissionService", 
    // getAllPlatformsAPI : "/statements/getAllPlatforms", 
    // getAllVerbsAPI : "/statements/getAllVerbs", 
    getPlatformsAndVerbsAPI : "/statements/getPlatformsAndVerbs", 
    logoutAPI : "/logout", 

    XAPIVersion : '1.0.0'
})

.constant('AUTH_EVENTS', {
    loginSuccess : 'auth-login-success',
    loginFailed : 'auth-login-failed',
    logoutSuccess : 'auth-logout-success',
    sessionTimeout : 'auth-session-timeout',
    notAuthenticated : 'auth-not-authenticated',
    notAuthorized : 'auth-not-authorized',
    notAuthorizedMessage : "You are not authorized, please signin again!"
})
.constant('EXPORT_LIMIT', {
    activityExportLimit : 20000,
    actorExportLimit : 20000,
	searchExportLimit : 9500
});
