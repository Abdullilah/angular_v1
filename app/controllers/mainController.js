app.controller('mainController', function($scope, $http, clientsService){
    clientsService.getClients().then(function(response){
        $scope.clients = response;
    });

    $scope.filterWord = '';
    $scope.orderWord = '+name';
    $scope.orderStatus = false;
    $scope.selectedClient = {};

    $scope.changeOrder = function (newOrderWord) {
        $scope.orderWord = newOrderWord;
    }

    $scope.changeOrderByClick = function (newOrderWord) {
        var newOrderValue;
        if($scope.orderStatus){
            newOrderValue = '+' + newOrderWord;
            $scope.orderStatus = !$scope.orderStatus;
        } else{
            newOrderValue = '-' + newOrderWord;
            $scope.orderStatus = !$scope.orderStatus;
        }
        $scope.orderWord = newOrderValue;
    }
    
    $scope.deleteClient = function (client) {
        var clientIndex = $scope.clients.indexOf(client);
        if(confirm("Are You Sure?")){
            $scope.clients.splice(clientIndex, 1);
        }
    }

    $scope.clientClicked = function (selectedClient) {
        $scope.selectedClient = selectedClient;
    }
});