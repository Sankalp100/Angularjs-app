var myGameApp = angular.module('myGameApp',[]);

myGameApp.controller("GameController",['$scope', function($scope){
   
    
    $scope.games = [
        {
            name: "tony",
            game: "pubg",
            rate: 50
        },
        {
            name: "grim",
            game: "cs:go",
            rate: 10
        },
        {
            name: "nova",
            game: "fifa",
            rate: 100
        }
    ];
}]);