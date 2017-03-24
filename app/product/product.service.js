angular.module("product")
.factory("productService", ["$http", function($http) {


    return {
        getProducts: function() {
            return $http.get("http://nackbutik.azurewebsites.net/api/product");
        },

        getProductById: function(id) {
            return $http.get("http://nackbutik.azurewebsites.net/api/product/" + id);
        },

        getCategories: function() {
            return $http.get("http://nackbutik.azurewebsites.net/api/category");
        }
    };

    $scope.addToCart = function (product, quantity) {
            shopcartService.addToCart(product, quantity);
        }

        $scope.addItem = function(product, quantity) {
            if($scope.quantity < $scope.product.unitsInStock) {
             $scope.quantity += 1;
            }
        }

        $scope.$watch(function () {
        return shopcartService.getCartTotalPrice();
    }, function (newValue, oldValue) {
        $scope.cartTotalPrice = newValue;
    });


}]);