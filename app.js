// var bodyParser = require('body-parser')
// var createError = require('http-errors');
var express = require('express');
app = express()
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// conect to database
var MongoClient = require('mongodb').MongoClient
//mongodb://esther:esther@7@ds233452.mlab.com:33452/crud
//mongodb://localhost:27017/
var url = "mongodb://localhost:27017/"
MongoClient.connect(url,{useNewUrlParser:true}, (err, client) => {
    if (err) throw err
    var db = client.db('dashboard')
    app.use(function(req,res,next){ //gives the routes access to the database
        req.db = db;
        next();
    });
    app.use('/', indexRouter)
})



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('/public', express.static('public'));



module.exports = app;
