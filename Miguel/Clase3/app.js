/**
 * Created by ANGULAR on 10/5/2016.
 */
var express = require('express');
var app=express();

app.get('/r',function(req, res){
    res.send('GET Hola maik....');
});

        app.post('/c',function(req, res){
    res.send('POST Hola maik....');
});

app.put('/u',function(req, res){
    res.send('PUT Hola maik....');
});

app.delete('/d',function(req, res){
    res.send('DEL Hola maik....');
});

app.get('/users',function(req, res){
    res.json([{usuario:'maik', id:1},{usuario:'angel', id:2}]);
});

app.get('/html1',function(req, res){
    res.send('<p>texto html</p>');
});

app.get('/html2',function(req, res){
    res.send(new Buffer('ejemplo1'));
});

app.get('/html3',function(req, res){
    res.status(404).send('Sorry, estoy en mantenimiento');
});

app.get('/archivo/:nombre',function(req, res, next){
    console.log(__dirname);
    var opt={
        root:__dirname+'/files/',
        dotfiles:'deny',
        headers:{
            'x-timestamp':Date.now(),
            'x-sent':true
        }
    }

    var file = req.params.nombre;

    res.sendFile(file, opt, function(err){
        if(err){
            console.log(err);
            res.status().end(err.status);
        }else{
            console.log('File is send'+file);
        }
    });
});

app.listen(3000, function(){
    console.log('Escuchando por el puerto 3000');
});