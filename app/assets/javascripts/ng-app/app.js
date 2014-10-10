angular
  .module('willTsay', [
      'ngAnimate',
      'ui.router',
      'templates', 'ngResource'
  ]).config(function ($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
      })
    $urlRouterProvider.otherwise('/')
    $locationProvider.html5Mode(true)
  })


