/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsMenu
* @name totvsMenuFavorites
* @object factory
*
* @created 2016-11-28 v0.1.0
* @updated 2016-11-28 v0.1.0
*
* @requires totvs-menu.module
*
* @dependencies
*
* @description
*/

(function () {

    'use strict';

    angular
        .module('totvsDesktop')
        .factory('totvsDesktopMenuFavorites', totvsDesktopMenuFavorites);

    totvsDesktopMenuFavorites.$inject = [];

    function totvsDesktopMenuFavorites() {

        var favorites = [],
            factory = {
                getProgramFavorites: getProgramFavorites
            };

        return factory;

        function getProgramFavorites(callback) {
            // TODO: Get list of server
            if (favorites.length === 0) {
                favorites = GenerateFavorites();
            }

            callback(favorites);
        }

    }

    // ********************************************************************
    // Function - Simulation
    // ********************************************************************

    function GenerateFavorites() {
        var i,
            max = 0,
            favorites = [];

        // max = Math.floor((Math.random() * 20) + 1);

        for (i = 1; i <= max; i++) {
            favorites.push(new Favorite(
                'Programa favorito #' + i,
                '/'
            ));
        }

        return favorites;
    }

    function Favorite(program, url) {
        this.program = program || '[program]';
        this.url = url || '/';
    }

}());
