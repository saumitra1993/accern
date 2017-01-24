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
                 file public/scripts/app.js. This file decides which template and controller will be injected depending on the route.
    3) footer-custom - Another custom directive with controller at public/scripts/controllers/footerController.js and template at
                       public/templates/footer.html
                       
                       

