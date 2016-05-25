var app=angular.module('app',[])

function MainController($scope){
    $scope.texto='hola mundo cruel';
    $scope.numero=1.222456;
    $scope.precio=99.2;
    $scope.fecha= new Date();

}
function reverse() {
    return function(input, uppercase) {
        var i, out = "";
        input = input || '';
        for (i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }
        
        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
}
app.controller('MainController',MainController);
app.filter('reverse',reverse);



