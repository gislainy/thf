/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvscliente
* @name TotvsclienteListController
* @object controller
*
* @created 2016-11-28 v0.1.0
* @updated 2016-11-28 v0.1.0
*
* @requires
*
* @dependencies
*
* @description Controller responsável por exibir os detalhes
*/

(function () {

    'use strict';

    angular
        .module('cliente')
        .controller('ClienteEditController', ClienteEditController);

    ClienteEditController.$inject = [
        '$scope',
        '$stateParams',
        '$state',
        '$window',
        '$rootScope',
        'totvs.app-notification.Service',
        'i18nFilter',
        'clienteFactory',
        'enderecoFactory',
        'TOTVSEvent'
    ];

    function ClienteEditController(
        $scope, $stateParams, $state, $window, $rootScope, notification, i18nFilter, clienteFactory, enderecoFactory, TOTVSEvent) {

        // *********************************************************************************
        // *** Variables
        // *********************************************************************************

        var self = this;

        // *********************************************************************************
        // *** Public Properties and Methods
        // *********************************************************************************

        self.cliente = {};
        self.cancel = cancel;
        self.save = save;
        self.buscarCEP = buscarCEP;

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
                if(cliente && cliente.id)
                    self.cliente = cliente;
            });
        }

        function cancel() {
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

        function save() {
            if(self.frmCadastroCliente.$valid) {
                debugger
                clienteFactory.saveRecord(self.cliente, function (result) {
                    $state.go('clientes.start');
                });
            } else {
                notification.question({
                    title: 'Erro!',
                    text: i18nFilter('Preencha todos os campos obrigatório do formulario'),
                    confirmLabel: 'Ok',
                    callback: function () {
                    }
                });
            }
        }

        function buscarCEP() {
            enderecoFactory.getRecord(self.cliente.cep, function (endereco) {
                if(!endereco.erro) {
                    self.cliente.cep = endereco.cep;
                    self.cliente.bairro = endereco.bairro;
                    self.cliente.logradouro = endereco.logradouro;
                    self.cliente.logradouro = endereco.logradouro;
                    self.cliente.estado = endereco.uf;
                    self.cliente.cidade = endereco.localidade;
                }
                else {
                    notification.question({
                        title: 'Erro!',
                        text: i18nFilter('O CEP informado não é válido'),
                        confirmLabel: 'Ok',
                        callback: function () {
                        }
                    });
                }
            });
        }
    }
} ());
