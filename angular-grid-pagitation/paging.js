var module = angular.module("example", ["angularGrid"]);

module.controller('exampleCtrl', function ($scope) {

    var colDefs = [
        {
            headerName: 'Name', field: 'fname', width: 100
        },
        {
            headerName: 'Surname', field: 'lname', width: 100
        },
        {
            headerName: 'Age', field: 'age', width: 100
        }
    ];

    $scope.gridOptions = {
        enableServerSideSorting: true,
        enableServerSideFilter: true,
        enableColResize: true,
        virtualPaging: true, // this is important, if not set, normal paging will be done
        rowSelection: 'single',
        rowDeselection: true,

        columnDefs: colDefs
    };

    var allOfTheData = [
        {
            "fname": "Mario", "lname": "Gotze", "age": 25
        },
        {
            "fname": "Marco", "lname": "Reus", "age": 45
        },
        {
            "fname": "Luis", "lname": "Gustavo", "age": 45
        },
        {
            "fname": "Roberto", "lname": "Firmino", "age": 12
        },
        {
            "fname": "Carlos", "lname": "Diego", "age": 16
        }
    ];

    $scope.loadData = function() {
        var dataSource = {
            rowCount: null, // behave as infinite scroll
            pageSize: 2,
            overflowSize: 2,
            maxConcurrentRequests: 1,
            maxPagesInCache: 1,
            getRows: function (params) {
                console.log('asking for ' + params.startRow + ' to ' + params.endRow);
                // At this point in your code, you would call the server, using $http if in AngularJS.
                // To make the demo look real, wait for 500ms before returning
                setTimeout( function() {
                    // take a slice of the total rows
                    var dataAfterSortingAndFiltering = allOfTheData;
                    var rowsThisPage = dataAfterSortingAndFiltering.slice(params.startRow, params.endRow);
                    // if on or after the last page, work out the last row.
                    var lastRow = -1;
                    if (dataAfterSortingAndFiltering.length <= params.endRow) {
                        lastRow = dataAfterSortingAndFiltering.length;
                    }
                    // call the success callback
                    params.successCallback(rowsThisPage, lastRow);
                }, 500);
            }
        };

        $scope.gridOptions.api.setDatasource(dataSource);
    }
});
