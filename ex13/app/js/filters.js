'use strict';

angular.module('ex14.filters', [])

    .filter('trimid', [function() {
        return function(str) {
        	return str.replace(/^NCT0+/,'');
        };
	}])
    
    .filter('substring', [function() {
        return function(str, len) {
        	return str.substring(0,len);
        };
	}])

;
