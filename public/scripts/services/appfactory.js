angular.module("accern").factory('appfactory',function($q,$rootScope,$window){

	var factory={};
	
	$rootScope.$on('section-out-of-view',function(event,data){
		$rootScope.$broadcast('out-of-view',data);
	}); 
	
	angular.element($window).bind('resize', function () {
        if($window.innerWidth <= 680){
        	zE.hide();
        }
    });  	  
	    
	return factory;	
    
    
});