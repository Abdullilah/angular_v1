var app = angular.module('myApp', ['ngRoute']);
        
app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/main', {
        templateUrl: 'app/pages/main.html', 
        controller: 'mainController',
        css: 'css/style.css'
    })
    .when('/main/:index', {
        templateUrl: 'app/pages/oneClient.html', 
        controller: 'oneClientController',
        css: 'css/style.css'
    })
    .when('/men', {
        templateUrl: 'app/pages/menClients.html',
        controller: 'menWomenController',
        css: 'css/style.css'
    })
    .when('/women', {
        templateUrl: 'app/pages/womenClients.html',
        controller: 'menWomenController',
        css: 'css/style.css'
    })
    .otherwise({
        redirectTo: '/main'
    });
    $locationProvider.html5Mode(true);
});

app.service('clientsService', function($http) {
    var clientsData =  {
        getClients: function(){
            var clients = $http.get('data/data.json').then(function(res){
                return res.data.clients;
            });
            return clients;
        }
    }
    return clientsData;
});