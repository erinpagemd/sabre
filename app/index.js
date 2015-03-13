angular
.module('anyPlane', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {url:'/', templateUrl:'views/home.html'})
    .state('login', {url:'/login', templateUrl:'views/login.html'})
    .state('results', {url:'/results', templateUrl:'views/results.html'});

});
