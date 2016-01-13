myApp.controller('SomeController', ['$scope', function($scope){
    //Create the Character (user) on the $scope.
    $scope.user = {};

    $scope.someAwesomeFunction = function(){
        //Use the character information when the form is 'submitted'
        console.log("HERE IS THE USER", $scope.user);
        //Clear the character out now that you have hypothetically passed the character (user) along
        $scope.user = {};
    };
}]);

