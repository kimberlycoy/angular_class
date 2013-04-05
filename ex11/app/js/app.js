'use strict';

angular.module('ex11', ['ex11.controllers','ex11.filters', 
	                   'ex11.services', 'ex11.directives']).
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
