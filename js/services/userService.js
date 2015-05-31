app.factory('userService',
    function ($http, baseServiceUrl, authService) {
        return {
            getCurrentUserData: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            editUserData: function (currentUserData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me',
                    headers: authService.getAuthHeaders(),
                    data: currentUserData
                };
                $http(request).success(success).error(error);
            },
            searchUser: function (searchTerm, success) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/search?searchTerm=' + searchTerm,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success);
            },
            getNewsFeed: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getOwnFriends: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/friends',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    });