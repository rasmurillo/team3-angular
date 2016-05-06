/**
 * Created by ANGULAR on 5/5/2016.
 */
var app=angular.module('appEjm1',[]);

function  MainController($scope) {
    $scope.texto="hola1";
    $scope.numero=11234.21212;
    $scope.precio=99.9;
    $scope.fecha=new Date();
}

app.controller('MainController', MainController)