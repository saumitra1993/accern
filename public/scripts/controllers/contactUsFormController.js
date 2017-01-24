angular.module("accern").controller("contactUsFormController", function($scope,appfactory,$q,$routeParams,$animate){
    
    
    $scope.name_label = "Name";
    $scope.email_label = "Email";
    $scope.subject_label = "Subject";
    $scope.message_label = "Message";
    $scope.feedback_message = '';
    
    $animate.on('addClass',document.getElementById("form-submit-btn"),function(element,phase){
        console.log(element);
        console.log(phase);
        if(phase == 'close'){
            element[0].classList.toggle("shake");
        }
    });
    
    $scope.submit = function(name,email,subject,message){
        console.log("Here");
        appfactory.sendQuery(name,email,subject,message).then(function(res){
            console.log(res);
            $scope.feedback_message = res.data.message;
            $scope.name = null;
            $scope.email = null;
            $scope.message = null;
            $scope.subject = null;
            $scope.contactUsForm.$setUntouched();
            $scope.contactUsForm.$setPristine();
        },function(err){
            console.log(err); 
        });
    };
});