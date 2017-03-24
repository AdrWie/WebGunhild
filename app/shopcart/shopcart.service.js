angular.module("shopcart")
.factory("shopcartService", ["$http", function($http) {

    
    var cartProducts = [];
    var totalPrice = 0;
    var countTotal = function () {
        var total = 0;
        angular.forEach(cartProducts, function (product) {
            total += (product.quantity * product.product.price);
        });
        return total;
    };

    return {
        addToCart: function (newProduct, quantity) {
            var added = false;
            angular.forEach(cartProducts, function (cartProduct) {
                if (cartProduct.product.id == newProduct.id && !added) {
                    cartProduct.quantity += quantity;
                    added = true;
                }
            });
            if (!added) cartProducts.push({product:newProduct, quantity:quantity});
            totalPrice = countTotal();
            alert("Varan placerad i din kundvagn");
        },

        removeFromCart: function (index) {
            cartProducts.splice(index, 1);
            totalPrice = countTotal();
        },

        getCartSize: function () {
            return cartProducts.length;
        },

        getCartProducts: function () {
            return cartProducts;
        },

        getCartTotalPrice: function () {
            return totalPrice;
        },

        emptyShopcart: function () {
            cartProducts = [];
            totalPrice = 0;
        },

    };


}]);