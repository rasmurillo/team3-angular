angular.module('ejemplo3',[])
.controller('Controller',['$scope',function ($scope) {
    $scope.customer={
        name:'Ricardo',
        address:'Sopocachi'
    };
}])
.directive('myCustomer',function () {
    return {
        template:function (elem,attr){
            if(attr.type=='name'){
                return 'nombre {{customer.name}}'
            }
            if(attr.type=='address'){
                return 'direccion {{customer.address}}'
            }
        }
    };
});

