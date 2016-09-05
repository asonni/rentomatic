(function(){
  'use strict';
  angular.module('rentomatic',[
    'ngAnimate',
    'ui.router',
    'oc.lazyLoad',
    'angularSpinner',
    'angular-ui-view-spinner',
    'anim-in-out',
    'jcs-autoValidate'
  ])
  .run(['$rootScope','bootstrap3ElementModifier',function($rootScope,bootstrap3ElementModifier) {
    // you can inject any instance here
    $rootScope.ctrl = {
      'speed': 200,
      'sync': false,
      'formStyle': 'anim-slide-below-fade',
      'resultsStyle': 'anim-slide-below-fade'
    };
    bootstrap3ElementModifier.enableValidationStateIcons(true);
  }])
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