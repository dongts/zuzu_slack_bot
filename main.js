const bodyParser = require('body-parser');
const express = require('express');

var webserver = express();

webserver.enable('trust proxy'); // For using with Heroku
webserver.use(bodyParser.json());
webserver.use(bodyParser.urlencoded({ extended: true }));

webserver.get('/', function (req, res) {
   res.send('Hello World');
})

var server = webserver.listen(process.env.PORT || 8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
