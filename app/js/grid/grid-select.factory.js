(function () {

    'use strict';

    angular
        .module('gridTest')
        .factory('GridSelectTestFactory', GridSelectTestFactory);

    GridSelectTestFactory.$inject = ['$q'];

    function GridSelectTestFactory($q) {

        var suppliers = [
            {
                id: 1,
                description: 'Dell'
            },
            {
                id: 2,
                description: 'Microsoft'
            },
            {
                id: 3,
                description: 'HP'
            },
            {
                id: 4,
                description: 'Lenovo'
            }
        ];

        return {

            applyFilter : function (parameters) {

                var deferred = $q.defer();

                setTimeout(function () {

                    deferred.resolve(suppliers);

                }, 100);

                return deferred.promise;

            },
            getObjectFromValue : function (parameters, initial) {

                var deferred = $q.defer();

                setTimeout(function () {

                    deferred.resolve(suppliers);

                }, 100);

                return deferred.promise;

            }

        };

    }
}());
