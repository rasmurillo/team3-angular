/**
 * Created by ANGULAR on 5/5/2016.
 */
    var app=angular.module('app',[])
    function MainController($scope){
        $scope.nombre='Jaime Veliz';
        $scope.usuario={
         id:1,
            nombre:'Veliz'
        }
        $scope.CambiarNombre=function () {
            $scope.nombre = 'Pepito'
        }
    }
    app.controller('MainController',MainController);


var module = angular.module('myModule', []);
module.config([function() {
    alert('yo soy primero');
}]);

module.run([function() {
    alert('yo soy segundo');
}]);
