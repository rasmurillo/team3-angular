//Archivo de Inicio
//Configuraciones

//Express
var express = require('express');
var app = express();
//Mongoose
var mongoose=require('mongoose');
//Morgan
var morgan=require('morgan');
//Body parser
var bodyParser=require('body-parser');
//Method Override
var methodOverride=require('method-override');

var database=require('./config/database');

mongoose.connect(database.localUrl);

app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

//Configurando routes NodeJS
require('./server/routes.js')(app);
//listen
app.listen(8080);//process.env.PORT
console.log('...la aplicacion app esta ejecutandose en el puerto 8080...');