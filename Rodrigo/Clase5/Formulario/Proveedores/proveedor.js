/**
 * Created by ANGULAR on 17/5/2016.
 */
angular.module('formulario',[])
    .directive('validaNombre',function () {
        return{
            require:'ngModel',
            link:function (scope,element,attr,mCtrl) {
                function validaNombre(value){
                    if (value.indexOf("e")>-1){
                        mCtrl.$setValidity('charE',true);
                    } else {
                        mCtrl.$setValidity('charE',false);
                    }
                    return value;
                }
                mCtrl.$parsers.push(validaNombre);
            }
        };
    })
    .controller('proveedorForm',['$scope',function($scope){
        $scope.reset=function(){
            $scope.proveedor={};
        }
        $scope.actualizarProveedor=function(proveedor){
            alert('El proveedor fue registrado correctamente');
        }
        $scope.reset();
    }]);