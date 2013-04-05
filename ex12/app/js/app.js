'use strict';

angular.module('ex12', ['ex12.controllers','ex12.filters', 
	                   'ex12.services', 'ex12.directives']).
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
