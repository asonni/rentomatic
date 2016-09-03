(function(){
  'use strict';
  angular.module('rentomatic',[
    'ngAnimate',
    'ui.router',
    'oc.lazyLoad'
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('results', {
      url: '/',
      templateUrl: '/pages/results',  
      controller: 'ResultsCtrl',
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            insertBefore: '#ng_load_plugins_here',
            files: [
              '/js/controllers/resultsCtrl.min.js'
            ] 
          });
        }]
      }
    }).state('form', {
      url: '/form',
      templateUrl: '/pages/form',  
      controller: 'FormCtrl',
      resolve: {
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load({
            insertBefore: '#ng_load_plugins_here',
            files: [
              '/js/controllers/formCtrl.min.js'
            ] 
          });
        }]
      }
    });
  }]);
}());