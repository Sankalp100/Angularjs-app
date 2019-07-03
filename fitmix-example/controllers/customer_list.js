var myApp = angular.module('myApp', []);
myApp.controller('studentController', ['$scope', '$http', function($scope, $http) {

  //Buttons Settings
  $scope.submit = true;
  $scope.update = false;
  $scope.cancel = false;
  $scope.userid = true;

  //Getting Users List
  //$http GET function
  $http({
    method: 'GET',
    url: 'http://localhost:80/pRESTige-master/api/cus_imports'

  }).then(function successCallback(response) {

    $scope.users = response.data;

  }, function errorCallback(response) {

    alert("Error. Please Try Again!");

  });


  //Create New User
  $scope.createUser = function() {

    //$http POST function
    $http({

      method: 'POST',
      url: 'http://localhost:80/pRESTige-master/api/cus_imports',
      data: $scope.user

    }).then(function successCallback(response) {

      $scope.users.push(response.data);
      alert("Package has been created Successfully")

    }, function errorCallback(response) {

      alert("Error. Please Try Again!");

    });

  };


  //Update User
  $scope.updateUser = function() {

    //$http PUT function
    $http({

      method: 'PUT',
      url: 'http://localhost:80/pRESTige-master/api/cus_imports/' + $scope.user.package_id,
      data: $scope.user

    }).then(function successCallback(response) {

      alert("Package has been updated Successfully")

    }, function errorCallback(response) {

      alert("Error while updating package. Please Try Again!");

    });

  };


  //Delete User
  $scope.deleteUser = function(user) {

    //$http DELETE function
    $http({

      method: 'DELETE',
      url: 'http://localhost:80/pRESTige-master/api/cus_imports/' + user.package_id

    }).then(function successCallback(response) {

      alert("Package has been deleted Successfully");
      var index = $scope.users.indexOf(user);
      $scope.users.splice(index, 1);

    }, function errorCallback(response) {

      alert("Error. while deleting Group. Please Try Again!");

    });

  };

  //Set $scope on Edit button click
  $scope.editUser = function(user) {

    $scope.user = user;
    $scope.submit = false;
    $scope.update = true;
    $scope.cancel = true;
    $scope.userid = false;

  };


  //cancel Uodate
  $scope.cancelUpdate = function() {
    $scope.user = null;
    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.userid = true;
  };

 


}]);