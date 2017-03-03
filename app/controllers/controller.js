var app = angular.module('app', []);

app.controller('AppCtrl', function($scope, $http) {
    $scope.refresh = function() {
        $http.get('/contactlist').success(function(response) {
            console.log('i got the data i requested');
            $scope.contacts = response;
            $scope.contact = '';
        });
    }
    $scope.refresh();
    console.log('eeee');
    $scope.addContact = function() {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(response) {
            console.log(response);
            $scope.refresh();
        });
    };
});