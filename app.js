const http = require("http");

http.createServer(function(req,res)
	{
		res.write("welcome to rsanyal.com!! :)");
		res.end();


	}).listen(3000);
