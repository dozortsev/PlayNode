var app = angular.module('patient-chart', ['ui.bootstrap']);

app.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.tooltipContent = 'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.';
}]);