angular.module('accern').directive('navbar', function(){
    return {
        restrict: 'E',
        templateUrl:'templates/navbar.html',
        controller:'navController'
        
    };
    
});