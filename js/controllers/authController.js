'use strict';

app.controller('AuthController',
    function ($scope, $rootScope, $location, authService, notifyService) {

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    notifyService.showInfo("User registered successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };

        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notifyService.showInfo("Login successful");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Login failed", err);
                }
            );
        };

        $scope.changePassword = function(userData) {
            authService.changePassword(userData,
                function success() {
                    notifyService.showInfo("Password successfully changed");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Failed to change your password", err);
                }
            );
        };
    }
);