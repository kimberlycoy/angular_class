'use strict';

angular.module('ex11.controllers',[])
    .controller('TrialsCtrl',
        ['$scope', '$log', '$http', 'trials',
            function ($scope, $log, $http, trials) {
                $scope.$watch('query', function() {
                    var query = '';
                    if ($scope.query) {
                        query = $scope.query;
                    }

                    $scope.trialData = trials.get(query);

                });
            }]);
