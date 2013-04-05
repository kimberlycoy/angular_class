'use strict';

angular.module('ex13.services', [])

    .factory('trials',
        ['$http', '$log', '$q',
            function ($http, $log, $q) {
                return {
                	get : function(query) {
                		var deferred = $q.defer();

	                    $http.jsonp("http://api.lillycoi.com/v1/trials/search.json?" + 
	                                "query=cond:" + query +
	                                ",recr:open,count:20&fields=id,brief_title", {
	                        params: {
	                            callback: "JSON_CALLBACK",
	                            format: "json"
	                        }
	                    }).success(function (data, status) {
	                        var return_data = {
	                        	trials     : data.results,
	                        	totalCount : data.totalCount
	                        };
                 	    	deferred.resolve(return_data);
	                    }).error(function (data, status) {
	                        $log.warn('failed: ', status);
                 	    	deferred.reject(status);	
	                    });

	                    return deferred.promise;
                	}
                };
            }]);

