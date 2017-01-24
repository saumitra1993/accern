angular.module("accern").controller("companyController", function($scope,appfactory,$q,$window,$routeParams){
    
    $scope.partner_rows = [["IBM Investment Solutions","Bloomberg App Store","Interactive Brokers Marketplace","Quantopian Data Store"], ["Quandl Store","QuantConnect Store","StockTwits Ad Partner","Benzinga Distribution Partner"]];
    
    
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
    $scope.getImageSrc = function(partner){
        
        path_arr =  partner.split(' ');
        path_arr.push("logo");
        path = "images/" + path_arr.join('-').toLowerCase()+".png";
        return path;
    };
    
});