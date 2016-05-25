/**
 * Created by ANGULAR on 10/05/2016.
 */
var express=require('express');
var app=express();

var MongoClient=require('mongodb').MongoClient;
var assert= require('assert');
var ObjectId=require('mongodb').ObjectID;
var url='mongodb://localhost:27017/test';

app.get('/ejemplo1',function(req,res){
    MongoClient.connect(url,function (err, db) {
        assert.equal(null,err);
        function findRestaurants(db, callback) {
            var cursor=db.collection('restaurants').find({"borough":"Bronx","address.zipcode":"10460","address.street":"Devoe Avenue"});
            cursor.each(function(err,doc){
                assert.equal(err,null);
                if(doc!=null){
                    console.dir(doc);
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
app.get('/user',function(req,res){
    res.json({usuario:'User1',id:1});
});

app.listen(3000,function(){
    console.log('Estos es un ejemplo de liste en puerto 3000');
});