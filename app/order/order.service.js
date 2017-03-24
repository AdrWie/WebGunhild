angular.module("order")
.factory("orderService", ["$http", function($http){

     return {
        postOrder: function(customerOrder) {
            return $http.post("http://nackbutik.azurewebsites.net/api/order", customerOrder)
        }
    }

}]);