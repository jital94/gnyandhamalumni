'use strict';
/* global app: true */


var app = angular.module('iitky12App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function ($routeProvider) 
{
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/update', {
      templateUrl: 'views/update.html',
      controller: 'UpdateCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

