'use strict';

angular.module('ex13', ['ex13.controllers','ex13.filters', 
	                   'ex13.services', 'ex13.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
	    .when('/', {
	        templateUrl: 'partials/main.html',
	        controller: 'TrialsCtrl'
	    })
	    .otherwise({
	        redirectTo: '/'
	    });
  }]);
