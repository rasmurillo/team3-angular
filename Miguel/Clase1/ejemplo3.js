/**
 * Created by ANGULAR on 5/5/2016.
 */
var app=angular.module('appEjm1',[]);

function  MainController($scope) {

    $scope.usuarios=[
        {id:1,nombre:"Mabel"},
        {id:2,nombre:"M@ik"},
        {id:3,nombre:"Rodrigo"},
        {id:4,nombre:"Luis"},
        {id:1,nombre:"Jaime"}
    ];

    $scope.elegido=null;
}

app.controller('MainController', MainController)