'use strict';

/**
 * @ngdoc function
 * @name sistemaE2App.controller:ChareditCtrl
 * @description
 * # ChareditCtrl
 * Controller of the sistemaApp
 */
angular.module('sistemaApp')
    .controller('ChareditCtrl', ['$scope', '$http',
            function($scope, $http) {
                    $scope.awesomeThings = [
                        'HTML5 Boilerplate',
                        'AngularJS',
                        'Karma'
                    ];

                    $scope.data = {};

                    $scope.name = "I need a name!";

                    $http.get('characters/fakeash.json')
                        .success(function(data) {
                            //$scope.data.character = data;
                            $scope.character = data;
//                            $scope.character.health.currentHealth = $scope.getCurrentHealth($scope.character.health.levels, $scope.character.health.damage);
                        })
                        .error(function(error) {
                            $scope.data.error = error;
                            console.log(error);
                        });

                    $scope.getIcon = function(caste) {
                        if (!angular.isString(caste)) {
                            return "images/caste/void.jpg";
                        }
                        return "images/caste/" + angular.lowercase(caste) + "-fancy.jpg";
                    }

                }]);
