'use strict';

describe('Controller: CombatCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaE2App'));

  var CombatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CombatCtrl = $controller('CombatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
