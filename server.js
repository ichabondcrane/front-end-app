/*
var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

var app = express();
app.set('port', (process.env.PORT || 8000));

app.use('/', express.static(__dirname + 'dist/'));
app.use('/scripts', express.static(__dirname + 'node_modules'));
//app.use('/css', express.static(__dirname + '/../'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function(req, res, next) {
    if (path.extname(req.path).length > 0) {
        next();
    } else {
        console.info('sending app');
        res.sendFile(path.resolve(__dirname + '/dist/mueller-app/index.html'));
    }
});

app.listen(app.get('port'), function() {
    console.log('Angular2  listening on port ' + app.get('port'));
});
*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/src/index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.listen(3004, function() {
        console.log('Example app listening on port 3000!');
    });
} else {
    app.listen(8080, function() {
        console.log('Example app listening on port 8080!');
    });
}
module.exports = app;