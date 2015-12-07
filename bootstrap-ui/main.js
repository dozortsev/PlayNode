var app = angular.module('patient-chart', ['ui.bootstrap', 'ngAnimate', 'oitozero.ngSweetAlert']);

app.directive('loading', [function () {
    return {
        restrict: 'E',
        link: function (scope, el, attr) {
            scope.loadingMessage = 'foo bar baz'
        },
        templateUrl: 'loading.html'
    };
}]);

app.controller('MainCtrl', ['$scope', '$timeout', '$modal', 'SweetAlert', function ($scope, $timeout, $modal, SweetAlert) {

    $scope.showLoading = true;

    $timeout(function () {
        $scope.showLoading = false;
        SweetAlert.swal("Here's a message", "It's pretty, isn't it?");
    }, 1000);

    $scope.tooltipContent = 'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.' +
        'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.' +
        'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.' +
        'Lorem ipsum dolor sit amet.\n Lorem ipsum dolor.';

    $scope.records = [
        {
            name: 'CPT', code: '4040F', desc: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.', isRemoved: false, isAccordOpened: false
        },{
            name: 'CPT', code: '4044F', desc: 'Lorem ipsum dolor sit amet.', isRemoved: false , isAccordOpened: false
        },{
            name: 'CPT', code: '3008F', desc: 'Lorem ipsum dolor sit amet.', isRemoved: false , isAccordOpened: false
        }
    ];

    $scope.loadHistory = function (record) {
        if (record.isAccordOpened) {
            console.log('Skip loading data during closing');
        } else {
            console.log('Load history for: ' + record.code);
            record.history = [
                'history item 1 ' + record.code,
                'history item 2 ' + record.code
            ];
        }
    };

    $scope.rmHistoryItem = function (record, item) {
        record.isAccordOpened = record.history.rm(item) !== 0;

        if (!record.isAccordOpened) {
            record.isRemoved = true;
            $scope.$parent.records.rm(record);
        }
    };

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

app.controller('ModalCtrl', ['params', '$http', '$scope', '$modalInstance', function (params, $http, $scope, $modalInstance) {
    $scope.pageType = params.pageType;
    $scope.docName = {"name": "Scala Cookbook", "lang": "United Kingdom"};

    $http.get('storage/users.json').success(function (data) {
        $scope.users = data;
    });

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

}]);


app.controller('TooltipCtrl', ['$scope', function ($scope) {
    $scope.msg = 'Hello';
}]);