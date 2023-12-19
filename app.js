const http = require("http");

http
  .createServer(function (req, res) {
    res.write("welcome to rsanyal.com!! :)");
    res.write("still learning :)");
    res.end();
  })
  .listen(3000);
