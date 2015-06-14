var myApp = angular.module('myApp', [])
    .controller('MainCtrl', [function () {
        var self = this;

        self.names = ['Mario', 'Luis', 'Aaron', 'Diego', 'Carlos'];
    }]);

