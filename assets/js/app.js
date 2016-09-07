(function(){
  'use strict';
  angular.module('rentomatic',[
    'ngAnimate',
    'ui.router',
    'oc.lazyLoad',
    'anim-in-out',
    'jcs-autoValidate',
    'infinite-scroll',
    'ngMask',
    'mgcrea.ngStrap',
    'nya.bootstrap.select'
  ])
  .run(['$rootScope','bootstrap3ElementModifier','defaultErrorMessageResolver',function($rootScope,bootstrap3ElementModifier,defaultErrorMessageResolver) {
    // you can inject any instance here
    $rootScope.ctrl = {
      'speed': 200,
      'sync': false,
      'formStyle': 'anim-slide-below-fade',
      'resultsStyle': 'anim-slide-below-fade'
    };
    bootstrap3ElementModifier.enableValidationStateIcons(true);
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
      errorMessages.mask = "";
    });
  }])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider','$datepickerProvider',function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider,$datepickerProvider){
    angular.extend($datepickerProvider.defaults, {
      'dateFormat': 'yyyy-MM-dd',
      'dateType': 'string',
      'startWeek': 1,
      'autoclose': true
    });
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