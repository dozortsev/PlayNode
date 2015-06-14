angular.module('awesomeApp', []).controller('AwesomeCtrl', AwesomeCtrl);

function AwesomeCtrl() {
    var ctrl = this;

    ctrl.notes = [
        {id: 1, label: 'First Note', isChecked: false},
        {id: 2, label: 'Second Note', isChecked: false},
        {id: 3, label: 'Done Note', isChecked: false},
        {id: 4, label: 'PreLast Note', isChecked: false},
        {id: 5, label: 'Last Note', isChecked: false}
    ];

    ctrl.showOnlyChecked = function () {
        ctrl.notes = ctrl.notes.filter(function (el) {
            return el.isChecked;
        });
    };
};