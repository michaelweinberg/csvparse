var hapi = require("hapi");
var server = new hapi.Server();
var fs = require("fs");
var $ = jQuery = require('jquery');
require('./js/jquery-csv.js');


		
		
		var server = new hapi.Server();
			//this server runs on http://localhost:8080
			server.connection({ port: 8080 });
			//load Handlebars for view support on .hbs files
			
			
			//start the server's active listening process
			server.start(function() {
			  console.log(server.info);
			});
		
		
		fs.readFile("book1.csv", "utf8", function(err,data){		
			var fileImport = $.csv.toArray(data);
			console.log(fileImport);
			var result  = new Array();
			function cleanArray(input){
				  
				  for(var i = 0; i<input.length; i++){
				      if (input[i]){
				        result.push(input[i]);
				    }
				  }
				  return result;
				}
			cleanArray(fileImport);
				
				console.log(result);
				// result.replace('zzzzz',);
				// console.log(result);
			  fs.writeFile("newfile.csv", result, function(err) {
			    //on error, let the user know
			    if (err) return console.log("Couldn't write to the file!");
			    //otherwise, log success
			    console.log("Wrote file: ", result);
			  
    
  });	
				
			});

	


		  
		
