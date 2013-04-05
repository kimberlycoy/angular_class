'use strict';

angular.module('ex13.directives', [])

    .directive('myHeader',
    	[
    	function () {
    		return {
    			restrict: 'E',
    			scope: {
    				content: '@content'
    			},
    			template: '<h1>This is My Header: {{ content }}</h1>'
    		};
    	}])

    .directive('myAttr',
    	[
    	function () {
    		return function(scope, element, attrs) {
   				var text = '';
   				if (attrs.emphasis === 'strong') {
   					text = '<strong>hello, world!</strong>';
   				} else {
   					text = 'hello, world!';
   				}
   				element.append(text);
    		};
    	}])

    .directive('myClass',
    	[
    	function () {
    		return {
    			restrict: 'C',
    			link: function(scope, element, attrs) {
	   				element.text('I am a new class!');
   				}
    		};
    	}])

    .directive('trialTable',
    	[
    	function () {
    		return {
    			restrict: 'E',
    			replace: true,
    			templateUrl: 'partials/trialtable.html'
    		};
    	}])

    ;
