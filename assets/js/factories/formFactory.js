(function () {
  'use strict';
  angular.module('rentomatic').factory('formFactory',['$http', formFactory]);
  function formFactory($http) {
    return {
      'addTenant': addTenant
    };
    function addTenant(tenantObj) {
      return $http.post('/addTenant',tenantObj).then(complete).catch(failed);
    }
    function complete(response) {
      return response;
    }
    function failed(error) {
      console.log(error.statusText);
    }
  }
}());
