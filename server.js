var app = require('express')();
var serveStatic = require('serve-static');

app.use(serveStatic(__dirname + '/public'));

app.listen(4000);
console.log('Server start on 4000');
