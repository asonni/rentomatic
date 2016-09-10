(function () {
  'use strict';
  angular.module('rentomatic')
  .service('formServe', ['$http', function ($http){
    var self = {
      'addTenant1' : function(tenantObj) {
        // $http returns a promise, which has a then function, which also returns a promise
        var promise = $http.post('/addTenant',tenantObj).then(function (response) {
          // The then function here is an opportunity to modify the response
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
        // Return the promise to the controller
        return promise;
      },
      'addTenant': function(tenantObj){
        console.log(tenantObj);
        return $http.post('/addTenant',tenantObj);
      }
    };
    return self;
  }]);
}());
