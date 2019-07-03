var app4 = angular.module('index',['ui.router']);

app4.config(['$stateProvider', function($stateProvider){
  $stateProvider
  .state('Plan', {
    url: '/Plan',
    templateUrl: 'templates/Plan/plan.html',
    controller: 'planController'
  })
  .state('planForm', {
    url: '/planForm',
    templateUrl: 'templates/Plan/planForm.html',
    controller: 'planController'
  })
  .state('planForm/', {
    url: '/planForm/:id',
    templateUrl: 'templates/Plan/planForm.html',
    controller: 'planController',
  })
  .state('Dietitian', {
    url: '/dietitian',
    templateUrl: 'templates/dietitian/dietitian.html',
    controller: 'dietitiansController'
  })
  .state('RecipeType', {
    url: '/recipetypes',
    templateUrl: 'templates/RecipeType/recipetype.html',
    controller: 'recipetypeController'
  })
  .state('Package', {
    url: '/packages',
    templateUrl: 'templates/Package/package.html',
    controller: 'packageController'
  })
  .state('add-package',{
    url: '/add-package',
    templateUrl: "templates/Package/add-package.html",
    controller: 'packageController'
  })
  .state('Group', {
    url: '/cus_groups',
    templateUrl: 'templates/Group/group.html',
    controller: 'groupController'
  })
  .state('Uom', {
    url: '/uoms',
    templateUrl: 'templates/Uom/uom.html',
    controller: 'uomController'
  })
  .state('Signup', {
    url: '/customer_signups',
    templateUrl: 'templates/CustomerSignUp/signup.html',
    controller: 'studentController'
  })
  .state('Recipe',{
    url: '/Recipe',
    templateUrl: "templates/Recipe/recipe.html",
    controller: "recipeController"
  })
  .state('RecipeIngreInfo',{
    url: '/RecipeIngreInfo',
    templateUrl: "templates/recipe_ingre_info/index.html",
    controller: "recipeIngController"
  })
  .state('Ingredients',{
    url: '/Ingredients',
    templateUrl: "templates/ingredients/index.html",
    controller: "ingredientsController"
  })
  .state('add-ingredients',{
    url: '/add-ingredients',
    templateUrl: "templates/ingredients/add-ingredients.html",
    controller: "ingredientsController"
  })
  .state('Customer-List',{
    url: '/Customer-List',
    templateUrl: "templates/Customer_list/index.html",
    controller: "studentController"
  })
  .state('Customer-Import',{
    url: '/Customer-Import',
    templateUrl: "templates/customer_import/customer-import.html",
    controller: "customerImportController"
  })
  .state('Customer-Package',{
    url: '/Customer-Package',
    templateUrl: "templates/customer_package/index.html",
    controller: "studentController"
  });
  
}
])

