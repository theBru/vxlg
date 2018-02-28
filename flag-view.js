// Here we define the vxlgApp module
(function () {
    var app = angular.module('flag-view', []);
    app.directive('flagView', function () {
        return {
            restrict: 'E',
            templateUrl: 'flag-view.html'
        };
    });
})();