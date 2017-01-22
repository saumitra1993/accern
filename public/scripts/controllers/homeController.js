angular.module("accern").controller("homeController", function($scope,appfactory,$q,$routeParams){
    
    $scope.name = '';
    $scope.email = '';
    $scope.subject = '';
    $scope.message = '';
    
    
    
    
    
    
    
    var acc = document.getElementsByClassName("accordion");
    console.log(acc);
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            console.log("Here")
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + 'px';
            } 
            console.log(this.childNodes);
            for (var j = 0; j < this.childNodes.length; j++) {
            
                if (this.childNodes[j].className.indexOf("fa fa-chevron-right acc-pointer") != -1) {
                    pointer = this.childNodes[j];
                    console.log(pointer.classList);
                    console.log(pointer.classList.contains("down"));

                    pointer.classList.toggle("down");
                    
                    
                    break;
                }        
            }
        }
        
        
    }
    
    
    
});