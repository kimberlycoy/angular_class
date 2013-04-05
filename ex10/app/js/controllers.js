'use strict';

angular.module('ex10.controllers',[])
    .controller('TrialsCtrl',
        ['$scope', '$log', '$http', 'trials',
            function ($scope, $log, $http, trials) {
                $scope.$watch('query', function() {
                    var query = '';
                    if ($scope.query) {
                        query = $scope.query;
                    } 

                    var data = trials.get(query);
                    $log.warn('after get(): ', data);

                    $scope.trials     = data.trials;
                    $scope.totalCount = data.totalCount;
                });
            }]);
