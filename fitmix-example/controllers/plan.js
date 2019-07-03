(function () {

  angular.module('index').controller('planController', planController);

  planController.$inject = ['$scope', '$http', '$state', '$location', '$stateParams'];


  function planController($scope, $http, $window, $location, $state, $stateParams) {

    console.log($stateParams.id);
    //Buttons Settings
    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.userid = true;

    //Getting Users List
    //$http GET function
    $http({
      method: 'GET',
      url: 'http://localhost:80/pRESTige-master/api/plans'

    }).then(function successCallback(response) {

      $scope.users = response.data;

    }, function errorCallback(response) {

      alert("Error. Try Again!");

    });


    //Create New User
    $scope.createUser = function () {

      //$http POST function
      $http({

        method: 'POST',
        url: 'http://localhost:80/pRESTige-master/api/plans',
        data: $scope.user

      }).then(function successCallback(response) {

        $scope.users.push(response.data);
        $scope.user = '';
        // $state.go("Plan");
        // $window.location.href = '/templates/Plan/plan.html';
        alert("Plan has created Successfully");
        $location.path('/Plan');
      }, function errorCallback(response) {

        alert("Error. while created plan Try Again!");

      })
    };

    //Ex-Update User
    if ($stateParams.id) {
      $scope.Id = $stateParams.id;

      $http.get('http://localhost:80/pRESTige-master/api/plans' + $scope.Id).success(function (data) {
        $scope.plan_code = data.plan_code;
        $scope.plan_name = data.plan_code;
        $scope.description = data.description;
        $scope.isCustomPlan = data.isCustomPlan;
        $scope.isDefault = data.isDefault;
        $scope.isActive = data.isActive;
        //$scope.DepartmentID = data.DepartmentID

      });
      console.log($scope.plan_code);
    }

    $scope.Update = function () {
      debugger;
      var employeeData = {
        iD: $scope.Id,
        plan_code: $scope.plan_code,
        plan_name: $scope.plan_name,
        description: $scope.description,
        isCustomPlan: $scope.isCustomPlan,
        isDefault: $scope.isDefault,
        isActive: $scope.isActive
      };
      if ($scope.Id > 0) {

        $http.put("api/employee/UpdateEmployee", employeeData).success(function (data) {
          $location.path('/EmployeeList');
        }).error(function (data) {
          console.log(data);
          $scope.error = "Something wrong when adding updating employee " + data.ExceptionMessage;
        });
      }
    }

    //Update User
    // $scope.updateUser = function () {

    //   //$http PUT function
    //   $http({

    //     method: 'PUT',
    //     url: 'http://localhost:80/pRESTige-master/api/plans/' + $scope.user.id,
    //     data: $scope.user

    //   }).then(function successCallback(response) {

    //     alert("Plan has updated Successfully")

    //   }, function errorCallback(response) {

    //     alert("Error. while updating plan Try Again!");

    //   });

    // };


    //Delete User
    $scope.deleteUser = function (user) {

      //$http DELETE function
      $http({

        method: 'DELETE',
        url: 'http://localhost:80/pRESTige-master/api/plans/' + user.id

      }).then(function successCallback(response) {

        alert("Plan has deleted Successfully");
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);

      }, function errorCallback(response) {

        alert("Error. while deleting plan Try Again!");

      });

    }

    //Set $scope on Edit button click
    $scope.editUser = function (user) {

      $scope.user = user;
      $scope.submit = false;
      $scope.update = true;
      $scope.cancel = true;
      $scope.userid = false;

    };


    //cancel Uodate
    $scope.cancelUpdate = function () {
      $scope.user = null;
      $scope.submit = true;
      $scope.update = false;
      $scope.cancel = false;
      $scope.userid = true;
    };

  }
})();
