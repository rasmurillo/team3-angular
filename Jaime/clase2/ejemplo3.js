/**
 * Created by ANGULAR on 7/5/2016.
 */
angular.module('ejemplo3',[])
.controller('controller',['$scope',function ($scope) {
    $scope.customer={
        name:'jaime',
        address:'Sopocachi'
    };
}

])
.directive('myCustomer',function () {
    return{
        template:function (elem, attr) {
            if(attr.type=='name'){
                return 'nombre {{customer.name}}';
            }

            if(attr.type=='address'){
                return 'direccion {{customer.address}}';
            }
        }
    };
});