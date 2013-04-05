'use strict';

angular.module('ex10', ['ex10.controllers','ex10.filters', 
	                   'ex10.services', 'ex10.directives']).
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
