var app = angular.module('myApp', []);
    
app.controller('myController', function($scope, $http) {
    $http.get('data/data.json').then(function (response) {
        $scope.clients = response.data.clients;
        $scope.slectedClient = null;
        $scope.clientClicked = function(row){
            $scope.slectedClient = row;
            console.log($scope.slectedClient);
        }
    });
});