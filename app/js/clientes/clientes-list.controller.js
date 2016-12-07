(function () {

    'use strict';

    angular
        .module('cliente')
        .controller('ClienteListController', ClienteListController);

    ClienteListController.$inject = [
        '$scope',
        '$stateParams',
        '$state',
        '$window',
        'totvs.app-notification.Service',
        'i18nFilter',
        'clienteFactory',
    ];

    function ClienteListController(
        $scope, $stateParams, $state, $window, notification, i18nFilter, clienteFactory) {

        // *********************************************************************************
        // *** Variables
        // *********************************************************************************

        var self = this;

        // *********************************************************************************
        // *** Public Properties and Methods
        // *********************************************************************************

        self.todosClientes = [];
        self.clientes = getCliente()
        self.editarCliente = editarCliente

        init();

        // *********************************************************************************
        // *** Controller Initialize
        // *********************************************************************************

        function init() {

            clienteFactory.findRecords("", function (clientes) {
                self.todosClientes = clientes;
            });

        }
       
        function getCliente() {
            return self.todosClientes;
        }

        function editarCliente() {
            if(self && self.selectedItem){
                 $state.go('clientes.editar', {id: self.selectedItem.id});
            }
        }
    }
} ());
