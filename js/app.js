'use strict';

var app = angular.module('SocialNetwork', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/partials/user-login-register.html',
        controller: 'authController'
    });

    $routeProvider.when('/users/:username', {
        templateUrl: 'templates/user-wall.html',
        controller: ''
    });

    $routeProvider.when('/users/:username/friends', {
        templateUrl: 'templates/friends-sidebar.html',
        controller: ''
    });

    $routeProvider.when('/profile', {
        templateUrl: 'templates/profile-edit.html',
        controller: ''
    });

    $routeProvider.when('/logout', {
        templateUrl: 'templates/logout.html',
        controller: ''
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});