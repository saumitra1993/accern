angular.module("accern").controller("homeController", function($scope,appfactory,$q,$routeParams,$window, $animate){
    
   
    
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

    $scope.features1 = [{head:"Use Trading Analytics", description:"We derive analytics such as sentiment, impact, news exposure, news reliability rankings, and much more from each article."},
                        {head:"Trade On Early News", description:"Our massive coverage of 300 million websites allows us to find and deliver early stories on U.S. public equities to our customers."},
                        {head:"Build Custom Alerts",description:"Our app allows you to build custom news alerts geared specifically towards your trading strategy. If requested, we can even help you build them."}
                        ];

    $scope.features2 = [{head:"Flexible Low-Latency API Feed",description:"Our push-based low-latency JSON API feed can aggregate data based on specific time frames or filter data based on companies."},
                        {head:"API Data Fields",description:"Our API data feed includes article metadata such as URLs, events, companies, and derived analytics such as sentiment."},
                        {head:"4 Years Of History",description:"We have over four years of historical data, which includes article headlines and URLs. Historical data are provided upon request."}
                        ];
    
        
   /* var acc = document.getElementsByClassName("accordion");
    console.log(acc);
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            console.log("Here")
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel 
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel 
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
    */
    
    
});

angular.module("accern").directive('expandAccordionPanel', [function() {

  function link(scope, element, attrs) {
    var open,
        timeoutId;

    function updateVisibility() {
        if(open){
            var height = element[0].scrollHeight;
            element[0].style.maxHeight = height + "px";    
        }
        else{
            element[0].style.maxHeight = 0;       
        }
        
    }

    scope.$watch(attrs.expandAccordionPanel, function(value) {
      open = value;
      updateVisibility();
    });

    
  }

  return {
    link: link
  };

}]);