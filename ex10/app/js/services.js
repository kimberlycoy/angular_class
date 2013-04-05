'use strict';

angular.module('ex10.services', [])

    .factory('trials',
        ['$http', '$log',
            function ($http, $log) {
                return {
                	get : function(query) {
	                    $http.jsonp("http://api.lillycoi.com/v1/trials/search.json?" + 
	                                "query=cond:" + query +
	                                ",recr:open,count:20&fields=id,brief_title", {
	                        params: {
	                            callback: "JSON_CALLBACK",
	                            format: "json"
	                        }
	                    }).success(function (data, status) {
	                        $log.info('in get(): ', data);
	                        return {
	                        	trials     : data.results,
	                        	totalCount : data.totalCount
	                        }
	                    }).error(function (data, status) {
	                        $log.warn('failed: ', status);
	                        return {
	                        	trials     : [],
	                        	totalCount : 0
	                        }
	                    });
                	}
                };
            }]);

