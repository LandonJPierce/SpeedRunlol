var app = angular.module('speedrunApp', ['kendo.directives']);

app.service('newFormService', ['$http', function ($http) {
    this.getData = function () {
        return $http.get('/api/NewFormTable');
    };
}]);

app.controller('newFormController', ['$scope', 'newFormService', function ($scope, newFormService) {
    $scope.gridOptions = {
        dataSource: {
            transport: {
                read: function (e) {
                    newFormService.getData().then(function (response) {
                        e.success(response.data);  // this will pass the data to the Grid
                    }, function (error) {
                        e.error(error);
                    });
                }
            },
            schema: {
                model: {
                    fields: {
                        Name: { type: 'string' },
                        DateHired: { type: 'string' }
                    }
                }
            }
        },
        columns: [
            {
                field: "Name",
                title: "Name",
                width: "120px"
            },
            {
                field: "DateHired",
                title: "Date Hired",
                width: "120px"
            }
        ],
        sortable: true,
        pageable: true
    };
}]);
