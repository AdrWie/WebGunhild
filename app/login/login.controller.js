angular.module("login").
    controller("loginController", ["$scope", "$rootScope", "$location", "loginService",
        function ($scope, $rootScope, $location, loginService) {
            $scope.login = {};


            $scope.getLogin = function (contactInfo) {
                var newLogin = {
                    email: $scope.login.email,
                    password: $scope.login.password
                }

                $scope.text = "";

                loginService.login(newLogin).then(function (response) {
                    var name = loginService.getName();
                    var error = loginService.getErrorMsg();

                    if (error == "unauthorized") {
                        $scope.text = "Inloggningen misslyckades!";
                    }
                    else {
                        $rootScope.$broadcast("loggedIn");
                        $location.path("/");
                        $scope.text = "";
                        $scope.login = {};
                    }
                });
            };
        }]);