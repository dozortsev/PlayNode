angular.module('notesApp', []).controller(
    'ListCtrl', ['$scope', '$rootScope', ListCtrl]
);

function ListCtrl($scope, $rootScope) {
    $scope.message = 'Some message';

    $rootScope.loggedUser = {
        id: 100,
        role: 'admin'
    };
}