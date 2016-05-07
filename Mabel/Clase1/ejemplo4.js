/**
 * Created by ANGULAR on 05/05/2016.
 */
var app=angular.module('app',[]);
function MainController($scope){
    $scope.text="hola mundo cruel";
    $scope.numero=1.121212;
    $scope.precio=99.9;
    $scope.fecha=new Date()

     
}
    app.controller('MainController',MainController);
