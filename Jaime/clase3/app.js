/**
 * Created by ANGULAR on 10/5/2016.
 */
var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send('hola mundo cruel!!!');
});
app.post('/',function(req,res){
    res.send('post hola mundo cruel user!!!');
});
app.put('/p',function(req,res){
    res.send('put hola mundo cruel user!!!');
});

app.put('/d',function(req,res){
    res.send(' DELETE hola mundo cruel user!!!');
});

app.get('/user',function(req,res){
    res.send({usuario:'user1', id:1});
});
app.get('/user1',function(req,res){
    res.send('<p> aqui va texto</p>');
});
app.get('/user2',function(req,res){
    res.send(new Buffer('ejemplo1'));
});
app.get('/user3',function(req,res){
    res.status(404).send('sorry, estoy en mantenimiento');
});

app.get('/archivo/:nombre',function(req,res,next){
    console.log(__dirname);
    var opciones={
        root:__dirname+'/archivos/',
        dotfiles:'deny',
        header:{
            'x-timestamp':Date.now(),
            'x-sent':true
        }
    };
    var archivos=req.params.nombre;
    res.sendFile(archivos,opciones,function (err) {
        if(err){
            console.log(err);
            res.status(err.status).end();
        }else{
            console.log('Archivo enviado',archivos)
        }

    });

});

app.listen(3000,function(){
    console.log('esto es un ejemplom de liste en puerto 3000');
});