var app=angular.module('app',[])
function MainController($scope){
    $scope.texto='hola mundo cruel';
    $scope.numero=1.222456;
    $scope.precio=99.2;
    $scope.fecha= new Date();

}
app.controller('MainController',MainController);
