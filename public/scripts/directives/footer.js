angular.module('accern').directive('footer', function(){
    return {
        restrict: 'E',
        templateUrl:'templates/footer.html',
        controller:'footerController'
        
    };
    
});