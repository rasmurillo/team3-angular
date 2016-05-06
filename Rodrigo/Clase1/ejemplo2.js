/**
 * Created by ANGULAR on 5/5/2016.
 */
var app=angular.module('app',[]);
function MainController($scope){
    $scope.usuarios=[
        {id:10,nombre:"Mabel"},
        {id:20,nombre:"Miguel"},
        {id:30,nombre:"Rodrigo"},
        {id:40,nombre:"Luis"},
        {id:50,nombre:"Jaime"},
        {id:60,nombre:"Ricardo"}
    ];
}
app.controller('MainController',MainController);
