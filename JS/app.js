var app = angular.module('myApp', []);
    
app.controller('myController', function($scope, $http) {
    $http.get('data/data.json').then(function (response) {
        $scope.clients = response.data.clients;
        $scope.searchVlue = '';
        $scope.orderValue = '+name';
        $scope.orderStatus = '+';
        $scope.slectedClient = null;
        $scope.clientClicked = function(row){
            $scope.slectedClient = row;
            console.log($scope.slectedClient);
        };
        $scope.changeOrder = function(orderName){
            if($scope.orderStatus === '+'){
                $scope.orderStatus = '-';
            } else{
                $scope.orderStatus = '+';
            }
            $scope.orderValue = $scope.orderStatus + orderName;
        }
    });
});