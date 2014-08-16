'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devApp
 */
angular.module('sistemaApp')
    .controller('CharacterCtrl', ['$scope', '$http',
        function($scope, $http) {

          $scope.character = {
              "name": "Ash of the Phoenix",
              "exalt_type": "Solar",
              "caste": "Night",
              "concept": "Intelligence gathering Nightbringer exalted from within the ranks of the Wyld Hunt itself",
              "motivation": "To decipher the nature and root cause of the curse that afflicts the Solars",
              "anima_banner": "A rising, silently screaming Phoenix, englfing him from the feet up",
              "anima": "Rising Phoenix",
              "attributes": {
                  "max": 5,
                  "min": 1,
                  "strength": {
                      "name": "strength",
                      "abr": "str",
                      "min": 1,
                      "max": 5,
                      "value": 2,
                      "section": "physical"
                  },
                  "dexterity": {
                      "name": "dexterity",
                      "abr": "dex",
                      "min": 1,
                      "max": 5,
                      "value": 5,
                      "section": "physical"
                  },
                  "stamina": {
                      "name": "stamina",
                      "abr": "sta",
                      "min": 1,
                      "max": 5,
                      "value": 2,
                      "section": "physical"
                  },
                  "charisma": {
                      "name": "charisma",
                      "abr": "cha",
                      "min": 1,
                      "max": 5,
                      "value": 3,
                      "section": "social"
                  },
                  "manipulation": {
                      "name": "manipulation",
                      "abr": "man",
                      "min": 1,
                      "max": 5,
                      "value": 2,
                      "section": "social"
                  },
                  "appearance": {
                      "name": "appearance",
                      "abr": "app",
                      "min": 1,
                      "max": 5,
                      "value": 2,
                      "section": "social"
                  },
                  "perception": {
                      "name": "perception",
                      "abr": "app",
                      "min": 1,
                      "max": 5,
                      "value": 5,
                      "section": "mental"
                  },
                  "intelligence": {
                      "name": "intelligence",
                      "abr": "int",
                      "min": 1,
                      "max": 5,
                      "value": 3,
                      "section": "mental"
                  },
                  "wits": {
                      "name": "wits",
                      "abr": "wit",
                      "min": 1,
                      "max": 5,
                      "value": 3,
                      "section": "mental"
                  }
              },
              "abilities": {
                  "archery": {
                      "name": "archery",
                      "abr": "arch",
                      "min": 0,
                      "max": 5,
                      "value": 5,
                      "caste": "dawn",
                      "favored": true,
                      "specialties": [{
                          "name": "Long Shot",
                          "value": 2
                      }]
                  },
                  "martial_arts": {
                      "name": "martial arts",
                      "abr": "ma",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "dawn",
                      "favored": false
                  },
                  "melee": {
                      "name": "melee",
                      "abr": "mel",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "dawn",
                      "favored": false
                  },
                  "thrown": {
                      "name": "thrown",
                      "abr": "thr",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "dawn",
                      "favored": false
                  },
                  "war": {
                      "name": "war",
                      "abr": "war",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "dawn",
                      "favored": false
                  },
                  "athletics": {
                      "name": "athletics",
                      "abr": "ath",
                      "min": 0,
                      "max": 5,
                      "value": 3,
                      "caste": "night",
                      "favored": true
                  },
                  "awareness": {
                      "name": "awareness",
                      "abr": "awa",
                      "min": 0,
                      "max": 5,
                      "value": 3,
                      "caste": "night",
                      "favored": true
                  },
                  "dodge": {
                      "name": "dodge",
                      "abr": "dod",
                      "min": 0,
                      "max": 5,
                      "value": 5,
                      "caste": "night",
                      "favored": true
                  },
                  "larceny": {
                      "name": "larceny",
                      "abr": "lar",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "night",
                      "favored": true
                  },
                  "stealth": {
                      "name": "stealth",
                      "abr": "stlh",
                      "min": 0,
                      "max": 5,
                      "value": 3,
                      "caste": "night",
                      "favored": true
                  },
                  "integrity": {
                      "name": "integrity",
                      "abr": "intg",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "zenith",
                      "favored": true
                  },
                  "performance": {
                      "name": "performance",
                      "abr": "perf",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "zenith",
                      "favored": false
                  },
                  "presence": {
                      "name": "presence",
                      "abr": "pres",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "zenith",
                      "favored": false
                  },
                  "resistance": {
                      "name": "resistance",
                      "abr": "rsst",
                      "min": 0,
                      "max": 5,
                      "value": 2,
                      "caste": "zenith",
                      "favored": false
                  },
                  "survival": {
                      "name": "survival",
                      "abr": "surv",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "zenith",
                      "favored": false
                  },
                  "bureaucracy": {
                      "name": "bureaucracy",
                      "abr": "bure",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "eclipse",
                      "favored": false
                  },
                  "linguistics": {
                      "name": "linguistics",
                      "abr": "ling",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "eclipse",
                      "favored": false
                  },
                  "ride": {
                      "name": "ride",
                      "abr": "ride",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "eclipse",
                      "favored": false
                  },
                  "sail": {
                      "name": "sail",
                      "abr": "sail",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "eclipse",
                      "favored": false
                  },
                  "socialize": {
                      "name": "socialize",
                      "abr": "socl",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "eclipse",
                      "favored": false
                  },
                  "craft": {
                      "name": "craft",
                      "abr": "craf",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "twilight",
                      "favored": false
                  },
                  "investigation": {
                      "name": "investigation",
                      "abr": "inv",
                      "min": 0,
                      "max": 5,
                      "value": 3,
                      "caste": "twilight",
                      "favored": true
                  },
                  "lore": {
                      "name": "lore",
                      "abr": "lore",
                      "min": 0,
                      "max": 5,
                      "value": 2,
                      "caste": "twilight",
                      "favored": true
                  },
                  "medicine": {
                      "name": "medicine",
                      "abr": "medi",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "twilight",
                      "favored": false
                  },
                  "occult": {
                      "name": "occult",
                      "abr": "occ",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "twilight",
                      "favored": false
                  }
              },

              "ability": [
                  {
                      "name": "archery",
                      "abr": "arch",
                      "min": 0,
                      "max": 5,
                      "value": 5,
                      "caste": "dawn",
                      "favored": true,
                      "specialties": [{
                          "name": "Long Shot",
                          "value": 2
                      }]
                  },
                 {
                      "name": "martial arts",
                      "abr": "ma",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "dawn",
                      "favored": false
                  },
                  {
                      "name": "melee",
                      "abr": "mel",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "dawn",
                      "favored": false
                  },
                   {
                      "name": "thrown",
                      "abr": "thr",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "dawn",
                      "favored": false
                  },
                  {
                      "name": "war",
                      "abr": "war",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "dawn",
                      "favored": false
                  },
                  {
                      "name": "athletics",
                      "abr": "ath",
                      "min": 0,
                      "max": 5,
                      "value": 3,
                      "caste": "night",
                      "favored": true
                  },
                  {
                      "name": "awareness",
                      "abr": "awa",
                      "min": 0,
                      "max": 5,
                      "value": 3,
                      "caste": "night",
                      "favored": true
                  },
                  {
                      "name": "dodge",
                      "abr": "dod",
                      "min": 0,
                      "max": 5,
                      "value": 5,
                      "caste": "night",
                      "favored": true
                  },
                  {
                      "name": "larceny",
                      "abr": "lar",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "night",
                      "favored": true
                  },
                  {
                      "name": "stealth",
                      "abr": "stlh",
                      "min": 0,
                      "max": 5,
                      "value": 3,
                      "caste": "night",
                      "favored": true
                  },
                 {
                      "name": "integrity",
                      "abr": "intg",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "zenith",
                      "favored": true
                  },
                  {
                      "name": "performance",
                      "abr": "perf",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "zenith",
                      "favored": false
                  },
                  {
                      "name": "presence",
                      "abr": "pres",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "zenith",
                      "favored": false
                  },
                  {
                      "name": "resistance",
                      "abr": "rsst",
                      "min": 0,
                      "max": 5,
                      "value": 2,
                      "caste": "zenith",
                      "favored": false
                  },
                 {
                      "name": "survival",
                      "abr": "surv",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "zenith",
                      "favored": false
                  },
                  {
                      "name": "bureaucracy",
                      "abr": "bure",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "eclipse",
                      "favored": false
                  },
                  {
                      "name": "linguistics",
                      "abr": "ling",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "eclipse",
                      "favored": false
                  },
                  {
                      "name": "ride",
                      "abr": "ride",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "eclipse",
                      "favored": false
                  },
                  {
                      "name": "sail",
                      "abr": "sail",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "eclipse",
                      "favored": false
                  },
                 {
                      "name": "socialize",
                      "abr": "socl",
                      "min": 0,
                      "max": 5,
                      "value": 1,
                      "caste": "eclipse",
                      "favored": false
                  },
                  {
                      "name": "craft",
                      "abr": "craf",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "twilight",
                      "favored": false
                  },
                  {
                      "name": "investigation",
                      "abr": "inv",
                      "min": 0,
                      "max": 5,
                      "value": 3,
                      "caste": "twilight",
                      "favored": true
                  },
                  {
                      "name": "lore",
                      "abr": "lore",
                      "min": 0,
                      "max": 5,
                      "value": 2,
                      "caste": "twilight",
                      "favored": true
                  },
                {
                      "name": "medicine",
                      "abr": "medi",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "twilight",
                      "favored": false
                  },
                  {
                      "name": "occult",
                      "abr": "occ",
                      "min": 0,
                      "max": 5,
                      "value": 0,
                      "caste": "twilight",
                      "favored": false
                  }
              ],             
              "backgrounds": {
                  "max": 5,
                  "bucket": [{
                      "name": "artifact",
                      "abr": "arti",
                      "value": 5,
                      "details": [{
                          "name": "Radiant Arbiter Behind the Mindful Veil",
                          "value": 5
                      }]
                  }, {
                      "name": "resources",
                      "abr": "reso",
                      "max": 5,
                      "value": 3
                  }, {
                      "name": "followers",
                      "abr": "fllw",
                      "max": 5,
                      "value": 1
                  }]
              },
              "charms": [{
                  "domain": "Solar",
                  "name": "Forceful Arrow",
                  "type": "Supplemental",
                  "keywords": ["combo-ok", "obvious", "knockback"],
                  "ability": "Archery",
                  "minimums": [{
                      "name": "Archery",
                      "value": 4
                  }, {
                      "name": "Essence",
                      "value": 2
                  }],
                  "prerequisites": [{
                      "name": "There Is No Wind"
                  }],
                  "cost": [{
                      "name": "essence",
                      "value": 3
                  }, {
                      "name": "willpower",
                      "value": 0
                  }],
                  "bullshit": "insert bullshit here",
                  "tooltip": "Knock back a bitch"
              }, {
                  "domain": "Solar",
                  "name": "There Is No Wind",
                  "type": "Supplemental",
                  "keywords": ["combo-ok", "obvious", "knockback"],
                  "ability": "Archery",
                  "minimums": [{
                      "name": "Archery",
                      "value": 4
                  }, {
                      "name": "Essence",
                      "value": 2
                  }],
                  "prerequisites": [{
                      "name": "There Is No Wind"
                  }],
                  "cost": [{
                      "name": "essence",
                      "value": 3
                  }, {
                      "name": "willpower",
                      "value": 0
                  }],
                  "bullshit": "insert bullshit here",
                  "tooltip": "Knock back a bitch"

              }]
          }

          // $http.get('characters/ash.json', {cache:false}).success(function(data) {
          // 	$scope.character = data;

          // });

          $scope.happy = true;

          $scope.getNumber = function(num) {
              return new Array(num);
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
			// console.log(" mote count: " + scope.moteCount);
			// console.log(" mote max: " + scope.moteMax);
			// console.log(" stat: " + scope.statName);
			
			// console.log(scope.statName + ": " + scope.moteCount + " / " + scope.moteMax);

			if ( angular.isNumber(scope.moteMax) ) {
				for (var i = 0; i< scope.moteMax; i++) {
					scope.motes.push( i );
				}

				//console.log(scope.motes);
			}

			// scope.$watch('moteCount',function(newValue, oldValue){
			//     if(newValue !== oldValue){
			//       console.log({label:'watch', value: scope.mouteCount});
			//     }

			// 	if (angular.isObject(scope.moteMax)) {
			// 		for (var i = 0; i< scope.moteMax; i++) {
			// 			scope.motes.push( i );
			// 		}
			// 	}

			//   });
			
		}
}})
.directive('saAbility', function() {
    return {
      restrict: 'AE',
      scope: {
        ability: '='
        },
      template: '<span class="badge"><sa-motes mote-count="ability.value" mote-max="ability.max" /></span><span class="ability" ng-class="{\'favored\' : {{ability.favored}} == true }">{{ability.name}}</span>',
      link: function(scope, elem, attrs, ctrl ) {
        console.log("ability: " + scope.ability);
      
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
        console.log("specialty: " + scope.specialty);
      
    }
}})
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
    }
})
.filter('checkmark', function() {
	return function(input) {
		return input ? '\u2713' : '\u2718';
	};
});
