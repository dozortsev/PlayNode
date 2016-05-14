angular.module('notesApp', [])
    .controller('ListCtrl', [function () {
        var ctrl = this;

        ctrl.items = [
            {id: 1, label: 'First', done: true},
            {id: 2, label: 'Second', done: false}
        ];

        ctrl.getDoneClass = function(item) {
            return {
                finished: item.done,
                unfinished: !item.done
            };
        };
    }]);