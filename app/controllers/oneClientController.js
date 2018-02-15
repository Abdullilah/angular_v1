app.controller('oneClientController', function($scope, $http, clientsService, $routeParams){
    clientsService.getClients().then(function(response){
        var clients = response;
        $scope.client = clients.filter(client => client.id === $routeParams.index)[0];
    });
});
