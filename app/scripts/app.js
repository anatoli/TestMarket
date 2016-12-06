'use strict';

/**
 * @ngdoc overview
 * @name testMarketApp
 * @description
 * # testMarketApp
 *
 * Main module of the application.
 */
angular
  .module('testMarketApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
