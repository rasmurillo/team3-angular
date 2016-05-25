//archivo de inicio
//configuraciones
var express = require('express');
var app = express();
//mongoose
var mongoose = require('mongoose');
//morgan
var morgan = require('morgan');
// body parse
var bodyParse = require('body-parser');
//method overrider
var methodOverride = require('method-override');

var database = require('./config/database')

mongoose.connect(database.localUrl);

app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));
app.use(bodyParse.urlencoded({'extended':'true'}));
app.use(bodyParse.json());
app.use(bodyParse.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

//configarando routes NodeJS
require('./server/routes.js')(app);
//listen
app.listen(8080);// process.env.PORT
console.log('... la aplicacion app esta ejecutandose en el puerto 8080')
