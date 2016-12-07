(function () {

    'use strict';

    angular
        .module('cliente')
        .controller('ClienteDetailController', ClienteDetailController);

    ClienteDetailController.$inject = [
        '$scope',
        '$stateParams',
        '$state',
        '$window',
        'totvs.app-notification.Service',
        'i18nFilter',
        'clienteFactory',
    ];

    function ClienteDetailController(
        $scope, $stateParams, $state, $window, notification, i18nFilter, clienteFactory) {

        // *********************************************************************************
        // *** Variables
        // *********************************************************************************

        var self = this;

        // *********************************************************************************
        // *** Public Properties and Methods
        // *********************************************************************************

        self.cliente = [];
        self.back = back;
        self.edit = edit;
        self.remove = remove;   
        init();

        // *********************************************************************************
        // *** Controller Initialize
        // *********************************************************************************

        function init() {

            if ($stateParams && $stateParams.id) {
                loadRecord($stateParams.id);
            }

        }

        // *********************************************************************************
        // *** Functions
        // *********************************************************************************

        function loadRecord(id) {
            clienteFactory.getRecord(id, function (cliente) {
                if (cliente && cliente.id)
                    self.cliente = cliente;
            });
        }
        // *********************************************************************************
        // *** Functions
        // *********************************************************************************
        
        function edit() {
            if(self.cliente && self.cliente.id)
                 $state.go('clientes.editar', {id: self.cliente.id});
        }
        
        function back() {
            notification.question({
                title: 'l-question',
                text: i18nFilter('l-cancel-operation'),
                cancelLabel: 'l-no',
                confirmLabel: 'l-yes',
                callback: function (isPositiveResult) {
                    if (isPositiveResult) {
                        $window.history.back();
                    }
                }
            });
        }
        function remove() {
            notification.question({
				title: 'l-question',
				text: i18nFilter('l-confirm-delete-operation'),
				cancelLabel: 'l-no',
				confirmLabel: 'l-yes',
				callback: function (isPositiveResult) {
					if (isPositiveResult) {
						clienteFactory.deleteRecord(self.cliente.id, function (result) {
							if (result) {
                                $state.go('customers.start');
							}
						});
					}
				}
			});
		}

    }
} ());
