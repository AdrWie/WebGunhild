angular.module("customer").
    controller("createUserController", ["$scope", "$location", "customerService",
        function ($scope, $location, customerService) {

            $scope.createUser = function (form) {
                var newUser = {
                    firstName: $scope.user.firstname,
                    lastName: $scope.user.lastname,
                    email: $scope.user.email,
                    phone: $scope.user.phone,
                    password: $scope.user.password,
                    address: $scope.user.address,
                    postalCode: $scope.user.postalcode,
                    city: $scope.user.city   
                };

                customerService.createUser(newUser).then(function () {
                    $location.path("/");
                });
            };


        }]);