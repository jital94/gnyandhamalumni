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
      templateUrl: 'views/main.html'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});


app.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});
