angular.module("shopcart")
.controller("shopcartController", ["$scope", "$location", "shopcartService", "loginService", "orderService",
 function($scope, $location, shopcartService, loginService, orderService) {
     
    $scope.cartProducts = [];
    $scope.isCheckedOut = false;

    $scope.$watchCollection(function () {
        return shopcartService.getCartProducts();

    }, function (newValue, oldValue) {
        $scope.cartProducts = newValue;
    });

    $scope.$watch(function () {
        return shopcartService.getCartTotalPrice();
    }, function (newValue, oldValue) {
        $scope.cartTotalPrice = newValue;
    });

    $scope.removeFromCart = function (index) {
        shopcartService.removeFromCart(index);
    }


    if(!loginService.isLoggedIn()) {
        $location.path("/login");
    }

    $scope.checkOutClick = function() {
       
        $scope.isCheckedOut = true;

        var shopcartProducts = shopcartService.getCartProducts();
        var customerId = loginService.getCustomerId();

        customerOrder = { customerId, products: [] };

        angular.forEach(shopcartProducts, function(shopcartProduct) {
            customerOrder.products.push({productId: shopcartProduct.product.id, quantity: shopcartProduct.quantity});
            console.log(customerOrder);
        });

        orderService.postOrder(customerOrder).then(function(response) {
            shopcartService.emptyShopcart();
            $location.path("/receipt");
            

        }, function(response) {
            $scope.isCheckedOut = false;
        })
        
    }

}]);