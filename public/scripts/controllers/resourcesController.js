angular.module("accern").controller("resourcesController", function($scope,appfactory,$q,$routeParams){
    
    
    $scope.visibilityChange = function(inview){
        
        $scope.$emit('section-out-of-view',inview);
        
    }; 
    
    
});