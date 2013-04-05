'use strict';

angular.module('ex14', ['ex14.controllers','ex14.filters', 
	                   'ex14.services', 'ex14.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
	    .when('/', {
	        templateUrl: 'partials/main.html',
	        controller: 'TrialsCtrl'
	    })
	    .when('/nextpage', {
	        templateUrl: 'partials/nextpage.html',
	        controller: 'NextPageCtrl'
	    })
	    .otherwise({
	        redirectTo: '/'
	    });
  }]);
