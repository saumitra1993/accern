angular.module("accern").controller("contactController", function($scope,appfactory,$q,$window,$routeParams){
    
    
        
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