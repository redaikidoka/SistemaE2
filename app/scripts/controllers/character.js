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
              name: "Ash of the Phoenix",
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
              "attribute": [
                {
                      "name": "strength",
                      "abr": "str",
                      "min": 1,
                      "max": 5,
                      "value": 2,
                      "section": "physical"
                  },
                   {
                      "name": "dexterity",
                      "abr": "dex",
                      "min": 1,
                      "max": 5,
                      "value": 5,
                      "section": "physical"
                  },
                   {
                      "name": "stamina",
                      "abr": "sta",
                      "min": 1,
                      "max": 5,
                      "value": 2,
                      "section": "physical"
                  },
                  {
                      "name": "charisma",
                      "abr": "cha",
                      "min": 1,
                      "max": 5,
                      "value": 3,
                      "section": "social"
                  },
                   {
                      "name": "manipulation",
                      "abr": "man",
                      "min": 1,
                      "max": 5,
                      "value": 2,
                      "section": "social"
                  },
                   {
                      "name": "appearance",
                      "abr": "app",
                      "min": 1,
                      "max": 5,
                      "value": 2,
                      "section": "social"
                  },
                   {
                      "name": "perception",
                      "abr": "app",
                      "min": 1,
                      "max": 5,
                      "value": 5,
                      "section": "mental"
                  },
                   {
                      "name": "intelligence",
                      "abr": "int",
                      "min": 1,
                      "max": 5,
                      "value": 3,
                      "section": "mental"
                  },
                  {
                      "name": "wits",
                      "abr": "wit",
                      "min": 1,
                      "max": 5,
                      "value": 3,
                      "section": "mental"
                  }
              ],
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
                      "excellencies": [
                        {
                          "name": "1st Archery Excellency",
                          "title": "Archery Overwhelming",
                          "abr": "1",
                          "description": "Add 2 motes/Ess to the attack pool",
                          "cost": 1,
                          "costRepeats": true
                        },{
                          "name": "3rd Archery Excellency",
                          "abr": "3",
                          "title": "Essence Resurgent",
                          "description":"Reroll Attack Roll",
                          "cost": 4
                        }
                      ]
                      ,"specialties": [{
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
                      "favored": true,
                       "specialties": [{
                          "name": "Hauling Ass",
                          "value": 1
                      }]
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
                      "favored": true,
                       "excellencies": [
                        {
                          "name": "2nd Investigation Excellency",
                          "title": "Essence Triumphant",
                          "abr": "2",
                          "description": "Add 1 success to the die pool",
                          "cost": 2,
                          "costRepeats": true
                        }
                      ]
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
                  "tooltip": "Remove environment penalties"

              }]
            ,"virtues": {
              "flaw": {
                "name": "Indecisive Paralysis",
                "trigger": "A decision the character makes goes badly",
                "description": "The character is overwhelmed by his various commitments and responsibilities to the point where he is incapable of making any decisions. He can't even decide what to eat and will reject any attempts to decide for him, convinced that if he just takes more time he can figure it out. He may resort to games of chance to help make his decisions for him, but he will invariably keep trying regardless of the game's outcome. He can take only defensive actions in combat at a two-die penalty, and cannot defend himself in social combat.",
                "partial_control": "The character can make decisions, but only after lengthy deliberation or games of chance. He might even willingly allow others to make all the decisions for him, even random passersby. In combat, he can attack, but only at one and a half times his normal speed as he waffles between various options. He can defend himself in social combat at a -2 die penalty."
                , "limit": 10,
                "current_limit": 2
              }
              ,"bucket":[
                {"name": "compassion", "value": 2, "currentvalue": 2}
                ,{"name": "Conviction", "value": 3, "currentvalue": 3, "flaw": true}
                ,{"name": "Temperance", "value": 2, "currentvalue": 2}
                ,{"name": "valor", "value": 2, "currentvalue": 2}
              ]
            }
            , "essence": {
              "value": 3,
              "pools": [
                {"name":"personal", "value": 14, "currentvalue": 0}
                ,{"name":"peripheral", "value": 35, "currentvalue": 33}
                
              ]
            }
            , "health" : { "levels": [0, 0, -1, -1, -1, -2, -4, -10], 
            "damage": [3, 2,1]}
          }

          // $http.get('characters/ash.json', {cache:false}).success(function(data) {
          // 	$scope.character = data;

          // });

          $scope.happy = true;

          $scope.getNumber = function(num) {
              return new Array(num);
          }

          $scope.getProgress = function(value, total) {
            var calc = (value/total)*100;
            console.log(calc);
            calc = calc.toFixed(2);
            console.log(calc);
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
      template: '<div class="badge"><sa-motes mote-count="ability.value" mote-max="ability.max" ></div><span class="ability" ng-class="{\'favored\' : {{ability.favored}} == true }">{{ability.name}}</span> ',
      link: function(scope, elem, attrs, ctrl ) {
        //console.log("ability: " + scope.ability.name + " " + scope.ability.value + "/" + scope.ability.max);

        if (scope.ability.excellencies) {
          console.log (  "E:" + scope.ability.excellencies.length );
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
.directive("saAbilityFull", function() {
    return {
      restrict: "AE",
      scope: {
        ability: '='
        },
      template: '<span sa-ability ability="ability" > </span><span ng-repeat="excellency in ability.excellencies"> <sa-excellency excellency="excellency" /> </span><span ng-repeat="specialty in ability.specialties"><sa-specialty specialty="specialty" /></span> ',
      link: function(scope, elem, attrs, ctrl ) {
        console.log("ability: " + scope.ability.name + " " + scope.ability.value + "/" + scope.ability.max);

        if (scope.ability.excellencies) {
          //console.log (  "E:" + scope.ability.excellencies.length );
        }
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
