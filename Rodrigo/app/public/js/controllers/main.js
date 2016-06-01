angular.module('TodoController',[])
    .controller('mainController',function ($scope,$http,Todos) {
        $scope.form={};
        $scope.loading=true;
        Todos.get().success(function(data){
            $scope.todos=data;
            $scope.loading=false;
        });
        $scope.Agregar=function () {
            if ($scope.form.text!=undefined){
                $scope.loading=true;
                Todos.create($scope.form)
                    .success(function (data){
                        $scope.loading=false;
                        $scope.form={};
                        $scope.todos=data;
                    });
            }
        };
        $scope.Eliminar=function (id) {
            $scope.loading = true;
            Todos.delete(id)
                .success(function (data) {
                    $scope.loading=false;
                    $scope.todos=data;
                });
        }
    });

