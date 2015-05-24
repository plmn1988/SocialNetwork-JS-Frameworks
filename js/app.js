'use strict';

var app = angular.module('SocialNetwork', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/partials/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/profile/password', {
        templateUrl: 'templates/partials/edit-password.html',
        controller: 'AuthController'
    });



    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});