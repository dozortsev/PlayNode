describe('Controller: ListCtrl', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('notesApp'));

    var ctrl;
    var $scope = {};
    var $rootScope = {};

    // Before each unit test, instantiate a new instance
    // of the controller
    beforeEach(inject(function(_$controller_) {
        ctrl = _$controller_('ListCtrl', {
            $scope: $scope,
            $rootScope: $rootScope
        });
    }));

    it('should exist', function() {
        expect(ctrl).toBeDefined();
    });

    it('should have initialized data', function() {
        expect($rootScope.loggedUser).toEqual({
            id: 100,
            role: 'admin'
        });
        expect($scope.message).toEqual('Some message');
    });
});