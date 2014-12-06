var app = require('express')();

app.get('/', function (req, res) {
    res.render('main.jade');
});

var server = app.listen(3000);