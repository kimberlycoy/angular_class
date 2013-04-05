'use strict';

angular.module('ex9', ['ex9.controllers','ex9.filters', 
	                   'ex9.services', 'ex9.directives']).
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
