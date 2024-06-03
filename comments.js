// Create web server
var express = require('express');
var app = express();
var port = 3000;

app.get('/comments', function(req, res) {
  res.send('Hello World!');
});

app.listen(port, function() {
  console.log('Server started on http://localhost:' + port);
});