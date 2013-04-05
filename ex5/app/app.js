
function TrialsCtrl($scope, $log) {
    $scope.trials = [
        { 
            id : "NC001", 
            title : "Headaches",
            description: "This is the trial for condition NC001"
        },
        { 
            id : "NC002", 
            title : "Backaches",
            description: "This is the trial for condition NC002"
        },
        { 
            id : "NC003", 
            title : "Back pain",
            description: "This is the trial for condition NC003"
        }
    ];

    $scope.$watch('query', function() {
        if ($scope.query) {
            $log.log('query has changed: ', $scope.query);
        }
    });
}
