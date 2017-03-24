angular.module("login")
.factory("loginService", ["$http", "$rootScope", "$location", function($http, $rootScope, $location) {
    $rootScope.userloginLocation = "/";
    var isLoggedIn = false;
    var id = 0;
    var userObj = {};
    var errorMessage;
    var firstName;
    var lastName;
    var fullName;

    return {
        login: function(user) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", user)
                .then(function(response) {
                    
                    id = response.data.customerId;
                    userObj = response.data;
                    firstName = response.data.firstName;
                    lastName = response.data.lastName;
                    fullName = firstName + " " + lastName;
                    errorMessage = "Hej";
                    isLoggedIn = true;

                }, function(error) {
                    if($rootScope.userloginLocation.indexOf("login") == -1) {
                        $location.path($rootScope.userloginLocation)
                        errorMessage = "unauthorized";
                        alert("Fel användarnamn eller lösenord");  
                    }
                });
        },
        isLoggedIn: function() {
            return isLoggedIn;
        },
        getCustomerId: function() {
            return id;
        },
        logOut: function() {
            id = 0;
            userObj = {};
            isLoggedIn = false;
            errorMessage = "";
            $location.path("/");
        },
        getErrorMsg: function() {
            return errorMessage;
        },
        getUser: function() {
            return customerId;
        },
        getName: function() {
            return fullName;
        }
    };   
}]);