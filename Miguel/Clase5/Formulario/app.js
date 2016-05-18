/**
 * Created by ANGULAR on 10/5/2016.
 */
var express = require('express');
var app=express();

var MongoClient= require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId=require('mongodb').ObjectID;
var url='mongodb://localhost:27017/test';


app.get('/ejm1',function(req, res){
    MongoClient.connect(url, function(err, db){
        assert.equal(null, err);

        function findRestaurant(db, callback) {
            var cursor = db.collection('restaurants').find();

            cursor.each(function (err,doc) {
                assert.equal(err, null);
                if(doc!=null){
                    res.json(doc);
                }else{
                    callback();
                }
            });
        }

        findRestaurant(db, function () {
            db.close;
        });
    });
});



app.listen(3000, function(){
    console.log('Escuchando por el puerto 3000');
});