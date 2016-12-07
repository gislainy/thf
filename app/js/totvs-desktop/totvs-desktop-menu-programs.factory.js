/**
* @license TOTVS | Sample Menu HTML v0.1.0
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsMenu
* @name totvsMenuPrograms
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
        .factory('totvsDesktopMenuPrograms', totvsDesktopMenuPrograms);

    totvsDesktopMenuPrograms.$inject = [];

    function totvsDesktopMenuPrograms() {

        var applications = [],
            factory = {
                getProgramApplications: getProgramApplications
            };

        return factory;

        function getProgramApplications(callback) {
            // TODO: Get list of server
            applications.splice(0, 0,
                new MenuApplication(999, 'Cadastro', [
                    new Program('Cliente', '/clientes', 1),
                    new Program('Grid', '/grid', 2),
                ])
            );
            callback(applications);
        }

    }
    
    function MenuApplication(id, application, programs) {
        this.id = id || 1;
        this.application = application || '[application]';
        this.programs = programs || [];
    }
    function Program(program, url) {
        this.program = program || '[program]';
        this.url = url || '/';
    }

}());
