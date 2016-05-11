/**
 * Created by ANGULAR on 7/5/2016.
 */
angular.module('ejemplo2',[])
.controller('Controller',['$scope',function($scope){
    $scope.customer={
        name:'Rodrigo',
        address:'La Florida'
    };
}])
.directive('myCustomer',function(){
   return{
       template:function(elem,attr){
           if(attr.type=='name'){
               return 'nombre {{customer.name}}';
           }
           if(attr.type=='address'){
               return 'direccion {{customer.address}}';
           }
       }
   } ;
});