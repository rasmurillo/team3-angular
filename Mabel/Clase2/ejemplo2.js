/**
 * Created by ANGULAR on 07/05/2016.
 */

angular.module('ejemplo2',[])
    .controller('Controller', ['$scope',function ($scope) {
        $scope.customer={
            name:'Ricardo',
            addess:'sopocachi'
        };
          
          
    }])
    .directive('myCustomer',function () {
        return{
            //templateUrl:function'nombre:{{customer.name}} direccion: {{customer.adress}}'
              template:function (elem, attr) {
                  if(attr.type=='name'){
                      return 'nombre{{customer.name}}'
                  }
                  if(attr.type=='adress'){
                      return 'direccion{{customer.adress}}'
                  }
              }
                    };
    });

//myModule.directive('directiveName', [function() {
  //  return {
    //    priority: 0,
      //  template: '<div></div>',
        //transclude: false,
        //restrict: 'A',
        //templateNamespace: 'html',
        //scope: false,
        //controller: function($scope, $element, $attrs, $transclude, otherInjectables) {...},
        //controllerAs: 'stringAlias',
        //require: 'siblingDirectiveName',
        //compile: function compile(tElement, tAttrs, transclude) {
            //return {
                //pre: function preLink(scope, iElement, iAttrs, controller) {...
               // },
               // post: function postLink(scope, iElement, iAttrs, controller) {...
               // }
          //  }
                     //   }
       // }]);

//app.controller('MainController',MainController);