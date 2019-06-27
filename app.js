var app = angular.module('app', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'home.html'
    })
    .state('home.list', {
      url:'/list',
      templateUrl: 'home.list.html',
      controller: function($scope) {
        $scope.items = ['Item 1','Item 2','Item 3','Item 4']
      }
    })
    .state('home.paragraph', {
      url:'/paragraph',
      templateUrl: 'home.paragraph.html'
    })
    .state('products', {
      url:'/products',
      templateUrl: 'products.html'
    })
    .state('products.intro', {
      url:'/products/intro',
      templateUrl: 'products.intro.html'
    })
    .state('products.list', {
      url:'/products/list',
      templateUrl: 'products.list.html'
    })
    .state('products.another', {
      url:'/products/another',
      templateUrl: 'products.another.html'
    });
}]);