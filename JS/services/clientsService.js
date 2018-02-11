app.service('clientsService', function($http) {
    var clientsData =  {
        getClients: function(){
            var clients = $http.get('data/data.json').then(function(res){
                return res.data.clients;
            });
            return clients;
        },
        
        addClient: function(newClient){
            
            var myNewClient = {
                address: newClient.address,
                age: parseInt(newClient.age),
                company: newClient.company,
                email: newClient.email,
                gender : newClient.gender,
                id : "59761c23b30d971669fb42ff1",
                isActive : true,
                name : newClient.name, 
                phone : newClient.phone
            }
            myNewClient = JSON.stringify(myNewClient);
            $http.post('data/data.json', myNewClient)
               .then(function (success) {
                  console.log(myNewClient);
               }, function (error) {
                  console.log('error');
               });
        },
        
        updateClient: function(inedx, selectedClient){
            console.log(inedx);
            console.log(selectedClient);
        },
        
        deleteClient: function(index, selectedClient){
            console.log(inedx);
            console.log(selectedClient);
        }
    }
    return clientsData;
});