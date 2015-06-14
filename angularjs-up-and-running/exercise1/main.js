angular.module('awesomeApp', []).controller('AwesomeCtrl', [AwesomeCtrl]);

function AwesomeCtrl() {
    var ctrl = this;

    ctrl.notes = {
        shyam: {
            id: 1,
            label: 'First Note',
            done: false
        },
        Misko: {
            id: 3,
            label: 'Finished Third Note',
            done: true
        }
    }
};