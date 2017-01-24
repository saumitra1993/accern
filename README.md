# accern

The project has the following folders and files at its root - 

    1)node_modules
    2)public
    3)routes
    4)sass
    5)views
    6)index.js

Let's start with "index.js" file - 

    1) It sets up a simple ExpressJS server running atop NodeJS. It also has a SASS middleware
    that copies stylesheets present at /sass, compiles it and puts the result at public/stylesheets. 

    2) It sets up the root URL and returns the file "index.ejs" present inside views folder. EJS is just used to support the 
    rendering engine supported by Express and is a simple HTML file.

Now, let's go to "index.ejs" present inside the views folder - 

    1) It bootstraps up the Angular webapp with the ng-app directive. 

    2) The markup has three tags - 

        1) navbar - It's a custom directive that has its own controller at public/scripts/controllers/navController.js and 
                    template at public/templates/navbar.html.
        2) ng-view - It's the container where the routes are dynamically injected as the user navigates across the site. Go to the
                     file public/scripts/app.js. This file decides which template and controller will be injected depending on the  route.   
        3) footer-custom - Another custom directive with controller at public/scripts/controllers/footerController.js and template at public/templates/footer.html
        
From "app.js", all the different routes and their respective controllers can be traced. 


Let's go to the "sass" folder - 

    1) The file "index.scss" includes all the other .scss files. 
    
    2) Each scss file controls a page in the site. 
    
    3) The "globals.scss" and "mixins.scss" have reusable components used throughout the site.
    
    4) The "media.scss" file has the media queries that makes the site responsive.
    
    
External libraries used - 

    1) Angular.JS 1.x
    
    2) Angular-route.js (for navigation and routing)
    
    3) Angular-inview (directive to notify when a section is inside/outside the viewport
    
    4) The Zendesk embeddable code enabling the widget. (the Support button at bottom-right)
    
    
    
Note:- 
    
    1) The tabs "Home","Company","Resources" and "Contact" have been covered. The login tab was leading on a different layout and hence not covered.
    
    2) The download links and external links are not wired to their respective locations since it seemed unnecessary. 
    




