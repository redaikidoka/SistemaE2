'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the devApp
 */
angular.module('sistemaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
