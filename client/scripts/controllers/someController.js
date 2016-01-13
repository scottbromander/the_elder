myApp.controller('SomeController', ['$scope', function($scope){
    console.log("Some Controller");

    var user = {};

    $scope.someAwesomeFunction = function(submittedUser){
        console.log("HERE IS THE USER", submittedUser)
    };
}]);

