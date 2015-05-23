app.controller("HomeController", function ($scope, $rootScope, $routeParams, $location, notifyService, userService, authService) {
    $scope.reloadUserData = function () {
        userService.getCurrentUserData(
            function success(data) {
                $scope.currentUserData = data;
            }, function error(err) {
                notifyService.showError("An error occurred", err);
            }
        );
    };

    $scope.$on('userProfileSaved', function () {
        $scope.reloadUserData();
    });

    $scope.search = function () {
        var searchTerm = $scope.searchTerm;
        userService.searchUser(searchTerm,
            function success(data) {
                $rootScope.$broadcast('searchButtonClicked', data);
                $location.path('/search/:' + searchTerm);
            },
            function error(err) {
                notifyService.showError("Couldn't properly search for users", err);
            });
    };

    $scope.loadNewsFeed = function () {
        userService.getNewsFeed(
            function success(data) {
                $scope.data = data;
            },
            function error(err) {
                notifyService.showError("Couldn't load feed", err);
            }
        )
    };

    $scope.getOwnFriends = function () {
        userService.getOwnFriends(
            function success(data) {
                $scope.data = data;
            },
            function error(err) {
                notifyService.showError("Couldn't load friends", err);
            }
        )
    };

    $scope.getAllOwnFriends = function () {
        userService.getAllOwnFriends(
            function success(data) {
                $scope.friends = data;
            },
            function error(err) {
                notifyService.showError("Couldn't load all of your friends", err);
            }
        )
    };

    $scope.getAllUserFriends = function () {
        var username = $routeParams.username.substring(1);
        userService.getAllUserFriends(username,
            function success(data) {
                $scope.friends = data;
            },
            function (err) {
                notifyService.showError("Couldn't load all of user's friends", err);
            })
    };

    $scope.loadAllFriends = function () {
        var username = $routeParams.username.substring(1);
        var currentUser = authService.getCurrentUser().userName;
        if(username === currentUser) {
            $scope.getAllOwnFriends();
        } else {
            $scope.getAllUserFriends();
        }
    };

    $scope.$on('showFriends', function (event, bool) {
        $scope.loadAllFriends(bool);
    })
});