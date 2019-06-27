var myApp = angular.module('myApp', []);
myApp.controller('studentController', ['$scope','$rootScope', '$http', function ($scope, $rootScope, $http) {

    //Buttons Settings
    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.userid = true;

    //Getting JSON data
    // $http.get('new.json').success(function (data) {
    //     $scope.phones = data;
    // });
    // $scope.orderProp = 'age';


    //$http GET function
    $http({
        method: 'GET',
        url: 'http://localhost:80/pRESTige-master/api/userslist'

    }).then(function successCallback(response) {

        $rootScope.users = response.data;


    }, function errorCallback(response) {

        alert("Error. Try Again!");

    });
    

    // $http({
    //     method: 'GET',
    //     url: 'http://localhost:80/pRESTige-master/api/files'

    // }).then(function successCallback(response) {

    //     $scope.files = response.data;


    // }, function errorCallback(response) {

    //     alert("Error. Try Again!");

    // });
    var json = {};
    $http.get('new.json').then(function(response) {

        $scope.new = response.data;
        

        //$rootScope.json = response.data;
         console.log($scope.new);
     });
     console.log($rootScope.json);

    //Create New User
    $scope.createUser = function () {

        //  var postData = [];

        // var postUser = {};
        // postUser.firstname = users[0].firstName;


        // postData.push(postUser);

        //$http POST function
        recCall(0);
        function recCall(j){
            //for(var i=j;i<=$rootScope.user.length;i++){
            var i=j;
            if(i<=$rootScope.users.length){
            $scope.new.username=$rootScope.users[i].username;
            $scope.new.firstname=$rootScope.users[i].firstname;
            $scope.new.lastname=$rootScope.users[i].lastname;
            $scope.new.email=$rootScope.users[i].email;

            $http({

                method: 'POST',
                url: 'https://test1.beperfeqta.com/v33040/api/users',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': "1561625530937_5c76a4759fdcda4e9f17122d"
                },
                // url: 'http://localhost:80/pRESTige-master/api/files',
                data: $scope.new,

            }).then(function successCallback(response) {
                // console.log(response.data);
                recCall(i+1);
                // $rootScope.json.push(response.data);
                alert("user has been created Successfully")

            }, function errorCallback(response) {
                recCall(i+1);
                alert("Error. while creating users. PLease Try Again!");

            });
        }
        }
        
    };
    


    //Update User
    $scope.updateUser = function () {

        //$http PUT function
        $http({

            method: 'PUT',
            url: 'new.json' ,
            data: $scope.user

        }).then(function successCallback(response) {

            alert("JSON has been updated Successfully")

        }, function errorCallback(response) {

            alert("Error. while updating json . Please Try Again!");

        });

    };


    //Delete User
    $scope.deleteUser = function (user) {

        //$http DELETE function
        $http({

            method: 'DELETE',
            url: 'http://localhost:80/pRESTige-master/api/procedures/customer_package/' + user.dietitian_id

        }).then(function successCallback(response) {

            alert("dietitian has been deleted Successfully");
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);

        }, function errorCallback(response) {

            alert("Error. while deleting dietitian . Please Try Again!");

        });

    };

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



}]);