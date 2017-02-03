var express = require('express');
var webserver = express();

webserver.enable('trust proxy'); // For using with Heroku
webserver.use(limiter);
webserver.use(bodyParser.json());
webserver.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
