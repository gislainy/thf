(function () {
    'use strict';

    angular
        .module('cliente')
        .config(clienteRouteConfig);

    clienteRouteConfig.$inject = ['$stateProvider'];

    function clienteRouteConfig($stateProvider) {

        $stateProvider.state('clientes', {
            abstract: true,
            template: '<ui-view/>'

        }).state('clientes.start', {
            url: '/clientes',
            controller: 'ClienteListController',
            controllerAs: 'controller',
            templateUrl: 'js/clientes/clientes-list.view.html'

        }).state('clientes.novo', {
            url: '/clientes/novo',
            controller: 'ClienteEditController',
            controllerAs: 'controller',
            templateUrl: 'js/clientes/clientes-edit.view.html'

        }).state('clientes.editar', {
            url: '/clientes/editar/:id',
            controller: 'ClienteEditController',
            controllerAs: 'controller',
            templateUrl: 'js/clientes/clientes-edit.view.html'

        }).state('clientes.detail', {
            url: '/clientes/detail/:id',
            controller: 'ClienteDetailController',
            controllerAs: 'controller',
            templateUrl: 'js/clientes/clientes-detail.view.html'

        // }).state('customers.new', {
        //     url: '/customers/new',
        //     controller: 'CustomerEditController',
        //     controllerAs: 'controller',
        //     templateUrl: 'js/customers/customers-edit.view.html'


        });
    }

}());
