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
app.service('servicio1',function () {
    this.titulo='Pruebas123';
});
app.provider('prefix',[function () {
    var prefix = '';
    this.setPrefix=function(value){
        prefix=value;
    };
    this.$get=[function () {
        return function(value){
            return prefix+value;
        }
    }];
}]);
app.config(['prefixProvider',function (prefixProvider) {
    prefixProvider.setPrefix('Ricardo');
}]);
function MainController($scope,codigoCliente,FNDR,funUpper,servicio1,prefix){
    $scope.codigo=codigoCliente;
    $scope.constante=FNDR;
    $scope.texto2=funUpper(FNDR);
    $scope.texto3=servicio1.titulo;
    $scope.texto4=prefix('Alex');

}
app.controller('MainController',MainController);
