/**
 * Created by ANGULAR on 5/5/2016.
 */
var app=angular.module('app',[]);
function MainController($scope){
    $scope.nombre="Rodrigo";
    $scope.usuario={
        id:1,
        nombre:"Rodriguito"
    }
    $scope.CambiarNombre=function(){
        $scope.nombre="Juan"
    }
}
app.controller('MainController',MainController);
