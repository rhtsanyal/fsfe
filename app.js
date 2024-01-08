const http = require("http");

http
  .createServer(function (req, res) {
    res.write("welcome to rsanyal.com!! :)\n");
    res.write("still learning :)\n");
    res.write("still learning :) added some more!\n");
    res.write("Ab to hogi chudai :D");
    res.end();
  })
  .listen(3000);
