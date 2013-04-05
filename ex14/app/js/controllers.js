'use strict';

angular.module('ex14.controllers',[])
    .controller('TrialsCtrl',
        ['$scope', '$log', '$http', '$location', 'trials',
            function ($scope, $log, $http, $location, trials) {
                $scope.includeButton = true;

                $scope.gotoNextPage = function() {
                    $location.path('/nextpage');
                };

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
            }])

    .controller('NextPageCtrl',
        [
            function () {
            }])

    ;
