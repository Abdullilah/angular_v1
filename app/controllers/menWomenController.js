app.controller('menWomenController', function($scope, $http, clientsService){
    clientsService.getClients().then(function(response){
        $scope.clients = response;
    });
});