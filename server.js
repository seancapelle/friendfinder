//Dependancies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express configuration
var app = express();
var PORT = 3000;

//Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Router
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//Listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

//totalDifference

//Package the questions, send through URL using AJAX. "Form data object" to package and send

//Unpackage on server side

//var formData = new FormData()
//formData.append("csv")

//$.ajax({
//	post
//})

//consolel.log(req.body)

//res.jsonp(arr);
//console.log("Done");

