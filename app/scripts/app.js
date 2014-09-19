'use strict';

/**
 * @ngdoc overview
 * @name devApp
 * @description
 * # devApp
 *
 * Main module of the application.
 */
angular
  .module('sistemaApp', [
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
        templateUrl: 'views/character.html',
        controller: 'CharacterCtrl'
      })
      .when('/withquick', {
        templateUrl: 'views/chracter2.html',
        controller: 'CharacterCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/quickview', {
        templateUrl: 'views/quickview.html',
        controller: 'QuickviewCtrl'
      })
      .when('/combat', {
        templateUrl: 'views/combat.html',
        controller: 'CombatCtrl'
      })
      .when('/charedit', {
        templateUrl: 'views/charedit.html',
        controller: 'ChareditCtrl'
      })
      .otherwise({
        redirectTo: '/#'
      });
  });
