describe('Controller: IndexController', function(){
  //load the controllers module
  beforeEach(module('confusionApp'));
  //declare variables
  var IndexController, scope, $httpPromotions;
  //init the controller and a mock scope
  beforeEach(inject(function($controller, _$httpBackend_,  $rootScope, menuFactory, corporateFactory){

    scope = $rootScope.$new();
    IndexController = $controller('IndexController',{
      $scope: scope, menuFactory: menuFactory, corporateFactory: corporateFactory
    });

  }));

    it('should have showDish as false', function () {
      expect(scope.showDish).toBeFalsy();
    });
});
