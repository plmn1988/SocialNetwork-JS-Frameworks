app.controller("FriendRequestController", function ($scope, $rootScope, $routeParams, $location, notifyService, friendRequestService) {
    $scope.getFriendRequests = function () {
        friendRequestService.getFriendRequests(
            function success(data) {
                $scope.getRequests = data;
            },
            function error(err) {
                notifyService.showError("Couldn't load the requests", err);
            }
        )
    };

    $scope.acceptFriendRequest = function (id) {
        friendRequestService.acceptFriendRequest(id,
            function success() {
                notifyService.showInfo('Friend request accepted');
                $scope.getFriendRequests();
            },
            function error(err) {
                notifyService.showError('Could not accept this request', err)
            }
        )
    };

    $scope.rejectFriendRequest = function (id) {
        friendRequestService.rejectFriendRequest(id,
            function success() {
                notifyService.showInfo('Friend request rejected');
                $scope.getFriendRequests();
            },
            function error(err) {
                notifyService.showError('Could not reject this request', err)
            }
        )
    };
});