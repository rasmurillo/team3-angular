/**
 * Created by ANGULAR on 07/05/2016.
 */
var app=angular.module('app',[]);
app.value('codigoCliente','A123123123');
app.constant('FNDR','Fondo Nacional de Desarrollo Regional');
app.factory('funUpper',function(){
    return function (value){
        return value.toUpperCase();
    }
});
function MainController($scope,codigoCliente,FNDR,funUpper){
    $scope.codigo=codigoCliente;
    $scope.constante=FNDR;
    $scope.texto2=funUpper(FNDR);
}
app.controller('MainController',MainController);
