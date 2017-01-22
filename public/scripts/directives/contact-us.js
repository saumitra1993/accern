angular.module('accern').directive('contactusForm', function(){
    return {
        restrict: 'E',
        templateUrl:'templates/contactus-form.html',
        controller:'contactUsFormController'
        
    };
    
});