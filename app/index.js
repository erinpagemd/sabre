'use strict'

// var $ = require('jquery'),
//     _ = require('lodash'),
//     Firebase = require('firebase');

angular
.module('anyPlane', ['ui.router'])
.constant('BASE_URL', 'https://any-plane.firebaseio.com')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {url:'/', templateUrl:'views/home.html'})
    .state('login', {url:'/login', templateUrl:'views/login.html', controller:'LoginCtrl'})
    .state('sabre', {url:'/sabre', templateUrl:'views/sabre.html', controller:'SabreCtrl'});

});
