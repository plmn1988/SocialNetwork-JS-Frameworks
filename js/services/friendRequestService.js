app.factory('friendRequestService',
    function ($http, baseServiceUrl, authService) {
        return {
            getFriendRequests: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/requests',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            acceptFriendRequest: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/requests/' + id + '?status=approved',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            rejectFriendRequest: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/requests/' + id + '?status=rejected',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    });