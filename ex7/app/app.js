'use strict';

angular.module('ex7', [])

    .config(['$routeProvider',
        function ($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'TrialsCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])

    // controllers
    .controller('TrialsCtrl',
        ['$scope', '$log', '$http',
            function ($scope, $log, $http) {
                $scope.$watch('query', function() {
                    var query = '';
                    if ($scope.query) {
                        query = $scope.query;
                    } 

                    $http.jsonp("http://api.lillycoi.com/v1/trials/search.json?" + 
                                "query=cond:" + query +
                                ",recr:open,count:20&fields=id,brief_title", {
                        params: {
                            callback: "JSON_CALLBACK",
                            format: "json"
                        }
                    }).success(function (data, status) {
                        $log.info(data);
                        $scope.trials = data.results;
                        $scope.totalCount = data.totalCount;
                    }).error(function (data, status) {
                        $log.warn('failed: ', status);
                        $scope.trials = [];
                        $scope.totalCount = 0;
                    });

                });

            }])


    // services
    .factory('servicename',
        [
            function () {
                // service actions
            }])


    // directives
    .directive('directivename', 
        [
        function () {
            return function (scope, element, attr) {
                // directive actions
            };
        }])

    // filters
    .filter('filtername', 
        [
        function() {
            return function(obj) {
                // filter actions
            };
        }]);
    
