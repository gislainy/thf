/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsApp
* @object module
*
* @created 2016-11-28 v0.1.0
* @updated 2016-11-28 v0.1.0
*
* @dependencies totvsHtmlFramework
*
* @description Main module app
*/

(function () {
    'use strict';

    angular
        .module('totvsApp', [
            'ngSanitize',
            'ui.router',
            'ui.mask',
            'ui.select',
            'totvsHtmlFramework',
            'totvsDesktop', 
            'cliente',
            'gridTest'
        ]);

}());
