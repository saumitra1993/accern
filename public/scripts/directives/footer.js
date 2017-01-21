angular.module('accern').directive('footerCustom', function(){
    return {
        restrict: 'E',
        templateUrl:'templates/footer.html',
        controller:'footerController'
        
    };
    
});