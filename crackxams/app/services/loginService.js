'use strict';


(function() {

    var loginservice = function($http, authorizationService, serviceConf) {


        var details = [];
        var subscription_Type = '';
        var account = '';
        var company_Name = '';
        var company_Address = '';
        var Zip = '';
        var contact_Name = '';
        var e_Mail = '';
        var contact_Phone = '';
        var signupdetails = function(subscriptiontype, Account, companyname, companyaddress, zip, contactname, email, contactphone) {
            subscription_Type = subscriptiontype;
            account = Account;
            company_Name = companyname;
            company_Address = companyaddress;
            Zip = zip;
            contact_Name = contactname;
            e_Mail = email;
            contact_Phone = contactphone;
            details = [subscription_Type, account, company_Name, company_Address, Zip, contact_Name, e_Mail, contact_Phone];
        };

        var getDetails = function() {

            return details;

        };

        var apiUrl = serviceConf.API_URL;  
        var loginAPIUrl = apiUrl.concat(serviceConf.loginAPI);  

        var signindetails = function(userName, passWord, callback) {
            $http({
                method: 'POST',
                url: loginAPIUrl,
                data: {username: userName, password: passWord},
                contentType: 'application/json; charset=utf-8'
            })
            .success(function(data, status, headers, config) {
                callback(data, status, headers);
            })
            .error(function(data, status, headers, config) {
                callback(data, status);
            });
        };


        return {
            signupdetails: signupdetails,
            signindetails: signindetails,
            getDetails: getDetails
        };


    };

    var module = angular.module("zanMiServices");
    module.factory("LoginService", loginservice);
}());



