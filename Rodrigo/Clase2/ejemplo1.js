/**
 * Created by ANGULAR on 7/5/2016.
 */
var app=angular.module('app',[]);
app.value('codigoCliente','A123123123');
app.constant('FNDR','Fondo Nacional de Desarrollo Regional');
app.factory('funUpper',function() {
    return function (value){
        return value.toUpperCase();
    }
});
app.service('servicio1',function(){
    this.nombre='Rodrigo';
    this.apellido='Beltran';
    this.completo=function(){
        return this.nombre+' '+this.apellido;
    };
});
app.provider('prefix',[function(){
    var prefix = '';
    this.setPrefix = function(value){
        prefix=value;
    };
    this.$get=[function(){
       return function(value){
           return prefix +' '+ value;
       }
    }];
}]);
app.config(['prefixProvider',function(prefixProvider){
    prefixProvider.setPrefix('Rodrigo');
}]);
function MainController($scope,codigoCliente,FNDR,funUpper,servicio1,prefix){
    $scope.codigo=codigoCliente;
    $scope.institucion=FNDR;
    $scope.texto2=funUpper(FNDR);
    $scope.texto3=servicio1.completo();
    $scope.texto4=prefix('Jose');
}
app.controller('MainController',MainController);