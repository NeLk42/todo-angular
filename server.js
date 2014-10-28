// NodeJS & Express // server.js

// set up ========================
    var express = require('express');
    var app = express();                            // create our app w/ express
    var logger = require('morgan');                 // log requests to the console (express4)
    var bodyParser = require('body-parser');        // pull information from HTML POST (express4)
    var path = require('path');                     // 

// Configuration
    app.set('port', process.env.PORT || 3000);

    app.use(logger('dev'));                         // log every request to the console
    app.use(bodyParser.json());                     // parse application/json
    app.use(bodyParser.urlencoded());               // parse application/x-www-form-urlencoded
    app.use(express.static(path.join(__dirname, 'public')));    //using path to join dirname & public

//Routing to AngularJS
    app.all('/', function(req, res, next) {
        console.log('Someone made a request!');
    });

    app.get('/', function(req, res) {
        // res.sendFile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
        // res.render('./views/index.html')
        return res;
    });

//Start listening to requests
    var server = app.listen(app.get('port'), function() {
        // var host = server.address().address                                  //Example from expressjs.com
        // var port = server.address().port                                     //Example from expressjs.com
        // console.log('Example app listening at http://%s:%s', host, port)     //Example from expressjs.com
        console.log('Express server listening on port ' + app.get('port'));
    });

//Errors
    /// catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

///Error Handling

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

//Export the app (make it public)
module.exports = app












