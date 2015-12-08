app.directive('myAlert', function ($modal) {
    return {
        restrict: 'E',
        link: function (scope, element, attr) {


            app.constructor('MainAlertCtrl', ['$scope', '$sce', '$modal', MainAlertCtrl]);

            function MainAlertCtrl(data, $sce, $scope, $modalInstance) {
                $scope.type = data.type;
                $scope.message = $sce.trustAsHtml(data.message);

                $scope.isAlert = $scope.type === 'alert';
                $scope.isConfirm = $scope.type === 'confirm';

                if ($scope.isConfirm) {
                    $scope.confirm = function () {
                        $modalInstance.close(true);
                    }
                }

                $scope.close = function () {
                    if ($scope.isAlert) {
                        $modalInstance.dismiss('cancel');
                    } else {
                        $modalInstance.close(false);
                    }
                }
            }

            scope.showAlert = function () {
                var modalInstance = $modal.open({
                    templateUrl: 'foo.html',
                    animation: false,
                    controller: MainAlertCtrl,
                    backdrop: 'static',
                    keyboard: false,
                    size: 'lg',
                    resolve: {
                        data: function () {
                            return {
                                type: attr.type,
                                message: '<b>Warning</b>: <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, praesentium?</i>'
                            };
                        }
                    }
                });

                modalInstance.result.then(function (isConfirmed) {
                    console.log('Confirmation status: ' + isConfirmed);
                }, function () {
                    console.log('Modal dismissed at: ' + new Date());
                });
            };
        }
    }
});