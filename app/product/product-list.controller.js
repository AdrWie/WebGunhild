angular.module("product")
    .controller("productListController", ["$scope", "$location", "$routeParams", "productService", "shopcartService",
        function ($scope, $location, $routeParams, productService, shopcartService) {
            var products = [];
            $scope.quantity = 0;

            productService.getProducts().then(function (response) {
                products = response.data;
                $scope.products = products;
            });

            productService.getCategories().then(function (response) {
                var categories = response.data;
                categories.unshift({ name: "-Visa alla kategorier" });
                $scope.categories = categories;
            });

            $scope.onCategorySelect = function (categoryId) {
                $scope.selectedCategory = categoryId;
            }

            $scope.onProductClicked = function (id) {
                $location.path("/product/" + id);
            }

            $scope.addToCart = function (product, quantity) {
                shopcartService.addToCart(product, quantity);
                
            }

            $scope.$watch(function () {
                return shopcartService.getCartTotalPrice();
            }, function (newValue, oldValue) {
                $scope.cartTotalPrice = newValue;
            });

            $scope.$watch(function() {
               return shopcartService.getCartSize();
            }, function (newValue, oldValue) {
                $scope.cartSize = newValue;    
            })


        }]);