var app = angular.module('patient-chart', ['ui.bootstrap']);

app.controller('MainCtrl', ['$scope', '$modal', function ($scope, $modal) {

    $scope.tooltipContent = 'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.' +
        'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.' +
        'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.' +
        'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.';

    $scope.datePicker = {
        dt: new Date(),
        opened: false,

        open: function () {
            this.opened = true;
        }
    };

    $scope.openModal = function () {
        var niceModal = $modal.open({
            size: 'lg',
            animation: true,
            templateUrl: 'nice-modal',
            controller: 'ModalCtrl'
        });
    }
}]);

app.controller('ModalCtrl', ['$scope', '$modalInstance', ModalCtrl]);

function ModalCtrl($scope, $modalInstance) {

    $scope.datePicker = {
        dt: new Date(),
        opened: false,

        open: function () {
            this.opened = true;
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
};


app.controller('TooltipCtrl', ['$scope', function ($scope) {
    $scope.msg = 'Hello';
}]);