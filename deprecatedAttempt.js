//Imports
	//Routing/HTTP/...: http://expressjs.com/
	var express = require('express');
	var angular = require('angular');

//Setup
	//Initialize express inside var app & make it public
	var app		= module.exports	= express();
	var server 	= require('http').Server(app);

//Running the server
	app.get('/', function (req, res) {
	  res.send('Hello World!')
	  res.render('./views/index.html')
	})


//Let's get started with AngularJS!
var todoSPApp = angular.module('todoSPApp', [])

todoSPApp.controller('todoController', ['$scope', function() {
	$scope.todos = [
		{ id : 1, name : 'First todo', done : false},
		{ id : 2, name : 'Second todo', done : true}
	]
}])




//THEN we listen
	var server = app.listen(3000, function () {
	  var host = server.address().address
	  var port = server.address().port
	  console.log('Example app listening at http://%s:%s', host, port)
	})



