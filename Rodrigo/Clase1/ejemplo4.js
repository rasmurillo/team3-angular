/**
 * Created by ANGULAR on 5/5/2016.
 */
var app=angular.module('app',[]);
function MainController($scope){
    $scope.texto="Adios mundo cruel!!!";
    $scope.numero=1.121212;
    $scope.precio=85.6;
    $scope.fecha=new Date();
    
}
app.controller('MainController',MainController);
