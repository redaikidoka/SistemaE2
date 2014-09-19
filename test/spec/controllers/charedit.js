'use strict';

describe('Controller: ChareditCtrl', function () {

  // load the controller's module
  beforeEach(module('sistemaE2App'));

  var ChareditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChareditCtrl = $controller('ChareditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
