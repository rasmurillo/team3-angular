/**
 * Created by ANGULAR on 5/5/2016.
 */
var app=angular.module('app',[]);
function MainController($scope) {
    $scope.usuarios=[
        {id:1,nombre:"mabel"},
        {id:2,nombre:"Miguel"},
        {id:3,nombre:"Rodrigo"},
        {id:4,nombre:"Luis"},
        {id:5,nombre:"Jaime"},
        {id:6,nombre:"Ricardo"}
        
    ];
}
app.controller('MainController',MainController);
    
