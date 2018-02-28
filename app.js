// Here we define the vxlgApp module
(function () {
    var app = angular.module('vxlgApp', ['flag-view']);

    app.controller('FlagsController', ['$http', function ($http) {
        var flagData = this;
        flagData.vxlgs = [];
        $http({
            method: 'get',
            url: 'flags.json'
        }).then(function (response) {
            console.log(response, 'we\'re getting data');
            flagData.vxlgs = response.data;
        }, function (error) {
            console.log(error, 'can not get data.')
        });
    }]);
})();