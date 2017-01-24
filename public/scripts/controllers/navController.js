angular.module("accern").controller("navController", function($scope,appfactory,$q,$routeParams){
    
    $scope.setResponsive = false;
    
    $scope.$on('out-of-view',function(event,inview){

    	$scope.putBackground = !inview;
    	//console.log(inview);
    });
    
    $scope.setResponsiveFlag = function(setResponsive){
        if(setResponsive == true) {
            $scope.setResponsive = false;
        } 
    };
});