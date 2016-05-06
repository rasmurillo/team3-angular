/**
 * Created by ANGULAR on 05/05/2016.
 */
var app=angular.module('app',[]);
function MainController($scope) {
    $scope.nombre="Ricardo";
    $scope.usuario={
        id:1,
        nombre:"Alex"
    }
    $scope.CambiarNombre=function () {
        $scope.nombre="Pepito";
    }
}
app.controller('MainController',MainController);
