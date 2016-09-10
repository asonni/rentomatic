(function(){
  'use strict';
  angular.module('rentomatic')
  .directive('scrollToLast', ['$location', '$anchorScroll', function($location, $anchorScroll){
  
    function linkFn(scope, element, attrs){
        $location.hash(attrs.scrollToLast);
        $anchorScroll();
    }
    
    return {
      restrict: 'AE',
      scope: {
        
      },
      link: linkFn
    };
    
  }])
  .controller('FormCtrl',['$scope','formServe',function($scope,formServe){
    $scope.required = true;
    $scope.rentalApplicationForm = [];
    $scope.occupantCounter = 1;
    $scope.petCounter = 1;
    $scope.vehicleCounter = 1;
    $scope.employmentCounter = 1;
    $scope.incomeCounter = 1;
    $scope.occupants = [{'number':$scope.occupantCounter}];
    $scope.pets = [{'number':$scope.petCounter}];
    $scope.vehicles = [{'number':$scope.vehicleCounter}];
    $scope.employments = [{'number':$scope.employmentCounter}];
    $scope.incomes = [{'number':$scope.incomeCounter}];
    $scope.formServe = formServe;
    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
      'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
      'WY').split(' ').map(function(state) {
      return {abbrev: state};
    });
    $scope.addProposedOccupant = function(){
      $scope.occupants.push({'number': $scope.occupantCounter+=1});
    };
    $scope.deleteProposedOccupant = function(index){
      $scope.occupants.splice(index, 1);
    };
    $scope.addProposedPet = function(){
      $scope.pets.push({'number': $scope.petCounter+=1});
    };
    $scope.deleteProposedPet = function(index){
      $scope.pets.splice(index, 1);
    };
    $scope.addVeicleInfo = function(){
      $scope.vehicles.push({'number': $scope.vehicleCounter+=1});
    };
    $scope.deleteVeicleInfo = function(index){
      $scope.vehicles.splice(index, 1);
    };
    $scope.addEmployment = function(){
      $scope.employments.push({'number': $scope.employmentCounter+=1});
    };
    $scope.deleteEmployment = function(index){
      $scope.employments.splice(index, 1);
    };
    $scope.addIncome = function(){
      $scope.incomes.push({'number': $scope.incomeCounter+=1});
    };
    $scope.deleteIncome = function(index){
      $scope.incomes.splice(index, 1);
    };
    $scope.newRentalApplication = function(){
      console.log($scope.rentalApplicationForm);
      $scope.formServe.addTenant($scope.rentalApplicationForm).then(function(response){
        console.log(response.data);
      },function(response){
        console.log("Somthing went wrong");
      });
    };
  }]);
}());