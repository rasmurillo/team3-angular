/**
 * Created by ANGULAR on 10/5/2016.
 */
var express=require('express');
var app=express();

app.get('/',function (req,res) {
   res.send('GET Hola mundo cruel!!!');
});
app.post('/',function (req,res) {
    res.send('POST Hola mundo cruel!!!');
});
app.put('/pu',function (req,res) {
    res.send('PUT Hola mundo cruel!!!');
});
app.delete('/del',function (req,res) {
    res.send('DELETE Hola mundo cruel!!!');
});

app.get('/user',function (req,res) {
   res.json({usuario:'User1',id:1});
});

app.get('/user1',function (req,res) {
    res.send('<p> aqui va un texto </p>');
});

app.get('/user2',function (req,res) {
    res.send(new Buffer('ejemplo1'));
});

app.get('/user3',function (req,res) {
    res.status(404).send('Sorry, estoy en mantenimiento');
});

app.get('/archivo/:nombre',function (req,res,next) {
    console.log(__dirname);
    var opciones={
        root:__dirname+'/archivos/',
        dotfiles:'deny',
        headers:{
            'x-timestamp':Date.now(),
            'x-sent':true
        }
    }
    var archivo=req.params.nombre;
    res.sendFile(archivo,opciones,function (err) {
       if(err){
           console.log(err);
           res.status(err.status).end();
       } else{
           console.log('Archivo enviado: ',archivo);
       }
    });
});

app.listen(3000,function () {
    console.log('Esto es un ejemplo de listen en puerto 3000');
});