app.controller("HomeController", function ($scope, $rootScope, $routeParams, $location, notifyService, userService) {
    $scope.search = function () {
        var searchTerm = $scope.searchTerm;
        if(searchTerm != "") {
            userService.searchUser(searchTerm,
                function success(data) {
                    $scope.data = data;
                })
        }
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
                $scope.friends = data;
            },
            function error(err) {
                notifyService.showError("Couldn't load all of your friends", err);
            }
        )
    };

    $scope.getFriendRequests = function () {
        userService.getFriendRequests(
            function success(data) {
                $scope.getRequests = data;
            },
            function error(err) {
                notifyService.showError("Couldn't load the requests", err);
            }
        )
    };

    $scope.addNewPost = function () {
        userService.addNewPost(
            function success(data) {
                $scope.data = data;
            },
            function error(err) {
                notifyService.showError("Couldn't make this post", err);
            }
        )
    };
});