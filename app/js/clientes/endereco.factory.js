/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsCustomer
* @name TotvsCustomerListController
* @object controller
*
* @created 2016-11-28 v0.1.0
* @updated 2016-11-28 v0.1.0
*
* @requires
*
* @dependencies
*
* @description Responsável por interagir com o REST, buscando e enviado informações para o servidor (back-end)
*/

(function () {

    'use strict';

    angular
        .module('cliente')
        .factory('enderecoFactory', enderecoFactory);

    enderecoFactory.$inject = ['$totvsresource'];

    function enderecoFactory($totvsresource) {

        var url = 'https://viacep.com.br/ws/:cep/json',
            factory;

        factory = $totvsresource.REST(url, {}, {});

        factory.getRecord = getRecord; // Busca um registro específico

        return factory;

        // *********************************************************************************
		// *** Functions
		// *********************************************************************************

        function getRecord(cep, callback) {
            return this.TOTVSGet({cep: cep}, callback);
        }
    }

}());
