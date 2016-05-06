/**
 * Created by ANGULAR on 5/5/2016.
 */
var app=angular.module('app',[]);
function MainController($scope) {
    $scope.texto="adios mundo cruel";
    $scope.numero=1.121212;
    $scope.precio=6.96;
    $scope.fecha=new Date();
}
app.controller('MainController',MainController);