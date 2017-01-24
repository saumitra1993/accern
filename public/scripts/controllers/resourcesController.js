angular.module("accern").controller("resourcesController", function($scope,appfactory,$window,$q,$routeParams){
    
    
    if($window.innerWidth <= 480){
        
        $scope.$emit('section-out-of-view',false);
        $scope.visibilityChange = function(inview){
        };
    }
    else{
        $scope.visibilityChange = function(inview){
        
            $scope.$emit('section-out-of-view',inview);

       }; 
    }
    
    
});