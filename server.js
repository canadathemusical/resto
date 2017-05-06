var express = require("express");
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function(){
	console.log("App listening on port: " + PORT);
});