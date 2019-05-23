var myGameApp = angular.module('myGameApp',['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directry',{
            templateUrl: 'views/directory.html',
            controller: 'GameController'
        }).otherwise({
            redirectTo: '/home'
        });
}]);

myGameApp.controller("GameController",['$scope', function($scope){
    
    $scope.removeGame = function(game){
        var removedGame = $scope.games.indexOf(game);
        $scope.games.splice(removedGame, 1)
    };

    $scope.addGammer = function(){
        $scope.games.push({
            name: $scope.newgammer.name,
            game: $scope.newgammer.game,
            rate: parseInt($scope.newgammer.rate),
            available: true
        });
        $scope.newgammer.name="";
        $scope.newgammer.game="";
        $scope.newgammer.rate="";
    };


    $scope.games = [
        {
            name: "tony",
            game: "pubg",
            rate: 50,
            available: true
        },
        {
            name: "grim",
            game: "cs:go",
            rate: 10,
            available: false
        },
        {
            name: "nova",
            game: "fifa",
            rate: 100,
            available: true
        }
    ];
}]);