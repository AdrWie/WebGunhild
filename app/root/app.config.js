angular.module("app")
.config(["$routeProvider", "$locationProvider",
 function($routeProvider, $locationProvider) {
    $routeProvider

    .when("/", {
        templateUrl: "app/product/product-list.template.html",
        controller: "appController"
    })
    .when("/product/:productId", {
        templateUrl: "app/product/product-details.template.html",
        controller: "productDetailsController"  
    })
    .when("/signup", {
        templateUrl: "app/customer/create-user.template.html",
        controller: "customerController"
    })
    .when("/login", {
        templateUrl: "app/login/login.template.html",
        controller: "loginController"
    })
    .when("/checkout", {
        templateUrl: "app/shopcart/shopcart-list.template.html",
        controller: "shopcartController"
     })
     .when("/receipt", {
        templateUrl: "app/shopcart/deliver-success-msg.template.html",
        controller: "shopcartController"
     })

    .otherwise("/");
    $locationProvider.html5Mode(true);
}]);