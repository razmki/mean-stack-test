var app = angular.module('app', []);

app.controller('AppCtrl', function($scope, $http) {
    $scope.refresh = function() {
        $http.get('/contactlist').success(function(response) {
            $scope.contacts = response;
            $scope.newContact = '';
        });
    }

    $scope.refresh();

    $scope.addContact = function() {
        $http.post('/contactlist', $scope.newContact).success(function(response) {
            $scope.refresh();
        });
    };
    $scope.removeContact = function(id) {
        $http.delete('/contactlist/' + id).success(function(response) {
            console.log('deleteResponse:  ', response);
            $scope.refresh();
        });
    };
    $scope.editContact = function (id) {
        console.log(id);
        $http.get('/contactlist/' + id).success(function(response) {
            $scope.newContact = response;
        })
    };
    $scope.updateContact = function () {
        $http.put('/contactlist/' + $scope.newContact._id, $scope.newContact).success(function (response) {
            $scope.refresh();
        })
    }
});