angular.module("accern").controller("companyController", function($scope,appfactory,$q,$routeParams){
    
     $scope.partners1 = ["IBM Investment Solutions","Bloomberg App Store","Interactive Brokers Marketplace","Quantopian Data Store"];
    $scope.partners2 = ["Quandl Store","QuantConnect Store","StockTwits Ad Partner","Benzinga Distribution Partner"];
    
    $scope.getImageSrc = function(partner){
        console.log(partner);
        path_arr =  partner.split(' ');
        path_arr.push("logo");
        path = "images/" + path_arr.join('-').toLowerCase()+".png";
        return path;
    };
    
});