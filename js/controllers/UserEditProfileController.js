app.controller("UserEditProfileController", function ($scope, $rootScope, $routeParams, $location, notifyService, userService) {
    $scope.loadUserData = function () {
        userService.getCurrentUserData(
            function success(data) {
                $scope.currentUserData = data;
            }, function error(err) {
                notifyService.showError("An error occurred", err);
            }
        );
    };

    $scope.loadUserData();

    $scope.profileFileSelected = function(fileInputField) {
        delete $scope.currentUserData.profileImageData;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.currentUserData.profileImageData = reader.result;
                $("#image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $("#image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.editProfile = function (userData) {
        userService.editUserData(userData,
            function success() {
                notifyService.showInfo("Profile edited successfully");
                $location.path('#/');
            },
            function error(err) {
                notifyService.showError("Could not edit profile", err);
            }
        )
    }
});


