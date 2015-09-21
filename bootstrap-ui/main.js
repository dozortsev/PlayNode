var app = angular.module('patient-chart', ['ui.bootstrap']);

app.controller('MainCtrl', ['$scope', '$modal', function ($scope, $modal) {

    $scope.tooltipContent = 'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.' +
        'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.' +
        'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.' +
        'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.';

    $scope.records = [
        {
            name: 'CPT', code: '4040F', desc: 'Lorem ipsum dolor sit amet.'
        },{
            name: 'CPT', code: '4044F', desc: 'Lorem ipsum dolor sit amet.'
        },{
            name: 'CPT', code: '3008F', desc: 'Lorem ipsum dolor sit amet.'
        },{
            name: 'CPT', code: '4001F', desc: 'Lorem ipsum dolor sit amet.'
        }
    ];

    $scope.datePicker = {
        dt: new Date(),
        opened: false,

        open: function () {
            this.opened = true;
        }
    };

    $scope.openModal = function (pageType) {
        var niceModal = $modal.open({
            size: 'lg',
            animation: true,
            templateUrl: 'nice-modal',
            controller: 'ModalCtrl',
            resolve : {
                params: function () {
                    return {
                        pageType: pageType
                    };
                }
            }
        });
    };
}]);

app.controller('ModalCtrl', ['params', '$scope', '$modalInstance', ModalCtrl]);

function ModalCtrl(params, $scope, $modalInstance) {

    $scope.users = [
        {id: 1, name: 'mario', isChecked: true, address: { zip: 421, city: 'San Jose'}},
        {id: 2, name: 'diego', isChecked: false, address: { zip: 124, city: 'New York'}},
        {id: 3, name: 'luis', isChecked: false, address: { zip: 774, city: 'Cupertino'}},
        {id: 4, name: 'marco', isChecked: false, address: { zip: 555, city: 'San Francisco'}}
    ];

    $scope.logic = function () {
        return params.pageType === 'user' ? 'radio' : 'checkbox';
    };

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
}


app.controller('TooltipCtrl', ['$scope', function ($scope) {
    $scope.msg = 'Hello';
}]);