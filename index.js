var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    sass    = require('node-sass'),
    path    = require('path');
var sassMiddleware = require('node-sass-middleware');
var app = module.exports = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(methodOverride());
//app.use(app.router);

app.use(sassMiddleware({
     src: __dirname + '/sass', 
     dest: __dirname + '/public/stylesheets',
     prefix:  '/stylesheets',
     debug: true,         
 })
);   

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.render('index');
});

app.post('/contact', function (req, res) {
  res.json({message:"Thank you for reaching out to us. We will get back to you within 3 hours."});
});
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});
