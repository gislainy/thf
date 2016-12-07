(function () {

    'use strict';

    angular
        .module('totvsApp')
        .config(totvsAppConfig);

    totvsAppConfig.$inject = ['$httpProvider', 'TotvsI18nProvider'];

    function totvsAppConfig($httpProvider, TotvsI18nProvider, TOTVSProfileProvider) {

        $httpProvider.interceptors.push('totvsHttpInterceptor');

        TotvsI18nProvider.setBaseContext('/');

    }

}());
