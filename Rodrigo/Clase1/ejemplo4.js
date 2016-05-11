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

function reverse(){
    return function(input,uppercase) {
        var i, out = "";
        input = input || '';
        for (i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }
        if (uppercase) {
            out = out.toLocaleUpperCase();
        }
        return out;
    };
}
app.controller('MainController',MainController);
app.filter('reverse',reverse);


