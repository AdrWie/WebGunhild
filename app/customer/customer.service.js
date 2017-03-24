angular.module("customer")
.factory("customerService", ["$http", function($http) {
    var customers = [];

    return {
       
        createUser: function(newUser) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer", newUser);
        }

    };
}]);