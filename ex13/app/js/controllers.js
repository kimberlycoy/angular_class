'use strict';

angular.module('ex13.controllers',[])
    .controller('TrialsCtrl',
        ['$scope', '$log', '$http', 'trials',
            function ($scope, $log, $http, trials) {
                $scope.$watch('query', function() {
                    var query = '';
                    if ($scope.query) {
                        query = $scope.query;
                    } 

                    var promise = trials.get(query);

                    promise.then(function(data) {
                        $scope.trials     = data.trials;
                        $scope.totalCount = data.totalCount;
                    }, function(reason) {
                        $log.warn('after get() failure: ', reason);
                        $scope.trials     = [];
                        $scope.totalCount = 0;
                    });
                });
            }]);
