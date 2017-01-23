angular.module("accern").factory('appfactory',function($q,$rootScope,$window){

	var factory={};
	
	$rootScope.$on('section-out-of-view',function(event,data){
		$rootScope.$broadcast('out-of-view',data);
	}); 


	if($window.innerWidth <= 680){
    	zE(function() {
		    zE.hide();
		});
    }
	
	angular.element($window).bind('resize', function () {
        if($window.innerWidth <= 680){
        	zE.hide();
        }
        else{
        	zE.show();
        }
    });  	  
	    
	return factory;	
    
    
});