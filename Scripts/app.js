var app = angular.module('speedrunApp', ['kendo.directives']);
app.service('newFormService', ['$http', function ($http) {
    this.getData = function () {
        return $http.get('api/NewForm');
    };
}]);
app.controller('newFormController', ['$scope', 'newFormService', function ($scope, newFormService) {
    $scope.gridOptions = {
        dataSource: {
            data: [],
            schema: {
                model: {
                    fields: {
                        Name: { type: 'string' },
                        DateHired: { type: 'string' },
                        // Define all other fields
                    }
                }
            }
        },
        columns: ['Name', 'DateHired' /* List all other fields */],
        sortable: true,
        pageable: true
    };

    newFormService.getData().then(function (response) {
        $scope.gridOptions.dataSource.data = response.data;
    });
}]);