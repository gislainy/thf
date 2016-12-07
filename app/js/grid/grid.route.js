(function () {
    'use strict';

    angular
        .module('gridTest')
        .config(gridTestConfig);

    gridTestConfig.$inject = ['$stateProvider'];

    function gridTestConfig($stateProvider) {

        $stateProvider.state('gridTest', {
            abstract: true,
            template: '<ui-view/>'

        }).state('gridTest.start', {
            url: '/grid',
            controller: 'GridTestController',
            controllerAs: 'controller',
            templateUrl: 'js/grid/grid.view.html'

        });
    }

}());
