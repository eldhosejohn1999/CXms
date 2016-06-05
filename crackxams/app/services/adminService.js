'use strict';

(function() {

    var adminService = function($http, serviceConf, authorizationService) {

        var getsuperadminAccounts = function() {
            return superadminAccounts;
        };

        var getroleDetails = function() {
            return roleDetails;
        };
        var getuserDetails = function() {
            return userDetails;
        };

        var gettenantadminDetails = function() {
            return tenantadminDetails;
        };

        var getsuperadminDetails = function(accontname) {
            return superadminDetails;
        };
        var getsuperadminstatus = function() {
            return superadminstatus;
        };

        var getindividualUser = function(id) {

            return individualUser;
        };


        var getrolepermissions = function() {

            return rolepermissions;
        };


        return {
            getsuperadminAccounts: getsuperadminAccounts,
            getroleDetails: getroleDetails,
            getuserDetails: getuserDetails,
            gettenantadminDetails: gettenantadminDetails,
            getsuperadminDetails: getsuperadminDetails,
            getsuperadminstatus: getsuperadminstatus,
            getindividualUser: getindividualUser,
            getrolepermissions: getrolepermissions


        };

    };



    var module = angular.module("walrsServices");
    module.factory("AdminService", adminService);

}());

var superadminAccounts = [
    {"accountname": "Account1", "status": "active", "signupdate": "11/14/2014", "activationstrat": "11/15/2014", "activationend": "11/15/2015"},
    {"accountname": "Account2", "status": "Pending Activation", "signupdate": "11/14/2014", "activationstrat": "11/15/2014", "activationend": "11/15/2015"},
    {"accountname": "Account3", "status": "AnyStatus", "signupdate": "11/14/2014", "activationstrat": "11/15/2014", "activationend": "11/15/2015"},
    {"accountname": "Account4", "status": "active", "signupdate": "11/14/2014", "activationstrat": "11/15/2014", "activationend": "11/15/2015"},
    {"accountname": "Account1", "status": "active", "signupdate": "11/14/2014", "activationstrat": "11/15/2014", "activationend": "11/15/2015"},
    {"accountname": "Account2", "status": "Pending Activation", "signupdate": "11/14/2014", "activationstrat": "11/15/2014", "activationend": "11/15/2015"},
    {"accountname": "Account3", "status": "AnyStatus", "signupdate": "11/14/2014", "activationstrat": "11/15/2014", "activationend": "11/15/2015"},
    {"accountname": "Account4", "status": "active", "signupdate": "11/14/2014", "activationstrat": "11/15/2014", "activationend": "11/15/2015"}

];
var roleDetails = [
    {
        "rolename": "Tenant Admin",
        "permissions": "Create Users, Delete Users, Edit Users, View Users, View Dashboard, View Actors Tab, View Search Tab, View Admin Tab"

    },
    {
        "rolename": "Actor",
        "permissions": "View Dashboard, View Actors Tab, View Search Tab, View Admin Tab"
    },
    {
        "rolename": "Learning Admin",
        "permissions": "Create Users, Delete Users, View Search Tab, View Admin Tab"
    }

];

var userDetails = [
    {
        "username": "Username1",
        "id": "123",
        "lastlogin": "11/12/2014 at 11:00am",
        "roles": "Tenant Admin, Actor"

    },
    {
        "username": "Username2",
        "lastlogin": "11/12/2014 at 11:00am",
        "id": "124",
        "roles": "Tenant Admin, Actor"
    },
    {
        "username": "Username3",
        "lastlogin": "11/12/2014 at 11:00am",
        "id": "125",
        "roles": "Tenant Admin, Actor"
    },
    {
        "username": "Username4",
        "lastlogin": "11/12/2014 at 11:00am",
        "id": "126",
        "roles": "Tenant Admin, Actor"
    }
];





var tenantadminDetails = {
    "accountname": "accountname",
    "companyname": "Acme Co",
    "companyaddress": "1234 Sweept Away Lane",
    "companyzip": "000000",
    "contactname": "John Doe",
    "contactphone": "555-123-1234",
    "contactemail": "jdoe@searshc.com",
    "ladp": "yes",
    "componyname1": "Subdomain",
    "activationfrom": "11/12/2014",
    "activationto": "11/12/2014",
};


var superadminDetails = {
    "accountname": "corporateaccount",
    "companyname": "Acme Co",
    "companyaddress": "1234 Sweept Away Lane",
    "companyzip": "000000",
    "contactname": "John Doe",
    "contactphone": "555-123-1234",
    "contactemail": "jdoe@searshc.com",
    "ladp": "yes",
    "componyname1": "Subdomain",
    "activationfrom": "11/12/2014",
    "activationto": "11/12/2014",
};



var superadminstatus = ["active", "AnyStatus", "Pending Activation"];



var individualUser = {
    "username": "Username",
    "useremail": "jdoe@searshc.com"


};
var rolepermissions = ["permission1", "permission2", "permission3", "permission4", "permission5"];
