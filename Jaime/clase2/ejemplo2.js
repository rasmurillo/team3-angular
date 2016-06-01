/**
 * Created by ANGULAR on 7/5/2016.
 */
var app=angular.module('app',[])
app.directive('directiveName', [function() {
    return {
        priority: 0,
        template: '<div>Muestra texto</div>',
        transclude: false,
        restrict: 'A',
        templateNamespace: 'html',
        scope: false,
        controller: function($scope, $element, $attrs, $transclude, otherInjectables) { },
        controllerAs: 'stringAlias',
        require: 'siblingDirectiveName',
        compile: function compile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) { },
                post: function postLink(scope, iElement, iAttrs, controller) {}
            }
        },
    };
}]);


function MainController($scope)
    {

  //  $scope.directiva = directiveName();


}

app.controller('MainController',MainController);
