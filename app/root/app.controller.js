angular.module("app")
.controller("appController", ["$scope", "$rootScope", "$location", "loginService", function($scope, $rootScope, $location, loginService) {
    $scope.myLoggedIn = false;
    $scope.name = "";

    $scope.$on("loggedIn", function(event, arg) {   
        $scope.myLoggedIn = true;
        $scope.name = loginService.getName();
        
    });
    $scope.logOut = function() {
        $scope.myLoggedIn = false;
        $scope.name = "";
        loginService.logOut();
    };


}])
.directive('myWelcome', function() {
  return {
    template: '<span><small> - Din klädbutik på nätet!</small></span>'
  };
});