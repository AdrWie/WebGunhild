angular.module("product")
    .controller("productDetailsController", ["$scope", "$routeParams", "productService", "shopcartService",
        function ($scope, $routeParams, productService, shopcartService) {

            $scope.product = {};
            $scope.quantity = 1;

            productService.getProductById($routeParams.productId).then(function (response) {
                $scope.product = response.data;

            }, function (errorResponse) {

            });

            $scope.addToCart = function (product, quantity) {
                shopcartService.addToCart(product, quantity);
            };

            $scope.$watch(function () {
                return shopcartService.getCartTotalPrice();
            }, function (newValue, oldValue) {
                $scope.cartTotalPrice = newValue;
            });

            $scope.$watch(function () {
                return shopcartService.getCartSize();
            }, function (newValue, oldValue) {
                $scope.cartSize = newValue;
            })

        }]);