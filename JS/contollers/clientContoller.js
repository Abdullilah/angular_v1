app.controller('clientContoller', function($scope, $http, clientsService) {
    
    clientsService.getClients().then(function(data){
        $scope.clients = data;
    });
    
    $scope.searchVlue = '';
    $scope.orderValue = '+name';
    $scope.orderStatus = '+';
    $scope.slectedClient = null;
    $scope.showPanel = false;
    $scope.newClient = {};
    $scope.clientClicked = function(row){
        $scope.slectedClient = row;
    };

    $scope.changeOrder = function(orderName){
        if($scope.orderStatus === '+'){
            $scope.orderStatus = '-';
        } else{
            $scope.orderStatus = '+';
        }
        $scope.orderValue = $scope.orderStatus + orderName;
    }

    $scope.panelClicked = function(){
        $scope.showPanel = !$scope.showPanel;
    }

    $scope.addClient = function(){
        $scope.clients.push($scope.newClient);
        clientsService.addClient($scope.newClient);
        $scope.showPanel = false;
        $scope.newClient = {};
    }

    $scope.updateClient = function(){
        var index = $scope.clients.indexOf($scope.slectedClient);
        clientsService.updateClient(index ,$scope.slectedClient);
    }
    
    $scope.deleteClient = function(){
        var index = $scope.clients.indexOf($scope.slectedClient);
        $scope.clients.splice(index, 1);
        clientsService.deleteClient(index ,$scope.slectedClient);
    }
});