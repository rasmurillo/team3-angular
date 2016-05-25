/**
 * Created by ANGULAR on 05/05/2016.
 */
var app=angular.module('app',[]);
function MainController($scope){
    $scope.texto="hola Mundo cruel!!!";
    $scope.numero=1.121212;
    $scope.precio=99.9;
    $scope.fecha=new Date();
};
app.controller('MainController',MainController);
function FiltroReverse(){
    return function(input,uppercase){
        var i,out="";
        input=input||'';
        for (i=0;i<input.length;i++){
            out=input.charAt(i)+out;
        }
        if (uppercase){
            out=out.toUpperCase();
        }
        return out;
    }
};
app.filter('FiltroReverse',FiltroReverse);
