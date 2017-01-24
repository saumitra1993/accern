angular.module("accern").factory('appfactory',function($q,$http,$rootScope,$window){

	var factory={};
	
	$rootScope.$on('section-out-of-view',function(event,data){
		$rootScope.$broadcast('out-of-view',data);
	}); 
    
    factory.sendQuery = function(name,email,subject,message){
        var defer = $q.defer();
        $http({
            method: 'POST',
            url: '/contact',
            data : {name:name,email:email,subject:subject,message:message}
        }).then(function successCallback(response) {
            defer.resolve(response);
          }, function errorCallback(response) {
            
          });
        
        return defer.promise;
    };


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