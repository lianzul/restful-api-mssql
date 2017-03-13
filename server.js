var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
    console.log(req.body);
});

//Setting up server
 var server = app.listen(config.server.port || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
    user:  config.database.user,
    password: config.database.password,
    server: config.database.host,
    database: config.database.db
};

//Function to connect to database and execute query
var executeQuery = function(res, query){             
	sql.connect(dbConfig, function (err) {
		if (err) {   
			console.log("Error while connecting database :- " + err);
			res.send(err);
		}
		else {
		    // create Request object
		    var request = new sql.Request();
		    // query to the database
		    request.query(query, function (err, res) {
		        if (err) {
		            console.log("Error while querying database :- " + err);
		    	    res.send(err);
		        } else {
		        	console.log(res);
		            //res.send(res);
		        }
		    });
		}
	});           
}

//GET API
app.get("/api/contact", function(req , res){
	console.log("get contact");
    var query = "select top 1 * from [contact]";
    executeQuery(res, query);
});