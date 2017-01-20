angular.module('accern', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
   .when('/',                                      
    {controller:'homeController',
    templateUrl:'templates/home.html'})
   
  .otherwise({
       redirectTo: '/'
   });
});

