angular.module("accern").controller("contactController", function($scope,appfactory,$q,$routeParams){
    
    $scope.visibilityChange = function(inview){
        
        $scope.$emit('section-out-of-view',inview);
        
   	}; 
    
    
});