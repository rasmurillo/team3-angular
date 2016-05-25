/**
 * Created by ANGULAR on 10/5/2016.
 */
var express=require('express');
var app=express();

var MongoClient=require('mongodb').MongoClient;
var assert= require('assert');
var ObjectId=require('mongodb').ObjectID;
var url='mongodb://localhost:27017/test';

app.get('/ejemplo1',function(req,res) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        function findRestaurants(db, callback)
        {
            var cursor = db.collection('restaurants').find();
            cursor.each(function (err, doc) {
                assert.equal(err, null);
                if (doc != null) {
                    //console.dir(doc);
                    res.json(doc);
                } else {
                    callback();
                }


            });

        };
        findRestaurants(db,function () {
            db.close();
        });
    });
});

app.get('/',function(req,res){
    res.send('hola mundo cruel!!!');
});
app.post('/',function(req,res){
    res.send('post hola mundo cruel user!!!');
});
app.put('/p',function(req,res){
    res.send('put hola mundo cruel user!!!');
});

app.get('/user3',function(req,res){
    res.status(404).send('sorry, estoy en mantenimiento');
});


app.listen(3000,function(){
    console.log('esto es un ejemplom de liste en puerto 3000');
});