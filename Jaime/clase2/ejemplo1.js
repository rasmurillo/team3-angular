/**
 * Created by ANGULAR on 7/5/2016.
 */
var app=angular.module('app',[])
app.value('codigoCliente','a1112333456');
app.constant('FNDR','fondo nacional de desarrollo regional');
app.factory('funUpper',function () {
    return function (value){
        return value.toUpperCase();
    }

});

app.service('servicios1',function () {
    this.titulo= 'Pruebas123';
    this.first= 'Jaime';
    this.last= 'Veliz';
    this.name = function () {
        return this.first + ' '+this.last;

    }
    }
)

app.provider('prefix1',function () {
    var prefix1 = '';

    this.setPrefix = function(value) {
        prefix1 = value;  };
    this.$get = [function() {
        return function(value) {
            return prefix1 + value;
        }   }];

})
app.config(['prefix1Provider', function(prefix1Provider) {
    prefix1Provider.setPrefix('Jaime');
}]);
function MainController($scope, codigoCliente, FNDR, funUpper, servicios1,prefix1){

    $scope.codigo = codigoCliente;
    $scope.constante =  FNDR;
    $scope.texto2 = funUpper(FNDR);
    $scope.texto3 = servicios1.titulo;
    $scope.nombre = servicios1.name();
    $scope.texto4 = prefix1('Veliz');

}
app.controller('MainController',MainController);
