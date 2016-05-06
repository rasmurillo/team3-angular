/**
 * Created by ANGULAR on 5/5/2016.
 */
var app=angular.module('app',[]);
function maincontroller ($scope) {
    $scope.nombre="luis";
    $scope.usuario={
        id:1,
        nombre:"fers"
    }
    $scope.CambiarNombre=function () {
        $scope.nombre="Pepito"
    }
}
app.controller('maincontroller',maincontroller);