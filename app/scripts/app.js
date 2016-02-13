'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
  .module('App', [
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/recording', {
        templateUrl: 'views/recording.html',
        controller: 'RecordingCtrl'
      })
    .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
    .when('/masters', {
        templateUrl: 'views/masters.html',
        controller: 'MastersCtrl'
      })
    .when('/summary', {
        templateUrl: 'views/summary.html',
        controller: 'SummaryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
