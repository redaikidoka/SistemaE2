'use strict';

/**
 * @ngdoc function
 * @name sistemaApp.controller:CharacterCtrl
 * @description
 * # CharacterCtrl
 * Basic character display
 */
angular.module('sistemaApp')
		.controller('CharacterCtrl', ['$scope', '$http',
			function($scope, $http) {

				$scope.getCurrentHealth = function(health, damage) {

					if (!health || !damage) { return 0;}

					return health[damage.length];
				}

				$scope.data = {};

				$http.get('characters/ash.json')
						.success(function (data) {
								//$scope.data.character = data;
								$scope.character = data;
								$scope.character.health.currentHealth = $scope.getCurrentHealth($scope.character.health.levels, $scope.character.health.damage);
						})
						.error(function (error) {
								$scope.data.error = error;
								console.log(error);
						});         

					 // $http.get('characters/ash.json', {cache:false}).success(function(data) {
					 // 	$scope.character = data;

					 // });

					$scope.happy = true;

					$scope.getNumber = function(num) {
							return new Array(num);
					}

					$scope.getProgress = function(value, total) {
						var calc = (value*100/total).toFixed(0);
						calc = calc + '%';

						return calc ;
					}

					$scope.getIcon = function(caste) {
						if (!angular.isString(caste)) {
							return "images/caste/void.jpg";
						}
						return "images/caste/" + angular.lowercase(caste) + "-fancy.jpg";
					}
				}
		])
.directive('saMotes', function() {
		return {
		restrict: 'AE',
		scope: {
			moteCount: '=',
			moteMax: '=',
			statName: '='
		},
		template: '<span ng-repeat="mote in motes" class="glyphicon glyphicon-certificate" ng-class="{\'mote-empty\':$index>moteCount-1}"> </span>',
		link: function(scope, elem, attrs, ctrl ) {
			scope.motes = []; 
			// console.log(scope.statName + ": " + scope.moteCount + " / " + scope.moteMax);

			if ( angular.isNumber(scope.moteMax) ) {
				for (var i = 0; i< scope.moteMax; i++) {
					scope.motes.push( i );
				}

			}

			
		}
}})
.directive('saMotesBadge', function() {
		return {
		restrict: 'AE',
		scope: {
			moteCount: '=',
			moteMax: '=',
			statName: '='
		},
		template: '<div class="badge"><span ng-repeat="mote in motes" class="glyphicon glyphicon-certificate" ng-class="{\'mote-empty\':$index>moteCount-1}"> </span></div>',
		link: function(scope, elem, attrs, ctrl ) {
			scope.motes = []; 
			// console.log(scope.statName + ": " + scope.moteCount + " / " + scope.moteMax);

			if ( angular.isNumber(scope.moteMax) ) {
				for (var i = 0; i< scope.moteMax; i++) {
					scope.motes.push( i );
				}
			}
			
}}})
.directive('saAttribute', function() {
		return {
		restrict: 'AE',
		scope: {
			attribute: '='
		},
		template: '<sa-motes-badge mote-count="attribute.value" mote-max="attribute.max"></sa-motes-badge> <span class="stat">{{ attribute.name }}</span>',
		link: function(scope, elem, attrs, ctrl ) {
			scope.motes = []; 
			// console.log(scope.statName + ": " + scope.moteCount + " / " + scope.moteMax);

			// if ( angular.isNumber(scope.attribute.max) ) {
			// 	for (var i = 0; i< scope.attribute.max; i++) {
			// 		scope.motes.push( i );
			// 	}

			// }

			
		}
}})
.directive('saAbility', function() {
		return {
			restrict: 'AE',
			scope: {
				ability: '='
				},
			template: '<div class="badge"><sa-motes mote-count="ability.value" mote-max="ability.max" ></div><span class="ability" ng-class="{\'favored\' : {{ability.favored}} == true }">{{ability.name}}</span> ',
			link: function(scope, elem, attrs, ctrl ) {
				//console.log("ability: " + scope.ability.name + " " + scope.ability.value + "/" + scope.ability.max);

				if (scope.ability.excellencies) {
					//console.log (  "E:" + scope.ability.excellencies.length );
				}
		}
}})
.directive('saSpecialty', function() {
		return {
			restrict: 'AE',
			scope: {
				specialty: '='
				},
			template: '<br><span class="pull-right solar specialty" ><sa-motes mote-count="specialty.value" mote-max="specialty.value" /></span><div class="specialty" >{{specialty.name}}</div>',
			link: function(scope, elem, attrs, ctrl ) {
				//console.log("specialty: " + scope.specialty);
			
		}
}})
.directive('saExcellency', function() {
		return {
			restrict: 'AE',
			scope: {
				excellency: '='
				},
			template: '<a href="#" alt="{{excellency.title}}" title="{{excellency.description}}" class="excellency">&nbsp;{{excellency.abr}}&nbsp;</a> ',
			link: function(scope, elem, attrs, ctrl ) {
				//console.log("excellency: " + scope.excellency);
			
		}
};})
.directive("saCharm", function() {
		return {
			restrict: "AE",
			scope: {
				charm: '='
				},
			templateUrl: 'views/character/charm.html', 
			link: function(scope, elem, attrs, ctrl ) {
				//console.log("ability: " + scope.ability.name + " " + scope.ability.value + "/" + scope.ability.max);

				if (scope.ability.charms) {
					//console.log (  "E:" + scope.ability.excellencies.length );
				}
		}
};})
.directive("saCombo", function() {
		return {
			restrict: "AE",
			scope: {
				combo: '='
				},
			templateUrl: 'views/character/combo.html', 
			link: function(scope, elem, attrs, ctrl ) {
				//console.log("ability: " + scope.ability.name + " " + scope.ability.value + "/" + scope.ability.max);

				if (scope.ability.combos) {
					//console.log (  "E:" + scope.ability.excellencies.length );
				}
		}
};}).directive("saAbilityFull", function() {
		return {
			restrict: "AE",
			scope: {
				ability: '='
				},
			template: '<span sa-ability ability="ability" > </span><span ng-repeat="excellency in ability.excellencies"> <sa-excellency excellency="excellency" /> </span><span ng-repeat="specialty in ability.specialties"><sa-specialty specialty="specialty" /></span> ',
			link: function(scope, elem, attrs, ctrl ) {
				//console.log("ability: " + scope.ability.name + " " + scope.ability.value + "/" + scope.ability.max);

				if (scope.ability.excellencies) {
					//console.log (  "E:" + scope.ability.excellencies.length );
				}
		}
};})
.directive("saToggleTracker", function() {
		return {
			restrict: "AE",
			link: function(scope, elem, attrs ) {
				// on click
				$(elem).click(function() {
					$('.row-offcanvas').toggleClass('active');
				});
		}
};})
.filter("unique", function () {
		return function (data, propertyName) {
				if (angular.isArray(data) && angular.isString(propertyName)) {
						var results = [];
						var keys = {};
						for (var i = 0; i < data.length; i++) {
								var val = data[i][propertyName];
								if (angular.isUndefined(keys[val])) {
										keys[val] = true;
										results.push(val);
								}
						}
						return results;
				} else {
						return data;
				}
		};
})
.filter("checkmark", function() {
	return function(input) {
		return input ? "\u2713" : "\u2718";
	};
});
