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
            searchUser: function (searchTerm, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/search?searchTerm=' + searchTerm,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getOwnFriends: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/friends/preview',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getFriends: function (username, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + username + '/friends/preview',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getWall: function (username, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + username + '/wall?StartPostId=&PageSize=5',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getUserPreview: function (username, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + username + '/preview',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getNewsFeed: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getAllOwnFriends: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/friends',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getAllUserFriends: function (username, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + username + '/friends',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    });