angular.module('accern', ['ngRoute'])
.config(function($locationProvider,$routeProvider){
    
    $routeProvider
    .when('/',                                      
    {controller:'homeController',
    templateUrl:'templates/home.html'})

    .when('/company',                                      
    {controller:'companyController',
    templateUrl:'templates/company.html'})

    .otherwise({
       redirectTo: '/'
    });
});

