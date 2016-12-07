/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsHtmlFramework
* @name Totvs | HTML Framework
* @object module
* @kind group
*
* @created 13/06/2016 v12.1.12
* @updated 13/06/2016 v12.1.12
*
* @requires bootstrap, angular
*
* @description Módulo agrupador de todo o framework.
*/

(function () {
    'use strict';

    angular
        .module('totvsHtmlFramework', [
            'totvsInterceptors',
            'totvsConfigs',
            'totvsProviders',
            'totvsServices',
            'totvsFactories',
            'totvsFilters',
            'totvsDirectives'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsConfigs
* @name Totvs Configs
* @object module
* @kind group
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies
*
* @requires totvsHttpConfig
*
* @description Módulo agrupador para todos os configs.
*/

(function () {
    'use strict';

    angular
        .module('totvsConfigs', [
            'totvsHttpConfig'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsFilters
* @name Totvs Filters
* @object module
* @kind group
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies
*
* @requires i18nFilter, maskFilter, progressDateFilter
*
* @description Módulo agrupador para todas os filtros.
*/

(function () {
    'use strict';

    angular
        .module('totvsFilters', [
            'i18nFilter',
            'maskFilter',
            'progressDateFilter'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsInterceptors
* @name Totvs Interceptors
* @object module
* @kind group
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires totvsHttpInterceptor
*
* @description Módulo agrupador para todas os interceptors.
*/

(function () {
    'use strict';

    angular
        .module('totvsInterceptors', [
            'totvsHttpInterceptor'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDirectives
* @object module
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires
*
* totvsButton.module totvs-page.module totvs-pageChild.module totvs-pageNavbar.module
*
* @dependencies angular, bootstrap
*
* @description Módulo agrupador para todas as diretivas.
*/

(function () {
    'use strict';

    angular
        .module('totvsDirectives', [
            'autonumeric',
            'bsswitch',
            'chart',
            'datePicker',
            'datePickerRange',
            'decimalRange',
            'field',
            'inputRange',
            'multipleSelected',
            'numbersOnly',
            'onKeyEnter',
            'selectConector',
            'templatePopover',
            'templatePopoverRemoveAll',
            'timePicker',
            'totvsButton',
            'totvsChart',
            'totvsDatepicker',
            'totvsDateRange',
            'totvsDecimal',
            'totvsDiagram',
            'totvsDivider',
            'totvsEditable',
            'totvsEditor',
            'totvsExecution',
            'totvsField',
            'totvsGantt',
            'totvsGrid',
            'totvsGroupContent',
            'totvsInput',
            'totvsListItem',
            'totvsListItemAction',
            'totvsListItemContent',
            'totvsListItemContentDetail',
            'totvsListItemHeader',
            'totvsListItemInfo',
            'totvsListItemTitle',
            'totvsListPagination',
            'totvsMashupCaptcha',
            'totvsModalBody',
            'totvsModalFooter',
            'totvsModalHeader',
            'totvsMultiSelect',
            'totvsNumber',
            'totvsPage',
            'totvsPageAlert',
            'totvsPageBreadcrumb',
            'totvsPageChild',
            'totvsPageContent',
            'totvsPageContentHeader',
            'totvsPageDetail',
            'totvsPageDetailInfo',
            'totvsPageDetailInfoGroup',
            'totvsPageDisclaimers',
            'totvsPageForm',
            'totvsPageHeader',
            'totvsPageHeaderOperation',
            'totvsPageHeaderOperationAction',
            'totvsPageHeaderOperationFilter',
            'totvsPageHeaderTitle',
            'totvsPageNavbar',
            'totvsPageQuickFilter',
            'totvsPageQuickSelect',
            'totvsPageTags',
            'totvsPhone',
            'totvsSelect',
            'totvsSchedule',
            'totvsTab',
            'totvsTabContentTransclude',
            'totvsTabDropdown',
            'totvsTabDropdownItem',
            'totvsTabHeadingTransclude',
            'totvsTable',
            'totvsTabset',
            'totvsTime',
            'totvsUpload',
            'totvsWidget',
            'totvsWidgetBody',
            'totvsWidgetFooter',
            'totvsWidgetFooterActions',
            'totvsWidgetFooterBody',
            'totvsWidgetHeader',
            'zoom'
        ]);
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsFactories
* @name Totvs Factories
* @object module
* @kind group
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires totvsCustom
*
* @description Módulo agrupador para todas as factories.
*/

(function () {
    'use strict';

    angular
        .module('totvsFactories', [
            'totvsCustom'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsProviders
* @name Totvs Providers
* @object module
* @kind group
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires TOTVSMashup, TOTVSProfile, TOTVSResource, TOTVSLocalDatabase, TOTVSLocalResource
*
* @description Módulo agrupador para todas os providers.
*/

(function () {
    'use strict';

    angular
        .module('totvsProviders', [
            'TOTVSMashup',
            'TOTVSProfile',
            'TOTVSResource',
            'TOTVSLocalDatabase',
            'TOTVSLocalResource'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsServices
* @name Totvs Services
* @object module
* @kind group
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies
*
* @requires notification, totvsUtils, totvsUtilsBrowser, totvsUtilsKendo
*
* @description Módulo agrupador para todos os serviços.
*/

(function () {
    'use strict';

    angular
        .module('totvsServices', [
            'notification',
            'totvsUtils',
            'totvsUtilsBrowser',
            'totvsUtilsKendo'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module TOTVSLocalDatabase
* @name Totvs Local Database
* @object module
* @kind provider
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description
*/

(function () {
    'use strict';

    angular
        .module('TOTVSLocalDatabase', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module TOTVSLocalResource
* @name Totvs Local Resource
* @object module
* @kind provider
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires TOTVSLocalDatabase
*
* @description
*/

(function () {
    'use strict';

    angular
        .module('TOTVSLocalResource', [
            'TOTVSLocalDatabase'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module TOTVSMashup
* @name Totvs Mashup
* @object module
* @kind provider
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires TOTVSResource
*
* @description Provider de acesso aos Serviços do Mashup da Totvs.
*/

(function () {
    'use strict';

    angular
        .module('TOTVSMashup', [
            'TOTVSResource'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module TOTVSProfile
* @name Totvs Profile
* @object module
* @kind provider
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular, angular-resource
*
* @requires
*
* @description
*/

(function () {
    'use strict';

    angular
        .module('TOTVSProfile', [
            'ngResource'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module TOTVSResource
* @name Totvs Resource
* @object module
* @kind provider
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular, angular-resource
*
* @requires
*
* @description
*/

(function () {
    'use strict';

    angular
        .module('TOTVSResource', [
            'ngResource'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsHttpConfig
* @name Totvs HTTP Config
* @object module
* @kind config
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires notification
*
* @description Tratamento padrão para as respostas do back-end (REST)
*/

(function () {
    'use strict';

    angular
        .module('totvsHttpConfig', [
            'notification'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsHttpInterceptor
* @name Totvs Http interceptor
* @object module
* @kind interceptor
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires notification
*
* @description Interceptor genérico.
*/

(function () {
    'use strict';

    angular
        .module('totvsHttpInterceptor', [
            'notification'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsCustom
* @name Totvs Custom
* @object module
* @kind factory
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description
*
* Para customização dos programas desenvolvidos com o TOTVS HTML Framework é necessário o uso da diretiva
* totvsCustomElement para criar pontos de entrada de customização nos programas em conjunto com a factory
* customization.generic.Factory.
*/

(function () {
    'use strict';

    angular
        .module('totvsCustom', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module notification
* @name Totvs Notification
* @object module
* @kind service
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
*
* @dependencies jquery, bootstrap, angular, angular-animate, angular-bootstrap, AngularJS-Toaster
*
* @requires
*
* @description Serviço responsável por apresentar mensagens e notificações ao usuário do sistema.
*/

(function () {
    'use strict';

    angular
        .module('notification', [
            'ngAnimate',
            'ui.bootstrap',
            'toaster'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsUtils
* @name Totvs Utils
* @object module
* @kind service
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description Serviços com funções genéricos para auxiliar o desenvolvimento.
*/

(function () {
    'use strict';

    angular
        .module('totvsUtils', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsUtilsBrowser
* @name Totvs Utils Browser
* @object module
* @kind service
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description Serviço com funções genéricas para trabalhar com o browser.
*/

(function () {
    'use strict';

    angular
        .module('totvsUtilsBrowser', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsUtilsKendo
* @name Totvs Utils Kendo
* @object module
* @kind service
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description Serviços comuns das diretivas que utilizam o KendoUI
*/

(function () {
    'use strict';

    angular
        .module('totvsUtilsKendo', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module i18nFilter
* @name Totvs i18n
* @object module
* @kind filter
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires totvsUtilsBrowser
*
* @description Filtro de internacionalização.
*/

(function () {
    'use strict';

    angular
        .module('i18nFilter', [
            'totvsUtilsBrowser'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module progressDateFilter
* @name Progress Date Filter
* @object module
* @kind filter
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description Filtro de data.
*/

(function () {
    'use strict';

    angular
        .module('progressDateFilter', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module maskFilter
* @name Mask Filter
* @object module
* @kind filter
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description Filtro de mascara.
*/

(function () {
    'use strict';

    angular
        .module('maskFilter', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module autonumeric
* @name autonumeric
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description Diretiva autonumeric.
*/

(function () {
    'use strict';

    angular
        .module('autonumeric', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module bsswitch
* @name bsswitch
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, bootstrap, bootstrap-switch, angular
*
* @requires i18nFilter
*
* @description Diretiva bsswitch.
*/

(function () {
    'use strict';

    angular
        .module('bsswitch', [
            'i18nFilter'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module chart
* @name chart
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description Diretiva chart (DEPRECATED).
*/

(function () {
    'use strict';

    angular
        .module('chart', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module datePickerRange
* @name Date Picker Range
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, bootstrap-datepicker, angular
*
* @requires
*
* @description Diretiva Date Picker Range (DEPRECATED).
*/

(function () {
    'use strict';

    angular
        .module('datePickerRange', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module datePicker
* @name Date Picker
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, bootstrap-datepicker, angular
*
* @requires
*
* @description Diretiva datePicker (DEPRECATED).
*/

(function () {
    'use strict';

    angular
        .module('datePicker', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module decimalRange
* @name Decimal Range
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description Diretiva Decimal Range.
*/

(function () {
    'use strict';

    angular
        .module('decimalRange', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module field
* @name field
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, bootstrap-datepicker, angular,  angular-hotkeys
*
* @requires
*
* autonumeric, datePicker, datePickerRange, decimalRange, inputRange, numbersOnly,
* onKeyEnter, selectConector
*
* @description Diretiva field.
*/

(function () {
    'use strict';

    angular
        .module('field', [
            'autonumeric',
            'datePicker',
            'datePickerRange',
            'decimalRange',
            'inputRange',
            'numbersOnly',
            'onKeyEnter',
            'selectConector',
			'cfp.hotkeys'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module inputRange
* @name Input Range
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description Diretiva Input Range (DEPRECATED).
*/

(function () {
    'use strict';

    angular
        .module('inputRange', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module multipleSelected
* @name Multiple Selected
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires totvsPageHeaderOperationAction
*
* @description Diretiva Multiple Selected.
*/

(function () {
    'use strict';

    angular
        .module('multipleSelected', [
            'totvsPageHeaderOperationAction'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module numbersOnly
* @name Numbers Only
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description Diretiva Numbers Only.
*/

(function () {
    'use strict';

    angular
        .module('numbersOnly', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module onKeyEnter
* @name On Key Enter
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description Diretiva On Key Enter
*/

(function () {
    'use strict';

    angular
        .module('onKeyEnter', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module templatePopover
* @name Template Popover
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, bootstrap, angular, angular-bootstrap
*
* @requires
*
* @description A diretiva Template Popover exibe um conteúdo dentro de um popover.
*/

(function () {
    'use strict';

    angular
        .module('templatePopover', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module selectConector
* @name Select Conector
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies angular
*
* @requires
*
* @description Diretiva Select Conector (DEPRECATED).
*/

(function () {
    'use strict';

    angular
        .module('selectConector', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module timePicker
* @name Time Picker
* @object module
* @directive directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular, bootstrap-timepicker
*
* @requires
*
* @description Diretiva Time Picker.
*/

(function () {
    'use strict';

    angular
        .module('timePicker', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module templatePopoverRemoveAll
* @name Template Popover Remove All
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva Template Popover Remove All verifica se existe algum popover
* aberto na página e o fecha.
*/

(function () {
    'use strict';

    angular
        .module('templatePopoverRemoveAll', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsChart
* @name Totvs Chart
* @object module
* @kind directive
*
* @created 20/06/2016 v12.1.12
* @updated 20/06/2016 v12.1.12
*
* @dependencies jquery, angular, kendo-ui
*
* @requires
*
* @description Diretiva responsável pela criação de gráficos.
*/

(function () {
    'use strict';

    angular
        .module('totvsChart', [
            'kendo.directives'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsButton
* @name Totvs Button
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description Diretiva totvsButton.
*/

(function () {
    'use strict';

    angular
        .module('totvsButton', []);
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDateRange
* @name Totvs Date Range
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, angular, kendo-ui
*
* @requires totvsUtils, totvsField, i18nFilter
*
* @description Diretiva Totvs Date Range
*/

(function () {
    'use strict';

    angular
        .module('totvsDateRange', [
            'totvsUtils',
            'totvsField',
            'i18nFilter'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDatepicker
* @name Totvs Datepicker
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, angular, kendo-ui
*
* @requires totvsUtils, totvsField
*
* @description Diretiva Totvs Date Range
*/

(function () {
    'use strict';

    angular
        .module('totvsDatepicker', [
            'totvsUtils',
            'totvsField'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDecimal
* @name Totvs Decimal
* @object module
* @kind directive
*
* @created 30/08/2016 v12.1.13
* @updated 30/08/2016 v12.1.13
*
* @dependencies bootstrap, angular
*
* @requires autonumeric, totvsField
*
* @description Diretiva Totvs Decimal.
*/

(function () {
    'use strict';

    angular
        .module('totvsDecimal', [
            'autonumeric',
            'totvsField'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDiagram
* @name Totvs Diagram
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, angular, kendo-ui
*
* @requires totvsUtilsKendo
*
* @description Diretiva Totvs Diagram.
*/

(function () {
    'use strict';

    angular
        .module('totvsDiagram', [
            'kendo.directives',
            'totvsUtilsKendo'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDivider
* @object module
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @description
*
* Inclui uma linha divisória entre os conteúdos forçando a quebra / divisão do conteúdo exibido.
*/

(function () {
    'use strict';

    angular
        .module('totvsDivider', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsEditable
* @name Totvs Editable
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, bootstrap, angular, angular-bootstrap
*
* @requires
*
* @description A diretiva de 'edit inline' foi concebida para permitir que campos apresentados normalmente em listas
* possam ser alterados sem comprometer o layout.
*/

(function () {
    'use strict';

    angular
        .module('totvsEditable', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsEditor
* @name Totvs Editor
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, angular, angular-sanitize, kendo-ui
*
* @requires
*
* @description
*/

(function () {
    'use strict';

    angular
        .module('totvsEditor', [
            'ngSanitize',
            'kendo.directives'
        ]);
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsField
* @name Totvs Field
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular, angular-hotkeys
*
* @requires
*
* @description
*/

(function () {
    'use strict';

    angular
        .module('totvsField', [
            'cfp.hotkeys'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsExecution
* @name Totvs Execution
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies boostrap, angular, angular-scroll
*
* @requires totvsSchedule
*
* @description A diretiva Totvs Execution é um container para as diretivas Totvs Execution Item.
*/

(function () {
    'use strict';

    angular
        .module('totvsExecution', [
            'duScroll',
            'totvsSchedule'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsGantt
* @name Totvs Gantt
* @object module
* @kind directive
*
* @created 30/06/2016 v12.1.12
* @updated 30/06/2016 v12.1.12
*
* @dependencies jquery, angular, kendo-ui
*
* @requires totvsUtilsKendo
*
* @description Diretiva Totvs Gantt.
*/

(function () {
    'use strict';

    angular
        .module('totvsGantt', [
            'kendo.directives',
            'totvsUtilsKendo'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsGrid
* @name Totvs Grid
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, angular, kendo-ui
*
* @requires totvsUtilsKendo
*
* @description Diretiva Totvs Grid.
*/

(function () {
    'use strict';

    angular
        .module('totvsGrid', [
            'kendo.directives',
            'totvsUtilsKendo'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsGroupContent
* @name Totvs Group Content
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description A diretiva Totvs Group Content ajuda a esconder e exibir conteúdos de uma página.
*/

(function () {
    'use strict';

    angular
        .module('totvsGroupContent', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsInput
* @name Totvs Input
* @object module
* @kind directive
*
* @created 05/09/2016 v12.1.13
* @updated 05/09/2016 v12.1.13
*
* @dependencies bootstrap, angular, angular-mask
*
* @requires totvsField
*
* @description Campo de entrada de dados.
*/

(function () {
    'use strict';

    angular
        .module('totvsInput', [
            'ngMask',
            'totvsField'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItem
* @name Totvs List Item
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Totvs List item é a diretiva que adiciona um container para representar um registro de uma lista.
*/

(function () {
    'use strict';

    angular
        .module('totvsListItem', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemAction
* @name Totvs List Item Action
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva de ações consiste em uma lista de ações a serem especificadas no seu próprio conteúdo.
*/

(function () {
    'use strict';

    angular
        .module('totvsListItemAction', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemContent
* @name Totvs List Item Content
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Esta diretiva é o container principal da lista de itens, esta por sua vez será sempre exibida.
*/

(function () {
    'use strict';

    angular
        .module('totvsListItemContent', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemContentDetail
* @name Totvs List Item Content Detail
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A única diferença entre o container de detalhamento e o padrão para exibição de conteúdo nos itens
* da lista é que o container de detalhamento por padrão vem fechado e possui a opção para exibi-lo.
*/

(function () {
    'use strict';

    angular
        .module('totvsListItemContentDetail', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemHeader
* @name Totvs List Item Header
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva de cabeçalho de item da lista corresponde ao container em que estarão dispostas as
* diretivas titulo e operações, esta por sua vez contendo as operações principais e adicionais.
*/

(function () {
    'use strict';

    angular
        .module('totvsListItemHeader', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemInfo
* @name Totvs List Item Info
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva de informação do item se resume a realizar a exibição das informações do registro.
*/

(function () {
    'use strict';

    angular
        .module('totvsListItemInfo', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemTitle
* @name Totvs List Item Title
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Para o titulo é preciso informar apenas a propriedade title e ação ou link a ser chamado quando o
* usuário clicar sobre o titulo.
*/

(function () {
    'use strict';

    angular
        .module('totvsListItemTitle', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsMashupCaptcha
* @name Totvs Mashup Captcha
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires TOTVSMashup
*
* @description
*
* A diretiva Totvs Mashup Captcha deve ser usada quando há necessidade de exibição de imagens de
* verificação de serviços do TOTVS Mashup.
*/

(function () {
    'use strict';

    angular
        .module('totvsMashupCaptcha', [
            'TOTVSMashup'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListPagination
* @name Totvs List Pagination
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description Esta diretiva é o container para o componente de paginação.
*/

(function () {
    'use strict';

    angular
        .module('totvsListPagination', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsModalBody
* @name Totvs Modal Body
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva Totvs Modal Body deve ser usada em conjunto com as diretiva Totvs Modal Header e
* Totvs Modal Footer para construção de telas modais, serve como container para o conteúdo podendo
* conter outras diretivas do TOTVS | HTML Framework ou elementos HTML para construção de
* formulários ou exibição de dados.
*/

(function () {
    'use strict';

    angular
        .module('totvsModalBody', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsModalFooter
* @name Totvs Modal Footer
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva Totvs Modal Footer deve ser usada em conjunto com as diretiva Totvs Modal Header e
* Totvs Modal Body para construção de telas modais, serve como container para o rodapé das telas
* modais.
*/

(function () {
    'use strict';

    angular
        .module('totvsModalFooter', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsModalHeader
* @name Totvs Modal Header
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva Totvs Modal Header deve ser usada em conjunto com as diretiva Totvs Modal Body e
* Totvs Modal Footer para construção de telas modais, seu uso especifico é para incluir um título
* nas telas modais.
*/

(function () {
    'use strict';

    angular
        .module('totvsModalHeader', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsMultiSelect
* @name Totvs Multi Select
* @object module
* @kind directive
*
* @created 19/08/2016 v12.1.13
* @updated 19/08/2016 v12.1.13
*
* @dependencies jquery, angular, kendo-ui
*
* @requires totvsField
*
* @description
*
* Esta diretiva representa um componente que contém a possibilidade de selecionar ou ou mais
* registros da lista de sugestões.
*/

(function () {
    'use strict';

    angular
        .module('totvsMultiSelect', [
            'kendo.directives'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsNumber
* @name Totvs Number
* @object module
* @kind directive
*
* @created 09/09/2016 v12.1.13
* @updated 09/09/2016 v12.1.13
*
* @dependencies bootstrap, angular, angular-mask
*
* @requires totvsField
*
* @description Componente de entrada de dados que aceita apenas números.
*/

(function () {
    'use strict';

    angular
        .module('totvsNumber', [
            'ngMask',
            'totvsField'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPage
* @name Totvs Page
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Esta diretiva deve ser utilizada como container principal para as telas desenvolvidas utilizando
* o TOTVS | HTML Framework.
*/

(function () {
    'use strict';

    angular
        .module('totvsPage', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageAlert
* @name Totvs Page Alert
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description Exibe uma mensagem no meio do conteúdo da tela.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageAlert', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageBreadcrumb
* @name Totvs Page Breadcrumb
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Esta diretiva deve ser usada para auxiliar o usuário a identificar a página em que eles está,
* dentro de uma hierarquia de páginas e facilitar a sua navegação entre essas páginas.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageBreadcrumb', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageChild
* @name Totvs Page Child
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva Totvs Page Child é um container que deve ser usado no lugar da Totvs Page nas páginas
* que serão incorporadas em uma página principal através da diretiva ng-include, isso permite que
* páginas filhas possam ter comportamentos (type) diferente da página principal.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageChild', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageContent
* @name Totvs Page Content
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description A diretiva page content existe apenas como container para o conteúdo da página.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageContent', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageContentHeader
* @name Totvs Page Content Header
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva page content header existe apenas como container para adição de um cabeçalho para o
* conteúdo da página. Originalmente projetada para ser utilizada nas telas de lista onde é
* disponibilizado a operação de selecionar todos, filtros rápidos e ordenação.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageContentHeader', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageDetail
* @name Totvs Page Detail
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Esta diretiva é o container principal da página de detalhamento. Para alinhamento das
* propriedades (totvs-page-detail-info) e do próprio conteúdo é sugerido que seja estudado o modelo
* de orientação de grid do Bootstrap: Guia de Orientação do Sistema de Grid.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageDetail', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageDetailInfo
* @name Totvs Page Detail Info
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva de informação para o detalhamento se resume a realizar a exibição das informações
* do registro. Para isto basta informar o titulo da propriedade e o valor correspondente.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageDetailInfo', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageDisclaimers
* @name Totvs Page Disclaimers
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva de page disclaimer foi concebida para exibir os filtros que são aplicados a uma
* consulta.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageDisclaimers', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageDetailInfoGroup
* @name Totvs Page Detail Info Group
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Semelhante a diretiva Totvs Divider, inclui uma linha divisória com um sub-título entre os
* conteúdos forçando a quebra / divisão do conteúdo exibido.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageDetailInfoGroup', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageForm
* @name Totvs Page Form
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Esta diretiva é o container principal da página de edição / adição. Para alinhamento das
* propriedades (field) e do próprio conteúdo é sugerido que seja estudado o modelo de orientação
* de grid do Bootstrap: Guia de Orientação do Sistema de Grid.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageForm', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageHeader
* @name Totvs Page Header
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Esta diretiva serve como container para as diretivas Page Header Title e Page Header Operation,
* a mesma deve ficar dentro da diretiva Totvs Page Navbar.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageHeader', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageHeaderOperationAction
* @name Totvs Page Header Operation Action
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A  diretiva Page Header Operation Action exibe botões padrões de ação para cada tipo de página.
* A diretiva ainda consiste em uma lista de ações a serem especificadas no seu próprio conteúdo,
* disponível apenas quando a página for do tipo lista (list) ou detalhamento (detail).
*/

(function () {
    'use strict';

    angular
        .module('totvsPageHeaderOperationAction', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageHeaderOperation
* @name Totvs Page Header Operation
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A diretiva Page Header Operation é um container para a diretiva Page Header Operation Action
* e Page Header Operation Filter e tem o objetivo de alinhar as operações disponíveis na tela.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageHeaderOperation', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageHeaderOperationFilter
* @name Totvs Page Header Operation Filter
* @object module
* @name directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Está diretiva deve ser utilizada apenas quando a página estiver no modo de lista (list).
*/

(function () {
    'use strict';

    angular
        .module('totvsPageHeaderOperationFilter', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageNavbar
* @name Totvs Page Navbar
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Esta diretiva serve como container para as diretivas Totvs Page Breadcrumb e Totvs Page Header,
* a mesma deve ficar dentro da diretiva Totvs Page.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageNavbar', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageHeaderTitle
* @name Totvs Page Header Title
* @object module
* @name directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Para o titulo é preciso informar apenas a propriedade title. Quando a página for do tipo lista
* (list) pode ser informado adicionalmente a propriedade total, esta por sua vez é aplicada nas
* telas de pesquisa para representar a quantidade total de registros encontrados de acordo com a
* pesquisa realizada; o atributo é opcional em outras situações.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageHeaderTitle', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageQuickFilter
* @name Totvs Page Quick Filter
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Objetivo desta diretiva é disponibilizar para o usuário alguns filtros pré-definidos através da
* propriedade filters-list, filtros customizados pelo próprio usuário através da propriedade
* filters-list-custom e as opções de ordenação através da propriedade orderby-list.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageQuickFilter', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageQuickSelect
* @name Totvs Page Quick Select
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Esta diretiva foi projetada para ser utilizada com a página em formato de lista. Nela é
* disponibilizada a operação de selecionar todos para a lista.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageQuickSelect', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageTags
* @name Totvs Page Tags
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Esta diretiva é responsável pela exibição de legendas para a página. Para cada item de legenda
* deve ser criado um estilo de css para identificação do item.
*/

(function () {
    'use strict';

    angular
        .module('totvsPageTags', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPhone
* @name Totvs Phone
* @object module
* @kind directive
*
* @created 25/08/2016 v12.1.13
* @updated 25/08/2016 v12.1.13
*
* @dependencies bootstrap, angular, angular-mask
*
* @requires totvsField
*
* @description
*
* Diretiva para ser utilizado tanto em versão desktop e mobile. Quando for utilizado em versão
* desktop aparentemente será um input type="text", porém no mobile acionará o teclado do
* Smartphone/Tablet.
*/

(function () {
    'use strict';

    angular
        .module('totvsPhone', [
            'ngMask',
            'totvsField'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsSchedule
* @name Totvs Schedule
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, bootstrap, angular, angular-bootstrap
*
* @requires notification, totvsModalBody, totvsModalHeader, totvsModalFooter
*
* @description
*
* A diretiva Totvs Schedule pode ser usada para auxiliar na configuração de ações que podem ou não
* ter um agendamento com ou sem repetição.
*/

(function () {
    'use strict';

    angular
        .module('totvsSchedule', [
            'notification',
            'ui.bootstrap',
            'totvsModalBody',
            'totvsModalHeader',
            'totvsModalFooter'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsSelect
* @name Totvs Select
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, angular, kendo-ui
*
* @requires totvsField
*
* @description
*
* Quando utilizar a diretiva Totvs Select, a mesma assumirá o comportamento de um campo de entrada
* de dados com funcionalidades para a seleção de dados.
*/

(function () {
    'use strict';

    angular
        .module('totvsSelect', [
            'kendo.directives',
            'totvsField'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTab
* @name Totvs Tab
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires totvsTabset
*
* @description
*
* A diretiva Totvs Tab serve como container para organizar conteúdos facilitando a visualização do
* usuário.
*/

(function () {
    'use strict';

    angular
        .module('totvsTab', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabContentTransclude
* @name Totvs Tab Content Transclude
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires totvsTabset
*
* @description Diretiva Totvs Tab Content Transclude.
*/

(function () {
    'use strict';

    angular
        .module('totvsTabContentTransclude', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabDropdown
* @name Totvs Tab Dropdown
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires totvsTabset
*
* @description
*
* O Totvs Tab Dropdown cria uma aba no Totvs Tabset, mas ao invés de exibir um conteúdo, o mesmo
* exibe uma lista de abas agrupadas para serem selecionadas.
*/

(function () {
    'use strict';

    angular
        .module('totvsTabDropdown', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabDropdownItem
* @name Totvs Tab Dropdown Item
* @object moduleSpec
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires totvsTabset
*
* @description
*
* A diretiva Totvs Tab Dropdown Item serve como container para organizar conteúdos assim como a
* Totvs Tab.
*/

(function () {
    'use strict';

    angular
        .module('totvsTabDropdownItem', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabHeadingTransclude
* @name Totvs Tab Heading Transclude
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires totvsTab
*
* @description Directive Totvs Tab Heading Transclude.
*
*
*/

(function () {
    'use strict';

    angular
        .module('totvsTabHeadingTransclude', [
            'totvsTab'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTable
* @name Totvs Table
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* A table diferentemente da lista permite scroll horizontal caso necessário exibir muitos dados na
* mesma. Para a table em si é preciso apenas informar o 'data-source' através do atributo 'items'.
*/

(function () {
    'use strict';

    angular
        .module('totvsTable', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabset
* @name Totvs Tabset
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, bootstrap, angular, angular-hotkeys
*
* @requires
*
* @description
*
* O Totvs Tabset é uma diretiva que server como container para um conjunto de abas que organizam o
* conteúdo por categoria.
*/

(function () {
    'use strict';

    angular
        .module('totvsTabset', [
            'cfp.hotkeys'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTime
* @name Totvs Time
* @object module
* @kind directive
*
* @created 29/08/2016 v12.1.13
* @updated 29/08/2016 v12.1.13
*
* @dependencies bootstrap, angular
*
* @requires totvsField, totvsUtils
*
* @description
*
* Para atender a necessidade de um componente de-até para time, o próprio Totvs Time pode ser
* utilizado.
*/

(function () {
    'use strict';

    angular
        .module('totvsTime', [
            'totvsField',
            'totvsUtils'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsUpload
* @name Totvs Upload
* @object module
* @kind directive
*
* @created 20/06/2016 v12.1.12
* @updated 20/06/2016 v12.1.12
*
* @dependencies jquery, angular, kendo-ui
*
* @requires totvsField
*
* @description
*
* Ao utilizar esta diretiva, a mesma terá o comportamento de um componente para escolher arquivos a
* serem enviados ao servidor.
*/

(function () {
    'use strict';

    angular
        .module('totvsUpload', [
            'kendo.directives',
            'totvsField'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidget
* @name Totvs Widget
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires
*
* @description
*
* Container para as diretivas Totvs Widget Header, Totvs Widget Body e Totvs Widget Footer.
*/

(function () {
    'use strict';

    angular
        .module('totvsWidget', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidgetBody
* @name Totvs Widget Body
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires totvsWidget
*
* @description Diretiva Totvs Widget Body.
*/

(function () {
    'use strict';

    angular
        .module('totvsWidgetBody', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidgetFooter
* @name Totvs Widget Footer
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires totvsWidget
*
* @description
*
* A diretiva Totvs Widget Footer serve como container para o rodapé da diretiva Totvs Widget.
*/

(function () {
    'use strict';

    angular
        .module('totvsWidgetFooter', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidgetFooterActions
* @name Totvs Widget Footer Actions
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires totvsWidget, totvsWidgetFooter
*
* @description
*
* A diretiva Totvs Widget Footer Actions permite adicionar ações a Totvs Widget, isso permite que
* o desenvolvedor inclua uma lista de ações baseadas na widget apresentada com atalhos para outras
* telas e funcionalidades.
*/

(function () {
    'use strict';

    angular
        .module('totvsWidgetFooterActions', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidgetFooterBody
* @name Totvs Widget Footer Body
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires totvsWidget, totvsWidgetFooter
*
* @description
*
* A diretiva Totvs Widget Footer Body serve como container para o corpo do rodapé da diretiva
* Totvs Widget Footer.
*/

(function () {
    'use strict';

    angular
        .module('totvsWidgetFooterBody', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidgetHeader
* @name Totvs Widget Header
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies bootstrap, angular
*
* @requires totvsWidget
*
* @description
*
* A diretiva Totvs Widget Header serve para exibir um título para a diretiva Totvs Widget.
* Além do título é possível incluir uma opção de ajuda e configurações.
*/

(function () {
    'use strict';

    angular
        .module('totvsWidgetHeader', []);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module zoom
* @name Zoom
* @object module
* @kind directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @dependencies jquery, bootstrap, angular, angular-bootstrap, angular-hotkeys, ng-nestable
*
* @requires i18nFilter, totvsGrid, totvsModalHeader, totvsModalBody, totvsModalFooter
*
* @description
*
* A diretiva de zoom adiciona automaticamente um botão ao componente que permite ao usuário abrir
* uma tela auxiliar para realizar consultas e seleção dos dados. Esta diretiva está disponível para
* todos os comportamentos da tag <field>, entretanto, suas melhores aplicações se dão em campos do
* tipo: input, typeahead e select.
*/

(function () {
    'use strict';

    angular
        .module('zoom', [
            'i18nFilter',
            'totvsGrid',
            'ui.bootstrap',
            'ng-nestable',
            'cfp.hotkeys'
        ]);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module TOTVSLocalDatabase
* @name $totvslocaldatabase
* @object provider
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-local-database.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('TOTVSLocalDatabase')
        .provider('$totvslocaldatabase', TotvsLocalDatabase);

    TotvsLocalDatabase.$inject = [];

    function TotvsLocalDatabase() {

        this.$get = TotvsLocalDatabaseGet;

        TotvsLocalDatabaseGet.$inject = [];

        function TotvsLocalDatabaseGet() {

            var database,
                table,
                rowStates,
                operationMode;

            rowStates = {
                UNCHANGED: 0,
                INSERTED: 1,
                MODIFIED: 2,
                DELETED: 3
            };

            operationMode = {
                NORMAL: 0,
                ROWSTATES: 1
            };

            database = {
                mode: operationMode.NORMAL,
                tables: {},
                hasPendingChanges: false,
                getModes: function () {
                    return operationMode;
                },
                getTable: function (NAME) {
                    return this.tables[NAME];
                },
                getTableByURL: function (URL) {
                    var idx = URL.indexOf(':'),
                        name = idx === -1 ? URL : URL.substring(0, idx);

                    return this.getTable(name);
                },
                setTable: function (NAME, ROWS) {
                    var result = table(NAME, ROWS);

                    this.tables[NAME] = result;

                    return result;
                },
                removeTable: function (NAME) {
                    if (this.tables.hasOwnProperty(NAME)) {
                        delete this.tables[NAME];
                    }
                },
                shallowCopy: function (ROW) {
                    var result = {},
                        key;

                    for (key in ROW) {
                        if (ROW.hasOwnProperty(key)) {
                            if (ROW[key] === null || ROW[key].constructor !== Array) {
                                result[key] = ROW[key];
                            }
                        }
                    }

                    return result;
                }
            };

            table = function (NAME, ROWS) {
                return {
                    name: NAME,
                    rows: ROWS,
                    query: function (parameters, includeDeleted) {

                        var result = [],
                            idx,
                            row,
                            found,
                            key;

                        for (idx in this.rows) {
                            if (this.rows.hasOwnProperty(idx)) {
                                row = this.rows[idx];

                                if (row) {
                                    if (!includeDeleted && this.isDeleted(row)) {
                                        continue;
                                    }

                                    found = true;

                                    for (key in parameters) {
                                        if (parameters.hasOwnProperty(key)) {
                                            if (row[key] && row[key] !== parameters[key]) {
                                                found = false;
                                            }
                                        }
                                    }

                                    if (found) {
                                        result.push(row);
                                    }
                                }
                            }
                        }

                        return result;
                    },
                    indexOf: function (parameters) {
                        var idx,
                            row,
                            found,
                            key;

                        for (idx in this.rows) {
                            if (this.rows.hasOwnProperty(idx)) {
                                row = this.rows[idx];
                                if (row && !this.isDeleted(row)) {
                                    found = true;
                                    for (key in parameters) {
                                        if (parameters.hasOwnProperty(key)) {
                                            if (row[key] && row[key] !== parameters[key]) {
                                                found = false;
                                            }
                                        }
                                    }
                                    if (found) {
                                        return idx;
                                    }
                                }
                            }
                        }

                        return -1;
                    },
                    find: function (parameters) {
                        var idx;

                        idx = this.indexOf(parameters);

                        if (idx > -1) {
                            return jQuery.extend(true, {}, this.rows[idx]);
                        }

                        return undefined;
                    },
                    add: function (model) {
                        var idx = this.rows.length;

                        this.rows.push(model);

                        if (database.mode === operationMode.ROWSTATES && this.canSetAsInserted(this.rows[idx])) {
                            this.setRowState(this.rows[idx], rowStates.INSERTED);
                        }
                    },
                    update: function (parameters, model) {
                        var idx = parameters === undefined ? -1 : this.indexOf(parameters);

                        if (idx > -1) {
                            this.rows[idx] = model;

                            if (database.mode === operationMode.ROWSTATES && this.canSetAsModified(this.rows[idx])) {
                                this.setRowState(this.rows[idx], rowStates.MODIFIED);
                            }
                        } else {
                            idx = this.rows.length;

                            this.add(model);
                        }

                        return idx;
                    },
                    remove: function (parameters) {
                        var idx = this.indexOf(parameters);

                        if (idx > -1) {
                            if (database.mode === operationMode.ROWSTATES && this.canSetAsDeleted(this.rows[idx])) {
                                this.setRowState(this.rows[idx], rowStates.DELETED);
                            } else {
                                this.rows.splice(idx, 1);
                            }
                        }

                        return idx;
                    },
                    isDeleted: function (row) {
                        if (database.mode === operationMode.ROWSTATES) {
                            return row['$state'] && row['$state'] === rowStates.DELETED;
                        }

                        return false;
                    },
                    setRowState: function (row, state) {
                        row['$state'] = state;
                    },
                    resetRowState: function (row) {
                        row['$state'] = rowStates.UNCHANGED;
                    },
                    canSetAsInserted: function (row) {
                        var currentState = row['$state'];

                        if (currentState &&
                            (currentState === rowStates.MODIFIED || currentState === rowStates.DELETED)) {
                            return false;
                        }

                        return true;
                    },
                    canSetAsModified: function (row) {
                        var currentState = row['$state'];

                        if (currentState &&
                            (currentState === rowStates.INSERTED || currentState === rowStates.DELETED)) {
                            return false;
                        }

                        return true;
                    },
                    canSetAsDeleted: function (row) {
                        var currentState = row['$state'];

                        if (currentState && currentState === rowStates.INSERTED) {
                            return false;
                        }

                        return true;
                    }
                };
            };

            return database;
        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module TOTVSLocalResource
* @name $totvslocalresource
* @object provider
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-local-resource.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('TOTVSLocalResource')
        .provider('$totvslocalresource', $totvslocalresource);

    $totvslocalresource.$inject = [];

    function $totvslocalresource() {

        this.$get = TotvsLocalResourceGet;

        TotvsLocalResourceGet.$inject = ['$resource', '$http', '$q', '$totvslocaldatabase'];

        function TotvsLocalResourceGet($resource, $http, $q, $totvslocaldatabase) {

            this.services = {};

            this.services.DATABASE = $totvslocaldatabase;

            this.services.DATABASEMODE = $totvslocaldatabase.getModes();

            this.services.loadFromJSON = function (json, tableName, child) {
                var table = $totvslocaldatabase.getTable(tableName);
                if (table === undefined) {
                    table = $totvslocaldatabase.setTable(tableName, []);
                }
                json.forEach(function (row) {
                    var newRow = $totvslocaldatabase.shallowCopy(row);
                    table.add(newRow);
                    table.resetRowState(newRow);
                    if (child) {
                        child.forEach(function (fnc) {
                            fnc(row);
                        });
                    }
                });
            };

            this.services.saveToJSON = function (tableName, filter, child) {
                var result = [],
                    table;

                table = $totvslocaldatabase.getTable(tableName);
                if (table === undefined) {
                    result = [];
                } else if (jQuery.isEmptyObject(filter)) {
                    result = table.rows;
                } else {
                    result = table.query(filter, true);
                }
                if (child) {
                    result.forEach(function (row) {
                        child.forEach(function (fnc) {
                            fnc(row);
                        });
                    });
                }
                return result;
            };

            this.services.initTable = function (tableName) {
                var table = $totvslocaldatabase.getTable(tableName);

                if (table === undefined) {
                    table = $totvslocaldatabase.setTable(tableName, []);
                }

                return table;
            };

            this.services.cleanTables = function (tableNames) {
                if (tableNames && tableNames.constructor === Array) {
                    tableNames.forEach(function (table) {
                        $totvslocaldatabase.removeTable(table);
                    });
                }
            };

            this.services.setDatabaseMode = function (mode) {
                $totvslocaldatabase.mode = mode;
            };

            this.services.REST = function (URL, OPTIONS, ACTIONS) {

                var TOTVSFactory,
                        Call;

                TOTVSFactory = {
                    url: URL,
                    options: OPTIONS,
                    actions: ACTIONS
                };

                Call = function (proc) {
                    this.proc = proc;
                    this.init = function () {
                        this.deferred = $q.defer();
                        this.$promise = this.deferred.promise;
                        setTimeout(this.proc, 10);
                    };
                };

                TOTVSFactory.TOTVSGet = function (parameters, callback) {
                    var call = new Call(function () {
                        var table,
                                result;

                        table = $totvslocaldatabase.getTableByURL(URL);
                        if (table) {
                            result = table.find(parameters);
                            if (result) {
                                call.deferred.resolve(result);
                            } else {
                                call.deferred.reject();
                            }
                        } else {
                            call.deferred.reject();
                        }
                    });
                    call.init();
                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.TOTVSQuery = function (parameters, callback) {

                    var call = new Call(function () {
                        var table,
                            result,
                            total,
                            idx;

                        table = $totvslocaldatabase.getTableByURL(URL);
                        if (table && table.rows) {
                            result = table.query(parameters);
                            total = result.length;
                            result = result.slice(parameters.start, parameters.start + parameters.limit);
                            for (idx in result) {
                                if (result.hasOwnProperty(idx)) {
                                    result[idx].$length = total;
                                }
                            }
                            call.deferred.resolve(result);
                        } else {
                            call.deferred.reject();
                        }
                    });
                    call.init();
                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.TOTVSPost = function (parameters, model, callback) {

                    var call = new Call(function () {
                        var table,
                            result;

                        table = $totvslocaldatabase.getTableByURL(URL);
                        if (table) {
                            result = table.update(parameters, model);
                            if (result > -1) {
                                call.deferred.resolve(model);
                            } else {
                                call.deferred.reject();
                            }
                        } else {
                            call.deferred.reject();
                        }
                    });
                    call.init();
                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.TOTVSSave = function (parameters, model, callback) {

                    var call = new Call(function () {
                        var table,
                            result;

                        table = $totvslocaldatabase.getTableByURL(URL);
                        if (table) {
                            result = table.update(parameters, model);
                            if (result > -1) {
                                call.deferred.resolve(model);
                            } else {
                                call.deferred.reject();
                            }
                        } else {
                            call.deferred.reject();
                        }
                    });
                    call.init();
                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.TOTVSUpdate = function (parameters, model, callback) {

                    var call = new Call(function () {
                        var table,
                            result;
                        table = $totvslocaldatabase.getTableByURL(URL);
                        if (table) {
                            result = table.update(parameters, model);
                            if (result > -1) {
                                call.deferred.resolve(model);
                            } else {
                                call.deferred.reject();
                            }
                        } else {
                            call.deferred.reject();
                        }
                    });
                    call.init();
                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.TOTVSRemove = function (parameters, callback) {

                    var call = new Call(function () {
                        var table,
                            result;

                        table = $totvslocaldatabase.getTableByURL(URL);
                        if (table) {
                            result = table.remove(parameters);
                            if (result > -1) {
                                call.deferred.resolve(result);
                            } else {
                                call.deferred.reject();
                            }
                        } else {
                            call.deferred.reject();
                        }
                    });
                    call.init();
                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.processPromise = function (call, callback) {
                    call.$promise.then(function (result) {
                        callback(result);
                    });
                    return call.$promise;
                };

                return TOTVSFactory;
            };

            return this.services;

        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsMashup
* @name totvsMashup
* @object provider
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-mashup.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('TOTVSMashup')
        .provider('TotvsMashup', TotvsMashup);

    TotvsMashup.$inject = [];

    function TotvsMashup() {

        var restMashup = '';

        this.setRestMashup = setRestMashup;

        this.$get = totvsMashupGet; // Factory

        function setRestMashup(rest) {
            restMashup = rest;
        }

        totvsMashupGet.$inject = ['$totvsresource'];

        function totvsMashupGet($totvsresource) {
            // definimos uma nova factory a partir do totvsresource, passando a URL do serviço de DBO
            var totvsresource = $totvsresource.REST(restMashup + '/:method'),
                factory = {
                    getGeneric: getGeneric,
                    queryGeneric: queryGeneric,
                    getConsultaCNPJCaptcha: getConsultaCNPJCaptcha,
                    queryCNPJ: queryCNPJ,
                    getConsultaCPFCaptcha: getConsultaCPFCaptcha,
                    queryCPF: queryCPF,
                    queryMunicipiosNFSE: queryMunicipiosNFSE,
                    queryPesquisaCEP: queryPesquisaCEP,
                    queryConversionCoinList: queryConversionCoinList,
                    queryConversaoMoeda: queryConversaoMoeda,
                    queryCBOList: queryCBOList,
                    queryMotoristas: queryMotoristas,
                    queryIdiomas: queryIdiomas,
                    queryGoogleTranslate: queryGoogleTranslate,
                    queryEstados: queryEstados,
                    getSintegraParcial: getSintegraParcial,
                    getSintegraContinuacaoCaptcha: getSintegraContinuacaoCaptcha,
                    querySintegraContinuacaoInscricao: querySintegraContinuacaoInscricao,
                    getSuframaCaptcha: getSuframaCaptcha,
                    getSuframaInscricoes: getSuframaInscricoes,
                    querySuframaDados: querySuframaDados
                };

            // Herda as funções do totvsResource
            Object.setPrototypeOf(factory, totvsresource);

            return factory;

            function getGeneric(params, callback) {
                return factory.TOTVSGet(params, callback);
            }

            function queryGeneric(params, callback) {
                return factory.TOTVSQuery(params, callback);
            }

            function getConsultaCNPJCaptcha(callback) {
                return getGeneric({method: 'getConsultaCNPJCaptcha'}, callback);
            }

            function queryCNPJ(cnpj, codigo, serviceExecutionId, callback) {
                return queryGeneric({
                    method: 'getCNPJ',
                    CNPJ: cnpj,
                    Codigo: codigo,
                    ServiceExecutionId: serviceExecutionId
                }, callback);
            }

            function getConsultaCPFCaptcha(callback) {
                return getGeneric({method: 'getConsultaCPFCaptcha'}, callback);
            }

            function queryCPF(cpf, dataNasc, codigo, serviceExecutionId, callback) {
                return queryGeneric({
                    method: 'getCPF',
                    CPF: cpf,
                    DataNasc: dataNasc,
                    Codigo: codigo,
                    ServiceExecutionId: serviceExecutionId
                }, callback);
            }

            function queryMunicipiosNFSE(callback) {
                return queryGeneric({method: 'consultaMunicipiosNFSE'}, callback);
            }

            function queryPesquisaCEP(cep, callback) {
                return queryGeneric({method: 'correiosPesquisaCEP', CEP: cep}, callback);
            }

            function queryConversionCoinList(callback) {
                return queryGeneric({method: 'getConversionCoinList'}, callback);
            }

            function queryConversaoMoeda(moedaOrigem, moedaDestino, valor, data, callback) {
                return queryGeneric({
                    method: 'conversaoMoeda',
                    MoedaOrigem: moedaOrigem,
                    MoedaDestino: moedaDestino,
                    Valor: valor,
                    Data: data
                }, callback);
            }

            function queryCBOList(pesquisa, texto, callback) {
                return queryGeneric({method: 'getCBOList', Pesquisa: pesquisa, Texto: texto}, callback);
            }

            function queryMotoristas(cpf, prontuario, cnpj, nomeMotorista, callback) {
                return queryGeneric({
                    method: 'getMotoristas',
                    CPF: cpf,
                    Prontuario: prontuario,
                    CNPJ: cnpj,
                    NomeMotorista: nomeMotorista
                }, callback);
            }

            function queryIdiomas(callback) {
                return queryGeneric({method: 'getIdiomas'}, callback);
            }

            function queryGoogleTranslate(texto, origem, destino, callback) {
                return queryGeneric({
                    method: 'googleTranslate',
                    Texto: texto,
                    Origem: origem,
                    Destino: destino
                }, callback);
            }

            function queryEstados(callback) {
                return queryGeneric({method: 'getEstados'}, callback);
            }

            function getSintegraParcial(cnpj, estado, callback) {
                return getGeneric({method: 'sintegraParcial', CNPJ: cnpj, Estado: estado}, callback);
            }

            function getSintegraContinuacaoCaptcha(codigo, serviceExecutionId, callback) {
                return getGeneric({
                    method: 'sintegraContinuacaoCaptcha',
                    Codigo: codigo,
                    ServiceExecutionId: serviceExecutionId
                }, callback);
            }

            function querySintegraContinuacaoInscricao(inscricao, serviceExecutionId, callback) {
                return queryGeneric({
                    method: 'sintegraContinuacaoInscricao',
                    Inscricao: inscricao,
                    ServiceExecutionId: serviceExecutionId
                }, callback);
            }

            function getSuframaCaptcha(callback) {
                return getGeneric({method: 'suframaGetCaptcha'}, callback);
            }

            function getSuframaInscricoes(serviceExecutionId, cnpj, codigo, callback) {
                return getGeneric({
                    method: 'suframaGetInscricoes',
                    ServiceExecutionId: serviceExecutionId,
                    CNPJ: cnpj,
                    Codigo: codigo
                }, callback);
            }

            function querySuframaDados(serviceExecutionId, codigo, inscricao, callback) {
                return queryGeneric({
                    method: 'suframaGetDados',
                    ServiceExecutionId: serviceExecutionId,
                    Codigo: codigo,
                    Inscricao: inscricao
                }, callback);
            }
        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module TOTVSProfile
* @name $totvsprofile
* @object provider
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-profile.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('TOTVSProfile')
        .provider('$totvsprofile', TotvsProfile);

    TotvsProfile.$inject = [];

    function TotvsProfile() {

        var restProfile = '';

        this.setRestProfile = setRestProfile;

        this.$get = totvsProfileGet; // Factory

        function setRestProfile(rest) {
            restProfile = rest;
        }

        totvsProfileGet.$inject = ['$rootScope', '$window', '$resource', '$cacheFactory'];

        function totvsProfileGet($rootScope, $window, $resource, $cacheFactory) {

            var services,
                url = restProfile + '/:method',
                factory = $resource(url, {}),
                TOTVSProfileCache = $cacheFactory('totvs.profile.cache');

            services = {

                remote: {

                    get: function (pageId, dataCode, callback) {

                        var i,
                            userCode = $rootScope.currentuser.login,
                            idCache  = userCode + ':~:' + pageId + ':~:' + dataCode,
                            result   = TOTVSProfileCache.get(idCache);

                        if (result) {
                            for (i = 0; i < result.length; i++) {
                                try {
                                    result[i].dataValue = angular.fromJson(result[i].dataValue);
                                } catch (e) {}
                            }

                            return callback(result);
                        }

                        return factory.query({
                            method: 'getProfile',
                            userCode: userCode,
                            pageId: pageId,
                            dataCode: dataCode
                        }, {}, function (result) {

                            if (result) {

                                var i;

                                for (i = 0; i < result.length; i++) {

                                    try {
                                        result[i].dataValue = angular.fromJson(result[i].dataValue);
                                    } catch (e) {}
                                }

                                TOTVSProfileCache.put(idCache, result);
                            }

                            callback(result);

                        }, {});
                    },

                    set: function (pageId, profileData, callback) {

                        var userCode = $rootScope.currentuser.login,
                            idCache,
                            cache,
                            i;

                        profileData = profileData || [];

                        if (!angular.isArray(profileData)) {
                            profileData = [profileData];
                        }

                        idCache = userCode + ':~:' + pageId + ':~:' + profileData[0].dataCode;
                        cache = profileData;
                        cache[0].pageId = pageId;
                        TOTVSProfileCache.put(idCache, cache);

                        for (i = 0; i < profileData.length; i++) {
                            profileData[i].dataValue = angular.toJson(profileData[i].dataValue);
                        }

                        return factory.save({
                            method:    'setProfile',
                            userCode:  userCode,
                            pageId:    pageId
                        },  profileData, function (result) {
                            if (callback) {
                                callback(result);
                            }
                        });

                    },

                    remove: function (pageId, dataCode, callback) {

                        var userCode = $rootScope.currentuser.login;

                        return factory.save({
                            method:    'removeProfile',
                            userCode:  userCode,
                            pageId:    pageId,
                            dataCode:  dataCode
                        }, {}, function (result) {
                            if (callback) {
                                callback(result);
                            }
                        });
                    },

                    clearCache: function (pageId, dataCode) {

                        var userCode = $rootScope.currentuser.login,
                            idCache = userCode + ':~:' + pageId + ':~:' + dataCode;

                        TOTVSProfileCache.remove(idCache);
                    }
                },

                local: {

                    get: function (pageId, dataCode, callback) {

                        if (!$window.localStorage) {
                            return;
                        }

                        var result = [],
                            i,
                            len,
                            storageKey,
                            of;

                        if (dataCode) {
                            result.push($window.localStorage.getItem(pageId + ':~:' + dataCode));
                        } else if (!dataCode) {

                            len = $window.localStorage.length;
                            for (i = 0; i < len; i++) {

                                storageKey = $window.localStorage.key(i);

                                if (storageKey !== null) {
                                    if (storageKey.indexOf(pageId) !== -1) {

                                        of = storageKey.indexOf(':~:');
                                        dataCode = storageKey.substring(of + 3, storageKey.length);

                                        result.push({
                                            pageId: pageId,
                                            dataCode: dataCode,
                                            dataValue: angular.fromJson($window.localStorage.getItem(storageKey))
                                        });
                                    }
                                }
                            }
                        }

                        if (callback) {
                            callback(result);
                        }
                    },

                    set: function (pageId, profileData, callback) {

                        var i,
                            len;

                        if (!$window.localStorage) {
                            return;
                        }

                        profileData = profileData || [];

                        if (!angular.isArray(profileData)) {
                            profileData = [profileData];
                        }

                        len = profileData.length;
                        for (i = 0; i < len; i++) {
                            $window.localStorage.setItem(
                                pageId + ':~:' + profileData[i].dataCode, angular.toJson(profileData[i].dataValue));
                        }

                        if (callback) {
                            callback();
                        }
                    },

                    remove: function (pageId, dataCode, callback) {

                        var storageKey = [],
                            i,
                            len,
                            of;

                        if (!$window.localStorage) {
                            return;
                        }

                        if (dataCode) {
                            $window.localStorage.removeItem(pageId + ':~:' + dataCode);
                        } else if (!dataCode) {

                            len = $window.localStorage.length;
                            for (i = 0; i < len; i++) {
                                if ($window.localStorage.key(i) !== null) {
                                    storageKey.push($window.localStorage.key(i));
                                }
                            }

                            len = storageKey.length;
                            for (i = 0; i < len; i++) {

                                if (storageKey[i].indexOf(pageId) !== -1) {

                                    of = storageKey[i].indexOf(':~:');
                                    dataCode = storageKey[i].substring(of + 3, storageKey[i].length);
                                    $window.localStorage.removeItem(pageId + ':~:' + dataCode);
                                }
                            }
                        }

                        if (callback) {
                            callback();
                        }
                    }
                },

                actions: {

                    effective: function (resultProfile, callback) {

                        var i,
                            len,
                            element;

                        resultProfile = resultProfile || [];

                        if (!angular.isArray(resultProfile)) {
                            resultProfile = [resultProfile];
                        }

                        len = resultProfile.length;
                        for (i = 0; i < len; i++) {

                            if (resultProfile[i].dataCode.totvsAction) {

                                element = $('field[id^=\'" + resultProfile[i].dataCode.fieldId + "\']');

                                if (element) {

                                    switch (resultProfile[i].dataCode.totvsAction) {

                                    case 'enableField':

                                        if (resultProfile[i].dataValue === false) {
                                            element.attr('disabled', true);
                                            element.find('button').attr('disabled', true);
                                            element.find('input').attr('disabled', true);
                                        } else if (resultProfile[i].dataValue === true) {
                                            element.removeAttr('disabled');
                                            element.find('button').removeAttr('disabled');
                                            element.find('input').removeAttr('disabled');
                                        }
                                        break;
                                    case 'applyMaxLength':

                                        element.find('input').attr('maxlength', resultProfile[i].dataValue);
                                        break;
                                    }
                                }
                            }
                        }

                        if (callback) {
                            callback();
                        }
                    }
                }
            };

            return services;

        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module TOTVSResource
* @name $totvsresource
* @object provider
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-resource.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('TOTVSResource')
        .provider('$totvsresource', TotvsResource);

    TotvsResource.$inject = [];

    function TotvsResource() {

        this.$get = totvsResourceGet;

        totvsResourceGet.$inject = ['$resource', '$http'];

        function totvsResourceGet($resource, $http) {

            var service = {
                REST: Rest
            };

            return service;

            function Rest(URL, OPTIONS, ACTIONS) {

                var TOTVSFactory;

                if (angular.isUndefined(ACTIONS)) {
                    ACTIONS = {};
                }

                ACTIONS.update = {
                    method: 'PUT',
                    isArray: false
                };

                ACTIONS.post = {
                    method: 'POST',
                    isArray: false
                };

                ACTIONS.getWithCache = {
                    method: 'GET',
                    isArray: false,
                    cache: true
                };

                ACTIONS.queryWithCache = {
                    method: 'GET',
                    isArray: true,
                    cache: true
                };

                TOTVSFactory = $resource(URL, OPTIONS, ACTIONS);

                TOTVSFactory.TOTVSGet = function (parameters, callback, headers, cache) {
                    var call;

                    TOTVSFactory.parseHeaders(headers);

                    if (cache) {
                        call = this.getWithCache(parameters);
                    } else {
                        call = this.get(parameters);
                    }

                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.TOTVSQuery = function (parameters, callback, headers, cache) {
                    var call;

                    TOTVSFactory.parseHeaders(headers);

                    if (cache) {
                        call = this.queryWithCache(parameters);
                    } else {
                        call = this.query(parameters);
                    }

                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.TOTVSPost = function (parameters, model, callback, headers) {
                    var call = this.post(parameters, model);

                    TOTVSFactory.parseHeaders(headers);

                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.TOTVSSave = function (parameters, model, callback, headers) {
                    var call = this.save(parameters, model);

                    TOTVSFactory.parseHeaders(headers);

                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.TOTVSUpdate = function (parameters, model, callback, headers) {
                    var call = this.update(parameters, model);

                    TOTVSFactory.parseHeaders(headers);

                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.TOTVSRemove = function (parameters, callback, headers) {
                    var call = this.remove(parameters);

                    TOTVSFactory.parseHeaders(headers);

                    return TOTVSFactory.processPromise(call, callback);
                };

                TOTVSFactory.processPromise = function (call, callback) {
                    TOTVSFactory.parseHeaders();

                    if (callback) {
                        call.$promise.then(function (result) {
                            if (callback) {
                                if (result &&
                                    result.hasOwnProperty('data') &&
                                    result.hasOwnProperty('length') &&
                                    result.hasOwnProperty('messages')) {
                                    callback(result.data);
                                } else {
                                    callback(result);
                                }
                            }
                        });
                    }

                    return call.$promise;
                };

                TOTVSFactory.parseHeaders = function (headers) {

                    if (headers) {
                        $http.defaults.headers.common['noCount']        = headers['noCount'];
                        $http.defaults.headers.common['noCountRequest'] = headers['noCountRequest'];
                        $http.defaults.headers.common['noErrorMessage'] = headers['noErrorMessage'];
                    } else {
                        $http.defaults.headers.common['noCount']        = undefined;
                        $http.defaults.headers.common['noCountRequest'] = undefined;
                        $http.defaults.headers.common['noErrorMessage'] = undefined;
                    }

                };

                return TOTVSFactory;
            }

        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsHttpConfig
* @name totvsHttpConfig
* @object config
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires
*
* @dependencies
*
* @description
*
* Alguns sistemas de backend (provedores de serviços) podem especificar um padrão
* para retorno de todas as chamadas de serviços. Nestes casos é preciso customizar
* o retorno das requisições HTTP para que fiquem adequadas ao padrão REST:
* - https://docs.angularjs.org/api/ngResource/service/$resource
*
* No sample está sendo utilizado um dos padrões identificados, no qual todas as
* requisições HTTP (REST) para serviços de dados com retorno no formato JSON
* são encapsuladas em um objeto do tipo Return contendo a seguinte estrutura:
* - data: objeto genérico que pode conter um único objeto ou uma lista de objetos.
* - length: utilizado normalmente para quando o objeto contido no 'data' é do
*           tipo lista e possui paginação; neste caso a propriedade length
*           recebe a quantidade total de registros da consulta;
* - messages: lista de mensagens de erro ou informativo resultante do serviço.
*   - type: danger, error, warning, question e info;
*   - code: titulo ou código da mensagem;
*   - detail: detalhamento ou texto da mensagem.
*
* Obs.: Notificação de erros e alertas. Devido a padronização do retorno das
* requisições é possivel identificar quando a requisição retorno alguma
* notificação, exumindo o desenvolvedor de ter que tratar a exibição manualmente.
*
* @see TDN http://tdn.totvs.com/display/THF/totvsHttpConfig
*/

(function () {

    'use strict';

    angular
        .module('totvsHttpConfig')
        .run(totvsHttpRun);

    totvsHttpRun.$inject = ['$http', 'totvs.app-notification.Service'];

    function totvsHttpRun($http, notificationService) {

        $http.defaults.transformResponse.push(transformResponse);

        function transformResponse(data, headers) {

            var i,
                obj,
                eventError,
                alerts = [];

            // Todas as requisições que não retornem o resultado no padrão JSON
            // devem ser desconsideradas. Outros tipos de protocolos devem ser
            // tratados separadamente.
            if (headers('content-type') === null || headers('content-type').indexOf('application/json') < 0 || !data) {
                return data;
            }

            // Realiza o parser do resultado para um objeto do tipo JSON;
            obj = angular.fromJson(data);

            eventError = false;

            // Verifica se o objeto possui um atributo do tipo messages.
            if (obj.hasOwnProperty('messages')) {

                // Realiza o tratamento automático para display das mensagens decorrentes
                // da requisição HTTP.
                if (obj.messages.length > 0) {

                    // Procura por alguma mensagem do tipo 'error'. Neste caso, as mensagens
                    // do tipo 'error' deve ser exibidas como modal impedindo a continuidade
                    // da operação que estava sendo realizada. Normalmente está atrelada a
                    // inconsistências no modelo de dados e/ou exceções técnicas.
                    for (i = 0; i < obj.messages.length && !eventError; i++) {
                        if (obj.messages[i].type === 'error') {
                            eventError = true;
                            break;
                        }
                    }

                    // Caso exista alguma mensagem do tipo 'error' deve abortar a operação de
                    // interface do usuário.
                    if (eventError) {

                        // obj.data = undefined;

                        // Dispara o evento para apresentação do erros na interface.
                        notificationService.businessMessage(obj.messages);

                        // O $promise para POST/PUT trabalha sempre na expectativa receber um
                        // retorno do servidor. Quando o retorno é tratado como null ou undefined,
                        // o AngularJS não consegue processar o resultado mantendo assim o estado
                        // inicial do $promise com os dados submetidos via payload. Para isto, foi
                        // desenvolvido um tratamento o framework-services.js para que antes de chamar
                        // o callback da requisição seja verificada se o framework já não apresentou
                        // o erro encapsulando o result do serviço como undefined dentro do atributo
                        // data; da mesma forma que era tratado pelo AngularJS nas versões anteriores.
                        // return {data : undefined};
                    } else {
                        // Dispara o evento para apresentação do alerta na interface.
                        for (i = 0; i < obj.messages.length; i++) {
                            alerts.push({
                                type: obj.messages[i].type,
                                title: obj.messages[i].code,
                                detail: obj.messages[i].detail
                            });
                        }

                        notificationService.notify(alerts);

                    }
                }
            }

            // Realiza o tratamento equivaler o objeto Return ao padrão das chamadas REST.
            if (obj.hasOwnProperty('data') && obj.hasOwnProperty('length') && obj.hasOwnProperty('messages')) {

                if (obj.data instanceof Array) {

                    // Adiciona a quantidade de registros totais da consulta na primeira posição da
                    // lista pois por padrão as requisições do tipo QUERY trabalham apenas com listas.
                    if (obj.length > 0 && obj.data[0]) {
                        obj.data[0].$length = obj.length;

                    // Quando a requisição é do tipo GET / POST / PUT / DELETE e não possuir um objeto
                    // de retorno, ou seja um objeto em 'branco', o AngularJS considera este retorno
                    // como uma lista, o que não é aceito pelo padrão do resource do AngularJS Resource.
                    // - https://docs.angularjs.org/api/ngResource/service/$resource
                    } else if (obj.length === 0 && obj.data.length === 0) {
                        return undefined;
                    }

                    if (eventError && obj.length > 0 && obj.data[0]) {
                        obj.data[0].$hasError = true;
                    }

                } else {
                    if (eventError && (obj.data || obj.data === null)) {
                        // Caso seja retornado data como null, cria um objeto vazio
                        if (obj.data === null) {
                            obj.data = {};
                        }

                        obj.data.$hasError = true;
                    }
                }

                // Quando não for uma requisição do tipo QUERY, retorna o objeto em si.
                return obj.data;
            }

            // Quando não se tratar de um objeto do tipo Return na requisição retornar o objeto completo.
            return obj;
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsHttpInterceptor
* @name totvsHttpInterceptor
* @object factory
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-http-interceptor.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsHttpInterceptor')
        .factory('totvsHttpInterceptor', totvsHttpInterceptor);

    totvsHttpInterceptor.$inject = ['$rootScope', '$q', 'TOTVSEvent'];

    function totvsHttpInterceptor($rootScope, $q, TOTVSEvent) {

        var factory = {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError
        };

        // Inicia um contador para controlar a contagem de requisições ao servidor
        // para apresentar o loading na interface. Para cada requisição é adicionado
        // 1 ao contador, e a cada retorno (considerando erros) é reduzido 1.
        // Para que este controle reflita na interface é implementada a função
        // hasPendingRequests no appMainController.
        $rootScope.pendingRequests = 0;
        $rootScope.errorConnServer = false;

        return factory;

        // Caso o sistema de notificações esteja implementado e o padrão de retorno
        // esteja estabelecido realiza o parse da rejeição para o padrão de mensagem.
        function parseRejectionToMessage(rejection) {

            var detail;

            // Realiza a verificação para montar o detalhe do erro quando vem em forma
            // de httpResponse ou Return.
            if (rejection.data && rejection.data.detail) {
                if (rejection.data.data && rejection.data.data.detail) {
                    detail = rejection.data.data.detail;
                } else {
                    detail = rejection.data.detail;
                }
            }

            // Caso não tenha identificado o erro, considera o próprio corpo do httpResponse.
            if (!detail) {
                detail = rejection.data;
            }

            // Retorna um objeto no padrão esperado pelo serviço de notificação.
            return {
                title: undefined,
                text: rejection.statusText,
                help: detail,
                callback: rejection.callback
            };
        }

        function onError(rejection) {

            var headers = rejection.config.headers || {},
                params  = rejection.config.params || {},
                noCountRequest = headers.noCountRequest ? headers.noCountRequest.toString() : undefined;

            if (!noCountRequest) {
                noCountRequest = params.noCountRequest  ? params.noCountRequest.toString()  : undefined;
            }

            if (noCountRequest !== 'true') {
                $rootScope.pendingRequests--;
            }

            // Por convenção os erros 401 e 419 representam sessão expirada (timeout).
            if (rejection.status === 401 || rejection.status === 419) {

                rejection.callback = function () {
                    location.reload();
                };

                rejection.data = 'Sua sessão expirou, você deverá fazer o login novamente';
                rejection.statusText = undefined;

                $rootScope.$broadcast(TOTVSEvent.showMessage, parseRejectionToMessage(rejection));

                return $q.reject(rejection);

            } else if (rejection.status === 0) {
                if (!$rootScope.errorConnServer) {
                    console.error(
                        'A conexão com o sistema foi perdida. Verifique se o servidor ' +
                        'de aplicação está em execução e operando corretamente.');

                    $rootScope.errorConnServer = true;
                    // window.location.assign(APP_BASE_URL);
                }

                return $q.reject(rejection);
            }

            // Caso seja especificado no cabeçalho da requisição 'noErrorMessage' o sistema
            // deve ignorar a mensagem de erro.

            var noErrorMessage = headers.noErrorMessage ? headers.noErrorMessage.toString() : undefined;

            if (!noErrorMessage) {
                noErrorMessage = params.noErrorMessage  ? params.noErrorMessage.toString()  : undefined;
            }

            if (noErrorMessage !== 'true') {
                $rootScope.$broadcast(TOTVSEvent.showMessage, parseRejectionToMessage(rejection));
            }

            if (rejection.status !== 401 && rejection.status !== 419) {
                return $q.reject(rejection);
            }
        }

        function request(config) {

            var headers,
                params,
                noCountRequest;

            // https://github.com/angular/angular.js/issues/1388
            config.url = config.url.replace(/%2F/gi, '/');

            headers = config.headers || {};
            params = config.params  || {};

            // Adiciona o tenandId do Fluig no Header da requisição //
            if ($rootScope.isFluig) {
                config.headers.tenantId = $rootScope.tenantId;
            }

            // Leitura da variável de contexto do usuário, para injeção dos valores no header da requisição //
            if ($rootScope.hasOwnProperty('currentcontext')) {
                if ($rootScope.currentcontext.hasOwnProperty('headers')) {
                    angular.forEach($rootScope.currentcontext.headers, function (value, key) {
                        config.headers[key] = value;
                    });
                }
            }

            noCountRequest = headers.noCountRequest ? headers.noCountRequest.toString() : undefined;

            if (!noCountRequest) {
                noCountRequest = params.noCountRequest  ? params.noCountRequest.toString()  : undefined;
            }

            if (noCountRequest !== 'true') {
                $rootScope.pendingRequests++;
            }

            return config || $q.when(config);
        }

        function requestError(rejection) {
            return onError(rejection);
        }

        function response(response) {

            var url,
                headers,
                params,
                noCountRequest;

            if (response.headers('content-type') === 'application/json') {
                if (angular.fromJson(response) === null) {
                    return onError(response);
                }
            }

            // Caso o container retorne a própria página de login quando a sessão
            // expirar, o reconhecimento pode ser feito da seguinte forma, desde que
            // utilize algum identificador (<body class=\"login\") para constatar que
            // se trata mesmo da página de login. Neste caso, quando identificado é
            // disparado um erro com o código 419 para que seja identificado o timeout.
            if (typeof response.data === 'string' &&
                // No lugar <body class=\"login\" coloque algo que identifique a página
                // de login do container web.
                response.data.indexOf('<body class=\"login\"') > 0) {

                response.status = 419;
                // login do Datasul pelo fluig
                if (typeof WCMAPI !== 'undefined') {
                    url = response.config.url.split('/');

                    if (!$rootScope.fluiglogin) {
                        $rootScope.fluiglogin = window.open(
                            '/' + url[1] + '/' + url[2] + '/fluig/login.html', 'Login do ERP',
                            'width=650, height=550, top=100, left=100, location=no');
                    }
                }

                return onError(response);
            }

            if (typeof response.data === 'string' &&
                response.data.indexOf('<div id="login-container"></div>') > 0 &&
                response.data.indexOf('function doLogin() {') > 0) {

                response.status = 419;
                // login do Datasul pelo fluig
                if (typeof WCMAPI !== 'undefined') {
                    url = response.config.url.split('/');

                    if (!$rootScope.fluiglogin) {
                        $rootScope.fluiglogin = window.open(
                            '/' + url[1] + '/' + url[2] + '/fluig/login.html', 'Login do ERP',
                            'width=550, height=550, top=100, left=100, location=no');
                    }
                }

                return onError(response);
            }

            headers = response.config.headers || {};
            params  = response.config.params  || {};

            noCountRequest = headers.noCountRequest ? headers.noCountRequest.toString() : undefined;

            if (!noCountRequest) {
                noCountRequest = params.noCountRequest  ? params.noCountRequest.toString()  : undefined;
            }

            if (noCountRequest !== 'true') {
                $rootScope.pendingRequests--;
            }

            return response;
        }

        function responseError(rejection) {
            return onError(rejection);
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsCustom
* @name totvsCustom
* @object factory
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-custom.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsCustom')
        .factory('customization.generic.Factory', totvsCustom);

    totvsCustom.$inject = ['$injector', '$compile', '$rootScope', '$location'];

    function totvsCustom($injector, $compile, $rootScope, $location) {

        var factory = {
            receiveEvent: receiveEvent,
            callEvent: callEvent,
            callCustomEvent: callCustomEvent,
            compileHTML: compileHTML
        };

        return factory;

        function receiveEvent(service, event, eventparameters, element) {

            if (service && event && service[event]) {
                return service[event](eventparameters, element);
            }

            return 'ok';
        }

        function callEvent(modulename, event, eventparameters, element) {

            if ($injector.has('custom.' + modulename)) {
                try {
                    var service = $injector.get('custom.' + modulename);

                    if (service) {
                        return service.receiveEvent(service, event, eventparameters, element);
                    }
                } catch (err) {

                }
            }

        }

        function callCustomEvent(event, eventparameters, element) {

            var strs = $location.path().split('/'),
                modulename;

            modulename = strs[1] + '.' + strs[2] + '.' + strs[3];

            return callEvent(modulename, event, eventparameters, element);

        }

        function compileHTML(params, html) {

            var scope = $rootScope.$new(true),
                el = angular.element(html);

            angular.extend(scope, params);

            return $compile(el)(scope);
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsCustom
* @name totvsCustomElement
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires
*
* @dependencies
*
* @description
*
* Para customização dos programas desenvolvidos com o TOTVS HTML Framework é necessário o uso da diretiva
* Totvs Custom Element para criar pontos de entrada de customização nos programas.
*
* @restrict A
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsCustom')
        .directive('totvsCustomElement', totvsCustomElement);

    totvsCustomElement.$inject = ['customization.generic.Factory', '$location'];

    function totvsCustomElement(customService, $location) {

        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function link(scope, element, attrs) {

            var params = {},
                controlerName = attrs.totvsCustomService,
                eventName = attrs.totvsCustomElement || 'customElement',
                strs = [];

            getParams(params, scope);

            if (!controlerName) {
                strs = $location.path().split('/');
                controlerName = strs[1] + '.' + strs[2] + '.' + strs[3];
            }

            customService.callEvent (controlerName, eventName, params, element);

            function getParams(params, scope) {
                var numparams = 0;

                angular.forEach(scope, function (value, key) {
                    if (key.charAt(0) === '$') {
                        return;
                    }

                    if (key === 'this') {
                        return;
                    }

                    params[key] = value;
                    numparams++;
                });

                if (numparams === 0 && scope.$parent) {
                    getParams(params, scope.$parent);
                }

            }

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

(function () {

    'use strict';

    angular
        .module('notification')
        .constant('TOTVSEvent', {
            // Definição de nomenclatura de eventos para utilização no sample.
            updateViewsScope : 'event:root-scope-update.app.views',
            showNotification : 'event:scope-notify.app.service',
            showMessage : 'event:scope-message.app.service',
            showBusinessMessage : 'event:scope-businessmessage.app.service',
            showQuestion : 'event:scope-question.app.service',
            currentuserLoaded: 'event:rootscope-currentuser-loaded',
            currentcompanyLoaded: 'event:rootscope-currentcompany-loaded',
            currentTenantLoaded: 'event:rootscope-currenttenant-loaded',
            // Por compatibilidade, o TOTVSEvent.rootScopeInitialize deve ter o mesmo valor
            // que o TOTVSEvent.currentuserLoaded.
            rootScopeInitialize: 'event:rootscope-currentuser-loaded'
        });

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

(function () {

    'use strict';

    var templateMessage =
        '<div ng-controller="totvs.app-modal-notification.Control">' +
            '<div class="modal-header">' +
                '<h3 class="modal-title">{{ title | i18n }}</h3>' +
            '</div>' +
            '<div class="modal-body">' +
                '<p ng-bind-html="text"></p>' +
                '<div class="row-fluid" ng-show="!questionForm" ng-hide="help === undefined">' +
                    '<a class="clickable" ng-click="changeShowDetails();">{{ "l-show-details" | i18n }}</a>' +
                    '<div class="well message-details" ng-show="showDetails">' +
                        '<div class="row-fluid">' +
                            '<p ng-bind-html="help"></p>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="modal-footer">' +
                '<button class="btn btn-default" ng-click="cancel()" ng-show="questionForm">' +
                    '{{ cancelLabel | i18n }}</button>' +
                '<button class="btn btn-primary" ng-click="ok()" ng-show="!questionForm">' +
                    '{{ "btn-close" | i18n }}</button>' +
                '<button class="btn btn-primary" ng-click="confirm()" ng-show="questionForm">' +
                    '{{ confirmLabel | i18n }}</button>' +
            '</div>' +
        '</div>',

        templateMessageArray =
            '<div ng-controller="totvs.app-modal-notification.Control">' +
                '<div class="modal-header">' +
                    '<h3 class="modal-title">{{ title | i18n }}</h3>' +
                '</div>' +
                '<div class="modal-body">' +
                    '<alert ng-repeat="m in messages" type="{{getMsgType(m.type)}}">' +
                        '<div class="row">' +
                            '<div class="col-sm-1 col-xs-6 glyphicon text-left" ' +
                                'style="font-size: 40px; padding-bottom: 10px;" ' +
                                'ng-class="{\'glyphicon-warning-sign\': m.type === \'warning\', ' +
                                    '\'glyphicon-info-sign\': m.type === \'info\', ' +
                                    '\'glyphicon-exclamation-sign\': m.type === \'error\'}" aria-hidden="true">' +
                            '</div>' +
                            '<div class="col-sm-1 col-xs-6 text-right code-msg" ng-bind="m.code"></div>' +
                            '<div class="col-sm-10 col-xs-12 text-justify" ng-bind-html="m.detail"></div>' +
                        '</div>' +
                    '</alert>' +
                '</div>' +
                '<div class="modal-footer">' +
                    '<button class="btn btn-primary" ng-click="ok()" data-ng-show="!questionForm">' +
                        '{{ "btn-close" | i18n }}</button>' +
                '</div>' +
            '</div>';

    angular
        .module('notification')
        .constant('notificationConstant', {
            templateMessage: templateMessage,
            templateMessageArray: templateMessageArray
        });

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module notification
* @name totvs.app-notification.Service
* @object service
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires
*
* @dependencies
*
* @description
*
* Serviço responsável por apresentar mensagens e notificações ao usuário
* logado no sistema. Estas mensagens podem estar divididas entre notificações,
* questionamentos desde que o retorno seja sim ou não e mensagem mais complexas
* como help ou erros.
*
* O disparo das mensagens também pode ocorrer através de eventos, desde que estes
* tenham seus listeners registrados no appMainControl. Eventos disponíveis:
* - TOTVSEvent.showMessage: corresponde ao appNotificationService.message(message)
* - TOTVSEvent.showQuestion: corresponde ao appNotificationService.question(question)
* - TOTVSEvent.showNotification: corresponde ao appNotificationService.notify(alert)
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('notification')
        .service('totvs.app-notification.Service', NotificationService);

    NotificationService.$inject = ['$rootScope', '$modal', 'toaster', 'notificationConstant'];

    function NotificationService($rootScope, $modal, toaster, notificationConstant) {

        this.notify = notify;
        this.message = message;
        this.businessMessage = businessMessage;
        this.question = question;

        /*
        * Apresenta um toaster de notificação ao usuário, este toaster por padrão será
        * disposto no canto superior diretio do monitor. O parâmetro passado para a
        * função pode ser um objeto alert ou uma lista de alerts, desde que obedeçam
        * a seguinte estrutura:
        * - type: indica o tipo de alerta a ser apresentado, tendo como opções:
        * 		- error: na cor vermelha;
        *		- info: na cor azul claro;
        *		- success: na cor verde;
        *		- warning: na cor laranja;
        * - title: titulo da notificação;
        * - detail: mensagem ou detalhamento da notificação;
        * - timeout: (opcional) tempo que ficará disponível em tela até desaparecer.
        * Obs.: O componente utilizado para está função é o JQuery Toastr:
        * - https://github.com/CodeSeven/toastr
        */
        function notify(alerts) {

            var timeout = 8000,
                type,
                i;

            if (alerts instanceof Array) {
                for (i = 0; i < alerts.length; i++) {
                    type = (alerts[i].type ? alerts[i].type.toLowerCase() : 'info');
                    // As notificações de 'warning' permanecem na interface até o usuário
                    // indicar que a leu.
                    if (type === 'warning') {
                        timeout = 0;
                    }

                    toaster.pop(type, alerts[i].title, alerts[i].detail, timeout);
                }
            } else {
                type = (alerts.type ? alerts.type.toLowerCase() : 'info');
                // As notificações de 'warning' permanecem na interface até o usuário
                // indicar que a leu.
                if (type === 'warning') {
                    timeout = 0;
                }

                toaster.pop(type, alerts.title, alerts.detail, timeout);
            }
        }

        /*
        * Apresenta ao usuário uma mensagem focal, a qual obrigará o usuário a tomar alguma
        * ação para prosseguir com a operação. Diferente do showNotify esta função permite
        * a disposição de apenas uma mensagem por vez desde que o objeto message obedeça a
        * seguinte estrutura:
        * - title: (opcional) titulo da mensagem;
        * - text: breve descrição da mensagem;
        * - help: detalhamento e/ou ajuda referente a mensagem;
        * - size: (opcional: lg, md ou sm) tamanho da tela exibida (padrão: 'lg')
        * - callback: (opcional) função a ser chamada ao fechar a mensagem de notificação.
        */
        function message(message) {

            var rootContext = $rootScope.appRootContext;

            if (rootContext === undefined) {
                rootContext = '/' + window.location.pathname.split('/')[1] + '/';
            }

            // Caso não seja informado um title, assume o padrão.
            if (message.title === undefined) {
                message.title = 'l-internal-error';
            }

            // Ajusta a quebra de linha para o texto de help.
            if (message.help) {
                message.help = message.help.replace(/(?:\r\n|\r|\n|\\r\\n|\\r|\\n)/g,'<br>');
            }

            // Caso tenha sido informado o help e não o texto, o texto assume o valor do help.
            if (message.text === undefined) {
                message.text = message.help;
                message.help = undefined;
            }

            // Caso não seja informado um valor válido, o size assume o valor 'lg' (grande)
            message.size = /(lg|md|sm)/.exec(message.size) ? message.size : 'lg';

            // Realiza o display da modal para apresentação da mensagem.
            $modal.open({
                template: notificationConstant.templateMessage,
                controller: modalInstanceControl,
                size: message.size,
                resolve: {
                    messageObject: function () {
                        return message;
                    }
                }
            });

            modalInstanceControl.$inject = ['$scope', '$modalInstance', 'messageObject'];
            // AngularJS Controller para a modal.
            function modalInstanceControl($scope, $modalInstance, messageObject) {

                $scope.text = messageObject.text;
                $scope.title = messageObject.title;
                $scope.help = messageObject.help;

                $scope.questionForm = false;
                $scope.showDetails = false;

                $scope.ok = ok;
                $scope.changeShowDetails = changeShowDetails;

                function ok() {
                    $modalInstance.close();

                    if (messageObject.callback) {
                        messageObject.callback();
                    }
                }

                function changeShowDetails() {
                    $scope.showDetails = !$scope.showDetails;
                }
            }
        }

        /*
        * Apresenta ao usuário uma mensagem focal, a qual obrigará o usuário a tomar alguma
        * ação para prosseguir com a operação. As mensagems devem ser um array como retornado
        * no objeto Return.
        * - messagearray: array de mensagens a serem exibidas
        *      - detail: messagem exibida
        * - opts: (opcional) opções de exibição da mensagem
        *      - size: (opcional: lg, md ou sm) tamanho da tela exibida (padrão: 'lg')
        */
        function businessMessage(messagearray, opts) {

            var message = {},
                rootContext = $rootScope.appRootContext,
                i;

            if (rootContext === undefined) {
                rootContext = '/' + window.location.pathname.split('/')[1] + '/';
            }

            opts = opts || {};

            message.title = 'l-bussiness-error';

            // Caso não seja informado um valor válido, o size assume o valor 'lg' (grande)
            message.size = /(lg|md|sm)/.exec(opts.size) ? opts.size : 'lg';

            // Ajusta a quebra de linha para o texto de help.
            for (i = 0; i < messagearray.length; i++) {
                messagearray[i].detail = messagearray[i].detail.replace(/(?:\r\n|\r|\n|\\r\\n|\\r|\\n)/g, '<br>');
            }

            message.messages = messagearray;

            // Realiza o display da modal para apresentação da mensagem.
            $modal.open({
                template: notificationConstant.templateMessageArray,
                controller: modalInstanceControl,
                size: message.size,
                resolve: {
                    messageObject: function () {
                        return message;
                    }
                }
            });

            modalInstanceControl.$inject = ['$scope', '$modalInstance', 'messageObject'];
            // AngularJS Controller para a modal.
            function modalInstanceControl($scope, $modalInstance, messageObject) {

                $scope.messages = messageObject.messages;
                $scope.title = messageObject.title;
                $scope.help = messageObject.help;

                $scope.questionForm = false;
                $scope.showDetails = false;

                $scope.changeShowDetails = changeShowDetails;
                $scope.getMsgType = getMsgType;
                $scope.ok = ok;

                function ok() {
                    $modalInstance.close();
                }

                function changeShowDetails() {
                    $scope.showDetails = !$scope.showDetails;
                }

                function getMsgType (type) {
                    if (type === 'error') {
                        return 'danger';
                    }

                    if (type === 'warning') {
                        return 'warning';
                    }

                    if (type === 'info') {
                        return 'success';
                    }

                    return 'info';
                }

            }

        }

        /*
        * Questiona o usuário referente ao conteúdo da mensagem. As respostas devem ser de
        * forma objetiva na qual o usuário responda sim ou não. Assim como message esta
        * função permite a disposição de apenas uma questão por vez desde que o objeto
        * question obedeça a seguinte estrutura:
        * - title: titulo;
        * - text: descrição da pergunta;
        * - confirmLabel: (opcional) label para o botão de confirmação (padrão 'Ok');
        * - cancelLabel: (opcional) label para o botão de cancelamento (padrão 'Cancelar');
        * - size: (opcional: lg, md ou sm) tamanho da tela exibida (padrão: 'lg')
        * - callback: (opcional) função a ser chamada ao responder a questão, encaminhando o
        *			   resultado para a função passada como parâmetro true ou false.
        */
        function question(question) {

            var rootContext = $rootScope.appRootContext;

            if (rootContext === undefined) {
                rootContext = '/' + window.location.pathname.split('/')[1] + '/';
            }

            question.size = /(lg|md|sm)/.exec(question.size) ? question.size : 'lg';

            modalInstanceControl.$inject = ['$scope', '$modalInstance', 'questionObject'];

            function modalInstanceControl($scope, $modalInstance, questionObject) {

                $scope.questionForm = true;

                $scope.title = questionObject.title;
                $scope.text = questionObject.text;

                $scope.cancel = cancel;
                $scope.confirm = confirm;

                // Verifica se foi informado uma label customizada para cancelamento.
                if (questionObject.cancelLabel) {
                    $scope.cancelLabel = questionObject.cancelLabel;
                } else {
                    $scope.cancelLabel = 'btn-cancel';
                }

                // Verifica se foi informado uma label customizada para confirmação.
                if (questionObject.confirmLabel) {
                    $scope.confirmLabel = questionObject.confirmLabel;
                } else {
                    $scope.confirmLabel = 'btn-ok';
                }

                function cancel() {
                    $modalInstance.close('cancel');
                }

                function confirm() {
                    $modalInstance.close('confirm');
                }
            }

            $modal.open({
                template: notificationConstant.templateMessage,
                controller: modalInstanceControl,
                size: question.size,
                resolve: {
                    questionObject: function () {
                        return question;
                    }
                }
            }).result.then(function (answerModal) {
                if (question.callback) {
                    question.callback((answerModal === 'confirm'));
                }
            });
        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsUtils
* @name totvsUtils
* @object service
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-utils.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsUtils')
        .service('totvs.utils.Service', TotvsUtils);

    TotvsUtils.$inject = [];

    function TotvsUtils() {

        this.focusOn = focusOn;
        this.isMobile = isMobile();

        function focusOn(id) {

            var element,
                type;

            id = (id.indexOf('#') === 0) ? id : '#' + id;

            element = $(id);

            type = element.attr('type');

            if (type === 'daterange' || type === 'decimalrange' || type === 'inputrange') {
                element.find('input')[0].focus();
            } else if (type === 'textarea') {
                element.find('textarea').focus();
            } else if (type === 'combo') {
                element.find('select').focus();
            } else {
                element.find('input').focus();
            }
        }

        function isMobile() {
            return {
                Android: function () {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function () {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function () {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function () {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function () {
                    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
                },
                any: function () {
                    return (this.Android() || this.BlackBerry() || this.iOS() ||
                            this.Opera() || this.Windows());
                }
            };
        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsUtilsBrowser
* @name totvsUtilsBrowser
* @object service
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsUtilsBrowser')
        //.service('TotvsUtilsBrowser', TotvsUtilsBrowser);
        .service('totvs.utils.browser.service', TotvsUtilsBrowser);

    TotvsUtilsBrowser.$inject = [];

    function TotvsUtilsBrowser() {

        this.getBrowserDialect = getBrowserDialect;

        function getBrowserDialect() {

            var dialect;

            if (navigator.browserLanguage) {
                dialect = navigator.browserLanguage.substring(0, 2);
            } else if (navigator.language) {
                dialect = navigator.language.substring(0, 2);
            }

            return (dialect !== 'pt' && dialect !== 'es' && dialect !== 'en') ? 'pt' : dialect;

        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsUtilsKendo
* @name TotvsUtilsKendoService
* @object service
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires
*
* @dependencies
*
* @description Serviços comuns das diretivas que utilizam o KendoUI
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Utils+Kendo+Service
*/

(function () {

    'use strict';

    angular
        .module('totvsUtilsKendo')
        .service('TotvsUtilsKendoService', TotvsUtilsKendoService);

    TotvsUtilsKendoService.$inject = ['$locale'];

    function TotvsUtilsKendoService($locale) {

        this.getPaperSize = getPaperSize;

        this.getMargin = getMargin;

        this.getKendoDateFormat = getKendoDateFormat;

        function getPaperSize(size) {

            var defaultPaper = 'A4';

            if (size && typeof size === 'string') {
                var validPapersPattern = /(?:^)(auto|Executive|Folio|Legal|Letter|Tabloid|([a-d][0-9]|[a-d]10))(?:$)/i;

                return validPapersPattern.test(size) ? size : defaultPaper;
            }

            if (size && size.constructor === Array && size.length === 2) {
                if (isNaN(size[0]) || isNaN(size[1])) {
                    return defaultPaper;
                }

                return [size[0] + 'mm', size[1] + 'mm'];
            }

            return defaultPaper;
        }

        function getMargin(margin) {

            var marginsArray = {

                large: {
                    top: '25.4mm',
                    right: '50.8mm',
                    bottom: '25.4mm',
                    left: '50.8mm'
                },

                normal: {
                    top: '25mm',
                    right: '30mm',
                    bottom: '25mm',
                    left: '30mm'
                },

                thin: {
                    top: '12.7mm',
                    right: '12.7mm',
                    bottom: '12.7mm',
                    left: '12.7mm'
                }
            };

            if (margin && typeof margin === 'string') {
                var validMargins = /(?:^)(large|normal|thin)(?:$)/i;

                return validMargins.test(margin) ? marginsArray[margin] : marginsArray.normal;
            }

            if (margin && margin.constructor === Array && margin.length === 4) {
                if (isNaN(margin[0]) || isNaN(margin[1]) || isNaN(margin[2]) || isNaN(margin[3])) {
                    return marginsArray.normal;
                }

                return {
                    top: margin[0] + 'mm',
                    right: margin[1] + 'mm',
                    bottom: margin[2] + 'mm',
                    left: margin[3] + 'mm'
                };
            }

            return marginsArray.normal;
        }

        function getKendoDateFormat(angularFormat) {
            if ($locale.DATETIME_FORMATS.hasOwnProperty(angularFormat)) {
                angularFormat = $locale.DATETIME_FORMATS[angularFormat];
            }

            /*
            ____formatos identicos____		formatos diferentes 	formatos não suportados
            yyyy -> yyyy	HH   -> HH		y    -> yyyy			Z    -> ?
            yy   -> yy		H    -> H		LLLL -> MMMM			ww   -> ?
            MMMM -> MMMM	hh   -> hh		EEEE -> dddd			G    -> ?
            MMM  -> MMM		h    -> h		EEE  -> ddd				GG   -> ?
            MM   -> MM		mm   -> mm		sss  -> fff				GGG  -> ?
            M    -> M		m    -> m		a    -> tt				GGGG -> ?
            dd   -> dd		ss   -> ss
            d    -> d		s    -> s
            */

            // substituições de formato
            angularFormat = angularFormat.replace(/\bEEEE\b/g, 'dddd');
            angularFormat = angularFormat.replace(/\bEEE\b/g, 'ddd');
            angularFormat = angularFormat.replace(/\bsss\b/g, 'fff');
            angularFormat = angularFormat.replace(/\ba\b/g, 'tt');

            // equivalencias
            angularFormat = angularFormat.replace(/\by\b/g, 'yyyy');
            angularFormat = angularFormat.replace(/\bLLLL\b/g, 'MMMM');

            // não suportado
            angularFormat = angularFormat.replace(/\bZ\b/g, '');
            angularFormat = angularFormat.replace(/\bww\b/g, '');
            angularFormat = angularFormat.replace(/\bG\b/g, '');
            angularFormat = angularFormat.replace(/\bGG\b/g, '');
            angularFormat = angularFormat.replace(/\bGGG\b/g, '');
            angularFormat = angularFormat.replace(/\bGGGG\b/g, '');

            return angularFormat;
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module notification
* @name NotificationController
* @object controller
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires notification.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('notification')
        .controller('totvs.app-modal-notification.Control', NotificationController);

    NotificationController.$inject = [];

    function NotificationController() {

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module i18nFilter
* @name TotvsI18nProvider
* @object provider
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-mashup.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('i18nFilter')
        .provider('TotvsI18n', TotvsI18n);

    TotvsI18n.$inject = [];

    function TotvsI18n() {

        var baseContext = '/';

        this.setBaseContext = setBaseContext;

        this.$get = TotvsI18nGet;

        function setBaseContext(context) {
            baseContext = context;
        }

        function TotvsI18nGet() {
            var factory = {
                getBaseContext: getBaseContext
            };

            return factory;

            function getBaseContext() {
                return baseContext || '/';
            }
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module i18nFilter
* @name i18n
* @object filter
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires i18n.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('i18nFilter')
        .filter('i18n', i18n);

    i18n.$inject = ['$rootScope', '$location', 'totvs.utils.browser.service', 'TotvsI18n'];

    function i18n($rootScope, $location, browser, TotvsI18n) {

        var translations = [];

        return filter;

        function filter(sentence, params, context) {

            var i = 0,
                len,
                dialect,
                literals,
                translated,
                url = $location.url(),
                viewContext,
                rootContext = $rootScope.appRootContext || TotvsI18n.getBaseContext();

            if (url !== '/' && url.length > 2 && url !== '/loading' && url.split('/').length > 2) {
                viewContext = ('/' + url.split('/')[1] + '/' + url.split('/')[2] + '/');
            } else {
                viewContext = rootContext;
            }

            // Caso o App possua alguma informação sobre o usuário logado, neste
            // ponto estas informações podem ser resgatadas. No caso deste sample
            // carregamos algumas informações do usuário logado e armazenamos no
            // $rootScope.currentuser, dentro das informações armazenadas está o
            // dialeto parametrizado para o usuário.
            // Tratamento para considerar as localizações por país. No primeiro momento
            // é removido o país para manter a estrutura atual dos arquivos de tradução
            // que consideram apenas pt, en e es.
            if ($rootScope.currentuser && $rootScope.currentuser.dialect) {
                dialect = $rootScope.currentuser.dialect.toLowerCase().substr(0, 2);
            } else {
                dialect = browser.getBrowserDialect();
            }

            // Neste ponto atualizamos as informações de sessão du usuário
            // logado com o dialeto selecionado para utilização no APP.
            if ($rootScope.currentuser) {
                $rootScope.currentuser.dialect = dialect;
            }

            // Verifica se foi informado algum contexto especifico para carregar a tradução.
            if (context && context.length > 0) {
                context = '/' + context + '/';
            }

            // Carrega o json de tradução para o viewContext.
            literals = getContextTranslations(context || viewContext, rootContext);

            // Caso não tenha encontrado a literal no json do contexto, procura no
            // contexto padrão, para evitar de que as views tenham que replicar as
            // literais do index.
            if ((!literals || !literals[sentence]) && (rootContext !== viewContext)) {
                literals = getContextTranslations(rootContext);
            }

            if (literals && sentence && sentence.length > 0) {
                translated = (literals[sentence]) ? literals[sentence][dialect] || sentence : sentence;
            } else {
                translated = '';
            }

            if (!params) {
                params = [];
            } else if (!angular.isArray(params)) {
                params = [params];
            }

            len = params.length;
            for (i = 0; i < len; i += 1) {
                translated = translated.replace('{' + i + '}', params[i]);
            }

            // Traduz a literal de acordo com o dialeto selecionado.
            return translated;

        }

        function getContextTranslations(context, rootContext) {
            var literals,
                i,
                len;

            // Verifica se existe um arquivo de tradução já carregado para o
            // contexto informado.
            len = translations.length;
            for (i = 0; i < len; i += 1) {
                if (translations[i][0] === context) {
                    literals = translations[i][1];
                    break;
                }
            }

            // Se não encontrou as literais, carrega o arquivo de tradução
            // conforme o contexto informado.
            if (!literals) {
                $.ajax(context + 'i18n/translations.js', {
                    type: 'GET',
                    async: false,
                    noErrorMessage: true
                }).done(function (data) {
                    literals = angular.fromJson(data)[0];
                    translations.push([context, literals]);
                }).fail(function () {
                    // Se não encontrou o arquivo de tradução, utiliza as
                    // literais do contexto pai.
                    if (rootContext) {
                        literals = getContextTranslations(rootContext);
                        translations.push([context, literals]);
                    }
                });
            }

            return literals;
        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

(function () {

    'use strict';

    angular
        .module('progressDateFilter')
        .filter('progressDate', progressDate);

    progressDate.$inject = [];

    function progressDate () {

        return filter;

        function filter(string) {

            if (!string) {
                return string;
            }

            return string.substring(0, 10);

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module maskFilter
* @name mask
* @object filter
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires mask.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('maskFilter')
        .filter('mask', maskFilter);

    maskFilter.$inject = [];

    function maskFilter () {

        return filter;

        function filter(string, mask) {

            var ret = '',
                i,
                j = 0,
                c,
                cs;

            if (!angular.isString(string)) {
                return string;
            }

            for (i = 0; i < mask.length; i++) {
                c = mask.charAt(i);
                if (c === '9' || c === 'A' || c === '*') {
                    cs = string.charAt(j++);
                    if (c === '9') {
                        while (!/[0-9]/.test(cs)) {
                            if (j >= string.length) {
                                return ret;
                            }
                            cs = string.charAt(j++);
                        }
                    }
                    ret = ret + cs;
                    if (j >= string.length) {
                        return ret;
                    }
                } else {
                    ret = ret + c;
                }
            }

            return ret;
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

(function () {
    'use strict';

    angular
        .module('field')
        .config(zoomConfig);

    zoomConfig.$inject = ['hotkeysProvider'];

    function zoomConfig(hotkeysProvider) {
        hotkeysProvider.useNgRoute = false;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

(function () {
    'use strict';

    angular
        .module('totvsField')
        .config(zoomConfig);

    zoomConfig.$inject = ['hotkeysProvider'];

    function zoomConfig(hotkeysProvider) {
        hotkeysProvider.useNgRoute = false;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

(function () {
    'use strict';

    angular
        .module('totvsTabset')
        .config(zoomConfig);

    zoomConfig.$inject = ['hotkeysProvider'];

    function zoomConfig(hotkeysProvider) {
        hotkeysProvider.useNgRoute = false;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

(function () {
    'use strict';

    angular
        .module('zoom')
        .config(zoomConfig);

    zoomConfig.$inject = ['hotkeysProvider'];

    function zoomConfig(hotkeysProvider) {
        hotkeysProvider.useNgRoute = false;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

(function () {
    'use strict';

    var checkbox =
            '<div class="field-container">' +
               '<label class="field-label"></label>' +
               '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<!--label class="checkbox-inline"-->' +
                            '<input class="form-control" bind type="checkbox">' +
                        '<!--/label-->' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        'ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        combo =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<select class="form-control" bind ' +
                            'ng-options="o.id as o.text for o in $options"></select>' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        'ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        date =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group no-block date" bind date-picker ' +
                        ' data-date-format="dd/mm/yyyy" data-date-language="pt-BR">' +
                        '<input class="form-control" type="text" maxlength="10">' +
                        '<span class="input-group-btn">' +
                            '<button class="btn btn-default" role="button" type="button">' +
                                '<span class="glyphicon glyphicon-calendar"></span>' +
                            '</button>' +
                        '</span>' +
                        '<!--span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span-->' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        'ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        daterange =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-daterange input-group no-block date" date-picker-range bind>' +
                        '<input type="text" class="form-control" name="start" ' +
                            ' data-date-format="dd/mm/yyyy" data-date-language="pt-BR" maxlength="10"/>' +
                        '<span class="input-group-addon">{{ "l-to" | i18n }}</span>' +
                        '<input type="text" class="form-control" name="end" data-date-format="dd/mm/yyyy" ' +
                            ' data-date-language="pt-BR" maxlength="10"/>' +
                        '<span class="input-group-btn">' +
                            '<button class="btn btn-default disabled" role="button" type="button">' +
                                '<span class="glyphicon glyphicon-calendar"></span>' +
                            '</button>' +
                        '</span>' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        decimal =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<input class="form-control" bind type="text" autonumeric data-a-dec="," ' +
                            ' data-a-sep="." ng-model-options="{ updateOn: \'blur\' }">' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        decimalrange =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group no-block col-md-12" decimal-range bind>' +
                        '<input class="form-control" type="text" name="start" ng-model="start" ' +
                            ' autonumeric data-a-dec="," data-a-sep="."/>' +
                        '<span class="input-group-addon">{{ "l-to" | i18n }}</span>' +
                        '<input class="form-control" type="text" name="end" ng-model="end" ' +
                            ' autonumeric data-a-dec="," data-a-sep="."/>' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        email =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<input class="form-control" bind type="email">' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        input =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<input class="form-control" bind type="text">' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        inputrange =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group no-block col-md-12" input-range bind>' +
                        '<input type="text" class="form-control" name="start"/>' +
                        '<span class="input-group-addon">{{ "l-to" | i18n }}</span>' +
                        '<input type="text" class="form-control" name="end"/>' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        number =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<input class="form-control" bind type="number">' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        password =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<input class="form-control" bind type="password">' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        radio =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<div ng-repeat="o in $options">' +
                            '<div class="radio">' +
                                '<label>' +
                                    '<input type="radio" bind value="{{o.id}}">{{o.text}}' +
                                '</label>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        select =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<ui-select bind theme="bootstrap" include style="display : flex;">' +
                        '</ui-select>' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        select2 =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<ui-select theme="bootstrap"' +
                            ' style="display: flex;"' +
                            ' ng-model="selectModel"' +
                            ' ng-init="initSelectComponent($select);"' +
                            ' on-select="updateSelectModel($item, $model)">' +
                            '<ui-select-match placeholder="{{selectPlaceholder}}">' +
                                '{{ getDescription($select.selected) }}' +
                            '</ui-select-match>' +
                            '<ui-select-choices' +
                                ' repeat="item in selectList | filter: $select.search track by $index"' +
                                ' refresh="refreshSelectList($select.search)"' +
                                ' refresh-delay="{{selectRefreshDelay}}">' +
                                '<span data-ng-bind-html="getDescription(item) | highlight: ' +
                                    '$select.search.toString()"></span>' +
                            '</ui-select-choices>' +
                        '</ui-select>' +
                    '</div>' +
                    '<div class="tooltip bottom"' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        textarea =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group" style="min-height: 100px;">' +
                        '<textarea class="form-control" bind rows="3"></textarea>' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        time =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group no-block bootstrap-timepicker">' +
                        '<input bind type="text" class="form-control" time-picker ' +
                            ' data-minute-step="5" data-show-meridian="false">' +
                        '<span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        typeahead =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<input class="form-control" bind type="text" typeahead-loading="loading">' +
                        '<span ng-show="loading" class="input-group-addon">' +
                            '<i class="glyphicon glyphicon-refresh"></i></span>' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        url =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group">' +
                        '<input class="form-control" bind type="url">' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        workflow =
            '<div class="field-container">' +
                '<label class="field-label"></label>' +
                '<div class="field-input">' +
                    '<div class="input-group no-block">' +
                        '<input class="form-control" bind type="text">' +
                    '</div>' +
                    '<div class="tooltip bottom" ' +
                        ' ng-class="{\'in\': $fieldErrors.length, \'off\': !$fieldErrors.length}">' +
                        '<div class="tooltip-inner">' +
                            '<div class="help-inline" ng-repeat="error in $fieldErrors">' +
                                '{{ $validationMessages[error](this) }}' +
                            '</div>' +
                        '</div>' +
                        '<div class="tooltip-arrow"></div>' +
                    '</div>' +
                '</div>' +
            '</div>';

    angular
        .module('field')
        .constant('fieldConstant', {
            checkbox: checkbox,
            combo: combo,
            date: date,
            daterange: daterange,
            decimal: decimal,
            decimalrange: decimalrange,
            email: email,
            input: input,
            inputrange: inputrange,
            number: number,
            password: password,
            radio: radio,
            select: select,
            select2: select2,
            textarea: textarea,
            time: time,
            typeahead: typeahead,
            url: url,
            workflow: workflow
        });
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvs-diagram
* @name totvsDiagramConstant
* @object constant
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-diagram.module
*
* @description
*
* Constantes utilizadas pela diretiva totvs-diagram
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Diagram
*/

(function () {
    'use strict';

    var consts, layout, shapes, connections;

    layout = {
        type: 'tree',
        subtype: 'down',
        horizontalSeparation: 30,
        verticalSeparation: 20
    };

    shapes = {
        types: {
            RECT: 'rect',
            SQUARE: 'square',
            CIRCLE: 'circle'
        },

        rectShape: {
            width: 345,
            height: 76,
            stroke: {
                width: 2,
                color: '#586477'
            },
            fill: '#e8eff7'
        },

        squareShape: {
            width: 76,
            height: 76,
            stroke: {
                width: 2,
                color: '#586477'
            },
            fill: '#e8eff7'
        },

        circleShape: {
            type: 'circle',
            radius: 60,
            stroke: {
                width: 2,
                color: '#586477'
            },
            fill: '#e8eff7'
        }
    };

    connections = {
        style: 'cascading',
        stroke: {
            color: '#586477',
            width: 1
        }
    };

    // Constants group
    consts = {
        'CONNECTIONS': connections,
        'LAYOUT': layout,
        'SHAPES': shapes
    };

    angular
        .module('totvsDiagram')
        .constant('totvsDiagramConstant', consts);
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

(function () {
    'use strict';

    var totvsEditorConsts, toolsGroup, allowedTools;

    // A collection of tools groups that are used to interact with the TOTVS Editor
    toolsGroup = {
        'defaultTools': [
            'formatting',
            'bold',
            'italic',
            'underline',
            'justifyLeft',
            'justifyCenter',
            'justifyRight',
            'insertUnorderedList',
            'insertOrderedList',
            'indent',
            'createLink',
            'insertImage',
            'createTable',
            'addColumnLeft',
            'addColumnRight',
            'addRowAbove',
            'addRowBelow',
            'deleteRow',
            'deleteColumn'
        ],
        'basicTextFormatting': [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'subscript',
            'superscript'
        ],
        'fontAndColor': [
            'fontName',
            'fontSize',
            'foreColor',
            'backColor'
        ],
        'alignment': [
            'justifyLeft',
            'justifyCenter',
            'justifyRight',
            'justifyFull'
        ],
        'lists': [
            'insertUnorderedList',
            'insertOrderedList',
            'indent',
            'outdent'
        ],
        'links': [
            'createLink',
            'unlink'
        ],
        'imagesAndFiles': [
            'insertImage',
            'insertFile'
        ],
        'tableEditing': [
            'createTable',
            'addColumnLeft',
            'addColumnRight',
            'addRowAbove',
            'addRowBelow',
            'deleteRow',
            'deleteColumn'
        ],
        'structuralMarkupAndStyles': [
            'formatting',
            'cleanFormatting'
        ],
        'snippets': [
            'insertHtml'
        ],
        'html': [
            'viewHtml'
        ],
        'print': [
            'print'
        ],
        'pdf': [
            'pdf'
        ]
    };

    // An array of tools allowed to use with TOTVS Editor
    allowedTools = []
        .concat(toolsGroup.basicTextFormatting)
        .concat(toolsGroup.fontAndColor)
        .concat(toolsGroup.alignment)
        .concat(toolsGroup.lists)
        .concat(toolsGroup.links)
        .concat(toolsGroup.print)
        .concat(toolsGroup.pdf);

    totvsEditorConsts = {
        'TOOL_GROUPS': toolsGroup,
        'ALLOWED_TOOLS': allowedTools
    };

    angular
        .module('totvsEditor')
        .constant('totvsEditorConstants', totvsEditorConsts);
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

(function () {

    'use strict';

    var totvsGanttConstant, pt, en, es;

    pt = {
        actions: {
            addChild: 'Adicionar filho',
            append: 'Adicionar nova tarefa',
            insertAfter: 'Adicionar tarefa abaixo',
            insertBefore: 'Adicionar tarefa acima',
            pdf: 'Exportar para PDF'
        },
        cancel: 'Cancelar',
        deleteDependencyConfirmation: 'Você tem certeza que quer deletar essa dependência?',
        deleteDependencyWindowTitle: 'Deletar dependência',
        deleteTaskConfirmation: 'Você tem certeza que deseja deletar essa tarefa?',
        deleteTaskWindowTitle: 'Deletar tarefa',
        destroy: 'Deletar',
        editor: {
            assignButton: 'Atribuir',
            title: 'Título',
            editorTitle: 'Editar tarefa',
            start: 'Início',
            end: 'Fim',
            percentComplete: 'Completo',
            resources: 'Recursos',
            resourcesEditorTitle: 'Recursos',
            resourcesHeader: 'Recursos',
            unitsHeader: 'Unidades'
        },
        save: 'Salvar',
        views: {
            week: 'Semana',
            month: 'Mês',
            year: 'Ano',
            day: 'Dia',
            start: 'Início',
            end: 'Fim'
        }
    };

    en = {
        actions: {
            addChild: 'Add Child',
            append: 'Add Task',
            insertAfter: 'Add Below',
            insertBefore: 'Add Above',
            pdf: 'Export to PDF'
        },
        cancel: 'Cancel',
        deleteDependencyConfirmation: 'Are you sure you want to delete this dependency?',
        deleteDependencyWindowTitle: 'Delete dependency',
        deleteTaskConfirmation: 'Are you sure you want to delete this task?',
        deleteTaskWindowTitle: 'Delete task',
        destroy: 'Delete',
        editor: {
            assignButton: 'Assign',
            title: 'Title',
            editorTitle: 'Task',
            start: 'Start',
            end: 'End',
            percentComplete: 'Complete',
            resources: 'Resources',
            resourcesEditorTitle: 'Resources',
            resourcesHeader: 'Resources',
            unitsHeader: 'Units'
        },
        save: 'Save',
        views: {
            week: 'Week',
            month: 'Month',
            year: 'Year',
            day: 'Day',
            start: 'Start',
            end: 'End'
        }
    };

    es = {
        actions: {
            addChild: 'Añadir niño',
            append: 'Agregar tarea',
            insertAfter: 'Añadir a continuación',
            insertBefore: 'Sumar',
            pdf: 'Exportar a PDF'
        },
        cancel: 'Cancelar',
        deleteDependencyConfirmation: '¿Está seguro de que quiere eliminar esta dependencia?',
        deleteDependencyWindowTitle: 'Eliminar la dependencia',
        deleteTaskConfirmation: '¿Está seguro de que quiere borrar esta tarea?',
        deleteTaskWindowTitle: 'Eliminar tarea',
        destroy: 'Borrar',
        editor: {
            assignButton: 'Asignar',
            title: 'Título',
            editorTitle: 'Tarea',
            start: 'Comienzo',
            end: 'Fin',
            percentComplete: 'Completar',
            resources: 'recursos',
            resourcesEditorTitle: 'recursos',
            resourcesHeader: 'recursos',
            unitsHeader: 'Unidades'
        },
        save: 'Salvar',
        views: {
            week: 'Semana',
            month: 'Mes',
            year: 'Año',
            day: 'Día',
            start: 'Comienzo',
            end: 'Fin'
        }
    };

    totvsGanttConstant = {
        'pt': pt,
        'en': en,
        'es': es
    };

    angular
        .module('totvsGantt')
        .constant('totvsGanttConstant', totvsGanttConstant);
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvs-diagram
* @name totvsDiagramConstant
* @object constant
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-diagram.module
*
* @description
*
* Constantes utilizadas pela diretiva totvs-diagram
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Diagram
*/

(function () {

    'use strict';

    angular
        .module('zoom')
        .constant('zoomConstant', { 'TEMPLATE': getModalHeader() + getModalBody() + getModalFooter() });

    function getModalHeader() {

        var modalHeader =
            '<totvs-modal-header ng-init="controller.initialize();">' +

                '<div class="row">' +

                    '<div ng-class="{\'col-xs-10\' : controller.isConfigurationEnabled === true,' +
                                    '\'col-sm-11\' : controller.isConfigurationEnabled === true,' +
                                    '\'col-xs-12\' : controller.isConfigurationEnabled !== true,' +
                                    '\'col-sm-12\' : controller.isConfigurationEnabled !== true}">' +
                        '{{controller.zoomName | i18n }}' +
                        '<span ng-if="controller.isConfigurationOpen !== true && controller.isMultiple !== true">' +
                            '&nbsp;({{controller.resultTotal}})' +
                        '</span>' +
                        '<span ng-if="controller.isConfigurationOpen === true">' +
                            '&nbsp;({{ \'l-configuration\' | i18n }})' +
                        '</span>' +
                    '</div>' +

                    '<div class="col-xs-2 col-sm-1"' +
                                'ng-animate="\'animate-if\'"' +
                                'ng-if="controller.isConfigurationEnabled === true && ' +
                                'controller.isConfigurationOpen !== true">' +
                        '<a class="pull-right clickable"' +
                           'ng-click="controller.openCloseConfiguration();">' +
                            '<span class="glyphicon glyphicon-cog"></span>' +
                        '</a>' +
                    '</div>' +

                '</div>' +

            '</totvs-modal-header>';

        return modalHeader;

    }

    function getModalBody() {

        var modalBody =
            '<totvs-modal-body class="modal-body-zoom" style="padding-bottom: 0; width: 100%; border: 0;">' +

                '<style type="text/css" scoped="true">' +

                    '.grid-height {' +
                        'height: 100%;' +
                    '} ' +

                    '.zoom-result {' +
                        'margin-top: 10px;' +
                    '} ' +

                    '.zoom-advanced-search {' +
                        'border-bottom: 1px solid #ccc;' +
                        'border-top: 1px dashed #ccc;' +
                        'font-size: 12px;' +
                        'margin: 5px 0;' +
                        'padding: 5px 0;' +
                    '} ' +

                '</style>' +

                '<div ng-animate="\'animate-if\'"' +
                     'ng-if="controller.isConfigurationEnabled === true && controller.isConfigurationOpen === true">' +

                    '<style type="text/css" scoped="true">' +

                        'fieldset > div.row.header {' +
                            'margin: 5px 0;' +
                            'padding: 5px 0;' +
                            'background-color: #f9f9f9;' +
                            'border-left: 5px solid #D0D0D0;' +
                            'border-bottom: 1px solid #D0D0D0;' +
                        '}' +

                        '.dd {' +
                            'max-width: none;' +
                        '}' +

                        'ol.dd-list > li.dd-item {' +
                            'cursor:move;' +
                        '}' +

                        'ol.dd-list > li.dd-item:nth-child(odd) > .dd-handle {' +
                            'border-left: 5px solid #D0D0D0;' +
                        '}' +

                        'ol.dd-list > li.dd-item:nth-child(even) > .dd-handle {' +
                            'border-left: 5px solid #C0C0C0;' +
                        '}' +

                        '@media (max-width: 767px) {' +

                            'fieldset .text-right,' +
                            'fieldset .visible-xs {' +
                                'padding-top: 5px;' +
                            '}' +

                            'fieldset .name {' +
                                'font-weight: bold;' +
                            '}' +

                            'fieldset {' +
                                'padding-bottom: 15px;' +
                            '}' +
                        '}' +

                    '</style>' +

                    '<ul style="padding-left: 15px">' +
                        '<li>{{ \'msg-grid-config-pinned\' | i18n }}</li>' +
                        '<li>{{ \'msg-grid-config-width\' | i18n }}</li>' +
                        '<li class="text-danger"' +
                            'ng-if="controller.isConfigurationLocal === true">' +
                            '<span ng-if="controller.isLocalStorageAvaiable === true">' +
                                '{{ \'msg-grid-config-local\' | i18n }}' +
                            '</span>' +
                            '<span ng-if="controller.isLocalStorageAvaiable === false">' +
                                '{{ \'msg-grid-config-local-off\' | i18n }}' +
                            '</span>' +
                        '</li>' +

                    '</ul>' +

                    '<fieldset>' +

                        '<div class="row header hidden-xs">' +
                            '<strong>' +
                                '<div class="col-xs-12 col-sm-5">' +
                                    '{{ \'l-column\' | i18n }}' +
                                '</div>' +
                                '<div class="col-xs-12 col-sm-3 text-right">' +
                                    '{{ \'l-width\' | i18n }}' +
                                '</div>' +
                                '<div class="col-xs-12 col-sm-2 text-right">' +
                                    '{{ \'l-pinned\' | i18n }}' +
                                '</div>' +
                                '<div class="col-xs-12 col-sm-2 text-right">' +
                                    '{{ \'l-visible\' | i18n }}' +
                                '</div>' +
                            '</strong>' +
                        '</div>' +

                        '<div ng-nestable ng-model="controller.columns">' +
                            '<div class="row">' +
                                '<div class="col-xs-12 col-sm-5 name">' +
                                    '{{ $item.title }}' +
                                '</div>' +
                                '<div class="visible-xs col-xs-9">' +
                                    '{{ \'l-width\' | i18n }}' +
                                '</div>' +
                                '<div class="col-xs-3 col-sm-3 text-right">' +
                                    '{{ $item.actualWidth }}' +
                                '</div>' +
                                '<div class="visible-xs col-xs-9">' +
                                    '{{ \'l-pinned\' | i18n }}' +
                                '</div>' +
                                '<div class="col-xs-3 col-sm-2 text-right"' +
                                    'ng-mousedown="controller.onMousedown($event)">' +
                                    '<input type="checkbox"' +
                                            'ng-model="$item.pinned"' +
                                            'bsswitch>' +
                                '</div>' +
                                '<div class="visible-xs col-xs-9">' +
                                    '{{ \'l-visible\' | i18n }}' +
                                '</div>' +
                                '<div class="col-xs-3 col-sm-2 text-right"' +
                                    'ng-mousedown="controller.onMousedown($event)">' +
                                    '<input type="checkbox"' +
                                            'ng-model="$item.visible"' +
                                            'bsswitch>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +

                    '</fieldset>' +

                '</div>' +

                '<div ng-show="controller.isConfigurationOpen !== true">' +

                    '<div ng-animate="\'animate-if\'"' +
                         'ng-if="controller.isAdvancedSearchOpen !== true">' +

                        '<div class="row"' +
                             'style="margin: 0 -15px;"' +
                             'role="form">' +

                            '<div class="no-gutter col-xs-12 col-sm-5 col-md-5">' +

                                '<field type="select"' +
                                        'ng-model="controller.selectedFilter"' +
                                        'ng-change="controller.onChangeFilter();"' +
                                        'style="display: initial;"' +
                                        'class="col-md-12">' +
                                    '<include>' +
                                        '<ui-select-match ' +
                                            'placeholder="{{ (controller.selectedFilter ? ' +
                                                                'controller.selectedFilter.label : \'\') | i18n }}">' +
                                            '{{ $select.selected.label | i18n }}' +
                                        '</ui-select-match>' +
                                        '<ui-select-choices repeat="property in controller.propertyFields | ' +
                                            'filter: $select.search | filter: controller.filterPropertyFields ' +
                                            'track by $index">' +

                                            '<span ng-bind-html="(property.label  | i18n ) | ' +
                                                                'highlight: $select.search">' +
                                            '</span>' +
                                        '</ui-select-choices>' +
                                    '</include>' +
                                '</field>' +

                            '</div>' +

                            '<!-- INI: OPTIONS -->' +

                            '<div class="no-gutter col-xs-12 col-sm-7 col-md-5"' +
                                 'ng-if="controller.selectedFilter.propertyList">' +
                                '<field type="select"' +
                                       'ng-model="controller.selectedFilterValue"' +
                                       'class="col-md-12"' +
                                       'canclean>' +
                                    '<include>' +
                                        '<ui-select-match ' +
                                            'placeholder="{{ (controller.selectedFilter ? ' +
                                                            'controller.selectedFilter.label : \'\') | i18n }}">' +
                                            '{{ $select.selected.name }}' +
                                        '</ui-select-match>' +
                                        '<ui-select-choices ' +
                                            'repeat="item in controller.selectedFilter.propertyList | ' +
                                            'filter: $select.search track by $index">' +
                                            '<span ng-bind-html="item.name | highlight: $select.search"></span>' +
                                        '</ui-select-choices>' +
                                    '</include>' +
                                '</field>' +
                            '</div>' +

                            '<div class="no-gutter col-xs-12 col-sm-7 col-md-5"' +
                                 'ng-if="!controller.selectedFilter.propertyList">' +

                                '<!-- string (default) -->' +
                                '<field type="input"' +
                                       'class="col-md-12"' +
                                       'maxlength="{{ controller.selectedFilter.maxlength }}"' +
                                       'ng-if="controller.isChanging !== true && ' +
                                            '(controller.selectedFilter.type === \'string\' || ' +
                                            'controller.selectedFilter.type === undefined)"' +
                                       'ng-model="controller.selectedFilterValue"' +
                                       'placeholder="{{ (controller.selectedFilter ? ' +
                                                        'controller.selectedFilter.label : \'\') | i18n }}"' +
                                       'on-key-enter="controller.applyInternalFilter();"' +
                                       'canclean>' +
                                '</field>' +

                                '<!-- string (extend) -->' +
                                '<div class="col-xs-4 col-md-4 btn-group"' +
                                     'ng-if="controller.isChanging !== true && ' +
                                            'controller.selectedFilter.type === \'stringextend\'"' +
                                     'style="margin-top: 5px; display: inline-flex; margin-left: 0px; padding: 0px;">' +

                                    '<button type="button"' +
                                            'class="btn btn-default"' +
                                            'style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; ' +
                                                    'text-align: left;">' +
                                        '{{ (controller.selectedFilter.extend.name || ' +
                                            '\'l-search-type-equals\') | i18n }}' +
                                    '</button>' +
                                    '<button type="button"' +
                                            'style="overflow: hidden"' +
                                            'class="btn btn-default dropdown-toggle"' +
                                            'data-toggle="dropdown" >' +
                                        '<span class="caret"></span>' +
                                        '<span class="sr-only"></span>' +
                                    '</button>' +
                                    '<ul class="dropdown-menu dropdown-menu-right">' +
                                        '<li>' +
                                            '<a class="clickable"' +
                                               'ng-click="controller.selectedFilter.extend = ' +
                                                    '{ id : 1, name: \'l-search-type-equals\' };">' +
                                                '{{ \'l-search-type-equals\'  | i18n }}' +
                                            '</a>' +
                                        '</li>' +
                                        '<li>' +
                                            '<a class="clickable"' +
                                               'ng-click="controller.selectedFilter.extend = ' +
                                                            '{ id : 2, name: \'l-search-type-matches\' };">' +
                                                '{{ \'l-search-type-matches\'  | i18n }}' +
                                            '</a>' +
                                        '</li>' +
                                        '<li>' +
                                            '<a class="clickable"' +
                                               'ng-click="controller.selectedFilter.extend = ' +
                                                            '{ id : 3, name: \'l-search-type-start\' };">' +
                                                '{{ \'l-search-type-start\'  | i18n }}' +
                                            '</a>' +
                                        '</li>' +
                                    '</ul>' +

                                '</div>' +

                                '<field type="input"' +
                                       'class="col-xs-8 col-md-8"' +
                                       'maxlength="{{ controller.selectedFilter.maxlength }}"' +
                                       'ng-if="controller.isChanging !== true && ' +
                                                'controller.selectedFilter.type === \'stringextend\'"' +
                                       'ng-init="controller.selectedFilter.extend = ' +
                                                    '{ id : 1, name: \'l-search-type-equals\' };"' +
                                       'ng-model="controller.selectedFilterValue"' +
                                       'placeholder="{{ (controller.selectedFilter ? ' +
                                                        'controller.selectedFilter.label : \'\') | i18n }}"' +
                                       'on-key-enter="controller.applyInternalFilter();"' +
                                       'canclean>' +
                                '</field>' +

                                '<!-- stringrange -->' +
                                '<field type="inputrange"' +
                                       'class="col-md-12"' +
                                       'start-maxlength="{{ controller.selectedFilter.maxlength }}"' +
                                       'end-maxlength="{{ controller.selectedFilter.maxlength }}"' +
                                       'ng-if="controller.isChanging !== true && ' +
                                                'controller.selectedFilter.type === \'stringrange\'"' +
                                       'ng-model="controller.selectedFilterValue"' +
                                       'start-placeholder="{{ \'l-start\' | i18n }}"' +
                                       'end-placeholder="{{ \'l-end\' | i18n }}"' +
                                       'on-key-enter="controller.applyInternalFilter();"' +
                                       'canclean>' +
                                '</field>' +

                                '<!-- date -->' +
                                '<field type="date"' +
                                       'class="col-md-12"' +
                                       'ng-if="controller.isChanging !== true && ' +
                                                'controller.selectedFilter.type === \'date\'"' +
                                       'ng-model="controller.selectedFilterValue"' +
                                       'placeholder="{{ (controller.selectedFilter ? ' +
                                                        'controller.selectedFilter.label : \'\') | i18n }}"' +
                                       'on-key-enter="controller.applyInternalFilter();">' +
                                '</field>' +

                                '<!-- daterange -->' +
                                '<field type="daterange"' +
                                       'class="col-md-12"' +
                                       'ng-if="controller.isChanging !== true && ' +
                                                'controller.selectedFilter.type === \'daterange\'"' +
                                       'ng-model="controller.selectedFilterValue"' +
                                       'start-placeholder="{{ \'l-start\' | i18n }}"' +
                                       'end-placeholder="{{ \'l-end\' | i18n }}"' +
                                       'on-key-enter="controller.applyInternalFilter();">' +
                                '</field>' +

                                '<!-- decimal -->' +
                                '<field type="decimal"' +
                                       'class="col-md-12"' +
                                       'data-v-max="{{ controller.selectedFilter.vMax }}"' +
                                       'data-v-min="{{ controller.selectedFilter.vMin }}"' +
                                       'ng-if="controller.isChanging !== true && ' +
                                                'controller.selectedFilter.type === \'decimal\'"' +
                                       'ng-model="controller.selectedFilterValue"' +
                                       'placeholder="{{ (controller.selectedFilter ? ' +
                                                        'controller.selectedFilter.label : \'\') | i18n }}"' +
                                       'on-key-enter="controller.applyInternalFilter();"' +
                                       'data-a-dec="{{ controller.selectedFilter.aDec }}"' +
                                       'data-m-dec="{{ controller.selectedFilter.mDec }}"' +
                                       'data-a-form="false"' +
                                       'canclean>' +
                                '</field>' +

                                '<!-- decimalrange -->' +
                                '<field type="decimalrange"' +
                                       'class="col-md-12"' +
                                       'data-v-max="{{ controller.selectedFilter.vMax }}"' +
                                       'data-v-min="{{ controller.selectedFilter.vMin }}"' +
                                       'ng-if="controller.isChanging !== true && ' +
                                                'controller.selectedFilter.type === \'decimalrange\'"' +
                                       'ng-model="controller.selectedFilterValue"' +
                                       'start-placeholder="{{ \'l-start\' | i18n }}"' +
                                       'end-placeholder="{{ \'l-end\' | i18n }}"' +
                                       'on-key-enter="controller.applyInternalFilter();"' +
                                       'data-a-dec="{{ controller.selectedFilter.aDec }}"' +
                                       'data-m-dec="{{ controller.selectedFilter.mDec }}"' +
                                       'data-a-form="false"' +
                                       'canclean>' +
                                '</field>' +

                                '<!-- integer -->' +
                                '<field type="decimal"' +
                                       'class="col-md-12"' +
                                       'data-v-max="{{ controller.selectedFilter.vMax }}"' +
                                       'data-v-min="{{ controller.selectedFilter.vMin }}"' +
                                       'ng-if="controller.isChanging !== true && ' +
                                                'controller.selectedFilter.type === \'integer\'"' +
                                       'ng-model="controller.selectedFilterValue"' +
                                       'placeholder="{{ (controller.selectedFilter ? ' +
                                                        'controller.selectedFilter.label : \'\') | i18n }}"' +
                                       'on-key-enter="controller.applyInternalFilter();"' +
                                       'data-a-dec=","' +
                                       'data-alt-dec=""' +
                                       'data-a-sep=""' +
                                       'data-m-dec="0"' +
                                       'data-a-pad="false"' +
                                       'data-l-zero="deny"' +
                                       'canclean>' +
                                '</field>' +

                                '<!-- integerrange -->' +
                                '<field type="decimalrange"' +
                                       'class="col-md-12"' +
                                       'data-v-max="{{ controller.selectedFilter.vMax }}"' +
                                       'data-v-min="{{ controller.selectedFilter.vMin }}"' +
                                       'ng-if="controller.isChanging !== true && ' +
                                                'controller.selectedFilter.type === \'integerrange\'"' +
                                       'ng-model="controller.selectedFilterValue"' +
                                       'start-placeholder="{{ \'l-start\' | i18n }}"' +
                                       'end-placeholder="{{ \'l-end\' | i18n }}"' +
                                       'on-key-enter="controller.applyInternalFilter();"' +
                                       'data-a-dec=","' +
                                       'data-alt-dec=""' +
                                       'data-a-sep=""' +
                                       'data-m-dec="0"' +
                                       'data-a-pad="false"' +
                                       'data-l-zero="deny"' +
                                       'canclean>' +
                                '</field>' +

                            '</div>' +

                            '<!-- END: OPTIONS -->' +
                            '<div class="col-xs-12 col-sm-offset-5 col-sm-7 col-md-offset-0 col-md-2"' +
                                 'style="padding-top: 5px;">' +
                                '<!-- Por algum motivo desconhecido quando é utilizado o ng-submit para o form,' +
                                     'o controler não recebe as atualizações do model -->' +
                                '<button class="btn btn-primary"' +
                                        'style="width: 100%"' +
                                        'ng-click="controller.applyInternalFilter();">' +
                                    '{{ \'btn-apply\' | i18n }}' +
                                '</button>' +
                            '</div>' +

                        '</div>' +

                    '</div>' +

                    '<div ng-animate="\'animate-if\'"' +
                         'ng-if="controller.isAdvancedSearchOpen === true">' +

                            '<h4>{{ \'btn-advanced-search\' | i18n }}</h4>' +

                    '</div>' +

                    '<div class="zoom-advanced-search"' +
                         'ng-animate="\'animate-if\'"' +
                         'ng-if="controller.isAdvancedSearchEnabled === true">' +

                        '<div ng-animate="\'animate-if\'"' +
                             'ng-if="controller.isAdvancedSearchOpen === true">' +

                            '<div class="row no-gutters"' +
                                 'style="margin: 0 -15px;"' +
                                 'role="form">' +

                                '<div ng-repeat="filter in controller.propertyFields track by $index">' +

                                    '<div ng-if="filter.isAvaiableInAdvancedSearch !== false">' +

                                        '<div ng-if="filter.propertyList !== undefined">' +
                                            '<field type="select"' +
                                                   'ng-model="filter.value"' +
                                                   'canclean>' +
                                                '<include>' +
                                                    '<ui-select-match ' +
                                                        'placeholder="{{ filter.label | i18n }}">' +
                                                        '{{ $select.selected.name }}' +
                                                    '</ui-select-match>' +
                                                    '<ui-select-choices repeat="item in filter.propertyList | ' +
                                                        'filter: $select.search track by $index">' +
                                                        '<span ng-bind-html="item.name | highlight: $select.search">' +
                                                        '</span>' +
                                                    '</ui-select-choices>' +
                                                '</include>' +
                                                '<label>{{ filter.label | i18n }}</label>' +
                                            '</field>' +
                                        '</div>' +

                                        '<div ng-if="filter.propertyList === undefined">' +

                                            '<!-- string (default) -->' +
                                            '<field type="input"' +
                                                   'maxlength="{{ filter.maxlength }}"' +
                                                   'ng-if="filter.type === \'string\' || filter.type === undefined"' +
                                                   'ng-model="filter.value"' +
                                                   'placeholder="{{ filter.label | i18n }}"' +
                                                   'canclean>' +
                                                '<label>{{ filter.label | i18n }}</label>' +
                                            '</field>' +

                                            '<!-- string (extend) -->' +
                                            '<field type="input"' +
                                                   'class="col-xs-9 col-sm-4"' +
                                                   'maxlength="{{ filter.maxlength }}"' +
                                                   'ng-if="filter.type === \'stringextend\'"' +
                                                   'ng-init="filter.extend = ' +
                                                            '{id : 1, name: \'l-search-type-equals\' };"' +
                                                   'ng-model="filter.value"' +
                                                   'placeholder="{{ filter.label | i18n }}"' +
                                                   'canclean>' +
                                                '<label>{{ filter.label | i18n }}</label>' +
                                            '</field>' +

                                            '<div class="col-xs-3 col-sm-2 btn-group"' +
                                                 'ng-if="filter.type === \'stringextend\'"' +
                                                 'style="display: inline-flex; margin-left: 0; margin-top: 27px; ' +
                                                                    'padding: 0 15px 0 0;">' +

                                                '<button type="button"' +
                                                        'class="btn btn-default"' +
                                                        'style="overflow: hidden; white-space: nowrap; ' +
                                                                'text-overflow: ellipsis; width: 100%; ' +
                                                                'text-align: left;">' +
                                                    '{{ (filter.extend.name ||  \'l-search-type-equals\') | i18n }}' +
                                                '</button>' +
                                                '<button type="button"' +
                                                        'style="overflow: hidden"' +
                                                        'class="btn btn-default dropdown-toggle"' +
                                                        'data-toggle="dropdown" >' +
                                                    '<span class="caret"></span>' +
                                                    '<span class="sr-only"></span>' +
                                                '</button>' +
                                                '<ul class="dropdown-menu">' +
                                                    '<li>' +
                                                        '<a class="clickable"' +
                                                           'ng-click="filter.extend = ' +
                                                                '{ id : 1, name: \'l-search-type-equals\' };">' +
                                                            '{{ \'l-search-type-equals\'  | i18n }}' +
                                                        '</a>' +
                                                    '</li>' +
                                                    '<li>' +
                                                        '<a class="clickable"' +
                                                           'ng-click="filter.extend = ' +
                                                                '{ id : 2, name: \'l-search-type-matches\' };">' +
                                                            '{{ \'l-search-type-matches\'  | i18n }}' +
                                                        '</a>' +
                                                    '</li>' +
                                                    '<li>' +
                                                        '<a class="clickable"' +
                                                           'ng-click="filter.extend = ' +
                                                                '{ id : 3, name: \'l-search-type-start\' };">' +
                                                            '{{ \'l-search-type-start\'  | i18n }}' +
                                                        '</a>' +
                                                    '</li>' +
                                                '</ul>' +

                                            '</div>' +

                                            '<!-- stringrange -->' +
                                            '<field type="inputrange"' +
                                                   'start-maxlength="{{ filter.maxlength }}"' +
                                                   'end-maxlength="{{ filter.maxlength }}"' +
                                                   'ng-if="filter.type === \'stringrange\'"' +
                                                   'ng-model="filter.value"' +
                                                   'start-placeholder="{{ \'l-start\' | i18n }}"' +
                                                   'end-placeholder="{{ \'l-end\' | i18n }}"' +
                                                   'canclean>' +
                                                '<label>{{ filter.label | i18n }}</label>' +
                                            '</field>' +

                                            '<!-- date -->' +
                                            '<field type="date"' +
                                                   'ng-if="filter.type === \'date\'"' +
                                                   'ng-model="filter.value"' +
                                                   'placeholder="{{ filter.label | i18n }}">' +
                                                '<label>{{ filter.label | i18n }}</label>' +
                                            '</field>' +

                                            '<!-- daterange -->' +
                                            '<field type="daterange"' +
                                                   'ng-if="filter.type === \'daterange\'"' +
                                                   'ng-model="filter.value"' +
                                                   'start-placeholder="{{ \'l-start\' | i18n }}"' +
                                                   'end-placeholder="{{ \'l-end\' | i18n }}">' +
                                                '<label>{{ filter.label | i18n }}</label>' +
                                            '</field>' +

                                            '<!-- decimal -->' +
                                            '<field type="decimal"' +
                                                   'data-v-max="{{ filter.vMax }}"' +
                                                   'data-v-min="{{ filter.vMin }}"' +
                                                   'ng-if="filter.type === \'decimal\'"' +
                                                   'ng-model="filter.value"' +
                                                   'placeholder="{{ filter.label | i18n }}"' +
                                                   'data-a-dec="{{ filter.aDec }}"' +
                                                   'data-m-dec="{{ filter.mDec }}"' +
                                                   'canclean>' +
                                                '<label>{{ filter.label | i18n }}</label>' +
                                            '</field>' +

                                            '<!-- decimalrange -->' +
                                            '<field type="decimalrange"' +
                                                   'data-v-max="{{ filter.vMax }}"' +
                                                   'data-v-min="{{ filter.vMin }}"' +
                                                   'ng-if="filter.type === \'decimalrange\'"' +
                                                   'ng-model="filter.value"' +
                                                   'start-placeholder="{{ \'l-start\' | i18n }}"' +
                                                   'end-placeholder="{{ \'l-end\' | i18n }}"' +
                                                   'data-a-dec="{{ filter.aDec }}"' +
                                                   'data-m-dec="{{ filter.mDec }}"' +
                                                   'canclean>' +
                                                '<label>{{ filter.label | i18n }}</label>' +
                                            '</field>' +

                                            '<!-- integer -->' +
                                            '<field type="decimal"' +
                                                   'data-v-max="{{ filter.vMax }}"' +
                                                   'data-v-min="{{ filter.vMin }}"' +
                                                   'ng-if="filter.type === \'integer\'"' +
                                                   'ng-model="filter.value"' +
                                                   'placeholder="{{ filter.label | i18n }}"' +
                                                   'data-a-dec=","' +
                                                   'data-alt-dec=""' +
                                                   'data-a-sep=""' +
                                                   'data-m-dec="0"' +
                                                   'data-a-pad="false"' +
                                                   'data-l-zero="deny"' +
                                                   'canclean>' +
                                                '<label>{{ filter.label | i18n }}</label>' +
                                            '</field>' +

                                            '<!-- integerrange -->' +
                                            '<field type="decimalrange"' +
                                                   'data-v-max="{{ filter.vMax }}"' +
                                                   'data-v-min="{{ filter.vMin }}"' +
                                                   'ng-if="filter.type === \'integerrange\'"' +
                                                   'ng-model="filter.value"' +
                                                   'start-placeholder="{{ \'l-start\' | i18n }}"' +
                                                   'end-placeholder="{{ \'l-end\' | i18n }}"' +
                                                   'data-a-dec=","' +
                                                   'data-alt-dec=""' +
                                                   'data-a-sep=""' +
                                                   'data-m-dec="0"' +
                                                   'data-a-pad="false"' +
                                                   'data-l-zero="deny"' +
                                                   'canclean>' +
                                                '<label>{{ filter.label | i18n }}</label>' +
                                            '</field>' +

                                        '</div>' +

                                    '</div>' +

                                '</div>' +

                                '<div class="col-xs-12"' +
                                     'style="padding: 5px 15px;">' +
                                    '<div class="text-right" style="border-bottom: 1px dashed #ccc; ' +
                                            'padding-bottom: 5px">' +
                                        '<button class="btn btn-sm btn-default"' +
                                           'ng-click="controller.openCloseAdvancedSearch()">' +
                                            '{{ \'btn-cancel\' | i18n }}' +
                                        '</button>' +
                                        '<button class="btn btn-sm btn-primary"' +
                                                'ng-click="controller.applyInternalFilter();">' +
                                            '{{ \'btn-apply\' | i18n }}' +
                                        '</button>' +
                                    '</div>' +
                                '</div>' +

                            '</div>' +

                        '</div>' +

                        '<div class="text-center">' +
                            '<a class="clickable"' +
                               'ng-click="controller.openCloseAdvancedSearch()">' +
                                '<span style="opacity:.8;">' +
                                    '{{ controller.isAdvancedSearchOpen === true ? \'&#9650;\' : \'&#9660;\'}}&nbsp;' +
                                '</span>' +
                                '{{ \'btn-advanced-search\' | i18n }}' +
                            '</a>' +
                        '</div>' +
                    '</div>' +

                    '<div class="row accordion"' +
                         'ng-animate="\'animate-if\'"' +
                         'ng-if="controller.isMultiple === true">' +

                        '<style type="text/css" scoped="true">' +

                            '.accordion {' +
                                'padding-bottom: 15px;' +
                            '}' +

                            'accordion .panel-group {' +
                                'margin-top: 10px;' +
                                'margin-bottom: 0;' +
                            '}' +

                            'accordion .panel-group .panel {' +
                                'border: medium none !important;' +
                                'box-shadow: none !important;' +
                            '}' +

                            'accordion .panel-group .panel .panel-heading {' +
                                'background-color: #ebf0f0 !important;' +
                            '}' +

                            'accordion .panel-group .panel .panel-heading .panel-title {' +
                                'color: #777777;' +
                                'font-family: Arial;' +
                                'font-size: 13px;' +
                            '}' +

                            'accordion .panel-group .panel .panel-body {' +
                                'padding-top: 0;' +
                                'padding-bottom: 0;' +
                            '}' +

                            'accordion .panel-group .panel .panel-body .zoom-result {' +
                                'margin-top: 0;' +
                            '}' +

                        '</style>' +

                        '<accordion close-others="false">' +

                            '<accordion-group id="foundAccordeon" ' +
                                             'ng-init="controller.isOpenFoundPanel = true" ' +
                                             'is-open="controller.isOpenFoundPanel">' +

                                '<accordion-heading>' +

                                    '<div class="row">' +
                                        '<div class="{{ controller.isSelectedAllEnabled === true ? ' +
                                                    '\'col-xs-4 col-sm-6\' : \'col-xs-5 col-sm-9\' }}">' +
                                            '<span>{{ \'l-founds\' | i18n }} ({{controller.resultTotal}})</span>' +
                                        '</div>' +

                                        '<div class="text-right {{ controller.isSelectedAllEnabled === true ? ' +
                                                    '\'col-xs-8 col-sm-6\' : \'col-xs-7 col-sm-3\' }}">' +

                                            '<a class="clickable"' +
                                               'style="padding-right: 10px"' +
                                               'ng-if="controller.isSelectedAllEnabled === true"' +
                                               'ng-click="controller.selectedAll($event)">' +
                                                '{{ \'btn-select-all\' | i18n }}' +
                                            '</a>' +
                                            '<a class="clickable"' +
                                               'style="padding-right: 15px"' +
                                               'ng-click="controller.invertSelected($event)">' +
                                                '{{ \'btn-invert-select\' | i18n }}' +
                                            '</a>' +
                                            '<i class="pull-right glyphicon" ng-class="' +
                                                '{\'glyphicon-chevron-down\' : controller.isOpenFoundPanel, ' +
                                                '\'glyphicon-chevron-right\': !controller.isOpenFoundPanel}">' +
                                            '</i>' +

                                        '</div>' +
                                    '</div>' +

                                '</accordion-heading>' +

                                '<div class="row no-gutter zoom-result" ng-class="{\'zoom-pagination\': ' +
                                            'controller.zoomResultList.length < ' +
                                            'controller.resultTotal && controller.zoomResultList.length}">' +

                                    '<div id="foundContainer" class="grid-height">' +
                                        '<totvs-grid grid-options="controller.gridOptions"' +
                                                    'grid-height="100%"' +
                                                    'auto-resize-content="false"' +
                                                    'add-select-column="separate"' +
                                                    'auto-resize-column="always"' +
                                                    //'navigatable="true"' +
                                                    'selectable="multiple, row"' +
                                                    'grid-data="controller.zoomResultList"' +
                                                    'grid="controller.zoomGrid"' +
                                                    'resizable="true"' +
                                                    'reorderable="true"' +
                                                    'on-change="controller.selectionChange(event)"' +
                                                    'on-data="controller.onModelUpdated(data)">' +
                                        '</totvs-grid>' +
                                    '</div>' +

                                    '<div ng-animate="\'animate-if\'"' +
                                         'ng-if="controller.zoomResultList.length < controller.resultTotal ' +
                                                    '&& controller.zoomResultList.length">' +
                                        '<totvs-list-pagination ng-click="controller.applyInternalFilter(true);">' +
                                        '</totvs-list-pagination>' +
                                    '</div>' +

                                '</div>' +

                            '</accordion-group>' +

                            '<accordion-group id="selectedAccordeon" ' +
                                             'ng-init="controller.isOpenSelectedPanel = false"' +
                                             'is-open="controller.isOpenSelectedPanel">' +

                                '<accordion-heading>' +
                                    '<div class="row">' +
                                        '<div class="col-xs-5 col-sm-8">' +
                                            '<span>{{ \'l-selecteds\' | i18n }}  ({{controller.$selecteds.length}})' +
                                            '</span>' +
                                        '</div>' +
                                        '<div class="col-xs-7 col-sm-4 text-right">' +
                                            '<a class="clickable"' +
                                               'style="padding-right: 15px"' +
                                               'ng-click="controller.removeAllSelected($event)">' +
                                                '{{ \'btn-clear-all\' | i18n }}' +
                                            '</a>' +
                                            '<i class="pull-right glyphicon"' +
                                               'ng-class="{\'glyphicon-chevron-down\' :  ' +
                                                                'controller.isOpenSelectedPanel,' +
                                                          '\'glyphicon-chevron-right\' : ' +
                                                                '!controller.isOpenSelectedPanel}">' +
                                            '</i>' +
                                        '</div>' +
                                    '</div>' +
                                '</accordion-heading>' +

                                '<div id="selectedContainer" class="row" style="height: 150px">' +

                                    '<totvs-grid grid-options="controller.gridSelectedOptions"' +
                                                'grid-data="controller.$selecteds"' +
                                                'grid-height="100%"' +
                                                'auto-resize-content="false"' +
                                                'auto-resize-column="always"' +
                                                //'navigatable="true"' +
                                                'selectable="row"' +
                                                'grid="controller.zoomSelectedGrid"' +
                                                'resizable="true"' +
                                                'reorderable="true">' +
                                        '<totvs-grid-column width="40" title="">' +
                                            '<template>' +
                                                '<span class="glyphicon glyphicon-trash" ' +
                                                        'ng-click="controller.removeSelected(dataItem)">' +
                                                '</span>' +
                                            '</template>' +
                                        '</totvs-grid-column>' +
                                    '</totvs-grid>' +

                                '</div>' +

                            '</accordion-group>' +

                        '</accordion>' +

                    '</div>' +

                    '<div class="row no-gutters zoom-result" ' +
                            'ng-class="{\'zoom-pagination\' : ' +
                                            'controller.zoomResultList.length < controller.resultTotal ' +
                                            '&& controller.zoomResultList.length}"' +
                            'ng-if="controller.isMultiple !== true">' +

                        '<totvs-grid grid-options="controller.gridOptions"' +
                                    'grid-height="100%"' +
                                    //'navigatable="true"' +
                                    'grid-data="controller.zoomResultList"' +
                                    'grid="controller.zoomGrid"' +
                                    'resizable="true"' +
                                    'selectable="row"' +
                                    'reorderable="true"' +
                                    'grid-selected-item="controller.$selected"' +
                                    'auto-resize-content="false"' +
                                    'auto-resize-column="always"' +
                                    'add-select-column>' +
                        '</totvs-grid>' +

                        '<div ng-animate="\'animate-if\'" ' +
                             'ng-if="controller.zoomResultList.length < controller.resultTotal && ' +
                                    'controller.zoomResultList.length">' +
                            '<totvs-list-pagination ng-click="controller.applyInternalFilter(true);">' +
                            '</totvs-list-pagination>' +
                        '</div>' +
                    '</div>' +

                '</div>' +

            '</totvs-modal-body>';

        return modalBody;

    }

    function getModalFooter() {
        var modalFooter =
            '<totvs-modal-footer>' +
                '<div ng-animate="\'animate-if\'"' +
                     'ng-if="controller.configuration !== false && controller.isConfigurationOpen === true">' +
                    '<button class="btn btn-default"' +
                            'ng-click="controller.openCloseConfiguration();">' +
                        '{{ \'btn-cancel\' | i18n }}' +
                    '</button>' +
                    '<button class="btn btn-primary"' +
                            'ng-click="controller.saveConfiguration();">' +
                        '{{ \'btn-save\' | i18n }}' +
                    '</button>' +
                '</div>' +
                '<div ng-animate="\'animate-if\'" ' +
                     'ng-if="controller.isConfigurationOpen !== true">' +
                    '<button class="btn btn-default"' +
                            'ng-click="controller.cancel()">' +
                        '{{ \'btn-cancel\' | i18n }}' +
                    '</button>' +
                    '<button class="btn btn-primary"' +
                            'ng-click="controller.ok()">' +
                        '{{ \'btn-select\' | i18n }}' +
                    '</button>' +
                '</div>' +
            '</totvs-modal-footer>';

        return modalFooter;

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsField
* @name totvsFieldService
* @object service
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-field.module
*
* @dependencies cfp.hotkeys
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Field
*/

(function () {

    'use strict';

    angular
        .module('totvsField')
        .service('totvsFieldService', TotvsFieldService);

    TotvsFieldService.$inject = ['$compile', '$interpolate', 'hotkeys'];

    function TotvsFieldService($compile, $interpolate, hotkeys) {

        this.pattern = pattern;
        this.checkField = checkField;
        this.ngHide = ngHide;
        this.ngShow = ngShow;
        this.ngDisabled = ngDisabled;
        this.canclean = canclean;
        this.zoom = zoom;

        /**
        * @name pattern
        *
        * @description Função padrão para todas as diretivas. Monta o label, name-id, class e validator.
        *
        * @param {object} scope Escopo da diretiva.
        * @param {object} attrs Atributos do elemento da diretiva.
        * @param {element} element Elemento da diretiva.
        * @param {object} childScope Escopo filho da diretiva.
        * @param {object} ngModel Controller do model da diretiva.
        * @param {element} input Elemento do input da diretiva.
        */
        function pattern(scope, attrs, element, childScope, ngModel, input) {
            var labelElement = '',
                labelContent = attrs.label;

            if (attrs.$attr.nameId) {
                childScope.$fieldId = attrs.nameId;
            } else if (angular.isDefined(attrs.ngModel)) {
                childScope.$fieldId = attrs.ngModel.replace(/\-|\[|\./g, '_').toLowerCase();
                childScope.$fieldId = childScope.$fieldId.replace(/\'|\]/g, '');
            }

            childScope.$field = ngModel;

            input.attr('id', childScope.$fieldId);
            input.attr('name', childScope.$fieldId);

            if (labelContent) {
                childScope.$fieldLabel = $interpolate(labelContent)(scope);

                labelElement = element.find('label:first');
                labelElement.attr('for', childScope.$fieldId);
                labelElement.html(labelContent);

                labelElement.attr('tooltip', labelContent);

                labelElement.attr('tooltip-placement', 'top');
            } else {
                element.find('label:first').remove();
                element.find('div.col-xs-8').removeClass();
            }

            if (attrs.$attr.class) {
                element.addClass('col-xs-12');
            } else {
                element.addClass('col-xs-12 col-md-6');
            }

            validator(element, childScope, ngModel);
        }

        /**
        * @name checkField
        *
        * @description Função que faz a validação do angular nos campos de entrada (totvs-input, totvs-phone, etc.)
        * Necessário que seja invocado após o $compile das diretivas.
        *
        * @param {object} scope Escopo da diretiva.
        * @param {element} input Elemento de input da diretiva.
        * @param {object} ngModel Controller do ngModel da diretiva.
        */
        function checkField(scope, input, ngModel) {
            scope.$field = input.controller('ngModel') || ngModel;

            scope.$watchCollection('$field.$dirty && $field.$error', function (errorList) {
                scope.$fieldErrors = [];
                angular.forEach(errorList, function (invalid, key) {
                    if (invalid) {
                        scope.$fieldErrors.push(key);
                    }
                });
            });
        }

        /**
        * @name validator
        *
        * @description Faz a manipulação no DOM para a criação dos tooltip da validação,
        * trabalha em conjunto com a função checkField.
        *
        * @param {element} element Elemento da diretiva
        * @param {object} scope Escopo da diretiva
        */
        function validator(element, scope) {
            var validators,
                validationMsgs,
                helpInlineElement;

            helpInlineElement = angular.element('<div class="help-inline" ng-repeat="error in $fieldErrors"></div>');

            validators     = element.find('validator');
            validationMsgs = undefined;

            if (validators && validators.length > 0) {
                element.find('.tooltip.bottom')
                    .attr('ng-class', '{"in": $fieldErrors.length, "off": !$fieldErrors.length}');

                validationMsgs = {};

                angular.forEach(validators, function (validator) {
                    validator = angular.element(validator);
                    validationMsgs[validator.attr('key')] = $interpolate(validator.text());
                });
            }

            if (validators && validators.length > 0) {
                scope.$validationMessages = angular.copy(validationMsgs);
            } else {
                element.find('div.tooltip').remove();
            }

            element.find('.tooltip-inner').append(helpInlineElement);
            element.find('.help-inline').html('{{$validationMessages[error](this)}}');

            // Após utilizar o validator, remove para não ser impresso junto a diretiva.
            element.find('validator').remove();
        }

        /**
        * @name ngHide
        *
        * @description Executa o ng hide quando utiliza-lo na diretiva.
        *
        * @param {object} scope Escopo da diretiva.
        * @param {object} attrs Atributos do elemento da diretiva.
        * @param {element} element Elemento da diretiva.
        */
        function ngHide(scope, attrs, element) {
            scope.$watch(attrs.ngHide, function (value) {
                if (value === true) {
                    element.addClass('ng-hide');
                } else if (value === false) {
                    element.removeClass('ng-hide');
                }
            });
        }

        /**
        * @name ngShow
        *
        * @description Executa o ng show quando utiliza-lo na diretiva.
        *
        * @param {object} scope Escopo da diretiva.
        * @param {object} attrs Atributos do elemento da diretiva.
        * @param {element} element Elemento da diretiva.
        */
        function ngShow(scope, attrs, element) {
            scope.$watch(attrs.ngShow, function (value) {
                if (value === false) {
                    element.addClass('ng-hide');
                } else if (value === true) {
                    element.removeClass('ng-hide');
                }
            });
        }

        /**
        * @name ngDisabled
        *
        * @description Executa o ng disabled quando utiliza-lo na diretiva.
        *
        * @param {object} scope Escopo da diretiva.
        * @param {object} attrs Atributos do elemento da diretiva.
        * @param {element} element Elemento da diretiva.
        * @param {element} input Elemento da diretiva que será desabilitado.
        */
        function ngDisabled(scope, attrs, element, input) {
            scope.$watch(attrs.ngDisabled, function (value) {
                if (value === true) {
                    element.attr('disabled', true);
                    input.attr('disabled', true);
                    element.find('button').attr('disabled', true);
                } else if (value === false) {
                    element.removeAttr('disabled');
                    input.removeAttr('disabled');
                    element.find('button').removeAttr('disabled');
                }
            });
        }

        /**
        * @name canclean
        *
        * @description Habilita a utilização do botão de limpar.
        *
        * @param {object} attrs Atributos da diretiva.
        * @param {element} element Elemento da diretiva.
        * @param {object} scope Escopo da diretiva.
        * @param {element} input Elemento da diretiva que receberá a concatenação do botão de limpar.
        * @param {function} callbackFn Função de callback sobrescreve a função padrão, caso necessário.
        */
        function canclean(attrs, element, scope, input, callbackFn) {
            var inputgroup,
                inputgroupbtn,
                btClean;

            if (attrs.$attr.canclean) {
                inputgroup = element.find('.input-group');
                inputgroupbtn = inputgroup.find('.input-group-btn');

                if (inputgroupbtn.length === 0) {
                    inputgroupbtn = angular.element('<span class="input-group-btn"></span>');
                    inputgroup.append(inputgroupbtn);
                    inputgroup.addClass('no-block');
                }

                btClean = angular.element('<button class="btn btn-default" bind role="button" ' +
                        'type="button" data-ng-click="cleanValue()" tabindex=-1>' +
                        '<span class="glyphicon glyphicon-remove"></span></button>');

                if (!attrs.$attr.totvsSelect) {
                    btClean.attr('ng-disabled', 'ngDisabled()');
                }

                scope.cleanValue = function () {
                    if (!callbackFn) {
                        var value;

                        if (attrs.canclean === 'undefined') {
                            value = undefined;
                        } else if (attrs.canclean === 'null' || attrs.canclean === '') {
                            value = null;
                        } else {
                            value = attrs.canclean;
                        }

                        this.control = input.controller('ngModel') || scope.$field;

                        this.control.$setViewValue(value);
                        this.control.$render();
                    } else {
                        return callbackFn();
                    }
                };

                hotkeys.bindTo(scope)
                    .add({
                        combo: 'ctrl+del',
                        allowIn: ['input'],
                        callback: function (event) {
                            var srcElement,
                                inputGroup,
                                cancleans,
                                value,
                                i;
                            srcElement = event.srcElement;
                            if (srcElement.attributes.getNamedItem('canclean')) {
                                value = srcElement.attributes.getNamedItem('canclean').value;
                                if (value === 'undefined') {
                                    value = undefined;
                                } else if (value === 'null' || value === '') {
                                    value = null;
                                } else {
                                    value = value;
                                }
                                inputGroup = srcElement;
                                while (inputGroup.className.split(' ').indexOf('input-group') < 0) {
                                    inputGroup = inputGroup.parentElement;
                                }
                                cancleans = inputGroup.querySelectorAll('[canclean]');
                                for (i = 0; i < cancleans.length; i += 1) {
                                    cancleans[i].value = value;
                                }
                            }
                        }
                    });

                inputgroupbtn.append(btClean);
            }
        }

        /**
        * @name zoom
        *
        * @description Cria o botão zoom e concatena com o input.
        *
        * @param {object} attrs Atributos da diretiva.
        * @param {element} element Elemento da diretiva.
        */
        function zoom(attrs, element) {
            var inputgroup,
                inputgroupbtn,
                zoomHTML,
                i;

            if (attrs.zoomService) {
                inputgroup = element.find('.input-group');
                inputgroupbtn = inputgroup.find('.input-group-btn');

                if (inputgroupbtn.length === 0) {
                    inputgroupbtn = angular.element('<span class="input-group-btn"></span>');
                    inputgroup.append(inputgroupbtn);
                    inputgroup.addClass('no-block');
                }

                zoomHTML = angular.element('<zoom></zoom>');
                if (attrs.$attr.totvsSelect) {
                    zoomHTML.attr('zoom-selected-internal', 'updateSelectModelZoom(selected)');
                    zoomHTML.attr('ng-model', 'zoomSelectedItem');
                    zoomHTML.attr('isTotvsSelect', 'true');
                } else {
                    zoomHTML.attr('ng-model', 'ngModel');
                    zoomHTML.attr('ng-disabled', 'ngDisabled()');
                }

                for (i in attrs.$attr) {
                    if (attrs.$attr.hasOwnProperty(i)) {
                        if (attrs.$attr[i].indexOf('zoom') > -1) {
                            zoomHTML.attr(attrs.$attr[i], attrs[i]);
                        }
                    }
                }

                inputgroupbtn.append(zoomHTML);
            }
        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module zoom
* @name zoomMultiple
* @object service
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires zoom.module
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('zoom')
        .service('zoomMultipleService', ZoomMultipleService);

    ZoomMultipleService.$inject = ['i18nFilter'];

    function ZoomMultipleService(i18nFilter) {

        var ctrl,
            comparatorDefault,
            toJSON;

        comparatorDefault = function (item1, item2) {
            return angular.equals(item1, item2); //item1 === item2; // quando é um Resource não funciona direito
        };

        toJSON = function (item) {

            if (item && typeof item.toJSON === 'function') {
                return item.toJSON();
            }

            return item;

        };

        this.selectionChange = function () {

            var comparator = ctrl.comparator || comparatorDefault;

            for (var index = 0; index < ctrl.zoomResultList.length; index++) {
                var element = ctrl.zoomResultList[index],
                    achou = undefined;

                for (var i = 0; i < ctrl.$selecteds.length; i++) {
                    var selected = ctrl.$selecteds[i];

                    if (comparator(selected, element)) {
                        achou = i;
                        break;
                    }
                }

                if (achou !== undefined && !element.$selected) {
                    ctrl.$selecteds.splice(achou, 1);
                }

                if (achou === undefined && element.$selected) {
                    ctrl.$selecteds.push(toJSON(element));
                }
            }

        };

        this.onModelUpdated = function () {

            var i, j, comparator, selected, item;

            comparator = ctrl.comparator || comparatorDefault;

            for (i = 0; i < ctrl.$selecteds.length; i++) {

                selected = ctrl.$selecteds[i];

                for (j = 0; j < ctrl.zoomResultList.length; j++) {

                    item = ctrl.zoomResultList[j];

                    if (comparator(selected, item)) {
                        item.$selected = true;
                        break;
                    }
                }
            }

        };

        this.removeSelected = function (dataItem) {

            var data = toJSON(dataItem),
                comparator,
                i;

            comparator = ctrl.comparator || comparatorDefault;

            for (i = 0; i < ctrl.$selecteds.length; i++) {
                if (comparator(data, ctrl.$selecteds[i])) {
                    ctrl.$selecteds.splice(i, 1);
                    break;
                }
            }

            for (i = 0; i < ctrl.zoomResultList.length; i++) {

                var item = ctrl.zoomResultList[i];

                if (comparator(data, toJSON(item))) {
                    item.$selected = false;

                    break;
                }

            }

            ctrl.zoomGrid.dataSource.data(ctrl.zoomResultList);
        };

        this.removeAllSelected = function ($event) {

            $event.preventDefault();
            $event.stopPropagation();

            this.$selecteds = [];
            for (var i = 0; i < ctrl.zoomResultList.length; i++) {
                var item = ctrl.zoomResultList[i];
                item.$selected = false;
            }

            ctrl.zoomGrid.dataSource.data(ctrl.zoomResultList);
        };

        this.selectedAll = function ($event) {

            $event.preventDefault();
            $event.stopPropagation();

            var comparator = ctrl.comparator || comparatorDefault;

            for (var i = 0; i < ctrl.zoomResultList.length; i++) {
                var item = ctrl.zoomResultList[i];
                item.$selected = true;

                var achou = undefined;

                for (var j = 0; j < ctrl.$selecteds.length; j++) {
                    var selected = ctrl.$selecteds[j];

                    if (comparator(selected, item)) {
                        achou = j;
                        break;
                    }
                }

                if (achou === undefined) {
                    ctrl.$selecteds.push(toJSON(item));
                }
            }

            ctrl.zoomGrid.dataSource.data(ctrl.zoomResultList);

        };

        this.invertSelected = function ($event) {

            var j,item;

            $event.preventDefault();
            $event.stopPropagation();

            var comparator = ctrl.comparator || comparatorDefault;

            for (j = 0; j < ctrl.zoomResultList.length; j++) {

                item = ctrl.zoomResultList[j];

                item.$selected = !item.$selected;

                var achou = undefined;

                for (var i = 0; i < ctrl.$selecteds.length; i++) {
                    var selected = ctrl.$selecteds[i];

                    if (comparator(selected, item)) {
                        achou = i;
                        break;
                    }
                }

                if (achou !== undefined && !item.$selected) {
                    ctrl.$selecteds.splice(achou, 1);
                }

                if (achou === undefined && item.$selected) {
                    ctrl.$selecteds.push(toJSON(item));
                }
            }

            ctrl.zoomGrid.dataSource.data(ctrl.zoomResultList);
        };

        this.reloadSelectedGrid = function () {

            var definitions;

            ctrl.gridSelectedOptions = ctrl.gridSelectedOptions || {};

            definitions = angular.copy(ctrl.gridOptions.columnDefs);

            ctrl.gridSelectedOptions.columnDefs = definitions;

        };

        this.loadSelectedGrid = function (previousselect) {

            if (previousselect) {
                if (previousselect.objSelected) {
                    this.$selecteds = angular.copy(previousselect.objSelected);
                } else {
                    this.$selecteds = [previousselect];
                }
            }

            this.reloadSelectedGrid();
        };

        this.initializeMultiple = function (parent, $scope, previousselect) {

            ctrl = parent;
            this.loadSelectedGrid(previousselect);

            ctrl.isSelectedAllEnabled = true;

            //if (ctrl.selectAll !== true) {
            //    ctrl.isSelectedAllEnabled = false;
            //}
        };

        this.getSelecteds = function () {
            if (ctrl.$selecteds && ctrl.$selecteds.length > 0) {

                return new MultipleSelectResult(angular.copy(ctrl.$selecteds),
                                                angular.copy(ctrl.$selecteds.length),
                                                i18nFilter);

            } else {

                return undefined;

            }
        };

        this.revertOnCancel = function (previousselect) {
            if (previousselect && previousselect.objSelected) {
                ctrl.$selecteds = angular.copy(previousselect.objSelected);
            }
        };

        return this;

    }

    function MultipleSelectResult(objs, size, i18n) {
        this.objSelected = objs;
        this.size = size;
        this.i18nFilter = i18n;
    }

    MultipleSelectResult.prototype.toString = function () {

        if (this.objSelected) {

            return this.objSelected.length + ' - ' + this.i18nFilter ? this.i18nFilter('l-selecteds') : 'selected';

        } else {

            return this;

        }

    };

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

(function () {
    'use strict';

    // Configurações do módulo 'duScroll'.
    angular
        .module('totvsExecution')
        .value('duScrollGreedy', true)
        .value('duScrollBottomSpy', true);

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsExecution
* @name TotvsExecutionController
* @object controller
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsExecution')
        .controller('TotvsExecutionController', TotvsExecutionController);

    TotvsExecutionController.$inject = ['$element', '$timeout'];

    function TotvsExecutionController($element, $timeout) {

        $.fn.hasScrollBar = function () {
            if (this.get(0).scrollHeight > this.height() + 30) {
                $('#div-execution-navigation').get(0).style.display = 'block';
                $('#div-execution-content').removeClass('col-lg-12 col-md-12').addClass('col-lg-9 col-md-9');
            } else {
                $('#div-execution-navigation').get(0).style.display = 'none';
                $('#div-execution-content').removeClass('col-lg-9 col-md-9').addClass('col-lg-12 col-md-12');
            }
        };

        $timeout(function () {
            $element.find('.page-execution-navigation').affix({
                offset: {top: 130},
                target: angular.element('.page-wrapper')
            }).on('affixed.bs.affix', function (e) {
                e.currentTarget.style.marginTop = '-130px';
            }).on('affixed-top.bs.affix', function (e) {
                e.currentTarget.style.marginTop = '0';
            });

            $('.container-fluid').hasScrollBar();
        }, 500);

        $(window).resize(function () {
            $('.container-fluid').hasScrollBar();
        });

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsGrid
* @name TotvsGridController
* @object controller
*
* @created 24/08/2016 v12.1.12
* @updated 24/08/2016 v12.1.12
*
* @requires totvsGrid.module
*
* @dependencies
*
* @description Controller da diretiva totvs-grid
*
* @see TDN http://tdn.totvs.com/display/THF/totvs+grid
*/

(function () {

    'use strict';

    angular
        .module('totvsGrid')
        .controller('TotvsGridController', TotvsGridController);

    TotvsGridController.$inject = ['$scope', '$timeout', '$filter', '$parse', '$compile',
                                   '$locale', '$injector', '$log', '$window', 'TotvsUtilsKendoService'];

    function TotvsGridController(scope, $timeout, $filter, $parse, $compile,
                                  $locale, $injector, $log, $window, TotvsUtilsKendoService) {

        var controller = this;

        controller.detailHTML = undefined;
        controller.detailHTMLsize = undefined;
        controller.columns = [];
        controller.groups = [];

        controller.addColumn = function (column) {

            controller.columns.push(column);

        };

        controller.addGroup = function (group) {

            group.field = controller.getFieldName(group.field);
            controller.groups.push(group);

        };

        controller.columnResize = function (event) {

            var col = event.column,
                width = event.newWidth,
                options, i;

            if (col.maxWidth && width > col.maxWidth) {
                options = controller.grid.getOptions();
                for (i = 0; i < options.columns.length; i++) {
                    if (options.columns[i].field === col.field) {
                        options.columns[i].width = col.maxWidth;
                    }
                }
                controller.grid.reorderColumn(1, controller.grid.columns[0]);
            }
            if (col.minWidth && width < col.minWidth) {
                options = angular.extend({},controller.grid.getOptions());
                for (i = 0; i < options.columns.length; i++) {
                    if (options.columns[i].field === col.field) {
                        options.columns[i].width = col.minWidth;
                    }
                }
                controller.grid.reorderColumn(1, controller.grid.columns[0]);
            }

        };

        controller.onChange = function (event) {

            var grid = controller.grid,
                selectedRows = grid.select();

            $timeout(function () {

                setSelection(grid, selectedRows);

                scope.onChange({ event: event });

            });

        };

        function isLockedContent(lockedContent, selectedRow) {

            var locked = false;

            if (lockedContent) {
                locked = $.contains(lockedContent[0], selectedRow);
            }

            return locked;

        }

        function setSelection(grid, selectedRows) {

            var usecheckbox = controller.attrs.addSelectColumn === '',
                separate = controller.attrs.addSelectColumn === 'separate';

            if (usecheckbox) {

                var data = grid.dataSource.data();

                for (var index = 0; index < data.length; index++) {
                    data[index].$selected = false;

                    if (index < controller.currentdata.length) {
                        controller.currentdata[index].$selected = false;
                    }
                }

            }

            // somente se o método de seleção selecionado NÃO for por célula,
            // adiciona o item à lista de selecionados e marca o checkbox.
            if (!separate) {

                var gridSelectedItems = [];

                for (var i = 0; i < selectedRows.length; i++) {

                    // quando o grid tem colunas fixadas, o selectedRows retorna com os itens duplicados.
                    // um para a parte locked e outro para a parte normal.
                    if (!isLockedContent(grid.lockedContent, selectedRows[i]) && isRow(selectedRows[i])) {

                        var item = grid.dataItem(selectedRows[i]);

                        if (usecheckbox) {

                            item.$selected = true;

                            var current = grid.dataSource.indexOf(item);

                            if (i < controller.currentdata.length) {
                                controller.currentdata[current].$selected = true;
                            }

                        }

                        gridSelectedItems.push(item);
                    }
                }

                controller.updateSelection(gridSelectedItems);

            }

        }

        function isRow(item) {

            return ($(item, item).is('tr'));

        }

        controller.setupCheckEvent = function () {

            var grid = controller.grid;

            if (controller.attrs.addSelectColumn === 'separate') {

                $(grid.lockedContent).on('click', 'td', function () {

                    setCheckBoxColumn($(this));

                });

                $(grid.lockedContent).on('keydown', function (e) {

                    var isEnterKey = 13 === (e.keyCode ? e.keyCode : e.which),
                        isInLockedCell = $.contains(grid.lockedContent[0], grid.current()[0]);

                    // somente se é ENTER na celula locked
                    if (isEnterKey && isInLockedCell) {

                        setCheckBoxColumn($(grid.current()));

                        // why is this event fired only when using the keyboard?
                        scope.onChange({ event: undefined });

                    }

                });

            }

        };

        function setCheckBoxColumn(current) {

            var grid = controller.grid,
                row = current.closest('tr'),
                colIdx = $('td', row).index(current),
                column = grid.columns[colIdx];

            // if is the column that contains the default checkbox.
            if (column.column === '$selected') {

                var dataItem = grid.dataItem(row);

                dataItem.$selected = !dataItem.$selected;
                controller.selectIndex(dataItem);

            }

        }

        controller.updateSelection = function (gridSelectedItems) {

            // tratamento ag-grid
            if (scope.gridOptions) {
                scope.gridOptions.selectedRows = gridSelectedItems;
                if (scope.gridOptions.selectionChanged) {
                    scope.gridOptions.selectionChanged();
                }
            }

            if (controller.attrs.gridSelectedItems !== undefined) {
                scope.gridSelectedItems = gridSelectedItems;
            }

            if (controller.attrs.gridSelectedItem !== undefined) {
                scope.gridSelectedItem = gridSelectedItems.length === 1 ? gridSelectedItems[0] : undefined;
            }

        };

        controller.selectIndex = function (dataItem) {

            var grid = controller.grid,
                updategrid = controller.attrs.addSelectColumn === '',
                multiple = controller.grid.options.selectable.indexOf('multiple') >= 0,
                data = grid.dataSource.data(),
                selected = [],
                isselected = dataItem.$selected,
                items,
                gridSelectedItems = [];

            for (var index = 0; index < data.length; index++) {

                if ((multiple || data[index] === dataItem) && data[index].$selected) {

                    gridSelectedItems.push(data[index]);

                } else {

                    data[index].$selected = false;
                    controller.currentdata[index].$selected = false;

                }

            }

            var current = grid.dataSource.indexOf(dataItem);

            dataItem.$selected = isselected;
            controller.currentdata[current].$selected = isselected;

            if (updategrid) {
                items = controller.grid.items();
                items.each(function (idx, row) {
                    var obj = controller.grid.dataItem(row);
                    if (obj.$selected) {
                        selected.push(row);
                    }
                });
            }

            if (updategrid) {

                controller.grid.clearSelection();

                if (selected.length) {
                    controller.grid.select(selected);
                }

            } else {

                $timeout(function () {
                    controller.updateSelection(gridSelectedItems);
                });

            }

        };

        controller.onEdit = function (event) {

            var grid = controller.grid,
                index = event.container.index();

            if (controller.detailHTML !== undefined) {
                index--;
            }

            index = index - grid.dataSource.group().length;
            if (controller.grid.lockedContent && !$.contains(controller.grid.lockedContent[0], event.container[0])) {
                for (var i = 0; i < grid.columns.length; i++) {
                    var element = grid.columns[i];
                    if (element.locked) {
                        index++;
                    }
                }
            }

            var column = grid.columns[index];
            if (scope.editable && column.editable) {

                scope.onEdit({ event: event, column: column });

            } else {

                if (column.column === '$selected' && scope.addSelectColumn === 'separate') {
                    var dataItem = event.model;
                    dataItem.$selected = !dataItem.$selected;
                    controller.selectIndex(dataItem);
                }

                grid.closeCell();
                grid.table.focus();

            }

        };

        controller.onSave = function (event) {

            var grid = controller.grid,
                index = event.container.index();

            if (controller.detailHTML !== undefined) {
                index--;
            }

            index = index - grid.dataSource.group().length;

            if (controller.grid.lockedContent &&
                !$.contains(controller.grid.lockedContent[0], event.container[0])) {

                for (var i = 0; i < grid.columns.length; i++) {
                    if (grid.columns[i].locked) {
                        index++;
                    }
                }

            }

            var column = grid.columns[index],
                value = event.values[column.field];

            // ajuste para eveitar a chamada incorreta da alteração do campo  por eventos
            // CHANGE gerados por outras ações senão o grid, por exemplo o totvs-select
            if (!event.values.hasOwnProperty(column.field)) {
                return;
            }

            var current = grid.dataSource.indexOf(event.model),
                original = controller.currentdata[current],
                selected = grid.select();

            // se não mudou o valor, não chama o evento.
            // novamente o totvs-select dispara o CHANGE
            if (original[column.column] === value) {
                return;
            }

            scope.onSave({
                event: event, // evento do grid
                column: column, // coluna que foi editada
                value: value, // valor informado pelo usuario
                currentIndex: current, // index do array original
                original: original // referencia ao objeto do array original, sem modificação
            });

            if (!event.isDefaultPrevented()) {
                // copia valor editado para o objeto original
                // se começar com '[' assumimos que o fieldname é um identificador válido
                // e não precisa de ponto para acessar o atributo do objeto.
                var ponto = '.';
                if (/^\[(.*)/.test(column.field)) {
                    ponto = '';
                }

                var parse = $parse('obj' + ponto + column.field);
                parse.assign({ obj: original}, value);
            }

            grid.select(selected);

        };

        controller.detailInit = function () {

            if (controller.detailHTML !== undefined) {

                return function (event) {

                    var el = angular.element('<div>' + controller.detailHTML + '</div>'),
                        nscope = scope.$parent.$new(),
                        compiledHtml;

                    el.data('$injector', $injector);

                    nscope.dataItem = event.data.toJSON();
                    nscope.model = event.data;

                    compiledHtml = $compile(el)(nscope);

                    if (controller.detailHTMLsize === 'table') {
                        var resize = function () {
                            el.width(
                                event.detailCell.closest('.k-grid').children('.k-grid-header').width() +
                                event.detailCell.width() -
                                event.detailCell.innerWidth()
                            );

                            el.css('margin-left', -event.detailCell.prev('.k-hierarchy-cell').outerWidth());
                        },
                        scroll = function () {
                            el.css('padding-left', event.sender.content.scrollLeft());
                        };

                        resize();

                        event.sender.content.scroll(scroll);

                        $(window).resize(resize);

                        el.bind('$destroy', function () {
                            event.sender.content.off('scroll', scroll);
                            $(window).off('resize', resize);
                        });
                    }

                    $timeout(function () {
                        compiledHtml.appendTo(event.detailCell);
                    });
                };

            }

        };

        controller.createTemplateFilter = function (column) {

            return function (dataItem) {
                var ns = scope.$new();
                ns.dataItem = dataItem.toJSON ? dataItem.toJSON() : dataItem;
                var value = $parse('dataItem' + column.field)(ns);

                if (value == null || value === undefined) {
                    return '';
                }

                var filter = $filter(column.filter),
                    p0,p1,p2;

                if (column.filterParams.length > 0) {
                    p0 = column.filterParams[0].trim();
                }

                if (column.filterParams.length > 1) {
                    p1 = column.filterParams[1].trim();
                }

                if (column.filterParams.length > 2) {
                    p2 = column.filterParams[2].trim();
                }

                return filter(value,p0,p1,p2);
            };

        };

        controller.createTemplateOptions = function (column) {

            return function (dataItem) {
                var ns = scope.$new();
                ns.dataItem = dataItem.toJSON ? dataItem.toJSON() : dataItem;
                var value = $parse('dataItem' + column.field)(ns);

                return column.options[value];
            };

        };

        controller.createTemplateColumnEditor = function (column) {

            return function (container, options) {
                var input = angular.element(column.editorTemplate);
                //var field = 'dataItem' + options.field;
                input.attr('name', options.field);
                input.attr('ng-model', 'data.value');
                input.addClass('k-input');

                if (input[0].nodeName === 'INPUT') {
                    input.addClass('k-textbox');
                }

                var newscope = scope.$parent.$new();
                newscope.dataItem = options.model.toJSON();
                newscope.model = options.model;
                newscope.data = {value : options.model.get(options.field)};
                input = $compile(input)(newscope);
                input.appendTo(container);

                var unwatch = newscope.$watch('data.value', function (value, value2) {
                    if (value !== value2) {
                        options.model.set(options.field, value);
                    }
                });

                // ao eliminar o editor, retira o watcher
                input.bind('$destroy', function () {
                    unwatch();
                });
            };

        };

        controller.createOptionsColumnEditor = function (column) {

            return function (container) {

                var input = angular.element('<input></input>');
                input.attr('data-bind', 'value:' + column.field);
                input.appendTo(container);
                var opts = [];

                for (var k in column.options) {
                    if (column.options.hasOwnProperty(k)) {
                        opts.push({ id: k, name: column.options[k] });
                    }
                }

                input.kendoDropDownList({
                    dataValueField: 'id',
                    dataTextField: 'name',
                    dataSource: opts
                });

            };

        };

        controller.createSelectColumnEditor = function (column) {

            return function (container, options) {
                var input = angular.element('<input></input>');
                input.appendTo(container);

                var service = $injector.get(column.selectService),
                    combobox,
                    fields = {};

                fields['["' + column.selectId + '"]'] = {};

                if (column.selectDescription) {
                    fields['["' + column.selectDescription + '"]'] = {};
                }

                var datasourcetransport = {
                    read: function (e) {

                        var promise;

                        if (e.data.filter) {

                            var value = '';

                            if (e.data.filter.filters && e.data.filter.filters.length > 0) {
                                value = e.data.filter.filters[0].value;
                            }

                            var filter = { property : column.selectDescription || column.selectId };

                            promise = service.applyFilter({
                                init: column.selectInit ? column.selectInit() : undefined,
                                disclaimers: [{ property : filter.property, value : value }],
                                selectedFilter: filter,
                                selectedFilterValue: value,
                                more: false,
                                isAdvanced: false,
                                isSelectValue: true
                            });

                            if (promise && promise.then) {
                                promise.then(function (data) {
                                    e.success(data);
                                    //combobox.select(0);
                                });
                            } else {
                                e.error();
                            }

                        } else {

                            promise = service.getObjectFromValue(
                                options.model[column.column],
                                column.selectInit ? column.selectInit() : undefined);

                            if (promise && promise.then) {
                                promise.then(function (data) {
                                    //e.success(data.toJSON ? [data.toJSON()] : data);
                                    e.success(data);
                                });
                            } else {
                                e.error();
                            }

                        }
                    }
                },
                opts = {
                    autoBind: false,
                    clearButton: false,
                    dataValueField: '["' + column.selectId + '"]',
                    dataTextField: '["' + column.selectId + '"]',
                    filter: 'custom',
                    change: function () {
                        if (combobox.dataSource.get(combobox.value())) {
                            options.model.set(column.field, combobox.value());
                            combobox.text(combobox.value());
                        }
                    },
                    dataSource: new kendo.data.DataSource({
                        serverFiltering: true,
                        schema: {
                            model: {
                                id: '["' + column.selectId + '"]',
                                fields: fields
                            }
                        },
                        transport: datasourcetransport
                    })
                };

                if (column.selectDescription) {
                    opts.dataTextField = '["' + column.selectDescription + '"]';
                    opts.template = '<span>#: data["' + column.selectId + '"] # - #: data["' +
                        column.selectDescription + '"] #</span>';
                }

                input.kendoComboBox(opts);
                combobox = input.data('kendoComboBox');
                combobox.text(options.model[column.column]);
            };

        };

        controller.createBooleanColumnEditor = function (column) {

            return function (container) {
                var input = angular.element('<input type="checkbox"></input>');
                input.attr('data-bind', 'checked:' + column.field);
                input.appendTo(container);
            };

        };

        controller.createCurrencyColumnEditor = function (column) {

            return function (container) {
                var input = angular.element('<input type="number"></input>');
                input.attr('data-bind', 'value:' + column.field);
                input.appendTo(container);
                var opts = {
                    format: 'c',
                    spinners: false
                };

                if (column.filterParams.length > 1 && column.filterParams[1]) {
                    opts.decimals = column.filterParams[1].trim();
                }

                input.kendoNumericTextBox(opts);
            };

        };

        controller.createDecimalColumnEditor = function (column) {

            return function (container) {
                var input = angular.element('<input type="number"></input>');
                input.attr('data-bind', 'value:' + column.field);
                input.appendTo(container);
                var opts = {
                    format: 'n',
                    spinners: false
                };

                if (column.filterParams.length > 0 && column.filterParams[0]) {
                    opts.decimals = column.filterParams[0].trim();
                }

                input.kendoNumericTextBox(opts);
            };

        };

        controller.getKendoDateFormat = function (angularformat) {

            return TotvsUtilsKendoService.getKendoDateFormat(angularformat);

        };

        controller.createDateColumnEditor = function (column) {

            return function (container, options) {
                var opts = {};
                if (column.filterParams.length > 0 && column.filterParams[0]) {
                    opts.format = controller.getKendoDateFormat(column.filterParams[0].trim());
                }

                var dt = options.model[column.column];

                if (typeof dt === 'number') {
                    options.model[column.column] = new Date(dt);
                }

                var input = angular.element('<input></input>');
                input.attr('data-bind', 'value:' + column.field);
                input.appendTo(container);
                input.kendoDatePicker(opts);
            };

        };

        controller.createFooterTemplate = function (column) {

            return function (data) {
                var i18n = $filter('i18n'),
                    str = '',
                    totals = column.totals.split(',');

                for (var t = 0; t < totals.length; t++) {

                    if (t > 0) {
                        str = str + '<br>';
                    }

                    if (totals.length > 1) {
                        str = str + i18n('l-total-' + totals[t]) + ': ';
                    }

                    if (totals[t] === 'count') {
                        str = str + data[column.field][totals[t]];
                    } else {
                        var obj = {};
                        obj[column.column] = data[column.field][totals[t]];
                        str = str + column.template(obj);
                    }

                }
                return str;
            };

        };

        controller.createHeaderTemplate = function (column) {

            return function (data) {

                var str = column.title + ': ',
                    obj = {};

                obj[column.column] = data.value;

                if (angular.isFunction(column.template)) {
                    str = str + column.template(obj);
                } else if (angular.isString(column.template)) {
                    var template = kendo.template(column.template);
                    str = str + template({data:obj});
                } else {
                    str = str + data.value;
                }

                return str;

            };

        };

        // o kendo gera um getter/setter usando um objeto Function,
        // porem campos que tenham "-" quebram a execução, por isso precisa ser colocado
        // o [" e "] em torno do nome do campo
        controller.getFieldName = function (fieldname) {

            // se começar com '[' assumimos que o fieldname é um identificador válido
            if (/^\[(.*)/.test(fieldname)) {
                return fieldname;
            }

            return '[\"' + fieldname + '\"]';

        };

        controller.getColumns = function () {

            var i18n = $filter('i18n'),
                columns = [],
                column;

            if (controller.columns.length) {

                if (controller.attrs.addSelectColumn !== undefined) {

                    column = {
                        column: '$selected',
                        field: '$selected',
                        editable: false,
                        locked: true,
                        lockable: false,
                        width: 40,
                        title: i18n('Sel'),
                        attributes: { style: 'text-align: center;'},
                        template:   '<span class="glyphicon" ' +
                                        'ng-class="{\'glyphicon-check\':dataItem.$selected, ' +
                                                    '\'glyphicon-unchecked\':!dataItem.$selected}" ' +
                                        'aria-hidden="true">' +
                                    '</span>'
                    };

                    columns.push(column);
                }

                controller.fields = {};
                controller.aggregates = [];

                for (var i = 0; i < controller.columns.length; i++) {

                    column = controller.columns[i];

                    controller.fields[column.field] = { editable: column.editable };

                    if (!column.template) {

                        if (column.filter) {
                            column.template = controller.createTemplateFilter(column);
                        }

                        if (column.options) {
                            column.template = controller.createTemplateOptions(column);
                        }

                    }

                    if (!column.groupHeaderTemplate && column.template) {
                        column.groupHeaderTemplate = controller.createHeaderTemplate(column);
                    }

                    if (column.editable && column.editorTemplate) {
                        column.editor = controller.createTemplateColumnEditor(column);
                    }

                    if (column.editable && !column.editorTemplate && !column.editor) {
                        // cria um combobox com as opções
                        if (column.options) {
                            column.editor = controller.createOptionsColumnEditor(column);
                        }
                        // cria editor com select
                        else if (column.selectId && column.selectService) {
                            column.editor = controller.createSelectColumnEditor(column);
                        }
                        // cria editor baseado no filtro
                        else if (column.filter) {
                            if (column.filter === 'booleanI18N') {
                                column.editor = controller.createBooleanColumnEditor(column);
                            }

                            if (column.filter === 'currency') {
                                column.editor = controller.createCurrencyColumnEditor(column);
                            }

                            if (column.filter === 'number') {
                                column.editor = controller.createDecimalColumnEditor(column);
                            }

                            if (column.filter === 'date') {
                                column.editor = controller.createDateColumnEditor(column);
                            }
                        }
                    }

                    if (!column.headerTemplate && column.editable) {

                        // troca ' por /'  -  column.field.replace(/'/g, '\\\'')

                        column.headerTemplate =
                            '<span ng-if="showHeaderEditIcon(\'' + column.field.replace(/'/g, '\\\'') + '\')" ' +
                                'class="glyphicon glyphicon-edit" style="font-size: x-small;" ' +
                                'aria-hidden="true">&nbsp;</span>' + column.title;

                    }

                    column.field = controller.getFieldName(column.field);

                    if (column.totals) {

                        var totals = column.totals.split(',');
                        for (var t = 0; t < totals.length; t++) {
                            controller.aggregates.push({
                                field: column.field,
                                aggregate: totals[t]
                            });
                        }
                        if (totals.length > 0) {
                            column.footerTemplate = controller.createFooterTemplate(column);
                            column.footerAttributes = column.attributes;
                        }
                    }

                    columns.push(column);
                }
            }

            return columns;
        };

        controller.getDataSource = function () {

            var dataSource = {
                change: function (event) {

                    var element;

                    if (event.action === 'add') {
                        for (var index = 0; index < event.items.length; index++) {
                            element = event.items[index];
                            controller.currentdata.splice(event.index + index, 1, element.toJSON());
                        }
                    }

                    var ds = event.sender,
                        groups = angular.copy(ds.group()),
                        change = false;

                    for (var i = 0; i < groups.length; i++) {
                        var field = groups[i].field;

                        if (!ds.options.schema.model.fields.hasOwnProperty(field)) {
                            if (field.indexOf('\'') >= 0) {
                                groups[i].field = field.replace(/'/g, '\"');
                                change = true;
                            }
                        }
                    }

                    if (change) {
                        ds.group(groups);
                    }

                    if (controller.attrs.gridDirtyItems !== undefined) {
                        var griddata = ds.data();

                        $timeout(function () {
                            scope.gridDirtyItems = [];
                            for (var i = 0; i < griddata.length; i++) {
                                if (griddata[i].dirty) {
                                    scope.gridDirtyItems.push(griddata[i]);
                                }
                            }
                        });
                    }
                },
                group: controller.groups
            };

            if (controller.fields) {
                dataSource.schema = {
                    model: {
                        fields: controller.fields // permite que a propriedade dirty seja controlada no datasource.
                    }
                };
            }

            if (controller.aggregates && controller.aggregates.length > 0) {
                dataSource.aggregate = controller.aggregates;
            }

            return new kendo.data.DataSource(dataSource);

        };

        controller.setData = function (data) {

            controller.currentdata = data;

            scope.onData({ data: data });

            controller.grid.dataSource.data(data);

            // não deve ser chamado se o grid não estiver na tela.
            // será chamado depois em um evento resize
            if (!$(controller.element).is(':visible')) {
                return;
            }

            if (data && data.length > 0 &&
                ((scope.autoResizeColumn === 'true' && !controller.started) || scope.autoResizeColumn === 'always')) {
                controller.started = true;
                for (var i = 0; i < controller.grid.columns.length; i++) {
                    controller.grid.autoFitColumn(i);
                }
            }

            // resize automatico
            if ((scope.autoResizeContent || 'true') === 'true' && controller.resizeEvent) {
                controller.resizeEvent();
                $timeout(controller.resizeEvent);
            }

        };

        controller.createValueGetterFunctionTemplate = function (cdef) {
            return function (dataItem) {
                return cdef.valueGetter({ data: dataItem });
            };
        };

        controller.createValueGetterStringTemplate = function (cdef) {
            var getter = $parse(cdef.valueGetter);
            return function (dataItem) {
                return getter({ data: dataItem });
            };
        };

        controller.trataGridOptions = function (gridOptions) {

            if (gridOptions && gridOptions.columnDefs) {
                $log.warn('Deprecated: gridOptions.columnDefs use gridOptions.columns');

                var columnDefs = gridOptions.columnDefs;

                for (var i = 0; i < columnDefs.length; i++) {
                    var cdef = columnDefs[i],
                        col = {
                            title: cdef.headerName,
                            width: cdef.width ? parseInt(cdef.width) : undefined,
                            minWidth: cdef.minWidth ? parseInt(cdef.minWidth) : undefined,
                            maxWidth: cdef.maxWidth ? parseInt(cdef.maxWidth) : undefined,
                            field: cdef.field,
                            column: cdef.field,
                            lockable: true
                        };

                    if (angular.isFunction(cdef.valueGetter)) {
                        col.template = controller.createValueGetterFunctionTemplate(cdef);
                    }

                    if (angular.isString(cdef.valueGetter)) {
                        col.template = controller.createValueGetterStringTemplate(cdef);
                    }

                    controller.addColumn(col);
                }

                delete gridOptions.columnDefs;
            }

            if (gridOptions.hasOwnProperty('enableColResize')) {
                $log.warn('Deprecated: gridOptions.enableColResize use gridOptions.resizable');
                gridOptions.resizable = gridOptions.enableColResize;
                delete gridOptions.enableColResize;
            }

            if (gridOptions.hasOwnProperty('enableSorting')) {
                $log.warn('Deprecated: gridOptions.enableSorting use gridOptions.sortable');
                gridOptions.sortable = gridOptions.enableSorting;
                delete gridOptions.enableSorting;
            }

            if (gridOptions.hasOwnProperty('rowSelection')) {
                $log.warn('Deprecated: gridOptions.rowSelection use gridOptions.selectable');

                if (gridOptions.rowSelection === 'single') {
                    gridOptions.selectable = 'single, row';
                }

                if (gridOptions.rowSelection === 'multiple') {
                    gridOptions.selectable = 'multiple, row';
                }

                delete gridOptions.rowSelection;
            }
        };

        controller.doResize = function (element) {

            var wrapper = element.parents('div.page-wrapper'),
                resizeOnList,
                resizeEvent;
            //var parent = element.parent();

            wrapper.css('min-height', '100%');

            resizeOnList = function () {

                // não deve ser chamado se o grid não estiver na tela.
                // se necessário chamar manualmente: $(window).trigger('resize');
                if (!$(element).is(':visible')) {
                    return;
                }

                controller.grid.resize();

                var scroll = 0;

                $(element).parents().each(function () {
                    if (this.scrollHeight === this.clientHeight || this.clientHeight === 0) {
                        return;
                    }

                    scroll = scroll + this.scrollHeight - this.clientHeight;
                });

                var size = wrapper.height() + element.height() - scroll;

                wrapper.children().each(function () {
                    size = size - $(this).height();
                });

                // se tiver grid-height, utiliza esse como tamanho minimo
                if (!isNaN(scope.gridHeight)) {
                    var height = parseInt(scope.gridHeight);
                    size = size < height ? height : size;
                }

                if (size < 40) {
                    return;
                }

                element.height(size - 1); // não sei de onde vem esse 1!!?!?!?!?!

                controller.grid.resize(true);

                if (scope.autoResizeColumn === 'true' &&
                    controller.grid.dataSource.total() > 0 &&
                    !controller.started) {

                    for (var i = 0; i < controller.grid.columns.length; i++) {
                        controller.grid.autoFitColumn(i);
                    }

                }

            };

            resizeEvent = function () {

                $timeout(function () {
                    resizeOnList();

                    // faz a segunda vez por causa do IE.
                    // o IE so dispara  no resize da janela fisica, o chrome e FF
                    // disparam quando o conteudo da janela tem resize (inclui quando
                    // os parametros de scrool mudam)
                    if ($window.navigator.userAgent.indexOf('MSIE') > 0 ||
                        $window.navigator.userAgent.indexOf('Trident') > 0) {
                        resizeOnList();
                    }

                });

            };

            // adiciona listener para redimencionar quando a window for redimensionada
            $(window).on('resize',resizeEvent);

            // remove o listener para evitar memory leak.
            scope.$on('$destroy', function () {
                $(window).off('resize', resizeEvent);
            });

            $timeout(function () {

                resizeEvent();

                controller.resizeEvent = function () {
                    $timeout(resizeOnList);
                };

            },50);

        };

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsSchedule
* @name totvsScheduleController
* @object controller
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsSchedule')
        .controller('TotvsScheduleController', TotvsScheduleController);

    TotvsScheduleController.$inject = [
        '$modalInstance',
        '$rootScope',
        '$filter',
        'config',
        'TOTVSEvent'
    ];

    function TotvsScheduleController($modalInstance, $rootScope, $filter, config, TOTVSEvent) {

        var self = this;

        self.config = config;
        self.repeatCycleItems = [];
        self.changeRepeatCycle = changeRepeatCycle;
        self.save = save;
        self.close = close;
        self.config.repeatTime = self.config.repeatTime || self.config.time;

        init();

        function init() {
            changeRepeatCycle(self.config.repeatType, false);
        }

        function save() {
            if (fnValidateConfig()) {
                $modalInstance.close();
            }
        }

        function close() {
            $modalInstance.dismiss();
        }

        function changeRepeatCycle(repeatType, reload) {
            var count,
                fnUpdateItems;

            fnUpdateItems = function (length, description) {
                self.repeatCycleItems = new Array(0);

                for (count = 0; count < length; count++) {
                    self.repeatCycleItems[count] = {
                        index: count + 1,
                        description: (count + 1) + ' ' + ((count === 0) ? description[0] : description[1])
                    };
                }
            };

            if (repeatType === 'D') {
                fnUpdateItems(29, [$filter('i18n')('l-day'), $filter('i18n')('l-days')]);
            } else if (repeatType === 'W') {
                fnUpdateItems(29, [$filter('i18n')('l-week'), $filter('i18n')('l-weeks')]);
            } else if (repeatType === 'M') {
                fnUpdateItems(12, [$filter('i18n')('l-month'), $filter('i18n')('l-months')]);
            }

            if (reload) {
                self.config.repeatCycle = 1;
                self.config.repeatWeekDays = {};
                self.config.repeatMonthDay = {'day': 1, last: 'false'};
            }
        }

        function fnValidateConfig() {
            var error = false;

            if (!self.config.repeatTime) {
                $rootScope.$broadcast(TOTVSEvent.showNotification, {
                    type: 'error',
                    detail: $filter('i18n')('l-msg-select-time-executions')
                });

                error = true;
            }

            if (self.config.repeatType === 'W') {
                if (!self.config.repeatWeekDays.sunday && !self.config.repeatWeekDays.monday &&
                        !self.config.repeatWeekDays.tuesday && !self.config.repeatWeekDays.wednesday &&
                        !self.config.repeatWeekDays.thursday && !self.config.repeatWeekDays.friday &&
                        !self.config.repeatWeekDays.saturday) {
                    $rootScope.$broadcast(TOTVSEvent.showNotification, {
                        type: 'error',
                        detail: $filter('i18n')('l-msg-select-least-one-day-for-executions')
                    });

                    error = true;
                }
            }

            if (self.config.repeatFinish === 'DATE') {
                if (!self.config.repeatFinishDate) {
                    $rootScope.$broadcast(TOTVSEvent.showNotification, {
                        type: 'error',
                        detail: $filter('i18n')('l-msg-select-date-end-executions')
                    });

                    error = true;
                } else if (self.config.repeatFinishDate < new Date()) {
                    $rootScope.$broadcast(TOTVSEvent.showNotification, {
                        type: 'error',
                        detail: $filter('i18n')('l-msg-select-date-greater-than-current-date-end-executions')
                    });

                    error = true;
                }
            }

            return !error;
        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabset
* @name TotvsTabsetController
* @object controller
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-tabset.module
*
* @dependencies
*
* @description TotvsTabsetController
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Tabset
*/

(function () {

    'use strict';

    angular
        .module('totvsTabset')
        .controller('TotvsTabsetController', TotvsTabsetController);

    TotvsTabsetController.$inject = ['$scope'];

    function TotvsTabsetController($scope) {

        var ctrl,
            tabs,
            destroyed;

        ctrl = this;
        tabs = ctrl.tabs = $scope.tabs = [];

        ctrl.select = function (selectedTab) {

            var i,
                tab;

            for (i = 0; i < tabs.length; i++) {
                tab = tabs[i];
                if (tab.active && tab !== selectedTab) {
                    tab.active = false;
                    if (selectedTab.onDeselect) {
                        tab.onDeselect();
                    }
                }
            }

            selectedTab.active = true;

            if (selectedTab.onSelect) {
                selectedTab.onSelect();
            }
        };

        ctrl.addTab = function (tab) {

            tabs.push(tab);

            if (tabs.length === 1) {
                tab.active = true;
            } else if (tab.active) {
                ctrl.select(tab);
            }
        };

        ctrl.removeTab = function (tab) {

            var index,
                newActiveIndex;

            index = tabs.indexOf(tab);

            if (tab.active && tabs.length > 1 && !destroyed) {
                newActiveIndex = index === tabs.length - 1 ? index - 1 : index + 1;
                ctrl.select(tabs[newActiveIndex]);
            }

            tabs.splice(index, 1);
        };

        $scope.$on('$destroy', function () {
            destroyed = true;
        });

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module zoom
* @name zoomController
* @object controller
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires
*
* @dependencies
*
* @description
*
* @see TDN http://tdn.totvs.com/display/THF/zoom
*/

(function () {

    'use strict';

    angular
        .module('zoom')
        .controller('zoomController', ZoomController);

    ZoomController.$inject = [
        '$modalInstance', '$injector', 'i18nFilter', '$scope', '$window', '$nestable',
        'zoomoptions', 'zoomcallback', 'zoominit', 'zoomid', 'zoommultiple', 'zoomalertmessage',
        'previousselect', '$timeout', 'totvs.app-notification.Service'
    ];

    function ZoomController(
        $modalInstance, $injector, i18nFilter, $scope, $window, $nestable,
        zoomoptions, zoomcallback, zoominit, zoomid, zoommultiple, zoomalertmessage,
        previousselect, $timeout, appNotificationService) {

        var ctrl = this,
            service,
            mobileOrientation = window.matchMedia('(orientation: portrait)');

        this.propertyFields = [];

        this.resultTotal = 0;
        this.zoomResultList = [];

        this.isConfigurationOpen = false;
        this.isConfigurationLocal = true;
        this.isConfigurationEnabled = false;

        this.isAdvancedSearchOpen = false;
        this.isAdvancedSearchEnabled = false;

        this.localStorageGroup = 'com.totvs.html.framework.zoom.config.';
        this.isLocalStorageAvaiable = ($window.localStorage !== undefined);

        this.isMultiple = (zoommultiple === true);

        this.isOpenFoundPanel = true;
        this.isOpenSelectedPanel = false;

        service = $injector.get(zoomoptions);
        angular.extend(this, service);

        if (this.isSelectValue) {
            this.zoomResultList = [];
        }

        $modalInstance.refreshGrids = function () {

            ctrl.refreshGrids();

        };

        //$modalInstance.resizeZoomContainer = function (size) {
        //
        //    ctrl.resizeZoomContainer(size);
        //
        //};

        mobileOrientation.addListener(function (m) {
            if (m.matches) {
                $('div.modal-body-zoom').css('width', '');
                $('div.modal-body-zoom').css('display', '');
            } else {
                $('div.modal-body-zoom').css('width', '100%');
                //$('div.modal-body-zoom').css('display', 'inline-table');
            }
        });

        this.refreshGrids = function () {

            if (ctrl.zoomGrid) {
                ctrl.zoomGrid.refresh();
            }

            if (ctrl.zoomSelectedGrid) {
                ctrl.zoomSelectedGrid.refresh();
            }

        };

        //this.resizeZoomContainer = function (size) {
        //
        //    if (ctrl.isMultiple) {
        //
        //        // quando o zoom permite múltipla seleção, deve-se aumentar o tamanho do container
        //        // dos dois grids (resultado e seleção).
        //        $('div.modal-body-zoom div.row.accordion').css('height', size);
        //
        //    } else {
        //
        //        // se não permite múltipla seleção, aumenta-se somente o container do grid de seleção.
        //        $('div.modal-body-zoom div.row.zoom-result').css('height', size);
        //
        //    }
        //
        //};

        //this.resizeGridArea = function () {
        //
        //    var container = 'div.modal-body-zoom div.row.accordion',
        //        newSize;
        //
        //    if (ctrl.isOpenFoundPanel && ctrl.isOpenSelectedPanel) {
        //
        //        // o tamanho do grid superior é fixo e o grid inferior deve ocupar todo o espaço disponível.
        //        $('#foundContainer').css('height', ''); // remove o style inline para utilizar a altura da classe
        //        $('#selectedContainer').css('height', 0);
        //
        //        newSize =
        //            $(container)[0].offsetHeight -
        //            $('#foundAccordeon')[0].offsetHeight -
        //            $('#selectedAccordeon div.panel-heading')[0].offsetHeight;
        //
        //        $('#selectedContainer').css('height', newSize * 0.90);
        //
        //    } else if (ctrl.isOpenFoundPanel && !ctrl.isOpenSelectedPanel) {
        //
        //        // o grid superior deve ocupar todo o espaço disponível.
        //        newSize =
        //            $(container)[0].offsetHeight -
        //            $('#selectedAccordeon')[0].offsetHeight;
        //
        //        $('#foundContainer').css('height', newSize * 0.89);
        //        $('#selectedContainer').css('height', 0);
        //
        //    } else if (!ctrl.isOpenFoundPanel && ctrl.isOpenSelectedPanel) {
        //
        //        // o grid inferior deve ocupar todo o espaço disponível.
        //        newSize =
        //            $(container)[0].offsetHeight -
        //            $('#foundAccordeon')[0].offsetHeight -
        //            $('#selectedAccordeon div.panel-heading')[0].offsetHeight;
        //
        //        $('#foundContainer').css('height', 0);
        //        $('#selectedContainer').css('height', newSize * 0.96);
        //
        //    } else {
        //
        //        $('#foundContainer').css('height', 0);
        //        $('#selectedContainer').css('height', 0);
        //
        //    }
        //
        //    $timeout(function () {
        //        ctrl.zoomGrid.refresh();
        //        ctrl.zoomSelectedGrid.refresh();
        //    });
        //
        //};

        this.filterPropertyFields = function (filter) {
            return (filter && filter.isAvaiableInSimpleSearch !== false);
        };

        this.onChangeFilter = function () {

            this.isChanging = true;

            this.resultTotal = 0;
            this.zoomResultList = [];

            this.selectedFilterValue = undefined;

            $timeout(function () { ctrl.isChanging = false; });
        };

        this.applyInternalFilter = function (more) {

            var i,
                simpleDisclaimer,
                disclaimers = [],
                disclaimer;

            if (this.isAdvancedSearchOpen === true) {

                for (i = 0; i < this.propertyFields.length; i++) {

                    disclaimer = angular.copy(this.propertyFields[i]);

                    if (disclaimer.hasOwnProperty('value') && disclaimer.value !== undefined) {

                        if (disclaimer.hasOwnProperty('extend') && disclaimer.extend !== undefined) {
                            disclaimer.extend = disclaimer.extend.id || 1;
                        }

                        disclaimers.push(disclaimer);

                    }
                }

            } else {

                simpleDisclaimer = angular.copy(this.selectedFilter);

                if (simpleDisclaimer.hasOwnProperty('extend') && simpleDisclaimer.extend !== undefined) {
                    simpleDisclaimer.extend = simpleDisclaimer.extend.id || 1;
                }

                simpleDisclaimer.value = angular.copy(this.selectedFilterValue);
                disclaimers.push(simpleDisclaimer);

            }

            this.applyFilter({
                init: zoominit(),
                disclaimers: disclaimers,
                selectedFilter: this.isAdvancedSearchOpen === true ? undefined : simpleDisclaimer,
                selectedFilterValue: this.isAdvancedSearchOpen === true ? undefined : simpleDisclaimer.value,
                more: more,
                isAdvanced: false
            });
        };

        this.returnInternalValue = function (zoomid) {
            if (angular.isFunction(this.returnValue)) {
                return this.returnValue(zoomid);
            } else {

                if (zoomid && this.$selected) {
                    return this.$selected[zoomid];
                }

                return this.$selected;
            }
        };

        this.openCloseAdvancedSearch = function () {

            var i;

            this.isAdvancedSearchOpen = !this.isAdvancedSearchOpen;

            if (this.isAdvancedSearchOpen === false) {
                for (i = 0; i < this.propertyFields.length; i++) {
                    if (this.propertyFields[i].hasOwnProperty('value')) {
                        this.propertyFields[i].value = undefined;
                    }
                }
            } else {
                this.selectedFilterValue = undefined;
            }
        };

        this.openCloseConfiguration = function () {

            var i,
                col;

            if (this.isConfigurationOpen !== true) {

                this.columns = [];

                for (i = 0; i < this.zoomGrid.columns.length; i++) {

                    col = {
                        title: this.zoomGrid.columns[i].title,
                        column: this.zoomGrid.columns[i].column,
                        actualWidth: this.zoomGrid.columns[i].width,
                        pinned: !!this.zoomGrid.columns[i].locked,
                        visible: !this.zoomGrid.columns[i].hidden
                    };

                    if (col.column !== '$selected') {
                        this.columns.push({item: col});
                    }
                }

            } else {
                this.columns = [];
            }

            this.isConfigurationOpen = !this.isConfigurationOpen;
        };

        // Necessario para nao disparar o evento de drag'n'drop ao tentar alterar o valor do switch.
        this.onMousedown = function (event) {
            event.stopPropagation();
        };

        this.saveConfiguration = function () {

            var i,
                col,
                others = [],
                pinneds = [],
                config,
                callback;

            for (i = 0; i < this.columns.length; i++) {

                col = this.columns[i].item;

                if (col.pinned === true) {
                    pinneds.push(col);
                } else {
                    others.push(col);
                }
            }

            config = {
                zoomName: this.zoomName,
                columns: pinneds.concat(others)
            };

            callback = function () {
                ctrl.reloadDataGrid(config);
                ctrl.openCloseConfiguration();
            };

            if (this.isConfigurationLocal === true) {
                if (this.isLocalStorageAvaiable === true) {
                    $window.localStorage.setItem(this.localStorageGroup + this.zoomName, angular.toJson(config));
                }
                callback();
            } else {
                this.configuration.save(config, callback);
            }
        };

        this.reloadDataGrid = function (definitions) {

            if (angular.isArray(definitions) === false &&
                definitions.hasOwnProperty('zoomName') &&
                definitions.hasOwnProperty('columns')) {

                definitions = definitions.columns;

            }

            $timeout(function () {

                if (ctrl.zoomGrid) {
                    var columns = ctrl.zoomGrid.columns;

                    for (var index = 0; index < definitions.length; index++) {
                        var definition = definitions[index];

                        for (var col = 0; col < columns.length; col++) {
                            var column = columns[col];

                            if (column.column === definition.column) {
                                ctrl.zoomGrid.reorderColumn(index + 1, column);

                                if (definition.visible) {
                                    ctrl.zoomGrid.showColumn(column);
                                }
                                else {
                                    ctrl.zoomGrid.hideColumn(column);
                                }

                                if (definition.pinned) {
                                    ctrl.zoomGrid.lockColumn(index + 1);
                                }
                                else {
                                    ctrl.zoomGrid.unlockColumn(index + 1);
                                }

                                ctrl.zoomGrid.totvsResizeColumn(index + 1, definition.actualWidth);

                            }
                        }
                    }

                }
            },10);

        };

        // PS. Utilizado para tratativa simples de legado.
        this.parseTableHeaderToGridOptions = function () {

            var i;

            this.gridOptions.columnDefs = this.gridOptions.columnDefs || [];

            for (i = 0; i < this.tableHeader.length; i++) {
                this.gridOptions.columnDefs.push({
                    headerName: i18nFilter(this.tableHeader[i].label),
                    field: this.tableHeader[i].property
                });
            }
        };

        this.loadGrid = function () {

            this.gridOptions = this.gridOptions || {};

            if (this.tableHeader !== undefined) {
                this.parseTableHeaderToGridOptions();
            } else {
                this.gridOptions.columnDefs = this.columnDefs;
            }

            if (this.options !== undefined) {
                angular.extend(this.gridOptions, this.options);
            }

            if (this.isConfigurationLocal === true) {
                if (this.isLocalStorageAvaiable === true) {
                    var config = $window.localStorage.getItem(this.localStorageGroup + this.zoomName);
                    if (config) {
                        this.reloadDataGrid(angular.fromJson(config));
                    }
                }
            } else {
                this.configuration.load(this.reloadDataGrid);
            }

        };

        this.loadDefaults = function () {

            if (this.advancedSearch !== undefined) {
                this.isAdvancedSearchEnabled = (this.advancedSearch === true);
            } else {
                this.isAdvancedSearchEnabled = false;
            }

            if (this.configuration !== undefined) {
                if (angular.isObject(this.configuration) || this.configuration !== false) {
                    this.isConfigurationEnabled = true;
                }
            } else {
                this.isConfigurationEnabled = false;
            }

            if (angular.isObject(this.configuration)) {
                this.isConfigurationLocal = false;
            }

            $nestable.defaultOptions = { maxDepth: 1 };
        };

        this.initialize = function () {

            var i,
                multipleService;

            this.loadDefaults();
            this.loadGrid();

            if (this.propertyFields) {
                for (i = 0; i < ctrl.propertyFields.length; i++) {
                    if (this.propertyFields[i] && this.propertyFields[i].default === true) {
                        this.selectedFilter = this.propertyFields[i];
                    }
                }
            }

            if (ctrl.isMultiple === true) {

                ctrl.$selecteds = [];

                multipleService = $injector.get('zoomMultipleService');
                angular.extend(ctrl, multipleService);

                ctrl.initializeMultiple(ctrl, $scope, previousselect);
            }

            if (angular.isFunction(ctrl.afterInitialize)) {
                ctrl.afterInitialize();
            }

        };

        this.alertMessage = function (zoomMessage) {
            this.type = 'warning';
            this.title = i18nFilter('l-attention');
            this.messageDefault = i18nFilter('l-zoom-message');

            this.message = (zoomMessage !== undefined) ? zoomMessage : this.messageDefault;

            appNotificationService.notify({detail: this.message, type: this.type, title: this.title});
        };

        this.ok = function () {
            var isSelected = (this.isMultiple === true) ? this.getSelecteds() : this.$selected;

            if (isSelected) {
                if (this.isMultiple === true) {
                    this.selecteds = this.getSelecteds();

                    if (this.selecteds.size === 1) {

                        this.$selected = this.selecteds.objSelected[0];

                        $modalInstance.close(this.returnInternalValue(zoomid));
                        if (angular.isFunction(zoomcallback)) {
                            zoomcallback(this.$selected);
                        }

                    } else {
                        $modalInstance.close(this.selecteds);
                        if (angular.isFunction(zoomcallback)) {
                            zoomcallback(this.selecteds);
                        }
                    }

                } else {
                    $modalInstance.close(this.returnInternalValue(zoomid));
                    if (angular.isFunction(zoomcallback)) {
                        zoomcallback(this.$selected);
                    }
                }
            } else {
                this.alertMessage(zoomalertmessage);
            }
        };

        this.cancel = function () {
            if (this.isMultiple === true) {
                this.revertOnCancel(previousselect);
            }
            $modalInstance.dismiss();
        };

        //$scope.$watch(
        //    function (scope) {
        //        return ctrl.isOpenFoundPanel;
        //    },
        //    function (newValue, oldValue) {
        //
        //        if (newValue !== oldValue) {
        //            $timeout(function () {
        //                ctrl.resizeGridArea();
        //            }, 500);
        //        }
        //    }
        //);
        //
        //$scope.$watch(
        //    function (scope) {
        //        return ctrl.isOpenSelectedPanel;
        //    },
        //    function (newValue, oldValue) {
        //
        //        if (newValue !== oldValue) {
        //            $timeout(function () {
        //                ctrl.resizeGridArea();
        //            }, 500);
        //        }
        //    }
        //);

        $scope.$on('$stateChangeStart', function () {

            $modalInstance.dismiss('cancel');

        });

        $scope.$on('$destroy', function () {

            if (ctrl.gridOptions) { ctrl.gridOptions = undefined; }
            if (ctrl.gridSelectedOptions) { ctrl.gridSelectedOptions = undefined; }

            ctrl = undefined;

        });

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module autonumeric
* @name autonumeric
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires autonumeric.module
*
* @dependencies
*
* @description
*
* @restrict A
*/

(function () {

    'use strict';

    angular
        .module('autonumeric')
        .directive('autonumeric', autonumeric);

    autonumeric.$inject = [];

    function autonumeric() {

        var defaults,
            directive;

        directive = {
            restrict: 'A',
            require: 'ngModel',
            compile: compile
        };

        defaults = {
            vMax: 9999999999999.99,
            vMin: 0.00,
            aDec: ',',
            mDec: 2,
            aSep: '.',
            aPad: true,
            aForm: true,
            aSign: '',
            pSign: 'p',
            lZero: 'allow',
            altDec: 'tab',
            dGroup: 3,
            mRound: 'S',
            wEmpty: 'empty',
            nBracket: undefined,
            anDefault: undefined
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} tElm Elemento da diretiva
        * @param {object} tAttrs Atributos do elemento da diretiva
        */
        function compile(tElm, tAttrs) {

            var isTextInput = tElm.is('input:text');

            return function (scope, elm, attrs, controller) {
                // Get instance-specific options.
                var opts,
                    updateElement;

                opts = angular.extend({}, defaults, scope.$eval(attrs.autonumeric));

                // Helper method to update autoNumeric with new value.
                updateElement = function (element, newVal) {

                    var settings,
                        aSep,
                        aDec;

                    if (newVal === undefined || newVal === null) {
                        newVal = '';
                    } else {
                        settings = element.autoNumeric('getSettings');

                        // Substitui todos os separados de casas de milhar
                        aSep = new RegExp('\\' + settings.aSep, 'g');
                        newVal = newVal.replace(aSep, '');

                        // Substitui separador decimal por '.' (ponto)
                        aDec = new RegExp('\\' + settings.aDec, 'g');
                        newVal = newVal.replace(aDec, '.');
                    }

                    element.autoNumeric('set', newVal);
                };

                // controls the maximum value allowed
                attrs.$observe('vMax', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {vMax: value});
                    }
                });

                // controls the minimum value allowed
                attrs.$observe('vMin', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {vMin: value});
                    }
                });

                // controls the decimal character
                attrs.$observe('aDec', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {aDec: value});
                    }
                });

                // overrides the decimal places that that are set via the vMin/vMax values
                attrs.$observe('mDec', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {mDec: value});
                    }
                });

                // controls the thousand separator character
                attrs.$observe('aSep', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {aSep: value});
                    }
                });

                // controls padding of the decimal places
                attrs.$observe('aPad', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {aPad: value});
                    }
                });

                // controls if default values are formatted on page ready (load)
                attrs.$observe('aForm', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {aForm: value});
                    }
                });

                // displays the desired currency symbol (examples: € or EUR).
                // Note: other symbols can be used, such as %, °C, °F, km/h & MPH the
                // possibilities are endless
                attrs.$observe('aSign', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {aSign: value});
                    }
                });

                // controls the placement of the currency symbol (prefix or suffix)
                attrs.$observe('pSign', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {pSign: value});
                    }
                });

                // controls leading zeros behavior
                attrs.$observe('lZero', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {lZero: value});
                    }
                });

                // this was developed to accommodate for different keyboard layouts.
                // altDec allows you to declare an alternative key to enter the decimal
                // separator assigned in aDec
                attrs.$observe('altDec', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {altDec: value});
                    }
                });

                // controls the digital grouping and the placement of the thousand separator
                attrs.$observe('dGroup', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {dGroup: value});
                    }
                });

                // sets the rounding method used (10 different available)
                attrs.$observe('mRound', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {mRound: value});
                    }
                });

                // controls input display behavior
                attrs.$observe('wEmpty', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {wEmpty: value});
                    }
                });

                // controls if negative values are display with brackets when the input
                // does not have focus
                attrs.$observe('nBracket', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {nBracket: value});
                    }
                });

                // helper option for ASP.NET post-back
                attrs.$observe('anDefault', function (value) {
                    if (value && value.toString().length > 0) {
                        elm.autoNumeric('update', {vMax: value});
                    }
                });

                // Initialize element as autoNumeric with options.
                elm.autoNumeric('init', opts);

                // if element has controller, wire it (only for <input type="text" />)
                if (controller && isTextInput) {
                    // watch for external changes to model and re-render element
                    scope.$watch(tAttrs.ngModel, function () {
                        controller.$render();
                    });
                    // render element as autoNumeric
                    controller.$render = function () {
                        if (elm.data('autoNumeric')) {
                            updateElement(elm, controller.$viewValue);
                        }
                    };
                } else {
                    // Listen for changes to value changes and re-render element.
                    // Useful when binding to a readonly input field.
                    if (isTextInput) {
                        attrs.$observe('value', function (val) {
                            updateElement(elm, val);
                        });
                    }
                }

                controller.$formatters.push(function (modelValue) {
                    var settings;

                    if (modelValue) {
                        settings = elm.autoNumeric('getSettings');
                        modelValue = modelValue.toString().replace(/\./g, settings.aDec);
                    }

                    return modelValue;
                });

                controller.$parsers.push(function () {
                    return elm.autoNumeric('get');
                });

            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module bsswitch
* @name bsswitch
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires bsswitch.module
*
* @dependencies
*
* @description
*
* @restrict A
*/

(function () {

    'use strict';

    angular
        .module('bsswitch')
        .directive('bsswitch', bsswitch);

    bsswitch.$inject = ['i18nFilter'];

    function bsswitch(i18nFilter) {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModel Controller do ngModel
        */
        function link(scope, element, attrs, ngModel) {

            var updateModelFn,
                cssDefaultClass;

            scope.safeApply = function (fn) {
                var phase = this.$root.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && typeof fn === 'function') {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };

            updateModelFn = function (state) {
                ngModel.$setViewValue(state);
            };

            cssDefaultClass = 'bootstrap-switch';

            element.addClass(cssDefaultClass);
            element.attr('data-size', attrs.bsswitch === '' ? 'mini' : attrs.bsswitch);
            element.attr('data-on-text', i18nFilter('l-yes'));
            element.attr('data-off-text', i18nFilter('l-no'));

            ngModel.$setViewValue(attrs.checked);

            element.on('switchChange.bootstrapSwitch', function (event, state) {
                if (ngModel) {
                    scope.safeApply(updateModelFn(state));
                }
            });

            scope.$watch(attrs.ngModel, function (newValue) {
                if (newValue) {
                    element.bootstrapSwitch('state', true, true);
                } else {
                    element.bootstrapSwitch('state', false, true);
                }
            });

            if (attrs.ngDisabled) {
                scope.$watch(attrs.ngDisabled, function (newValue) {
                    if (newValue !== undefined) {
                        element.bootstrapSwitch('disabled', newValue, true);
                    } else {
                        element.bootstrapSwitch('disabled', true, true);
                    }
                });
            }
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module chart
* @name chart
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires chart.module
*
* @dependencies
*
* @description
*
* @restrict EA
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('chart')
        .directive('chart', chart);

    chart.$inject = [];

    function chart() {

        var directive = {
            template: '<div></div>',
            restrict: 'EA',
            scope: {
                dataset: '=',
                options: '=',
                callback: '=',
                plotclick: '='
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attributes Atributos do elemento da diretiva
        */
        function link(scope, element, attributes) {

            var height,
                init,
                onDatasetChanged,
                onOptionsChanged,
                plot,
                plotArea,
                width;

            plot = null;
            width = attributes.width || '100%';
            height = attributes.height || '100%';

            if (!scope.dataset) {
                scope.dataset = [];
            }

            if (!scope.options) {
                scope.options = {
                    legend: {
                        show: false
                    }
                };
            }

            plotArea = $(element.children()[0]);

            plotArea.css({
                width: width,
                height: height
            });

            init = function () {

                var plotObj;

                if (scope.dataset && scope.dataset.length > 0) {
                    plotObj = $.plot(plotArea, scope.dataset, scope.options);

                    if (scope.callback) {
                        scope.callback(plotObj);
                    }

                    plotArea.bind('plotclick', function (event, pos, item) {
                        if (scope.plotclick) {
                            scope.plotclick(event, pos, item);
                        }
                    });
                }

                return plotObj;
            };

            onDatasetChanged = function (dataset) {

                if (plot) {
                    plot.setData(dataset);
                    plot.setupGrid();
                    return plot.draw();
                } else {
                    plot = init();

                    return plot;
                }
            };

            scope.$watch('dataset', onDatasetChanged, true);

            onOptionsChanged = function () {
                plot = init();

                return plot;
            };

            return scope.$watch('options', onOptionsChanged, true);

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module datePickerRange
* @name datePickerRange
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires date-picker-range.module
*
* @dependencies
*
* @description (DEPRECATED)
*
* @restrict A
*/

(function () {

    'use strict';

    angular
        .module('datePickerRange')
        .directive('datePickerRange', datePickerRange);

    datePickerRange.$inject = [];

    function datePickerRange() {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                startDate: '=',
                endDate: '='
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl Controller do ngModel
        */
        function link(scope, element, attrs, ngModelCtrl) {

            var updateModel,
                setUpDatePickerRange;

            scope.safeApply = function (fn) {
                var phase = this.$root.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && typeof fn === 'function') {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };

            updateModel = function (date, start) {

                var dates = {};

                if (ngModelCtrl.$viewValue) {
                    dates.start = ngModelCtrl.$viewValue.start || null;
                    dates.end = ngModelCtrl.$viewValue.end || null;
                }

                if (date && angular.isDate(date)) {
                    date = date.getTime();
                }

                if (start) {
                    dates.start = date;
                } else {
                    dates.end = date;
                }

                if (dates.start === undefined && dates.end === undefined) {
                    dates = undefined;
                }

                ngModelCtrl.$setViewValue(dates);
            };

            setUpDatePickerRange = function () {

                element.datepicker();

                var startEl,
                    endEl;

                startEl = element.find('[name=start]');
                endEl = element.find('[name=end]');

                startEl.on('changeDate', function (e) {
                    var date = e.date;

                    if (!(ngModelCtrl.$viewValue &&
                            ngModelCtrl.$viewValue.start &&
                            date === ngModelCtrl.$viewValue.start)) {
                        scope.safeApply(updateModel(e.date, true));
                    }
                    endEl.datepicker('setStartDate', date);
                });

                endEl.on('changeDate', function (e) {
                    var date = e.date;
                    if (!(ngModelCtrl.$viewValue &&
                            ngModelCtrl.$viewValue.end &&
                            date === ngModelCtrl.$viewValue.end)) {
                        scope.safeApply(updateModel(e.date, false));
                    }
                    startEl.datepicker('setEndDate', date);
                });

                startEl.on('clearDate', function () {
                    scope.safeApply(updateModel(null, true));
                });

                endEl.on('clearDate', function () {
                    scope.safeApply(updateModel(null, false));
                });

                startEl.attr('placeholder', attrs.startPlaceholder);
                endEl.attr('placeholder', attrs.endPlaceholder);

                $('.modal').scroll(function () {
                    scope.hideDatePicker();
                });

                $('.container-fluid').scroll(function () {
                    scope.hideDatePicker();
                });
            };

            scope.$watch('startDate', function () {

                var startEl,
                    endEl;

                startEl = element.find('[name=start]');
                endEl = element.find('[name=end]');

                if (scope.startDate) {
                    startEl.datepicker('setStartDate', new Date(scope.startDate));
                    endEl.datepicker('setStartDate', new Date(scope.startDate));
                } else {
                    startEl.datepicker('setStartDate', null);
                    endEl.datepicker('setStartDate', null);
                }
            });

            scope.$watch('endDate', function () {

                var startEl,
                    endEl;

                startEl = element.find('[name=start]');
                endEl = element.find('[name=end]');

                if (scope.endDate) {
                    if (angular.isDate(scope.endDate)) {
                        startEl.datepicker('setEndDate', scope.endDate);
                        endEl.datepicker('setEndDate', scope.endDate);
                    } else {
                        startEl.datepicker('setEndDate', new Date(scope.endDate));
                        endEl.datepicker('setEndDate', new Date(scope.endDate));
                    }
                } else {
                    startEl.datepicker('setEndDate', null);
                    endEl.datepicker('setEndDate', null);
                }
            });

            scope.$on('$stateChangeStart', function () {
                scope.hideDatePicker();
            });

            ngModelCtrl.$render = function () {

                var startEl,
                    startDate,
                    endEl,
                    endDate;

                if (ngModelCtrl.$viewValue) {

                    if (ngModelCtrl.$viewValue.start === undefined) {
                        ngModelCtrl.$viewValue.start = null;
                    }

                    if (ngModelCtrl.$viewValue.end === undefined) {
                        ngModelCtrl.$viewValue.end = null;
                    }

                    startEl = element.find('[name=start]');
                    startDate = ngModelCtrl.$viewValue.start;
                    if (startDate && !angular.isDate(startDate)) {
                        startDate = new Date(startDate);
                    }

                    endEl = element.find('[name=end]');
                    endDate = ngModelCtrl.$viewValue.end;
                    if (endDate && !angular.isDate(endDate)) {
                        endDate = new Date(endDate);
                    }

                    startEl.datepicker('setDate', startDate);
                    endEl.datepicker('setDate', endDate);
                } else {
                    startEl = element.find('[name=start]');
                    endEl = element.find('[name=end]');

                    endEl.datepicker('setDate', undefined);
                    startEl.datepicker('setDate', undefined);
                }

            };

            scope.$watch(attrs.datePickerRange, setUpDatePickerRange, true);

            scope.hideDatePicker = function () {

                var startEl,
                    endEl;

                startEl = element.find('[name=start]');
                endEl = element.find('[name=end]');

                startEl.datepicker('hide');
                endEl.datepicker('hide');
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module datePicker
* @name datePicker
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires date-picker.module
*
* @dependencies
*
* @description Diretiva datepicker (DEPRECATED)
*
* @restrict A
*/

(function () {

    'use strict';

    angular
        .module('datePicker')
        .directive('datePicker', datePicker);

    datePicker.$inject = [];

    function datePicker() {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                startDate: '&',
                endDate: '&'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl Controller do ngModel
        */
        function link(scope, element, attrs, ngModelCtrl) {

            var updateModel,
                setUpDatePicker;

            scope.safeApply = function (fn) {
                var phase = this.$root.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && typeof fn === 'function') {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };

            updateModel = function (date) {
                ngModelCtrl.$setViewValue(date);
            };

            setUpDatePicker = function () {

                $('.modal').scroll(function () {
                    element.datepicker('hide');
                });

                $('.container-fluid').scroll(function () {
                    element.datepicker('hide');
                });

                element.datepicker();

                element.on('changeDate', function (e) {
                    var date = null;

                    if (e.date) {
                        date = e.date.getTime();
                    }
                    if (date !== ngModelCtrl.$viewValue) {
                        scope.safeApply(updateModel(date));
                    }
                });

                element.on('clearDate', function () {
                    var date = null;

                    if (date !== ngModelCtrl.$viewValue) {
                        scope.safeApply(updateModel(date));
                    }
                });

                if (scope.startDate()) {
                    element.datepicker('setStartDate', new Date(scope.startDate()));
                }

                if (scope.endDate()) {
                    element.datepicker('setEndDate', new Date(scope.endDate()));
                }

                element.find('input').attr('placeholder', attrs.placeholder);
            };

            scope.$watch(attrs.startDate, function () {
                if (scope.startDate()) {
                    element.datepicker('setStartDate', new Date(scope.startDate()));
                } else {
                    element.datepicker('setStartDate', null);
                }
            });

            scope.$watch(attrs.endDate, function () {
                if (scope.endDate()) {
                    element.datepicker('setEndDate', new Date(scope.endDate()));
                } else {
                    element.datepicker('setEndDate', null);
                }
            });

            scope.$on('$stateChangeStart', function () {
                element.datepicker('hide');
            });

            ngModelCtrl.$render = function () {
                var date;

                if (ngModelCtrl.$viewValue === undefined || ngModelCtrl.$viewValue === null) {
                    date = null;
                } else {
                    date = new Date(ngModelCtrl.$viewValue);
                }

                element.datepicker('setDate', date);
            };

            scope.$watch(attrs.datePicker, setUpDatePicker, true);

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module decimalRange
* @name decimalRange
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires decimal-range.module
*
* @dependencies
*
* @description
*
* @restrict A
*/

(function () {

    'use strict';

    angular
        .module('decimalRange')
        .directive('decimalRange', decimalRange);

    decimalRange.$inject = ['$timeout'];

    function decimalRange($timeout) {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl Controller do ngModel
        */
        function link(scope, element, attrs, ngModelCtrl) {

            var setupRange,
                updateModel,
                updateOptions,
                timerFormatter,
                renderValue,
                startEl,
                endEl;

            startEl = element.find('[name=start]');
            endEl = element.find('[name=end]');

            setupRange = function () {

                startEl.change(function (event) {
                    updateModel($(event.target).val(), true);
                });

                endEl.change(function (event) {
                    updateModel($(event.target).val());
                });

                // Placeholder
                startEl.attr('placeholder', attrs.startPlaceholder);
                endEl.attr('placeholder', attrs.endPlaceholder);

                // controls the maximum value allowed
                attrs.$observe('vMax', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({vMax: value});
                    }
                });

                // controls the minimum value allowed
                attrs.$observe('vMin', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({vMin: value});
                    }
                });

                // controls the decimal character
                attrs.$observe('aDec', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({aDec: value});
                    }
                });

                // overrides the decimal places that that are set via the vMin/vMax values
                attrs.$observe('mDec', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({mDec: value});
                    }
                });

                // controls the thousand separator character
                attrs.$observe('aSep', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({aSep: value});
                    }
                });

                // controls padding of the decimal places
                attrs.$observe('aPad', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({aPad: value});
                    }
                });

                // controls if default values are formatted on page ready (load)
                attrs.$observe('aForm', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({aForm: value});
                    }
                });

                // displays the desired currency symbol (examples: € or EUR).
                // Note: other symbols can be used, such as %, °C, °F, km/h & MPH the
                // possibilities are endless
                attrs.$observe('aSign', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({aSign: value});
                    }
                });

                // controls the placement of the currency symbol (prefix or suffix)
                attrs.$observe('pSign', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({pSign: value});
                    }
                });

                // controls leading zeros behavior
                attrs.$observe('lZero', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({lZero: value});
                    }
                });

                // this was developed to accommodate for different keyboard layouts.
                // altDec allows you to declare an alternative key to enter the decimal
                // separator assigned in aDec
                attrs.$observe('altDec', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({altDec: value});
                    }
                });

                // controls the digital grouping and the placement of the thousand separator
                attrs.$observe('dGroup', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({dGroup: value});
                    }
                });

                // sets the rounding method used (10 different available)
                attrs.$observe('mRound', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({mRound: value});
                    }
                });

                // controls input display behavior
                attrs.$observe('wEmpty', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({wEmpty: value});
                    }
                });

                // controls if negative values are display with brackets when the input
                // does not have focus
                attrs.$observe('nBracket', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({nBracket: value});
                    }
                });

                // helper option for ASP.NET post-back
                attrs.$observe('anDefault', function (value) {
                    if (value && value.toString().length > 0) {
                        updateOptions({vMax: value});
                    }
                });
            };

            updateOptions = function (opts) {
                startEl.autoNumeric('update', opts);
                endEl.autoNumeric('update', opts);
            };

            renderValue = function (value) {

                var startEl,
                    endEl;

                startEl = element.find('[name=start]');
                endEl = element.find('[name=end]');

                if (value) {
                    if (value.start) {
                        startEl.val(value.start);
                        startEl.autoNumeric('set', value.start);
                        updateModel(startEl.val(), true);
                    }

                    if (value.end) {
                        endEl.val(value.end);
                        endEl.autoNumeric('set', value.end);
                        updateModel(endEl.val(), false);
                    }
                } else {
                    startEl.val(undefined);
                    endEl.val(undefined);
                }
            };

            updateModel = function (value, isStart) {

                var range = {};

                if (ngModelCtrl.$viewValue) {
                    range.start = ngModelCtrl.$viewValue.start || undefined;
                    range.end = ngModelCtrl.$viewValue.end || undefined;
                }

                if (isStart === true) {
                    range.start = value;
                } else {
                    range.end = value;
                }

                ngModelCtrl.$setViewValue(range);
            };

            ngModelCtrl.$formatters.unshift(function (value) {

                if (timerFormatter) {
                    $timeout.cancel(timerFormatter);
                }

                timerFormatter = $timeout(function () {
                    renderValue(value);
                }, 300);
            });

            scope.$watch(attrs.decimalRange, setupRange, true);
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module field
* @name field
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires field.module
*
* @dependencies cfp.hotkeys
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('field')
        .directive('field', field);

    field.$inject = [
        '$interpolate',
        '$compile',
        '$http',
        '$rootScope',
        'hotkeys',
        'fieldConstant'];

    function field($interpolate, $compile, $http, $rootScope, hotkeys, fieldConstant) {

        var directive = {
            restrict: 'E',
            require: '?ngModel',
            priority: 200,
            replace: true,
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function compile(element, attrs) {

            var validators,
                validationMsgs,
                label,
                labelContent,
                options,
                opts,
                includeHTML,
                zoomDef;

            validators = element.find('validator');

            validationMsgs = undefined;

            if (validators && validators.length > 0) {

                validationMsgs = {};

                angular.forEach(validators, function (validator) {
                    validator = angular.element(validator);
                    validationMsgs[validator.attr('key')] = $interpolate(validator.text());
                });
            }

            label = element.find('label');
            labelContent = undefined;

            if (label && label.length > 0) {
                labelContent = label[0] && label.html();
            } else {
                labelContent = attrs.label;
            }

            options = [];
            opts = element.find('totvs-options').children();

            angular.forEach(opts, function (opt) {
                opt = angular.element(opt);
                options.push({
                    id: opt.attr('value'),
                    text: opt.text()
                });
            });

            includeHTML = element.find('include').html();
            zoomDef = element.find('zoom')[0];

            element.html('');

            return function postLink(scope, element, attrs, ngModel) {

                var i,
                    a,
                    templateElement,
                    childScope,
                    inputgroup,
                    inputgroupbtn,
                    inputElement,
                    labelElement,
                    includeElement,
                    zoomHTML,
                    btKeypad,
                    keypad,
                    btClean,
                    field,
                    type,
                    id,
                    btWorkflow,
                    setCallback,
                    srcElement,
                    hotkeyElements;

                templateElement = angular.element(fieldConstant[attrs.type || 'input']);

                childScope = scope.$new();

                for (i = 0; i < options.length; i++) {
                    options[i].text = $interpolate(options[i].text)(scope);
                }
                childScope.$options = options;

                if (validators && validators.length > 0) {
                    childScope.$validationMessages = angular.copy(validationMsgs);
                } else {
                    templateElement.find('div.tooltip').remove();
                }

                if (attrs.$attr.nameId) {
                    childScope.$fieldId = attrs.nameId;
                } else if (angular.isDefined(attrs.ngModel)) {
                    childScope.$fieldId = attrs.ngModel.replace('.', '_').toLowerCase();
                    childScope.$fieldId = childScope.$fieldId.replace(/'/g, '');
                }

                element.attr('id', childScope.$fieldId);

                scope.$watch(attrs.ngShow, function (value) {
                    if (value === false) {
                        templateElement.parents('field').addClass('ng-hide');
                    } else if (value === true) {
                        templateElement.parents('field').removeClass('ng-hide');
                    }
                });

                scope.$watch(attrs.ngHide, function (value) {
                    if (value === true) {
                        templateElement.parents('field').addClass('ng-hide');
                    } else if (value === false) {
                        templateElement.parents('field').removeClass('ng-hide');
                    }
                });

                scope.$watch(attrs.ngDisabled, function (value) {
                    if (value === true) {
                        element.attr('disabled', true);
                        element.find('button').attr('disabled', true);
                        element.find('input').attr('disabled', true);
                    } else if (value === false) {
                        element.removeAttr('disabled');
                        element.find('button').removeAttr('disabled');
                        element.find('input').removeAttr('disabled');
                    }
                });

                inputElement = templateElement.find('[bind]');
                angular.forEach(attrs.$attr, function (original) {
                    if (original !== 'type' && original !== 'class') {
                        var value = element.attr(original);
                        inputElement.attr(original, value);
                    }
                });

                inputElement.attr('name', childScope.$fieldId);
                inputElement.attr('id', childScope.$fieldId);

                if (labelContent) {

                    childScope.$fieldLabel = $interpolate(labelContent)(scope);

                    labelElement = templateElement.find('label:first');
                    labelElement.attr('for', childScope.$fieldId);
                    labelElement.html(labelContent);

                    if (label && label.attr('title')) {
                        labelElement.attr('tooltip', label.attr('title'));
                    } else {
                        labelElement.attr('tooltip', labelContent);
                    }
                    labelElement.attr('tooltip-placement', 'top');

                } else {
                    templateElement.find('label:first').remove();
                    templateElement.find('div.col-xs-8').removeClass();
                }

                includeElement = templateElement.find('[include]');
                if (includeElement.length > 0) {
                    includeElement.append(includeHTML);
                }

                if (zoomDef) {
                    inputgroup = templateElement.find('.input-group');
                    inputgroupbtn = inputgroup.find('.input-group-btn');

                    if (inputgroupbtn.length === 0) {
                        inputgroupbtn = angular.element('<span class="input-group-btn"></span>');
                        inputgroup.append(inputgroupbtn);
                        inputgroup.addClass('no-block');
                    }

                    zoomHTML = angular.element('<zoom></zoom>');
                    if (attrs.selectConector) {
                        zoomHTML.attr('zoom-selected-internal', 'updateSelectModelZoom(selected)');
                        zoomHTML.attr('ng-model', 'zoomSelectedItem');
                    } else {
                        zoomHTML.attr('ng-model', attrs.ngModel);
                    }

                    inputElement.attr('zoom-hotkey', '');

                    for (i = 0; i < zoomDef.attributes.length; i++) {
                        a = zoomDef.attributes[i];
                        zoomHTML.attr(a.name, a.value);
                    }

                    inputgroupbtn.append(zoomHTML);
                }

                if (attrs.$attr.class) {
                    element.addClass('col-xs-12');
                } else {
                    element.addClass('col-xs-12 col-md-6');
                }

                if (attrs.$attr.keypad) {

                    inputgroup = templateElement.find('.input-group');
                    inputgroupbtn = inputgroup.find('.input-group-btn');

                    if (inputgroupbtn.length === 0) {
                        inputgroupbtn = angular.element('<span class="input-group-btn"></span>');
                        inputgroup.append(inputgroupbtn);
                        inputgroup.addClass('no-block');
                    }

                    btKeypad = angular.element('<button class="btn btn-default" role="button" ' +
                        'type="button" data-ng-click="openKeypad($event)">' +
                        '<span class="glyphicon glyphicon-th"></span></button>');

                    keypad = angular.element('<div><totvskeypad is-open="keypadOpen"></totvskeypad></div>');
                    keypad.attr('ng-model', attrs.ngModel);

                    childScope.openKeypad = function ($event) {
                        $event.preventDefault();
                        $event.stopPropagation();
                        childScope.keypadOpen = !childScope.keypadOpen;
                    };

                    inputElement.before(keypad);
                    inputgroupbtn.append(btKeypad);
                }

                if (attrs.$attr.canclean) {
                    inputgroup = templateElement.find('.input-group');
                    inputgroupbtn = inputgroup.find('.input-group-btn');
                    hotkeyElements = templateElement.find('[hotkey-element]');

                    for (i = 0; i < hotkeyElements.length; i++) {
                        hotkeyElements[i].setAttribute('canclean', attrs.canclean);
                    }

                    if (inputgroupbtn.length === 0) {
                        inputgroupbtn = angular.element('<span class="input-group-btn"></span>');
                        inputgroup.append(inputgroupbtn);
                        inputgroup.addClass('no-block');
                    }

                    btClean = angular.element('<button class="btn btn-default" role="button" ' +
                        'type="button" data-ng-click="cleanValue()" tabindex=-1>' +
                        '<span class="glyphicon glyphicon-remove"></span></button>');

                    childScope.cleanValue = function () {
                        var value;

                        if (attrs.canclean === 'undefined') {
                            value = undefined;
                        } else if (attrs.canclean === 'null' || attrs.canclean === '') {
                            value = null;
                        } else {
                            value = attrs.canclean;
                        }

                        this.control = inputElement.controller('ngModel') || childScope.$field;

                        this.control.$setViewValue(value);
                        this.control.$render();

                        if (attrs.selectConector) {
                            scope.cleanSelectValue(this.control);
                        }
                    };

                    hotkeys.bindTo(childScope)
                        .add({
                            combo: 'ctrl+del',
                            allowIn: ['input', 'select', 'textarea'],
                            callback: function (event) {
                                var inputGroup,
                                    cancleans,
                                    value,
                                    i;
                                srcElement = event.srcElement;
                                if (srcElement.attributes.getNamedItem('canclean')) {
                                    value = srcElement.attributes.getNamedItem('canclean').value;
                                    if (value === 'undefined') {
                                        value = undefined;
                                    } else if (value === 'null' || value === '') {
                                        value = null;
                                    } else {
                                        value = value;
                                    }
                                    inputGroup = srcElement;
                                    while (inputGroup.className.split(' ').indexOf('input-group') < 0) {
                                        inputGroup = inputGroup.parentElement;
                                    }
                                    cancleans = inputGroup.querySelectorAll('[canclean]');
                                    for (i = 0; i < cancleans.length; i++) {
                                        cancleans[i].value = value;
                                    }
                                }
                            }
                        });

                    inputgroupbtn.append(btClean);
                }

                if (attrs.type === 'workflow' && $rootScope.isFluig) {

                    inputgroup = templateElement.find('.input-group');
                    inputgroupbtn = inputgroup.find('.input-group-btn');

                    if (inputgroupbtn.length === 0) {
                        inputgroupbtn = angular.element('<span class="input-group-btn"></span>');
                        inputgroup.append(inputgroupbtn);
                        inputgroup.addClass('no-block');
                    }

                    btWorkflow = angular.element(
                        '<button class="btn btn-default" role="button" type="button" ' +
                            'data-ng-click="openProcess($event)">' +
                            '<span class="fluigicon fluigicon-sm fluigicon-user-pending pull-left" ' +
                            'style="height:20px"></span></button>'
                    );

                    setCallback = function (win) {
                        if (win.ECM !== null && win.ECM.processSearch !== null &&
                            win.ECM.processSearch.openWorkflowDetail !== null) {
                            win.ECM.processSearch.openWorkflowDetail = function (id) {
                                var control = inputElement.controller('ngModel') || childScope.$field;
                                control.$setViewValue(id);
                                control.$render();
                                win.close();
                            };
                        } else {
                            setTimeout(function () {
                                setCallback(win);
                            }, 1000);
                        }
                    };

                    childScope.openProcess = function (event) {
                        var win,
                            url;

                        url = window.location.toString();
                        url = url.substring(url.indexOf('/portal/'));
                        url = url.substring(0, url.indexOf('/', 10));
                        event.stopPropagation();
                        win = window.open(url + '/pageprocesssearch', '_blank');
                        setTimeout(function () {
                            setCallback(win);
                        }, 1000);
                    };

                    inputgroupbtn.append(btWorkflow);
                }

                element.append(templateElement);
                $compile(templateElement)(childScope);

                childScope.$field = inputElement.controller('ngModel') || ngModel;

                childScope.$watch('$field.$dirty && $field.$error', function (errorList) {
                    childScope.$fieldErrors = [];
                    angular.forEach(errorList, function (invalid, key) {
                        if (invalid) {
                            childScope.$fieldErrors.push(key);
                        }
                    });
                }, true);

                if (attrs.$attr.focus) {
                    field = templateElement[0].parentElement;
                    type = field.getAttribute('type');

                    // Caso for field do tipo select1 ou select2
                    if (type === 'select' || type === 'select2') {
                        id = field.getAttribute('name-id');
                        setTimeout(function () {
                            var uiSelectInput;
                            if (id !== null && id !== undefined) {
                                uiSelectInput = $('#' + id).find('input.ui-select-focusser');
                            } else {
                                uiSelectInput = $('input.ui-select-focusser');
                            }
                            uiSelectInput.focus();
                        }, 700);
                    } else if (type === 'date' || type === 'daterange' ||
                               type === 'decimalrange' || type === 'inputrange') {
                        inputElement[0].firstElementChild.focus();
                    } else {
                        inputElement.focus(); // Inputs
                    }
                }
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module inputRange
* @name inputRange
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires input-range.module
*
* @dependencies
*
* @description (DEPRECATED)
*
* @restrict A
*/

(function () {

    'use strict';

    angular
        .module('inputRange')
        .directive('inputRange', inputRange);

    inputRange.$inject = [];

    function inputRange() {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl Controller do ngModel
        */
        function link(scope, element, attrs, ngModelCtrl) {

            var setUpInputRange,
                updateModel;

            setUpInputRange = function () {

                var startEl,
                    endEl;

                startEl = element.find('[name=start]');
                endEl = element.find('[name=end]');

                startEl.change(function (event) {
                    updateModel($(event.target).val(), true);
                });

                endEl.change(function (event) {
                    updateModel($(event.target).val());
                });

                startEl.attr('placeholder', attrs.startPlaceholder);
                endEl.attr('placeholder', attrs.endPlaceholder);

                startEl.attr('maxlength', attrs.startMaxlength);
                endEl.attr('maxlength', attrs.endMaxlength);
            };

            ngModelCtrl.$render = function () {

                var startEl,
                    endEl;

                startEl = element.find('[name=start]');
                endEl = element.find('[name=end]');

                if (ngModelCtrl.$viewValue) {
                    startEl.val(ngModelCtrl.$viewValue.start);
                    endEl.val(ngModelCtrl.$viewValue.end);
                } else {
                    startEl.val(undefined);
                    endEl.val(undefined);
                }
            };

            updateModel = function (value, isStart) {

                var range = {};

                if (ngModelCtrl.$viewValue) {
                    range.start = ngModelCtrl.$viewValue.start || undefined;
                    range.end = ngModelCtrl.$viewValue.end || undefined;
                }

                if (isStart === true) {
                    range.start = value;
                } else {
                    range.end = value;
                }

                ngModelCtrl.$setViewValue(range);
            };

            scope.$watch(attrs.inputRange, setUpInputRange, true);

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module multipleSelected
* @name multipleSelected
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires multiple-selected.module
*
* @dependencies
*
* @description
*
* @restrict A
*/

(function () {

    'use strict';

    angular
        .module('multipleSelected')
        .directive('multipleSelected', multipleSelected);

    multipleSelected.$inject = ['$parse'];

    function multipleSelected($parse) {

        var directive = {
            restrict: 'A',
            require: '^totvsPageHeaderOperationAction',
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} controller Controller do ngModel
        */
        function link(scope, element, attrs, controller) {

            var items,
                itemsAs;

            items = controller.scope.items();
            itemsAs = controller.scope.itemsAs || 'item';

            scope.$watch(function () {

                var i,
                    count = 0;

                for (i = 0; i < items.length; i++) {
                    if (items[i].$selected) {
                        count++;
                    }
                }

                return count;

            }, function (count) {
                if (count > 0) {
                    var i,
                        enable = true,
                        getter;

                    for (i = 0; i < items.length; i++) {
                        if (items[i].$selected) {
                            getter = $parse(attrs.multipleSelected || 'true');
                            controller.scope.$parent[itemsAs] = items[i];
                            enable = getter(controller.scope.$parent);
                            if (!enable) {
                                break;
                            }
                        }
                    }
                    element.attr('disabled', !enable);
                } else {
                    element.attr('disabled', true);
                }
            });

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module numbersOnly
* @name numbersOnly
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires numbers-only.module
*
* @dependencies
*
* @description
*
* @restrict A
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('numbersOnly')
        .directive('numbersOnly', numbersOnly);

    numbersOnly.$inject = [];

    function numbersOnly() {

        var directive = {
            require: 'ngModel',
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} modelCtrl Controller do ngModel
        */
        function link(scope, element, attrs, modelCtrl) {

            modelCtrl.$parsers.push(function (inputValue) {

                var transformedInput;

                // this next if is necessary for when using ng-required on your input.
                // In such cases, when a letter is typed first, this parser will be called
                // again, and the 2nd time, the value will be undefined
                if (inputValue === undefined || inputValue === null) {
                    return '';
                } else {
                    inputValue = inputValue.toString();
                }

                transformedInput = inputValue.replace(/\D+/g, '');

                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module onKeyEnter
* @name onKeyEnter
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires on-key-enter.module
*
* @dependencies
*
* @description
*
* @restrict A
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('onKeyEnter')
        .directive('onKeyEnter', onKeyEnter);

    onKeyEnter.$inject = [];

    function onKeyEnter() {

        return link;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function link(scope, element, attrs) {

            element.keypress('enter', function (event) {

                if (event.keyCode === 13) {

                    event.preventDefault();
                    event.stopPropagation();

                    scope.$apply(function () { scope.$eval(attrs.onKeyEnter); });
                }
            });

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module templatePopover
* @name templatePopover
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires template-popover.module
*
* @dependencies
*
* @description A diretiva Totvs Template Popover exibe um conteúdo dentro de um popover.
*
* @restrict A
*
* @example
*
* <elemento template-popover></elemento>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Template+Popover
*/

(function () {

    'use strict';

    angular
        .module('templatePopover')
        .directive('templatePopover', templatePopover);

    templatePopover.$inject = ['$compile', '$http', '$templateCache', '$q', '$timeout'];

    function templatePopover($compile, $http, $templateCache, $q, $timeout) {

        var directive = {
            template: '<span ng-transclude></span>',
            restrict: 'A',
            transclude: true,
            scope: {
                large: '=',
                placement: '@',
                popoverData: '=',
                promise: '=',
                title: '@',
                container: '=',
                template: '@templatePopover'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        */
        function link(scope, element) {

            var popOverContent,
                setupPopover;

            setupPopover = function () {
                $http.get(scope.template, {
                    cache: $templateCache
                }).then(function (response) {

                    var html,
                        promis;

                    html = response.data;
                    // se popoverData é uma promise, espera resolver para abrir a popover
                    promis = scope.popoverData;
                    // verificar se foi passado um promise
                    if (scope.promise) {
                        promis = scope.promise;
                    }

                    if (promis.$promise) {
                        promis = promis.$promise;
                    }

                    $q.when(promis).then(function () {
                        var el = angular.element(html);

                        popOverContent = $compile(el)(scope);

                        $timeout(function () {
                            var options = {
                                container: scope.container === undefined ? 'body' : scope.container,
                                content: popOverContent,
                                placement: scope.placement || 'right',
                                html: true,
                                title: scope.title
                            };

                            if (scope.large) {
                                options.template = '<div class="popover popover-large">' +
                                                        '<div class="arrow"></div>' +
                                                        '<h3 class="popover-title"></h3>' +
                                                    '<div class="popover-content"></div></div>';
                            }

                            $(element).popover(options);

                            $(element).on('show.bs.popover', function () {
                                // esconde os outros popoever's
                                $('[template-popover]').each(function (i, o) {
                                    if ($(element)[0] !== $(o)[0] && $(o).data('bs.popover')) {
                                        $(o).popover('hide');
                                    }
                                });
                            });
                            $(element).popover('show');
                        });
                    });
                });
            };

            scope.$watch('promise', function () {

                if (scope.promise) {
                    setupPopover();
                } else {
                    $(element).popover('destroy');
                }

            });
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module selectConector
* @name selectConector
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires select-conector.module
*
* @dependencies
*
* @description
*
* @restrict A
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('selectConector')
        .directive('selectConector', selectConector);

    selectConector.$inject = ['$injector', '$parse', '$timeout'];

    function selectConector($injector, $parse, $timeout) {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            scope: true,
            link: {
                pre: preLink,
                post: postLink
            }
        };

        return directive;

        /**
        * @name preLink
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function preLink(scope, element, attrs) {

            scope.initfn = $parse(attrs.selectInit);

            scope.selectId           = attrs.selectId;
            scope.selectService      = attrs.selectService;
            scope.selectDescription  = attrs.selectDescription;

            scope.selectList         = [];
            scope.selectModel        = '';
            scope.selectPlaceholder  = attrs.selectConector     || 'Selecione';
            scope.selectRefreshDelay = attrs.selectRefreshDelay || 500;

        }

        /**
        * @name postLink
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl Controller do ngModel
        */
        function postLink(scope, element, attrs, ngModelCtrl) {

            var service,
                timerWatch,
                timerFormatter,
                selectController,
                find = true,
                oldValue,
                firstSearch;

            if (scope.selectService) {
                service = $injector.get(scope.selectService);
            }

            if (service === undefined) {
                throw 'Serviço para o zoom não definido.';
            }

            function refreshList(value) {
                value = (value === undefined || value === null) ? '' : value.toString().toLowerCase();
                oldValue = (oldValue === undefined) ? undefined : oldValue.toString().toLowerCase();

                if (!find && oldValue !== value) {
                    find = true;
                }

                return (find && oldValue !== value) || (!find && oldValue === value) || value === '';
            }

            ngModelCtrl.$formatters.unshift(function (value) {

                if (selectController) {
                    if (!value) { selectController.select(undefined); }
                }

                if (timerFormatter) {
                    $timeout.cancel(timerFormatter);
                }

                timerFormatter = $timeout(function () {
                    scope.loadValue(value);
                }, scope.selectRefreshDelay);

            });

            scope.initSelectComponent = function ($select) {
                selectController = $select;
                selectController.disabled = $parse(attrs.ngDisabled)(scope);
            };

            scope.loadValue = function (value) {
                var promise;

                if (value && angular.isObject(value)) {
                    value = value[scope.selectId];
                }

                promise = service.getObjectFromValue(value, scope.initfn(scope));

                if (promise && selectController) {
                    if (promise.then) {
                        promise.then(function (data) {
                            if (data && data.hasOwnProperty(scope.selectId)) {
                                selectController.select(data);
                            } else {
                                selectController.select(scope.selectModel);
                            }
                        });
                    } else {
                        selectController.select(promise);
                    }
                } else {
                    selectController.select(scope.selectModel);
                }
            };

            scope.refreshSelectList = function (value) {
                var promise,
                    filter;

                if (refreshList(value)) {
                    filter = {
                        property: scope.selectDescription || scope.selectId
                    };

                    if (value && angular.isObject(value)) {
                        value = value[scope.selectId];
                    }

                    find = false;

                    promise = service.applyFilter({
                        init: scope.initfn(scope),
                        disclaimers: [{ property : filter.property, value : value }],
                        selectedFilter: filter,
                        selectedFilterValue: value,
                        more: false,
                        isAdvanced: false,
                        isSelectValue: true
                    });

                    if (promise) {
                        if (promise.then) {
                            promise.then(function (data) {
                                scope.selectList = data;
                            });
                        } else {
                            scope.selectList = promise;
                        }
                    }
                }

            };

            setTimeout(function () {
                element.find('input.ui-select-search').on('keydown', function (e) {
                    if (e.keyCode === 9) {
                        if (selectController.search !== undefined) {
                            scope.loadValue(selectController.search);
                        }
                    }
                });

                element.find('input.ui-select-search').focusin(function () {

                    if (selectController.search !== '') {
                        firstSearch = selectController.search;
                    } else {
                        firstSearch = '';
                    }

                    if (selectController.selected) {
                        selectController.search = selectController.selected[scope.selectId];
                    } else {
                        selectController.search = '';
                    }

                    if (firstSearch) {
                        selectController.search = selectController.search.concat(firstSearch);
                    }

                    if (!find && oldValue === selectController.search) {
                        scope.selectList = [];
                    }

                    find = true;
                });

                element.find('input.ui-select-search').focusout(function () {
                    setTimeout(function () {
                        selectController.search = '';
                    }, 500);
                });

            }, 500);

            scope.updateSelectModel = function ($item) {

                scope.selectModel = $item;

                if ($item) {
                    ngModelCtrl.$setViewValue($item[scope.selectId]);
                } else {
                    ngModelCtrl.$setViewValue(undefined);
                }

                scope.selectList = [];
                oldValue = scope.selectModel !== undefined &&
                            scope.selectModel !== null ? scope.selectModel[scope.selectId] : undefined;

                ngModelCtrl.$render();
            };

            scope.updateSelectModelZoom = function (zoomValue) {
                selectController.select(zoomValue);
            };

            scope.cleanSelectValue = function () {
                var value;

                if (attrs.canclean === 'undefined') {
                    value = undefined;
                } else {
                    value = null;
                }

                selectController.select(value);
                selectController.search = value;
            };

            scope.getDescription = function (item) {

                var description;

                if (angular.isNumber(item)) {
                    item = scope.selectModel;
                }

                if (item) {

                    if (service && angular.isFunction(service.getDescription)) {
                        description = service.getDescription(item);
                    } else {

                        description = item[scope.selectId];

                        if (scope.selectDescription) {
                            description = description + ' - ' + item[scope.selectDescription];
                        }

                    }

                    return description.toString();
                }

                return undefined;
            };

            if (attrs.selectInit) {

                scope.$watch(attrs.selectInit, function (value) {

                    if (!value) { return; }

                    if (timerWatch) {
                        $timeout.cancel(timerWatch);
                    }

                    timerWatch = $timeout(function () {
                        scope.loadValue(ngModelCtrl.$modelValue);
                        scope.refreshSelectList();
                    }, scope.selectRefreshDelay);

                }, true);
            }

            scope.$on('$destroy', function () {

                selectController = undefined;

                if (timerFormatter) {
                    $timeout.cancel(timerFormatter);
                }

                if (timerWatch) {
                    $timeout.cancel(timerWatch);
                }
            });

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module timePicker
* @name timePicker
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires time-picker.module
*
* @dependencies
*
* @description
*
* @restrict A
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('timePicker')
        .directive('timePicker', timePicker);

    timePicker.$inject = [];

    function timePicker() {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl Controller do ngModel
        */
        function link(scope, element, attrs, ngModelCtrl) {

            var updateModel,
                setUpTimePicker;

            updateModel = function (time) {
                ngModelCtrl.$setViewValue(time);
            };

            setUpTimePicker = function () {
                element.timepicker();
                element.on('changeTime.timepicker', function (e) {
                    if (e.time.value !== ngModelCtrl.$viewValue) {
                        scope.$apply(updateModel(e.time.value));
                    }
                });

                $('.modal').scroll(function () {
                    element.timepicker('hideWidget');
                });

                $('.container-fluid').scroll(function () {
                    element.timepicker('hideWidget');
                });
            };

            scope.$on('$stateChangeStart', function () {
                element.timepicker('hideWidget');
            });

            ngModelCtrl.$render = function () {
                element.timepicker('setTime', ngModelCtrl.$viewValue);
            };

            scope.$watch(attrs.timePicker, setUpTimePicker, true);

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module templatePopoverRemoveAll
* @name templatePopoverRemoveAll
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires template-popover-remove-all.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Template Popover Remove All verifica se existe algum popover aberto na página e o fecha.
*
* @restrict A
*
* @example
*
* <elemento template-popover-remove-all></elemento>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Template+Popover+Remove+All
*/

(function () {

    'use strict';

    angular
        .module('templatePopoverRemoveAll')
        .directive('templatePopoverRemoveAll', templatePopoverRemoveAll);

    templatePopoverRemoveAll.$inject = [];

    function templatePopoverRemoveAll() {

        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function link(scope, element, attrs) {

            var event = attrs.templatePopoverRemoveAll || 'click';

            $(element).on(event, function () {
                $('[template-popover]').each(function (i, o) {
                    if ($(o).data('bs.popover')) {
                        $(o).popover('hide');
                    }
                });
            });

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsChart
* @name totvsChart
* @object directive
*
* @created 20/06/2016 v12.1.12
* @updated 20/06/2016 v12.1.12
*
* @requires
*
* @dependencies
*
* @description Diretiva totvs-chart
*
* @restrict E
*
* @property {String} [tTitle] Título do gráfico.
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Chart
*/

(function () {

    'use strict';

    angular
        .module('totvsChart')
        .directive('totvsChart', totvsChart);

    totvsChart.$inject = [];

    function totvsChart() {

        var directive = {
            template: '<div kendo-chart k-options="chart"></div>' +
                '<div class="totvs-chart-no-data" ng-show="!tSeries || !tSeries.length"><div>Sem dados</div></div>',
            restrict: 'E',
            scope: {
                tTitle: '@',
                tTitlePosition: '@',
                tTypeChart: '@',
                tSeries: '=',
                tCategories: '=',
                tCategoryField: '=',
                tValueMax: '=',
                tValueMin: '=',
                tRemoteData: '=',
                tOnClick: '&',
                tOnHover: '&',
                tSetExport: '&',
                tChartTooltip: '=?'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function link(scope, element, attrs) {
            var chart;

            function getKendoChart() {
                if (chart) { return chart; }

                chart = element.find('[kendo-chart]').getKendoChart();
                return chart;
            }

            function getChartName(title) {
                var name = title || 'chart';
                return name;
            }

            function exportToPng() {
                getKendoChart().exportImage().done(function (data) {
                    var chartName = getChartName(scope.tTitle) + '.png';
                    kendo.saveAs({
                        dataURI: data,
                        fileName: chartName
                    });
                });
            }

            function exportToPdf() {
                getKendoChart().exportPDF({ paperSize: 'A5', landscape: true }).done(function (data) {
                    var chartName = getChartName(scope.tTitle) + '.pdf';
                    kendo.saveAs({
                        dataURI: data,
                        fileName: chartName
                    });
                });
            }

            scope.$watch('tSeries', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    getKendoChart().options.series = newValue;
                    getKendoChart().refresh();
                }
            });

            scope.$watch('tCategories', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    getKendoChart().options.categoryAxis.categories = newValue;
                    getKendoChart().refresh();
                }
            });

            scope.$watch('tTypeChart', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    var i, size = getKendoChart().options.series.length;
                    for (i = 0; i < size; i += 1) {
                        getKendoChart().options.series[i].type = newValue;
                    }

                    getKendoChart().refresh();
                }
            });

            if (attrs.tSetExport) {
                var exports = {pdf: exportToPdf, png: exportToPng};
                scope.tSetExport()(exports);
            }

            if (!attrs.tChartTooltip) {
                scope.tChartTooltip = { visible: true };
            }

            scope.chart = {
                theme: 'bootstrap',
                legend: {
                    position: 'bottom'
                },
                title: {
                    position: scope.tTitlePosition,
                    text: scope.tTitle,
                    font: '18px Arial,Helvetica,sans-serif'
                },
                seriesDefaults: {
                    type: scope.tTypeChart
                },
                dataSource: {
                    transport: {
                        read: {
                            url: scope.tRemoteData,
                            dataType: 'json'
                        }
                    }
                },
                series: scope.tSeries,
                valueAxis: {
                    max: scope.tValueMax,
                    min: scope.tValueMin,
                    line: {
                        visible: true
                    },
                    minorGridLines: {
                        visible: false
                    }
                },
                categoryAxis: {
                    field: scope.tCategoryField,
                    labels: {
                        rotation: 'auto'
                    },
                    categories: scope.tCategories,
                    majorGridLines: {
                        visible: true
                    }
                },
                tooltip: scope.tChartTooltip,
                seriesHover: function (e) {
                    if (attrs.tOnHover) {
                        e.id = attrs.tId;
                        scope.tOnHover()(e);
                    }
                },
                seriesClick: function (e) {
                    if (attrs.tOnClick) {
                        e.id = attrs.tId;
                        scope.tOnClick()(e);
                    }
                }
            };
        }
    }
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo REFACTORY
*
* @module totvsButton
* @name totvsButton
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-button.module
*
* @description
*
* Caso exista a necessidade de incluir um botão com uma ação específica dentro de uma tela, a
* diretiva Totvs Button insere um botão dentro de uma tela de detalhamento ou em um formulário de
* edição / inserção.
*
* @restrict E
*
* @property {string} icon Ícone exibido no botão.
* @property {function} ng-click Função que será chamada ao clicar no botão.
*
* @example <totvs-button></totvs-button>
* @example <totvs-button icon="glyphicon-home" ng-click="action()"></totvs-button>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Button
*/

(function () {

    'use strict';

    angular
        .module('totvsButton')
        .directive('totvsButton', totvsButton);

    totvsButton.$inject = ['$compile'];

    function totvsButton($compile) {

        var directive = {
            template: '<div class="field-container">' +
                '<button type="submit" class="form-control btn btn-default"></button></div>',
            restrict: 'E',
            scope: {
                tIcon:  '@',
                tClick: '&'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function link(scope, element, attrs) {

            if (attrs.tClick) {
                element.find('button').attr('ng-click', attrs.tClick);
            }

            if (attrs.tIcon) {
                element.find('button').addClass('glyphicon');
                element.find('button').addClass(attrs.tIcon);
            }

            element.removeAttr('t-click');
            element.removeAttr('t-icon');

            $compile(element.find('button'))(scope.$parent);
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDateRange
* @name totvsDateRange
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-date-range.module
*
* @dependencies
*
* @description
*
* @restrict A
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsDateRange')
        .directive('totvsDateRange', totvsDateRange);

    totvsDateRange.$inject = [
        '$rootScope', '$compile', '$timeout', 'totvsFieldService', 'i18nFilter',
        'totvs.utils.Service'
    ];

    function totvsDateRange(
        $rootScope, $compile, $timeout, totvsField, i18nFilter, totvsUtils) {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                depth: '@',
                format: '@',
                ngBlur: '&',
                ngChange: '&',
                culture: '@',
                ngModel: '=',
                ngDisabled: '&',
                placeholder: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

            var templateElement,
                childScope,
                input,
                inputGroup,
                dateRangeElement,
                isMobile;

            isMobile = totvsUtils.isMobile;

            // Verifica se é mobile
            if (isMobile.any()) {
                // Cria o component mobile
                buildMobileComponent();
            } else {
                // Cria o componente desktop
                buildComponent();
            }

            function buildMobileComponent() {
                scope.ngChangeMobile = ngChangeMobile;
                /* Start html component mobile */
                dateRangeElement = getMobileElement();

                inputGroup = element.find('.input-group');
                inputGroup.append(dateRangeElement);
                inputGroup.addClass('no-block');

                childScope = scope.$new();
                input = inputGroup.find('input');

                totvsField.pattern(
                    scope, attrs, element, childScope, ngModelCtrl, input);

                templateElement = element.find('.field-container');
                $compile(dateRangeElement)(scope);
                /* End html component */

                function ngChangeMobile() {
                    var ini,
                        end;

                    ini = element.find('[startDate]');
                    end = element.find('[endDate]');

                    ini.attr('max', end.val());
                    end.attr('min', ini.val());

                    if (scope.ngChange) {
                        scope.ngChange();
                    }
                }
            }

            function buildComponent() {
                var startDate,
                    endDate,
                    startDateElement,
                    endDateElement,
                    callbackfn,
                    dateRangeElement;

                /* Start component html */
                dateRangeElement = getDesktopElement();

                inputGroup = element.find('.input-group');
                inputGroup.append(dateRangeElement);
                inputGroup.addClass('no-block');
                inputGroup.addClass('date');

                childScope = scope.$new();
                input = inputGroup.find('input');

                callbackfn = function () {
                    var initialDate,
                        finalDate,
                        intialDatePicker,
                        finalDatePicker,
                        value;

                    initialDate = element.find('[startDate]');
                    finalDate = element.find('[endDate]');

                    intialDatePicker = initialDate.data('kendoDatePicker');
                    finalDatePicker = finalDate.data('kendoDatePicker');

                    if (attrs.canclean === 'undefined') {
                        value = undefined;
                    } else if (attrs.canclean === 'null' || attrs.canclean === '') {
                        value = null;
                    } else {
                        value = attrs.canclean;
                    }

                    ngModelCtrl.$setViewValue(value);
                    childScope.ngModel = value;
                    ngModelCtrl.$render();

                    intialDatePicker.value('');
                    finalDatePicker.value('');
                    initializeDate();
                };

                totvsField.pattern(scope, attrs, element, childScope, ngModelCtrl, input);
                totvsField.canclean(attrs, element, childScope, input, callbackfn);
                element.find('button').addClass('hidden-xs');
                templateElement = element.find('.field-container');

                $compile(templateElement)(childScope);
                /*  End html component */

                if (!scope.placeholder) {
                    element.find('[startDate]').attr('placeholder', i18nFilter('l-initial-date'));
                    element.find('[endDate]').attr('placeholder', i18nFilter('l-final-date'));
                } else {
                    element.find('[startDate]').attr('placeholder', scope.placeholder);
                    element.find('[endDate]').attr('placeholder', scope.placeholder);
                }

                if (!attrs.culture) {
                    if ($rootScope.currentuser && $rootScope.currentuser.dialect) {
                        attrs.culture = $rootScope.currentuser.dialect;
                    } else {
                        attrs.culture = 'pt';
                    }
                }

                initializeDate();

                function initializeDate() {
                    scope.maxDate = new Date(2100, 12, 31);
                    scope.minDate = new Date(1900, 1, 1);
                }

                scope.initialDateChanged = function (change) {
                    var dateForSelect,
                        currentValue;

                    currentValue = change.value();

                    change._resetHandler();
                    change.value(currentValue);

                    startDate = childScope.ngModel.startDate;
                    ngModelCtrl.$setViewValue(childScope.ngModel);

                    dateForSelect = startDate || new Date(1900, 1, 1);
                    scope.minDate = dateForSelect;

                    scope.ngChange(startDate);
                };

                scope.finalDateChanged = function (change) {
                    var dateForSelect,
                        currentValue;

                    currentValue = change.value();
                    change._resetHandler();
                    change.value(currentValue);

                    endDate = childScope.ngModel.endDate;
                    ngModelCtrl.$setViewValue(childScope.ngModel);

                    dateForSelect = endDate || new Date(2100, 12, 31);
                    scope.maxDate = dateForSelect;

                    scope.ngChange(endDate);
                };

                scope.endDatePickerOptions = {
                    start: attrs.depth,
                    depth: attrs.depth,
                    format: scope.format,
                    culture: attrs.culture,
                    month: {
                        content: '<div class=\'#= selectRangeFinalDate(data) ? "k-state-hover" : "" #\'>' +
                            '#= data.value #</div>'
                    },
                    change: function () {
                        scope.finalDateChanged(this);
                    }
                };

                scope.startDatePickerOptions = {
                    start: attrs.depth,
                    depth: attrs.depth,
                    format: scope.format,
                    culture: attrs.culture,
                    month: {
                        content: '<div class=\'#= selectRangeInitialDate(data) ? "k-state-hover" : "" #\'>' +
                            '#= data.value #</div>'
                    },
                    change: function () {
                        scope.initialDateChanged(this);
                    }
                };

                window.selectRangeInitialDate = function (data) {
                    var ngModel = childScope.ngModel || undefined;

                    if (ngModel) {
                        if (ngModel.startDate && ngModel.endDate) {
                            return (data.date > ngModel.startDate && data.date <= ngModel.endDate);
                        } else {
                            return false;
                        }
                    }
                };

                window.selectRangeFinalDate = function (data) {
                    var ngModel = childScope.ngModel || undefined;

                    if (ngModel) {
                        if (ngModel.startDate && ngModel.endDate) {
                            return (data.date >= ngModel.startDate && data.date < ngModel.endDate);
                        } else {
                            return false;
                        }
                    }
                };

                function setCss() {
                    $timeout(function () {
                        var span;

                        span = element.find('.k-picker-wrap');

                        if (attrs.$attr.canclean) {
                            span[1].style.borderRadius = '0';
                        }
                    }, 200);
                }

                setCss();

                scope.$watch('[maxDate, minDate]', function () {
                    setCss();
                });
            }

            function getMobileElement() {
                return angular.element('<input type="date" startDate style="padding: 2px"' +
                    'class="form-control" ng-model="ngModel.startDate" ng-disabled="ngDisabled()" ' +
                    'ng-blur="ngBlur()" ng-change="ngChangeMobile()">' +
                    '<span class="input-group-addon">{{::"l-to" | i18n }}</span>' +
                    '<input type="date" class="form-control" endDate style="padding: 2px" ng-model="ngModel.endDate"' +
                    ' ng-disabled="ngDisabled()" ng-blur="ngBlur()" ng-change="ngChangeMobile()">');
            }

            function getDesktopElement() {
                return angular.element('<input kendo-date-picker startDate k-max="maxDate"' +
                    'k-options="startDatePickerOptions" k-ng-model="ngModel.startDate" ng-blur="ngBlur()"' +
                    'style="width:100%" k-rebind="maxDate" ng-disabled="ngDisabled()" />' +
                    '<span class="input-group-addon hidden-xs">{{::"l-to" | i18n }}</span>' +
                    '<input kendo-date-picker endDate k-ng-model="ngModel.endDate" ' +
                    'k-options="endDatePickerOptions" ng-blur="ngBlur()" k-min="minDate" ' +
                    'style="width:100%" k-rebind="minDate" ng-disabled="ngDisabled()" />');
            }
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDatepicker
* @name totvsDatepicker
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 25/10/2016 v12.1.14
*
* @requires
*
* @dependencies
*
* @description
*
* @restrict A
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsDatepicker')
        .directive('totvsDatepicker', totvsDatepicker);

    totvsDatepicker.$inject = ['$rootScope', '$compile', 'totvsFieldService',  'totvs.utils.Service', '$timeout'];

    function totvsDatepicker($rootScope, $compile, totvsField, totvsUtils, $timeout) {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                depth: '@',
                format: '@',
                ngBlur: '&',
                ngChange: '&',
                culture: '@',
                ngModel: '=',
                ngDisabled: '&',
                placeholder: '@'
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            var templateElement,
                inputgroup,
                childScope,
                input,
                datePickerElement,
                isMobile;

            isMobile = totvsUtils.isMobile;

            // Cria o elemento para dispositivo mobile.
            if (isMobile.any()) {
                // Cria o componente mobile
                buildMobileComponent();
            } else {
                // Cria o componente desktop
                buildComponent();
            }

            /* Functions */
            function buildMobileComponent() {
                var callbackfn;

                /* Begin component mobile */
                datePickerElement = getMobileElement();

                inputgroup = element.find('.input-group');
                inputgroup.append(datePickerElement);

                input = inputgroup.find('input');

                totvsField.pattern(scope, attrs, element, scope, ngModelCtrl, input);

                callbackfn = function () {
                    var datepicker, value;

                    switch (attrs.canclean) {
                    case 'undefined':
                        value = undefined;
                        break;
                    case '':
                    case 'null':
                        value = null;
                        break;
                    default:
                        value = attrs.canclean;
                        break;
                    }

                    ngModelCtrl.$setViewValue(value);
                    ngModelCtrl.$render();

                    getDateMobile().value(null);
                };

                totvsField.canclean(attrs, element, scope, input, callbackfn);

                templateElement = element.find('.field-container');
                $compile(templateElement)(scope);
                /* End component */

                function getDateMobile() {
                    return {
                        value: function (value) {
                            element.find('input').val(value);
                        },
                        getValue: function () {
                            return element.find('input').val();
                        }
                    };
                }

                function formatDate(value) {
                    var day,
                        month,
                        year,
                        date;

                    date = angular.copy(value);

                    if (date) {
                        if (!angular.isDate(date)) {
                            date = new Date(date);
                        }

                        day = date.getDate();
                        month = date.getMonth() + 1;
                        year = date.getFullYear();

                        return year + '-' + month + '-' + day;
                    }

                    return date;
                }

                function convertDateToUTC(date) {
                    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(),
                        date.getUTCMinutes(), date.getUTCSeconds());
                }

                function changeMobileValue(value) {
                    var date;

                    if (value) {
                        date = formatDate(value);
                        return getDateMobile().value(date);
                    }
                }

                element.find('input').bind('blur', function () {
                    var inputValue,
                        date,
                        formatToday;

                    inputValue = getDateMobile().getValue();
                    date = convertDateToUTC(new Date(inputValue));
                    formatToday = formatDate(new Date());

                    if (formatDate(date) === formatToday) {
                        return setModelValue(new Date().getTime());
                    }

                    if (ngModelCtrl.$modelValue !== date.getTime()) {
                        return setModelValue(date.getTime());
                    }
                });

                ngModelCtrl.$formatters.push(function (value) {
                    changeMobileValue(value);
                    return value;
                });

                function setModelValue(date) {
                    ngModelCtrl.$setViewValue(date);
                }

                function getMobileElement() {
                    return angular.element('<input type="date" class="form-control"' +
                        'placeholder="{{::placeholder}} ng-disabled="ngDisabled()">');
                }

                if (attrs.$attr.focus) {
                    $timeout(function () {
						datePickerElement.focus();
                    }, 200);
                }
            }

            function buildComponent() {
                var callbackfn,
                    dataDatePicker;

                /* Begin component desktop */
                datePickerElement = getDesktopElement();

                inputgroup = element.find('.input-group');
                inputgroup.append(datePickerElement);
                inputgroup.addClass('date');

                childScope = scope.$new();
                input = inputgroup.find('input');

                callbackfn = function () {
                    var datepicker, value;

                    switch (attrs.canclean) {
                    case 'undefined':
                        value = undefined;
                        break;
                    case '':
                    case 'null':
                        value = null;
                        break;
                    default:
                        value = attrs.canclean;
                        break;
                    }

                    ngModelCtrl.$setViewValue(value);
                    ngModelCtrl.$render();

                    getDatePicker().value(null);
                };

                totvsField.pattern(scope, attrs, element, childScope, ngModelCtrl, input);
                totvsField.canclean(attrs, element, childScope, input, callbackfn);

                templateElement = element.find('.field-container');
                $compile(templateElement)(childScope);
                /* End html component */

                if (!attrs.culture) {
                    if ($rootScope.currentuser && $rootScope.currentuser.dialect) {
                        attrs.culture = $rootScope.currentuser.dialect;
                    } else {
                        attrs.culture = 'pt';
                    }
                }

                function getDatePicker() {
                    if (dataDatePicker) { return dataDatePicker; }

                    dataDatePicker = element.find('input').data('kendoDatePicker');

					return dataDatePicker;
                }

                function changeComponentValue(value) {
                    if (value) {
                        if (angular.isNumber(value)) {
                            return getDatePicker().value(new Date(value));
                        }

                        return getDatePicker().value(value);
                    }
                }

                ngModelCtrl.$formatters.push(function (value) {
					if (value) {
						if (!getDatePicker()) {
							$timeout(function () {
								changeComponentValue(value);
								return value;
							}, 250);
						} else {
							changeComponentValue(value);
							return value;
						}
					}
                });

                scope.dateSelectorOptions = {
                    start: attrs.depth,
                    depth: attrs.depth,
                    format: scope.format,
                    culture: attrs.culture,
                    change: function () {
                        if (this.value()) {
                            ngModelCtrl.$setViewValue(this.value().getTime());
                        } else {
                            ngModelCtrl.$setViewValue(null);
                        }
                    }
                };

                function getDesktopElement() {
                    return angular.element('<input kendo-date-picker k-options="dateSelectorOptions" ng-blur="ngBlur()"' +
                        ' placeholder="{{::placeholder}}" style="width: 100%" ng-disabled="ngDisabled()"/>');
                }

                $timeout(function () {
                    var span;

                    span = element.find('.k-picker-wrap');

                    if (attrs.$attr.focus) {
                        element.find('input.k-input').focus();
                    }

                    if (attrs.$attr.canclean) {
                        span.css('border-bottom-right-radius', '0px');
                        span.css('border-top-right-radius', '0px');
                    }
                }, 200);
            }
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDecimal
* @name totvsDecimal
* @object directive
*
* @created 30/08/2016 v12.1.13
* @updated 30/08/2016 v12.1.13
*
* @requires
*
* @dependencies
*
* @description
*
* @restrict A
*
* @example
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsDecimal')
        .directive('totvsDecimal', totvsDecimal);

    totvsDecimal.$inject = ['$compile', 'totvsFieldService', '$timeout'];

    function totvsDecimal($compile, totvsField, $timeout) {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                ngDisabled: '&',
                ngBlur: '&',
                ngChange: '&',
                ngModel: '=',
                placeholder: '@',
                ngMinlength: '@',
                ngPattern: '@',
                ngRequired: '@',
                ngMaxlength: '@',
                aDec: '@',
                aSep: '@',
                mDec: '@'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl do elemento da diretiva
        */
        function link(scope, element, attrs, ngModelCtrl) {
            var templateElement,
                inputgroup,
                decimalElement;

            /* start build component html*/
            decimalElement = getElement();

            if (scope.ngPattern) { decimalElement.attr('ng-pattern', scope.ngPattern); }

            inputgroup = element.find('.input-group');
            inputgroup.append(decimalElement);

            totvsField.pattern(scope, attrs, element, scope, ngModelCtrl, decimalElement);
            totvsField.canclean(attrs, element, scope, decimalElement);

            templateElement = element.find('.field-container');
            $compile(templateElement)(scope);

            totvsField.checkField(scope, decimalElement, ngModelCtrl);
            /* end component html */


            /* Functions */
            /* Foca o element caso houver o attr focus*/
            if (attrs.$attr.focus) {
                $timeout(function () {
                    decimalElement.focus();
                }, 200);
            }

            function getElement() {
                return angular.element('<input class="form-control" data-a-sep="{{::aSep}}" m-dec="{{::mDec}}"' +
                    ' autonumeric data-a-dec="{{::aDec}}" ng-model="ngModel" placeholder="{{::placeholder}}"' +
                    ' ng-model-options="{ updateOn: \'blur\' }" ng-change="ngChange()" ng-blur="ngBlur()"' +
                    ' ng-disabled="ngDisabled()" ng-minlength="{{::ngMinlength}}" type="text"' +
                    ' ng-maxlength="{{::ngMaxlength}}" ng-required="{{::ngRequired}}">');
            }
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsDiagram
* @name totvsDiagram
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-diagram.module
*
* @description
*
* Componente WYSIWYG para manipulação de diagramas.
*
* @restrict E
*
* @property {boolean} t-auto-bind Define se o bind do datasource será automático.
* @property {object} tConnectionDefaults Configuração das conexões.
* @property {object} tDataSource Fonte de dados.
* @property {object} tConnectionsDataSource Fonte de dados das conexões.
* @property {object} tEditable Configurações de edição.
* @property {string} t-height Altura do componente.
* @property {object} tLayout Configurações de layout do diagrama.
* @property {function} tOnChange Evento disparado quando alguma alteração acontece nos nós ou conexões.
* @property {function} tOnClick Evento disparado ao clicar em um nó ou conexão.
* @property {function} tOnDataBound Evento disparado ao final do binding.
* @property {function} tOnDrag Evento disparado ao arrastar um nó ou conexão.
* @property {function} tOnDragEnd Evento disparado ao parar de arrastar um nó ou conexão.
* @property {function} tOnDragStart Evento disparado ao começar a arrastar um nó ou conexão.
* @property {function} tOnMouseEnter Evento disparado quando o ponteiro do mouse entra em um nó.
* @property {function} tOnMouseLeave Evento disparado quando o ponteiro do mouse sai de um nó.
* @property {function} tOnSelect Evento disparado ao selecionar um ou mais nós e/ou conexões.
* @property {object} tPannable Configurações de pan (arrastar o diagrama inteiro).
* @property {object} tSelectable Configurações da seleção.
* @property {object} tScopeField Propriedade para acessar a API do totvs-diagram.
* @property {object} tShapeDefaults Configuração das formas dos nós.
* @property {string} t-width Largura do componente. Largura do componente.
*
* @example
*
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Diagram
*/

(function () {

    'use strict';

    angular
        .module('totvsDiagram')
        .directive('totvsDiagram', totvsDiagram);

    totvsDiagram.$inject = ['$compile', 'totvsDiagramConstant', 'TotvsUtilsKendoService'];

    function totvsDiagram($compile, totvsDiagramConstant, totvsUtilsKendoService) {

        var diagram = {
            restrict: 'E',
            scope: {
                tAutoBind: '@',
                tConnectionDefaults: '=',
                tDataSource: '=',
                tConnectionsDataSource: '=',
                tEditable: '=',
                tHeight: '@',
                tLayout: '=',
                tOnChange: '&',
                tOnClick: '&',
                tOnDataBound: '&',
                tOnDrag: '&',
                tOnDragEnd: '&',
                tOnDragStart: '&',
                tOnMouseEnter: '&',
                tOnMouseLeave: '&',
                tOnSelect: '&',
                tPannable: '=',
                tSelectable: '=',
                tScopeField: '=',
                tShapeDefaults: '=',
                tWidth: '@'
            },
            link: link
        };

        return diagram;

        function link(scope, element, attrs) {

            buildDirective(scope, element, attrs);

            function buildDirective(scope, element, attrs) {
                var diagram = getDiagram(scope, element);

                setSize(diagram, attrs);

                scope.options = {
                    // sets the auto bind property
                    autoBind: getAutoBindConfig(scope),

                    // sets the diagram connections
                    connectionDefaults: getDiagramConnections(scope),

                    // sets the diagram editable configuration
                    editable: getEditableConfig(scope),

                    // sets the diagram layout
                    layout: getDiagramLayout(scope),

                    // sets the diagram pannable configuration
                    pannable: getPannableConfig(scope),

                    // sets the diagram selectable configuration
                    selectable: getSelectableConfig(scope),

                    // sets the diagram shape defaults
                    shapeDefaults: getDiagramShape(scope),

                    // sets the dataSource object. It must be the last property
                    // so all other configurations will be applied on DataBound
                    dataSource: getDataSource(scope, scope.tDataSource),

                    // sets the connections dataSource
                    connectionsDataSource: getConnectionsDataSource(scope, scope.tConnectionsDataSource)
                };

                $compile(diagram)(scope);

                setExposedApi(scope);

                removeAttributes(element);
            }

            function getDiagram(scope, element) {
                var diagram = '<div kendo-diagram    = "widget"' +
                                  ' k-options        = "options"' +
                                  ' k-on-change      = "tOnChange({e: kendoEvent})"' +
                                  ' k-on-click       = "tOnClick({e: kendoEvent})"' +
                                  ' k-on-data-bound  = "tOnDataBound()"' +
                                  ' k-on-drag        = "tOnDrag({e: kendoEvent})"' +
                                  ' k-on-drag-end    = "tOnDragEnd({e: kendoEvent})"' +
                                  ' k-on-drag-start  = "tOnDragStart({e: kendoEvent})"' +
                                  ' k-on-mouse-enter = "tOnMouseEnter({e: kendoEvent})"' +
                                  ' k-on-mouse-leave = "tOnMouseLeave({e: kendoEvent})"' +
                                  ' k-on-select      = "tOnSelect({e: kendoEvent})">' +
                              '</div>';

                element.html(diagram);

                return element.find('[kendo-diagram]');
            }

            function setSize(diagram, attrs) {
                var style;

                // if the user defined a specific height uses it.
                // default is 250px.
                if (attrs.tHeight) {
                    style = 'height:' + attrs.tHeight + ';';
                } else {
                    style = 'height:300px;';
                }

                // if the user defined a specific width uses it.
                // default is 100%.
                if (attrs.tWidth) {
                    style += 'width:' + attrs.tWidth;
                } else {
                    style += 'width:100%';
                }

                // sets the style attribute...
                diagram.attr('style', style);
            }

            function getAutoBindConfig(scope) {
                return scope.tAutoBind || true;
            }

            function getDiagramConnections(scope) {
                var defs = {};

                if (scope.tConnectionDefaults) {
                    defs.editable = getConnectionEditable(scope.tConnectionDefaults.editable);

                    defs.selectable =
                        !scope.tConnectionDefaults.selectable || scope.tConnectionDefaults.selectable === null ?
                            scope.tConnectionDefaults.selectable : true;

                    defs.stroke = getConnectionStroke(scope.tConnectionDefaults.stroke);

                    defs.style = scope.tConnectionDefaults.style || totvsDiagramConstant.CONNECTIONS.style;
                }

                return defs;
            }

            function getConnectionEditable(editable) {
                var edt = true;

                if (editable) {
                    if (typeof editable === 'boolean') {
                        edt = editable;
                    }
                    else if (typeof editable === 'object') {
                        edt = {};
                        edt.drag = editable.drag || true;
                        edt.remove = editable.remove || true;
                    }
                }

                return edt;
            }

            function getConnectionStroke(stroke) {
                var strokeDefaults = totvsDiagramConstant.CONNECTIONS.stroke;

                if (stroke) {
                    if (stroke.color) {
                        strokeDefaults.color = stroke.color;
                    }

                    if (stroke.width) {
                        strokeDefaults.width = stroke.width;
                    }
                }

                return strokeDefaults;
            }

            function getEditableConfig(scope) {
                var editable = false;

                if (typeof scope.tEditable === 'boolean') {
                    editable = scope.tEditable;
                } else if (typeof scope.tEditable === 'object') {
                    editable = {};

                    editable.connectionTemplate = scope.tEditable.connectionTemplate;

                    editable.drag = scope.tEditable.drag === undefined || scope.tEditable.drag === null ?
                        true : scope.tEditable.drag;

                    editable.tools = scope.tEditable.tools;

                    editable.remove = scope.tEditable.remove === undefined || scope.tEditable.remove === null ?
                        true : scope.tEditable.remove;

                    editable.resize = scope.tEditable.resize === undefined || scope.tEditable.resize === null ?
                        true : scope.tEditable.resize;

                    editable.shapeTemplate = scope.tEditable.shapeTemplate;
                }

                return editable;
            }

            function getDiagramLayout(scope) {
                if (scope.tLayout) {
                    var userLayout = {};

                    // gets the layout type or the default one.
                    userLayout.type = scope.tLayout.type ||
                        totvsDiagramConstant.LAYOUT.type;

                    // gets the layout subtype or the default one.
                    userLayout.subtype = scope.tLayout.subtype ||
                        totvsDiagramConstant.LAYOUT.subtype;

                    // gets the layout horizontalSeparation or the default one.
                    userLayout.horizontalSeparation = scope.tLayout.horizontalSeparation ||
                        totvsDiagramConstant.LAYOUT.horizontalSeparation;

                    // gets the layout verticalSeparation or the default one.
                    userLayout.verticalSeparation = scope.tLayout.verticalSeparation ||
                        totvsDiagramConstant.LAYOUT.verticalSeparation;

                    return userLayout;
                } else {
                    // returns the default diagram layout.
                    return {
                        type: totvsDiagramConstant.LAYOUT.type,
                        subtype: totvsDiagramConstant.LAYOUT.subtype,
                        horizontalSeparation: totvsDiagramConstant.LAYOUT.horizontalSeparation,
                        verticalSeparation: totvsDiagramConstant.LAYOUT.verticalSeparation
                    };
                }
            }

            function getPannableConfig(scope) {
                var pannable = true;

                if (typeof scope.tPannable === 'boolean') {
                    pannable = scope.tPannable;
                } else if (typeof scope.tPannable === 'object') {
                    pannable = {};
                    pannable.key = scope.tPannable.key || 'ctrl';
                }

                return pannable;
            }

            function getSelectableConfig(scope) {
                var selectable = false;

                if (typeof scope.tSelectable === 'boolean') {
                    selectable = scope.tSelectable;
                } else if (typeof scope.tSelectable === 'object') {
                    selectable = {};
                    selectable.multiple = typeof scope.tSelectable.multiple === 'boolean' ?
                        scope.tSelectable.multiple : true;
                }

                return selectable;
            }

            function getDiagramShape(scope) {
                var shapeDefaults = totvsDiagramConstant.SHAPES.rectShape;

                if (scope.tShapeDefaults) {

                    if (scope.tShapeDefaults.style) {
                        shapeDefaults = getShapeStyle(scope.tShapeDefaults.style, shapeDefaults);
                    }

                    if (scope.tShapeDefaults.visual) {
                        shapeDefaults.visual = scope.tShapeDefaults.visual;
                    }

                    shapeDefaults.content = getDiagramShapeContent(scope);
                }

                return shapeDefaults;
            }

            function getShapeStyle(style, shapeDefaults) {

                if (style.type) {

                    switch (style.type) {
                        case totvsDiagramConstant.SHAPES.types.CIRCLE:
                            shapeDefaults = totvsDiagramConstant.SHAPES.circleShape;
                            shapeDefaults.radius = scope.tShapeDefaults.radius || shapeDefaults.radius;
                            break;

                        case totvsDiagramConstant.SHAPES.types.RECT:
                            shapeDefaults = totvsDiagramConstant.SHAPES.rectShape;
                            shapeDefaults.width = scope.tShapeDefaults.width || shapeDefaults.width;
                            shapeDefaults.height = scope.tShapeDefaults.height || shapeDefaults.height;
                            break;

                        case totvsDiagramConstant.SHAPES.types.SQUARE:
                            shapeDefaults = totvsDiagramConstant.SHAPES.squareShape;
                            shapeDefaults.width = scope.tShapeDefaults.width || shapeDefaults.width;
                            shapeDefaults.height = scope.tShapeDefaults.height || shapeDefaults.height;
                            break;
                    }
                }

                return shapeDefaults;
            }

            function getDiagramShapeContent(scope) {
                var content;

                if (scope.tShapeDefaults.content) {
                    content = {};

                    content.template = scope.tShapeDefaults.content.template || {};
                    content.fonteSize = scope.tShapeDefaults.content.fontSize || 17;
                }

                return content;
            }

            function getDataSource(scope, dataSource) {
                var data, schema;

                if (dataSource) {
                    validataDataSource(dataSource);

                    if (dataSource.data) {
                        data = dataSource.data;
                    }

                    if (dataSource.children) {
                        var children;

                        if (typeof dataSource.children === 'string') {
                            children = dataSource.children;
                        } else if (dataSource.children.constructor === Array) {
                            children = getChildrenSchema(children);
                        }

                        schema = { model: { children: children } };
                    }

                    if (dataSource.id) {
                        if (schema) {
                            schema.model.id = dataSource.id;
                        } else {
                            schema = { model: { id: dataSource.id } };
                        }
                    }

                    return {
                        data: data,
                        schema: schema
                    };
                }
            }

            function validataDataSource(dataSource) {
                if (dataSource.data && dataSource.data.constructor !== Array) {
                    throw new TypeError('The datasource\'s data property must be an array.');
                }

                if (dataSource.children) {
                    if (typeof dataSource.children !== 'string' && dataSource.children.constructor !== Array) {
                        throw new TypeError(
                            'The datasource\'s children property must be an array of strings or a string.'
                        );
                    }
                }

                if (dataSource.id && typeof dataSource.id !== 'string') {
                    throw new TypeError('The datasource\'s id property must be a string.');
                }
            }

            function getChildrenSchema(childrenArray) {
                if (childrenArray.length === 1) {
                    if (typeof childrenArray[0] !== 'string') {
                        throw new TypeError('The children array items must be strings.');
                    }

                    return childrenArray[0];
                }

                return {
                    schema: {
                        data: childrenArray[0],
                        model: {
                            children: getChildrenSchema(childrenArray.shift())
                        }
                    }
                };
            }

            function getConnectionsDataSource(scope, dataSource) {
                if (dataSource && dataSource.contructor === Array) {
                    return dataSource;
                }
            }

            function setExposedApi(scope) {
                if (scope.tScopeField) {
                    var api = {};

                    api.bringIntoView = function (obj, options) {
                        scope.widget.bringIntoView(obj, options);
                    };

                    api.clear = function () {
                        scope.widget.clear();
                    };

                    api.exportAsImage = function (fileName, width, height) {
                        var options = {};

                        if (width) {
                            options.width = width;
                        }

                        if (height) {
                            options.height = height;
                        }

                        scope.widget.exportImage(options).done(function (data) {
                            kendo.saveAs({
                                dataURI: data,
                                fileName: fileName || 'diagram.png'
                            });
                        });
                    };

                    api.exportAsPDF = function (creator, fileName, keywords, landscape, margin,
                        paperSize, subject, title) {

                        var options = {};

                        options.creator = creator || 'TOTVS UI PDF Generator';
                        options.keywords = keywords || null;
                        options.landscape = landscape || false;
                        options.marginLeft = totvsUtilsKendoService.getMargin(margin);
                        options.paperSize = totvsUtilsKendoService.getPaperSize(paperSize);
                        options.subject = subject || null;
                        options.title = title || null;

                        scope.widget.exportPDF(options).done(function (data) {
                            kendo.saveAs({
                                dataURI: data,
                                fileName: fileName || 'diagram.pdf'
                            });
                        });
                    };

                    api.exportAsSVG = function (fileName) {
                        scope.widget.exportSVG().done(function (data) {
                            kendo.saveAs({
                                dataURI: data,
                                fileName: fileName || 'diagram.svg'
                            });
                        });
                    };

                    api.focus = function () {
                        scope.widget.focus();
                    };

                    api.options = scope.widget.options;

                    api.refresh = function (dataSource) {
                        scope.widget.setDataSource(getDataSource(scope, dataSource));
                    };

                    api.shapes = scope.widget.shapes;

                    api.toJSON = function () {
                        return scope.widget.dataSource.data().toJSON();
                    };

                    scope.tScopeField = api;
                }
            }

            function removeAttributes(element) {
                element.removeAttr('t-auto-bind');
                element.removeAttr('t-connection-defaults');
                element.removeAttr('t-data-source');
                element.removeAttr('t-connections-data-source');
                element.removeAttr('t-editable');
                element.removeAttr('t-height');
                element.removeAttr('t-layout');
                element.removeAttr('t-on-change');
                element.removeAttr('t-on-click');
                element.removeAttr('t-on-data-bound');
                element.removeAttr('t-on-drag');
                element.removeAttr('t-on-drag-end');
                element.removeAttr('t-on-drag-start');
                element.removeAttr('t-on-mouse-enter');
                element.removeAttr('t-on-mouse-leave');
                element.removeAttr('t-on-select');
                element.removeAttr('t-pannable');
                element.removeAttr('t-selectable');
                element.removeAttr('t-scope-field');
                element.removeAttr('t-shape-defaults');
                element.removeAttr('t-width');
            }
        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module totvsDivider
* @name totvsDivider
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-divider.module
*
* @dependencies
*
* @description Inclui uma linha divisória entre os conteúdos forçando a quebra / divisão do conteúdo exibido.
*
* @restrict E
*
* @example
*
* <totvs-divider></totvs-divider>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Divider
*/

(function () {

    'use strict';

    angular
        .module('totvsDivider')
        .directive('totvsDivider', totvsDivider);

    totvsDivider.$inject = [];

    function totvsDivider() {

        var directive = {
            template: '<div class="row"><div class="col-xs-12"><hr class="divider"></hr></div></div>',
            replace: true,
            restrict: 'E'
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsEditable
* @name totvsEditable
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-editable.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsEditable')
        .directive('totvsEditable', totvsEditable);

    totvsEditable.$inject = ['$compile', '$parse', '$interpolate'];

    function totvsEditable($compile, $parse, $interpolate) {

        var directive = {
            restrict: 'E',
            scope: {
                value: '@',
                placement: '@',
                onComplete: '&'
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        */
        function compile(element) {

            var el,
                content,
                contentField,
                title,
                isSelect,
                oldModelName;

            el = angular.element('<a class="inline-edit" ng-click="onClick()">{{ value }}</a>');

            content = angular.element('<div class="row" style="margin-bottom: -10px;"></div>');
            content.html(angular.copy(element.html()));

            contentField = content.find('[ng-model]');

            content.append(
                '<div class="actions col-xs-12" style="background-color: #f7f7f7; padding-top: 5px; ' +
                    'padding-bottom: 5px; margin-top: 15px; border-top: 1px solid #ebebeb" ng-click="onCancel()">' +
                    '<button type="button" class="btn btn-default pull-right">{{ \'btn-cancel\' | i18n }}</button>' +
                    '<button type="button" class="btn btn-primary pull-right" style="margin-right: 10px;" ' +
                        'ng-click="onApply()">{{ \'btn-apply\' | i18n }}</button>' +
                '</div>'
            );

            if (content.find('label').length > 0) {
                title = content.find('label').html();
                content.find('label').remove();
            } else {
                title = content.find('field').attr('label');
                content.find('field').removeAttr('label');
                content.find('label').remove();
            }

            content.find('field').attr('ng-keyup', 'onKeyup($event)');

            oldModelName = contentField.attr('ng-model');
            contentField.attr('ng-model', 'editable.newValue');

            isSelect = contentField.find('ui-select-choices').length > 0;

            element.html(el);

            return function (scope, element) {

                $compile(element.find('a'))(scope);

                scope.removeAll = function () {
                    $('totvs-editable').each(function (i, o) {
                        if ($(o).data('bs.popover')) {
                            $(o).popover('destroy');
                        }
                    });
                };

                scope.onKeyup = function (event) {

                    if (event.keyCode === 13) { // Enter

                        var target = event.target;
                        target.blur();

                        event.stopPropagation();
                        scope.onApply();

                    } else if (event.keyCode === 27) { // ESC
                        scope.onCancel();
                    }
                };

                scope.onClick = function () {

                    var compiledContent = content.clone();

                    if (isSelect === true) {

                        scope.$parent.editable = {
                            newValue: $parse(oldModelName)(scope.$parent)
                        };

                        $compile(compiledContent.find('field'))(scope.$parent);
                        $compile(compiledContent.find('.actions'))(scope);

                    } else {

                        scope.editable = {
                            newValue: $parse(oldModelName)(scope.$parent)
                        };

                        $compile(compiledContent)(scope);
                    }

                    if (title) {
                        title = $interpolate(title)(scope);
                    }

                    scope.removeAll();

                    $(element).popover({
                        html: true,
                        title: title,
                        content: compiledContent,
                        container: 'body',
                        placement: scope.placement || 'auto bottom'
                    });

                    $(element).on('shown.bs.popover', function () {
                        var inputs = compiledContent.find('input');

                        if (inputs) {
                            inputs[0].focus();
                        }
                    });
                };

                scope.onApply = function () {

                    var editableModel;

                    if (isSelect === true) {
                        editableModel = scope.$parent.editable;
                    } else {
                        editableModel = scope.editable;
                    }

                    if (scope.onComplete(scope) !== undefined &&
                        typeof scope.onComplete(scope) === 'function') {
                        scope.onComplete(scope)(editableModel.newValue, $parse(oldModelName)(scope.$parent));
                    } else {
                        $parse(oldModelName).assign(scope.$parent, editableModel.newValue);
                    }

                    scope.onCancel();
                };

                $('.modal').scroll(function () {
                    $(element).popover('destroy');
                });

                $('.container-fluid').scroll(function () {
                    $(element).popover('destroy');
                });

                scope.onCancel = function () {
                    $(element).popover('destroy');
                };

                scope.$on('$destroy', function () {
                    scope.removeAll();
                });
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvs-editor
* @name totvsEditor
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-editor.module
*
* @description
*
* Componente WYSIWYG para criação, edição e formatação de textos, parágrafos, listas, imagens,
* hiperlinks e outros elementos HTML.
*
* @restrict E
*
* @property {string} t-height Altura do componente.
* @property {string} t-mode Modo de exibição do componente.
* @property {object} t-model Modelo associado ao componente.
* @property {function} t-on-change Evento disparado quando ocorre uma mudança no texto.
* @property {function} t--on-pdf-export Evento disparado ao exportar para PDF.
* @property {string} t-readonly Define se o elemente é somente leitura.
* @property {object} t-scope-field API exposta pelo componente.
* @property {array} t-tools Funções da barra de ferramentas do componente que estarão disponíveis.
* @property {string} t-width Largura do componente.
*
* @example
*
* <totvs-editor t-model="myCtrl.model"></totvs-editor>
* <totvs-editor t-model="myCtrl.model" heigth="400px" t-width="80%" mode="inline" ng-readonly="myCtrl.readonly"
*               t-scope-field="myCtrl.api" t-tools="myCtrl.wditorTools" t-change="myCtrl.onChange()"
*               t-pdf-export="myCtrl.onExport(e)"></totvs-editor>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Editor
*/

(function () {

    'use strict';

    angular
        .module('totvsEditor')
        .directive('totvsEditor', totvsEditor);

    totvsEditor.$inject = ['$compile', 'totvsEditorConstants'];

    function totvsEditor($compile, totvsEditorConstants) {
        return {
            restrict: 'E',
            scope: {
                tHeight: '@',
                tMode: '@',
                tModel: '=',
                tOnChange: '&',
                tOnPdfExport: '&',
                tReadonly: '@',
                tScopeField: '=',
                tTools: '=',
                tWidth: '@'
            },
            link: link
        };

        /**
         * @name link
         *
         * @description Função link da diretiva
         *
         * @param {object} scope Escopo da diretiva
         * @param {element} element Elemento da diretiva
         * @param {object} attrs Atributos do elemento da diretiva
         */
        function link(scope, element, attrs) {

            buildDirective(scope, element, attrs);

            function buildDirective(scope, element, attrs) {
                var editor;

                // gets the kendo editor...
                editor = getEditor(scope, element, attrs);

                // creates the options property in the scope...
                setOptions(scope);

                // sets the attributes for the kendo widget...
                setAttributes(editor, attrs);

                // removes the attributes from the <totvs-editor> element...
                removeAttributes(element);

                // compiles...
                $compile(editor)(scope);

                // expose methods...
                setExposedApi(scope);
            }

            function getEditor(scope, element, attrs) {
                var inlineMode;

                // checks inline mode should be applied. Default mode is classic.
                inlineMode = attrs.tMode && attrs.tMode === 'inline';

                // if inline mode, uses a <div> as a container. Otherwise uses a <textarea> for classic mode.
                // default is classic mode
                if (inlineMode) {
                    element.html('<div kendo-editor="widget"' +
                                     ' k-ng-model="tModel"' +
                                     ' k-options="options"' +
                                     ' k-on-pdf-export="tOnPdfExport({ e: kendoEvent })"' +
                                     ' k-on-change="tOnChange()">' +
                                 '</div>');
                } else {
                    element.html('<textarea kendo-editor="widget"' +
                                          ' k-ng-model="tModel"' +
                                          ' k-options="options"' +
                                          ' k-on-pdf-export="tOnPdfExport({ e: kendoEvent })"' +
                                          ' k-on-change="tOnChange()">' +
                                 '</textarea>');
                }

                return element.find('[kendo-editor]');
            }

            function setOptions(scope) {
                scope.options = {
                    tools: getTools(scope)
                };
            }

            function getTools(scope) {
                var i, parsedTools;

                scope.tools = scope.$eval('tTools');
                parsedTools = [];

                if (scope.tTools) {
                    if (scope.tTools.constructor !== Array) {
                        scope.tTools = [scope.tTools];
                    }

                    // iterate through all item in scope.tTools array and removes any not allowed tool...
                    for (i = 0; i < scope.tTools.length; i += 1) {
                        // checks if the item belongs to the allowed tools or its a tool group...
                        if (totvsEditorConstants.ALLOWED_TOOLS.indexOf(scope.tTools[i]) !== -1) {
                            //adds the tool to the newTool object...
                            parsedTools.push(scope.tTools[i]);
                        } else if (totvsEditorConstants.TOOL_GROUPS.hasOwnProperty(scope.tTools[i])) {
                            // adds the group's tools to the newTool object...
                            parsedTools = parsedTools.concat(totvsEditorConstants.TOOL_GROUPS[scope.tTools[i]]);
                        }
                    }
                }

                // if scope was not set or its an empty array, sets it with basicFormatting tools...
                if (parsedTools.length === 0) {
                    parsedTools = totvsEditorConstants.TOOL_GROUPS.defaultTools;
                }

                return parsedTools;
            }

            function setAttributes(editor, attrs) {
                var style;

                // if the user defined a specific tHeight uses it.
                // default is 250px.
                if (attrs.tHeight) {
                    style = 'height:' + attrs.tHeight + ';';
                } else {
                    style = 'height:250px;';
                }

                // if the user defined a specific width uses it.
                // default is 100%.
                if (attrs.tWidth) {
                    style += 'width:' + attrs.tWidth;
                } else {
                    style += 'width:100%';
                }

                // sets the style attribute...
                editor.attr('style', style);

                // watchs the scope so it will handle the readOnly property correctly...
                setReadOnlyAttribute(scope, element, attrs);
            }

            function setReadOnlyAttribute(scope, element, attrs) {
                scope.$on('kendoWidgetCreated', function (e, widget) {
                    if (widget === scope.widget) {
                        var editorBody = $(scope.widget.body);

                        attrs.$observe('tReadonly', function (value) {
                            value = scope.$eval(value);

                            if (value) {
                                editorBody.removeAttr('contenteditable').find('a').on('click.readonly', false);
                            } else {
                                editorBody.attr('contenteditable', true).find('a').off('click.readonly');
                            }
                        });
                    }
                });
            }

            function removeAttributes(element) {
                element.removeAttr('t-height');
                element.removeAttr('t-mode');
                element.removeAttr('t-model');
                element.removeAttr('t-on-change');
                element.removeAttr('t-on-pdf-export');
                element.removeAttr('t-readonly');
                element.removeAttr('t-scope-field');
                element.removeAttr('t-tools');
                element.removeAttr('t-width');
            }

            function setExposedApi(scope) {
                if (scope.tScopeField) {
                    var api = {};

                    api.value = function (encoded) {
                        if (encoded) {
                            return scope.widget.encodedValue();
                        } else {
                            return scope.widget.value();
                        }
                    };

                    api.focus = function () {
                        scope.widget.focus();
                    };

                    api.saveAsPDF = function () {
                        return scope.widget.saveAsPDF();
                    };

                    scope.tScopeField = api;
                }
            }
        }
    }
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsField
* @name totvsField
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-field.module totvs-field.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
* <totvs-field></totvs-field>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Field
*/

(function () {

    'use strict';

    angular
        .module('totvsField')
        .directive('totvsField', totvsField);

    totvsField.$inject = ['$compile'];

    function totvsField($compile) {

        var directive = {
            restrict: 'E',
            require: '?ngModel',
            priority: 300,
            compile: compile
        };

        return directive;

        function compile(element) {

            var template = angular.element(
                '<div class="field-container"><label class="field-label"></label>' +
                    '<div class="field-input">' +
                        '<div class="input-group"></div>' +
                        '<div class="tooltip bottom">' +
                            '<div class="tooltip-inner"></div>' +
                            '<div class="tooltip-arrow"></div>' +
                        '</div>' +
                    '</div>' +
                '</div>');

            element.append(template);
            $compile(template);
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsExecution
* @name totvsExecution
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-execution.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsExecution')
        .directive('totvsExecution', totvsExecution);

    totvsExecution.$inject = ['$compile', '$filter'];

    function totvsExecution($compile, $filter) {

        var directive = {
            restrict: 'E',
            require: '?ngModel',
            scope: {
                hideRepeat: '@',
                requiredFilename: '@'
            },
            controller: 'TotvsExecutionController',
            compile: compile
        };

        return directive;

        function compile(element) {

            var itens;

            itens = element.children('totvs-execution-item').clone() || [];

            element.html(
                '<div class="row page-execution">' +
                    '<div id="div-execution-navigation" class="col-lg-3 col-md-3 hidden-xs hidden-sm" ' +
                        'style="display:none">' +
                        '<nav class="page-execution-navigation"><ul class="list-unstyled"></ul></nav>' +
                    '</div>' +
                    '<div id="div-execution-content" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
                        '<div class="page-execution-content" id="execution-content"></div>' +
                    '</div>' +
                '</div>');

            return function postLink(scope, element) {

                var i = 0,
                    ngModel,
                    navigationContainer,
                    contentContainer,
                    contentNotify,
                    contentExecution,
                    requiredFilename,
                    existsContentExecution = false,
                    fnAppendNavigation,
                    fnAppendContent;

                ngModel = element.attr('ng-model') || 'controller.model';

                navigationContainer = element.find('ul');
                contentContainer = element.find('.page-execution-content');

                requiredFilename =
                    (scope.requiredFilename === true || scope.requiredFilename === 'true') ? 'required' : '';

                contentExecution =
                    '<field type="input" class="col-md-12" ng-model="' + ngModel + '.filename" ' +
                        'label="{{\'l-output-filename\' | i18n}}" ' + requiredFilename + '>' +
                    '</field>' +
                    '<totvs-schedule class="col-md-12" ng-model="' + ngModel + '.schedule" ' +
                        ' hide-repeat="' + scope.hideRepeat + '">' +
                    '</totvs-schedule>';

                contentNotify =
                    '<field type="checkbox" class="col-md-6" ng-model="' + ngModel + '.notify" ' +
                        'label="{{\'l-send-notification-process-finished\' | i18n}}">' +
                    '</field>' +
                    '<field type="checkbox" class="col-md-6" ng-model="' + ngModel + '.notifyEmail" ' +
                        'label="{{\'l-send-report-process-finished\' | i18n}}">' +
                    '</field>' +
                    '<field type="textarea" class="col-md-12" ng-model="' + ngModel + '.notifyEmailList" ' +
                        'label="{{\'l-add-email-recipients\' | i18n}}">' +
                    '</field>';

                // Insere os navegadores
                fnAppendNavigation = function (parent, index, title) {
                    var navigationItem = angular.element('<li></li>');

                    navigationItem.attr('du-smooth-scroll', 'execution-step-' + index);
                    navigationItem.attr('du-scrollspy', 'execution-step-' + index);
                    navigationItem.attr('class', (index === 1) ? 'active' : '');
                    navigationItem.append(title);

                    parent.append(navigationItem);
                };

                fnAppendContent = function (parent, index, title, content) {

                    var contentItem = angular.element(
                        '<div class="page-execution-' + index + '" id="execution-step-' + index + '">' +
                            '<fieldset><legend>' + title + '</legend><div>' + content + '</div></fieldset>' +
                        '</div>');

                    parent.append(contentItem);
                };

                angular.forEach(itens, function (item) {
                    var type,
                        title,
                        contentDefault = '';

                    i += 1;

                    if (item.attributes.type) {
                        type = item.attributes.type.value || 'common';
                    }

                    if (type === 'notification') {
                        title = $filter('i18n')('l-notification-recipients');
                        contentDefault = contentNotify;
                    } else if (type === 'execution') {
                        existsContentExecution = true;
                        title = $filter('i18n')('l-execution');
                        contentDefault = contentExecution;
                    } else {
                        title = item.title;
                    }

                    item = angular.element(item);

                    fnAppendNavigation(navigationContainer, i, title);
                    fnAppendContent(contentContainer, i, title, contentDefault + item.html());
                });

                // Insere um item de agendamento caso não tenha sido especificado pelo desenvolvedor
                if (!existsContentExecution) {
                    fnAppendNavigation(navigationContainer, 'execution', $filter('i18n')('l-execution'));
                    fnAppendContent(contentContainer, 'execution', $filter('i18n')('l-execution'), contentExecution);
                }

                $compile(navigationContainer)(scope.$parent);
                $compile(contentContainer)(scope.$parent);
            };
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsGantt
* @name totvsGantt
* @object directive
*
* @created 30/06/2016 v12.1.12
* @updated 30/06/2016 v12.1.12
*
* @requires
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/TOTVS+GANTT
*/

(function () {

    'use strict';

    angular
        .module('totvsGantt')
        .directive('totvsGantt', totvsGantt);

    totvsGantt.$inject = ['totvsGanttConstant'];

    function totvsGantt(ganttConstant) {

        var directive = {
            template: '<kendo-gantt k-options="ganttOptions" k-rebind="ganttOptions"></kendo-gantt>',
            restrict: 'E',
            scope: {
                tDataSource: '=',
                tDependencies: '=',
                tResources: '=',
                tAssignments: '=',
                tColumns: '=',
                tViews: '=',
                tToolbar: '=',
                tPdfName: '@',
                tAdd: '&',
                tRemove: '&',
                tClick: '&',
                tEdit: '&',
                tCancel: '&',
                tSave: '&',
                tMoveEnd: '&',
                tLanguage: '@'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        */
        function link(scope) {
            var translate, attr;

            if (scope.tLanguage) {
                attr = scope.tLanguage.toLowerCase();
                translate = ganttConstant[attr];
                attr = (attr === 'pt') ? attr + '-BR' : attr;
                kendo.culture(attr);
            } else {
                translate = ganttConstant.pt;
                kendo.culture('pt-BR');
            }

            scope.$watchCollection('tDataSource', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    scope.ganttOptions.dataSource = newValue;
                }
            });

            scope.ganttOptions = {
                messages: {
                    actions: {
                        addChild: translate.actions.addChild,
                        append: translate.actions.append,
                        insertAfter: translate.actions.insertAfter,
                        insertBefore: translate.actions.insertBefore,
                        pdf: translate.actions.pdf
                    },
                    cancel: translate.cancel,
                    deleteDependencyConfirmation: translate.deleteDependencyConfirmation,
                    deleteDependencyWindowTitle: translate.deleteDependencyWindowTitle,
                    deleteTaskConfirmation: translate.deleteTaskConfirmation,
                    deleteTaskWindowTitle: translate.deleteTaskWindowTitle,
                    destroy: translate.destroy,
                    editor: {
                        assignButton: translate.editor.assignButton,
                        title: translate.editor.title,
                        editorTitle: translate.editor.editorTitle,
                        start: translate.editor.start,
                        end: translate.editor.end,
                        percentComplete: translate.editor.percentComplete,
                        resources: translate.editor.resources,
                        resourcesEditorTitle: translate.editor.resourcesEditorTitle,
                        resourcesHeader: translate.editor.resourcesHeader,
                        unitsHeader: translate.editor.unitsHeader
                    },
                    save: translate.save,
                    views: {
                        week: translate.views.week,
                        month: translate.views.month,
                        year: translate.views.year,
                        day: translate.views.day,
                        start: translate.views.start,
                        end: translate.views.end
                    }
                },
                dataSource: scope.tDataSource,
                dependencies: scope.tDependencies,
                resources: {
                    dataSource: scope.tResources
                },
                assignments: {
                    dataSource: scope.tAssignments
                },
                views: scope.tViews,
                columns: scope.tColumns,
                toolbar: scope.tToolbar,
                pdf: {
                    fileName: scope.tPdfName || 'Totvs Gantt'
                },
                add: scope.tAdd,
                save: scope.tSave,
                remove: scope.tRemove,
                edit: scope.tEdit,
                change: scope.tClick,
                cancel: scope.tCancel,
                moveEnd: scope.tMoveEnd
            };
        }
    }
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsGrid
* @name totvsGridColumn
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-grid.module
*
* @dependencies totvs-grid.directive
*
* @description Diretiva utilizada para definir uma coluna para um totvs-grid.
*
* @restrict E
*
* @property {string} class classe CSS que será utilizada para a apresentação dos dados da coluna.
* @property {boolean} editable define se a coluna será editável.
* @property {string | function} editor adiciona um editor customizado quando uma célula da coluna entrar em edição.
* @property {string} field define o nome do campo que será associado à coluna.
* @property {string} filter define o filtro do angular que deve ser utilizado para apresentação do campo na tela.
* @property {function} group-header-template define o template do cabeçalho do agrupamento.
* @property {string | function} header-template define o template do cabeçalho da coluna.
* @property {boolean} lockable define se a coluna pode ser fixada/desfixada pelo usuário.
* @property {boolean} locked define se a coluna está fixada.
* @property {integer} max-width define a largura máxima da coluna.
* @property {integer} min-width define a largura mínima da coluna.
* @property {string} select-description campo da tabela estrangeira que será apresentado na listagem dos registros.
* @property {string} select-id campo da tabela estrangeira será utilizado para relacionar com o campo da coluna.
* @property {string} select-init objeto a ser utilizado como parâmetro pelo serviço definido em "select-service".
* @property {string} select-service serviço que será injetado para que seja feita uma pesquisa em tabela estrangeira.
* @property {string} style estilo CSS que será utilizado para apresentação dos dados da coluna.
* @property {string} template template da coluna.
* @property {string} title define o nome da coluna.
* @property {string} totals define o tipo de totalização que deve ser apresentado na coluna.
* @property {string} width define a largura inicial da coluna.
*
* @example
*
* <totvs-grid>
*     <totvs-grid-column>{{ 'nome-coluna-1' | i18n }}</totvs-grid-column>
*     <totvs-grid-column editable="true">{{ 'nome-coluna-2' | i18n }}</totvs-grid-column>
*     <totvs-grid-column width="100" class="text-nowrap">{{ 'nome-coluna-3' | i18n }}</totvs-grid-column>
* </totvs-grid>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Grid+Column
*/

(function () {

    'use strict';

    angular
        .module('totvsGrid')
        .directive('totvsGridColumn', totvsGridColumn);

    totvsGridColumn.$inject = ['$interpolate'];

    function totvsGridColumn($interpolate) {

        var directive = {
            require: '^^totvsGrid',
            restrict: 'E',
            scope: {
                class: '@',
                editable: '=',
                editor: '&',
                field: '@',
                filter: '@',
                groupHeaderTemplate: '&',
                headerTemplate: '&',
                lockable: '@',
                locked: '@',
                maxWidth: '@',
                minWidth: '@',
                selectDescription: '@',
                selectId: '@',
                selectInit: '&',
                selectService: '@',
                style: '@',
                template: '&',
                title: '@',
                totals: '@',
                width: '@',
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        */
        function compile(element) {

            var editor = element.find('editor'),
                editorHTML;

            editor.remove();
            if (editor.length) {
                editorHTML = editor.html();
            }

            var template = element.find('template'),
                templateHTML;

            template.remove();
            if (template.length) {
                templateHTML = template.html();
            }

            var headerTemplate = element.find('header-template'),
                headerTemplateHTML;

            headerTemplate.remove();
            if (headerTemplate.length) {
                headerTemplateHTML = headerTemplate.html();
            }

            return function (scope, element, attrs, controller) {

                var filter = getFilter(scope),
                    col = {
                    title: getTitle(scope),
                    width: parseWidth(scope.width),
                    minWidth: parseWidth(scope.minWidth),
                    maxWidth: parseWidth(scope.maxWidth),
                    field: scope.field,
                    column: scope.field,
                    filter: filter.filter,
                    filterParams: filter.params,
                    options: getOptions(scope, element),
                    editable: scope.editable || false,
                    locked: scope.locked || false,
                    lockable: scope.lockable || false,
                    attributes: { style: scope.style || '', class: scope.class || '' },
                    totals: scope.totals,
                    template: templateHTML || scope.template(),
                    groupHeaderTemplate: scope.groupHeaderTemplate(),
                    headerTemplate: headerTemplateHTML || scope.headerTemplate(),
                    editor: scope.editor(),
                    editorTemplate: editorHTML,
                    selectId: scope.selectId,
                    selectDescription: scope.selectDescription,
                    selectService: scope.selectService,
                    selectInit: scope.selectInit
                };

                controller.addColumn(col);

                element.remove();

            };

            function getOptions(scope, element) {

                var optionElement,
                    option = element.find('option'),
                    options = {};

                for (var index = 0; index < option.length; index++) {

                    optionElement = $(option[index]);

                    options[optionElement.attr('id')] = $interpolate(optionElement.html())(scope);

                }

                return option.length > 0 ? options : undefined;

            }

            function getTitle(scope) {

                var title = scope.title;

                if (!title) {
                    // busca o conteudo HTML desconsiderando todos filhos, por exemplo quando o campo tem <options>
                    title = $interpolate(element.clone().children().remove().end().html())(scope);
                }

                return title;

            }

            function getFilter(scope) {

                var filter = scope.filter,
                    params = [],
                    parts;

                if (filter && filter.indexOf(':') >= 0) {
                    parts = filter.split(':');
                    filter = parts[0].trim();
                    parts.shift();
                    params = parts;
                }

                return {
                    filter: filter,
                    params: params
                };

            }

            function parseWidth(value) {

                return value ? parseInt(value) : undefined;

            }

        }
    }
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsGrid
* @name totvsGridDetail
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-grid.module
*
* @dependencies totvs-grid.directive
*
* @description
* Diretiva utilizada para definir uma linha detalhe para cada linha de um totvs-grid.
* O conteudo HTML é compilado com angular, os dados da linha relacionada estarão
* disponíveis no atributo dataItem do scope.
*
* @restrict E
*
* @property {string} size indica como será tratado o tamanho do detalhe, por padrão o detalhe terá
*                         toda a largura total das colunas da tabela. Se for informado "table" a
*                         largura do detalhe será calculada considerando o tamanho do grid e irá
*                         deslocar o detalhe automaticamente conforme o usuario fizer scroll, caso
*                         a grid seja redimensioada o tamanho do detail será recalculado.
*
* @example
* <totvs-grid-detail>
*   <div class="row">
*       <field type="input" class="col-xs-2" ng-model="pesquisa" placeholder="Pesquisar">
*       </field>
*   </div>
*   <totvs-grid grid-data="dataItem.filhos" grid-height="150">
*       <totvs-grid-column field="coluna-1">{{ 'l-coluna-1' | i18n}}</totvs-grid-column>
*       <totvs-grid-column field="coluna-2">{{ 'l-coluna-2' | i18n}}</totvs-grid-column>
*       <totvs-grid-column field="coluna-3">{{ 'l-coluna-3' | i18n}}</totvs-grid-column>
*       <totvs-grid-column field="coluna-4">{{ 'l-coluna-4' | i18n}}</totvs-grid-column>
*   </totvs-grid>
* </totvs-grid-detail>
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsGrid')
        .directive('totvsGridDetail', totvsGridDetail);

    totvsGridDetail.$inject = [];

    function totvsGridDetail() {

        var directive = {
            require: '^^totvsGrid',
            restrict: 'E',
            scope: {
                size: '@'
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        */
        function compile(element) {

            var detailhtml = element.html();

            element.remove();

            return function (scope, element, attrs, controller) {
                controller.detailHTML = detailhtml;
                controller.detailHTMLsize = scope.size;
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsGrid
* @name totvsGridGroup
* @object directive
*
* @created 12/08/2016 v12.1.12
* @updated 12/08/2016 v12.1.12
*
* @requires totvs-grid.module
*
* @dependencies totvs-grid.directive
*
* @description
* Diretiva utilizada para definir agrupamentos de dados em um totvs-grid, pode ser
* utilizada mais de uma tag.
* http://docs.telerik.com/kendo-ui/api/javascript/data/datasource#configuration-group
*
* @restrict E
*
* @property {string} field Identificação do campo que será utilizado para agrupamento.
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsGrid')
        .directive('totvsGridGroup', totvsGridGroup);

    totvsGridGroup.$inject = [];

    function totvsGridGroup() {
        var directive = {
            require: '^^totvsGrid',
            restrict: 'E',
            scope: {
                field: '@'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} controller Controller da diretiva pai
        */
        function link(scope, element, attrs, controller) {

            controller.addGroup({ field: scope.field });

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsGrid
* @name totvsGrid
* @object directive
*
* @created 12/08/2016 v12.1.12
* @updated 12/08/2016 v12.1.12
*
* @requires totvs-grid.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Grid
*/
(function () {

    'use strict';

    angular
        .module('totvsGrid')
        .directive('totvsGrid', totvsGrid);

    totvsGrid.$inject = ['$log', '$q'];

    function totvsGrid($log, $q) {
        var directive = {
                restrict: 'E',
                scope: {
                    gridOptions: '=',
                    gridHeight: '@',
                    autoResizeContent: '@',
                    addSelectColumn: '@',
                    autoResizeColumn: '@',
                    selectable: '@',
                    navigatable: '=',
                    editable: '=',
                    showHeaderEditIcon: '&',
                    resizable: '=',
                    reorderable: '=',
                    sortable: '=',
                    groupable: '=',
                    gridData: '=',
                    grid: '=',
                    gridSelectedItem: '=',
                    gridSelectedItems: '=',
                    gridDirtyItems: '=',
                    onChange: '&',
                    onEdit: '&',
                    onSave: '&',
                    onData: '&'
                },
                controller: 'TotvsGridController',
                link: link
            };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {scope}  scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {controller} controller da diretiva pai
        */
        function link(scope, element, attrs, controller) {

            // verifica se foi informado gridOptions e se é uma função
            if (scope && scope.gridOptions && angular.isFunction(scope.gridOptions)) {

                var opts = scope.gridOptions();

                $q.when(opts).then(function (data) {

                    scope.gridOptions = data;
                    setupDirective(scope, element, attrs, controller);

                }, function (error) {

                    $log.error('An error occurred while retrieving "gridOptions" property. Detail: ' + error);
                    delete scope.gridOptions;
                    setupDirective(scope, element, attrs, controller);

                });

            } else {

                setupDirective(scope, element, attrs, controller);

            }

        }

        /**
        * @name setupDirective
        *
        * @description Builds up the grid directive.
        *
        * @param {scope}  scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {controller} controller da diretiva pai
        */
        function setupDirective(scope, element, attrs, controller) {

            var grid,
                gscope,
                gridOptions;

            controller.attrs = attrs;

            trataGridOptions(scope, controller);

            gridOptions = getGridOptions(scope, attrs, controller);

            controller.element = $('<div></div>');

            $(element).replaceWith(controller.element);

            // resize automatico
            if ((scope.autoResizeContent || 'true') === 'true') {
                controller.doResize(controller.element);
            }

            gscope = getGridScope(scope, controller);

            gridOptions = angular.extend({ $angular: [gscope] }, gridOptions, scope.gridOptions);

            if (!gridOptions.dataSource) {
                gridOptions.dataSource = controller.getDataSource();
            }

            $(controller.element).kendoGrid(gridOptions);

            grid = $(controller.element).data('kendoGrid');

            gscope.grid = grid;

            controller.grid = grid;

            if (!gridOptions.editable) {
                controller.setupCheckEvent();
            }

            grid.totvsResizeColumn = function (column, width) {

                var col = grid.columns[column],
                    lockedCount = 0;

                col.width = width;

                for (var index = 0; index < grid.columns.length; index++) {
                    var element = grid.columns[index];
                    if (element.hasOwnProperty('locked') && element.locked) {
                        lockedCount++;
                    }
                }

                if (col.hasOwnProperty('locked') && col.locked) {
                    grid.element.find('.k-grid-header-locked').find('colgroup col').eq(column).width(width);
                    grid.element.find('.k-grid-content-locked').find('colgroup col').eq(column).width(width);
                } else {
                    grid.element.find('.k-grid-header-wrap').find('colgroup col').eq(column - lockedCount).width(width);
                    grid.element.find('.k-grid-content').find('colgroup col').eq(column - lockedCount).width(width);
                }

                grid.reorderColumn(1, grid.columns[0]);
            };

            if (attrs.grid !== undefined) {
                scope.grid = grid;
            }

            controller.setData(scope.gridData);

            watchCollections(scope, controller);
        }

        function watchCollections(scope, controller) {

            scope.$watchCollection('gridData', controller.setData);

            scope.$watchCollection('gridOptions.rowData', function (data) {

                if (data === undefined) {
                    return;
                }

                $log.warn('Deprecated: gridOptions.rowData use dataSource/grid-data');
                controller.setData(data);

            });

        }

        function trataGridOptions(scope, controller) {

            if (scope.gridOptions) {
                controller.trataGridOptions(scope.gridOptions);
            }

        }

        function getGridOptions(scope, attrs, controller) {

            var selectableAttr = parseSelectableAttribute(scope.selectable),
                editableAttr = parseEditableAttribute(scope, attrs) || false;

            setAddSelectColumn(selectableAttr, attrs);

            var opts = {
                columns: controller.getColumns(),
                height: scope.gridHeight || '100%',
                navigatable: scope.navigatable,
                selectable: selectableAttr,
                editable: editableAttr,
                resizable: scope.resizable || false,
                reorderable: scope.reorderable || false,
                sortable: scope.sortable || false,
                groupable: scope.groupable || false,
                change: controller.onChange,
                edit: controller.onEdit,
                save: controller.onSave,
                columnResize: controller.columnResize,
                detailInit: controller.detailInit()
            };

            // faz o merge das colunas informadas no gridOptions e com as colunas informadas no markup
            if (scope.gridOptions && scope.gridOptions.columns &&
                angular.isArray(scope.gridOptions.columns) &&
                opts.columns && angular.isArray(opts.columns)) {

                opts.columns = opts.columns.concat(scope.gridOptions.columns);
                delete scope.gridOptions.columns;

            }

            return opts;

        }

        function setAddSelectColumn(selectable, attrs) {

            // se a grid for selecionável por célula e se addSelectColumn estiver definido
            // força a utilização do addSelectColumn="separate"
            if (selectable &&
                angular.isString(selectable) &&
                selectable.indexOf('cell') !== -1 &&
                attrs.addSelectColumn !== undefined) {

                attrs.addSelectColumn = 'separate';

            }

        }

        function parseEditableAttribute(scope, attrs) {

            var editable = scope.editable;

            // se o atributo for diferente desses valores, é uma expressão.
            // como o grid não permite mudar depois de inicializado, configuramos
            // editavel e tratamos no evento onEdit.
            if (attrs.editable !== 'true' &&
                attrs.editable !== 'false' &&
                attrs.editable !== undefined) {

                editable = true;

            }

            return editable;

        }

        function parseSelectableAttribute(selectable) {

            if (selectable !== undefined) {

                return selectable === 'true' || selectable === 'false' ?
                    JSON.parse(selectable) : selectable;

            }

            return 'multiple, row';

        }

        function getGridScope(scope, controller) {

            var gscope = scope.$parent.$new();

            gscope.selectIndex = function (dataItem) {

                controller.selectIndex(dataItem);

            };

            gscope.showHeaderEditIcon = function (col) {

                if (!scope.editable) {
                    return false;
                }

                var ret = scope.showHeaderEditIcon();

                if (ret !== undefined) {
                    return angular.isFunction(ret) ? ret(col) : ret;
                }

                return true;

            };

            return gscope;

        }
    }
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module totvsGroupContent
* @name totvsGroupContent
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-group-content.module
*
* @dependencies
*
* @description A diretiva Totvs Group Content ajuda a esconder e exibir conteúdos de uma página.
*
* @restrict E
*
* @example
*
* <totvs-group-content></totvs-group-content>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Group+Content
*/

(function () {

    'use strict';

    angular
        .module('totvsGroupContent')
        .directive('totvsGroupContent', totvsGroupContent);

    totvsGroupContent.$inject = [];

    function totvsGroupContent() {

        var directive = {
            template: '<div class="row group-content"><div class="col-xs-12"><h6 class="clickable">' +
                        '<a ng-click="toggleContent();"><span style="opacity:.8;">' +
                            '{{ isOpen !== true ? "&#9658;" : "&#9660;" }} ' +
                        '</span>&nbsp;{{title}}</a></h6></div><span class="content col-xs-12" ng-transclude>' +
                    '</span></div>',
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                title: '@'
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function compile(element, attrs) {

            if (attrs.initOpen !== true) {
                $(element).find('.content').css('display', 'none');
            }

            return function postLink(scope, element) {
                scope.toggleContent = function () {
                    var group = $(element).find('.content');
                    group.slideToggle();
                    group.toggleClass('open');
                    scope.isOpen = group.hasClass('open');
                };
            };
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsInput
* @name totvsInput
* @object directive
*
* @created 05/09/2016 v12.1.13
* @updated 05/09/2016 v12.1.13
*
* @requires
*
* @dependencies
*
* @description
*
* @restrict A
*
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsInput')
        .directive('totvsInput', totvsInput);

    totvsInput.$inject = ['$compile', 'totvsFieldService', '$timeout'];

    function totvsInput($compile, totvsField, $timeout) {

         var directive = {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                ngDisabled: '&',
                ngChange: '&',
                ngModel: '=',
                ngBlur: '&',
                tMask: '@',
                uiMask: '@',
                placeholder: '@',
                maxlength: '@',
                ngMinlength: '@',
                ngMaxlength: '@',
                ngPattern: '@'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl Controller do model da diretiva
        */
        function link(scope, element, attrs, ngModelCtrl) {
            var elInputText,
                inputGroup,
                templateElement;

            /** Begin html component */
            elInputText = getElement();

            if (scope.tMask) { elInputText.attr('mask', scope.tMask); }
            if (scope.ngPattern) { elInputText.attr('ng-pattern', scope.ngPattern); }

            inputGroup = element.find('.input-group');
            inputGroup.append(elInputText);

            totvsField.pattern(scope, attrs, element, scope, ngModelCtrl, elInputText);
            totvsField.canclean(attrs, element, scope, elInputText);
            totvsField.zoom(attrs, element);

            templateElement = element.find('.field-container');
            $compile(templateElement)(scope);

            totvsField.checkField(scope, elInputText, ngModelCtrl);
            /** End html component */

            /* Functions */

            /* Foca o elemento caso houver o attr focus */
            if (attrs.$attr.focus) {
                $timeout(function () {
                    elInputText.focus();
                }, 200);
            }

            function getElement() {
                return angular.element('<input class="form-control" type="text" placeholder="{{::placeholder}}" ' +
                'ng-model="ngModel" maxlength="{{::maxlength}}" clean="true" ng-change="ngChange()" ng-blur="ngBlur()"' +
                ' ui-mask="{{::uiMask}}" ng-minlength="{{::ngMinlength}}" ng-maxlength="{{::ngMaxlength}}"' +
				' ng-disabled="ngDisabled()">');
            }
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItem
* @name totvsListItem
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-list-item.module
*
* @dependencies
*
* @description
*
* List item é a diretiva que adiciona um container para representar um registro de uma lista.
* A principio não passa de um container mas por convenção é ideal que seja informado um
* identificador único para cada item caso seja preciso realizar alguma operação com determinado
* registro.
* Também é possível customizar o CSS informando as classes a serem adicionadas; de acordo com o
* guideline da TOTVS na lista você deve alterar apenas a cor da borda da esquerda caso seja
* necessário identificar algum tipo de registro.
*
* @restrict E
*
* @example
*
* <totvs-list-item></totvs-list-item>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+List+Item
*/

(function () {

    'use strict';

    angular
        .module('totvsListItem')
        .directive('totvsListItem', totvsListItem);

    totvsListItem.$inject = ['$compile'];

    function totvsListItem($compile) {

        var directive = {
            template: '<div class="list-item"><div class="item-container">' +
                        '<span class="pull-left item-content" ng-transclude></span>' +
                        '<div class="clearfix"></div>' +
                    '</div></div>',
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                selected: '='
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        */
        function link(scope, element) {

            var checked,
                idSelected,
                selectedTemplate;

            if (scope.selected !== undefined) {

                idSelected = 'select-' + (scope.selected.$$hashKey || Math.random());
                checked = scope.selected.$selected === true ? 'checked' : '';

                selectedTemplate =
                    '<span class="pull-left" style="width: 40px; margin-top: 15px">' +
                        '<span class="clickable input-check" ng-if="selected">' +
                            '<input id="' + idSelected + '" type="checkbox" ' +
                                'ng-click="onClickSelect()" ' + checked + '>' +
                            '<label for="' + idSelected + '"></label>' +
                        '</span>' +
                    '</span>';

                element.children('.item-container').prepend(angular.element(selectedTemplate));
                element.find('.item-content').addClass('item-content-selected');
                element.find('.item-content').css('width', 'calc(100% - 40px)');

                scope.onClickSelect = function () {
                    scope.selected.$selected =
                        (scope.selected.$selected === undefined ? true : !scope.selected.$selected);
                };

                $compile(element.find('.input-check'))(scope);
            }

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemAction
* @name totvsListItemAction
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-list-item-action.module
*
* @dependencies
*
* @description
*
* A diretiva de ações consiste em uma lista de ações a serem especificadas no seu próprio conteúdo.
* A diretiva possui um atributo (limit-primary-action) que indica a quantidade de ações que serão
* dispostas como primárias, quando o limite de ações for ultrapassado as demais ações são agrupados
* em uma lista de ações. Caso exista apenas uma ação para ser agrupa na lista a diretiva então o
* exibe como ação primária no lugar de exibi-lo na lista não focal. Quando a diretiva identifica
* que o sistema está sendo exibido em uma tela mobile, todas as ações são direcionadas para a lista
* de ações, exibindo assim apenas um botão que abre uma lista com todas as ações.
* Para cada operação deve ser criado uma nova ação <action>.
*
* @restrict E
*
* @example
*
* <totvs-list-item-action></totvs-list-item-action>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+List+Item+Action
*/

(function () {

    'use strict';

    angular
        .module('totvsListItemAction')
        .directive('totvsListItemAction', totvsListItemAction);

    totvsListItemAction.$inject = [];

    function totvsListItemAction() {

        var directive = {
            restrict: 'E',
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function compile(element, attrs) {

            var i,
                action,
                actions,
                actionsTemplate,
                primaryTemplate,
                item,
                parse,
                listContainer,
                ignoreDisplayLimit,
                cssClass = '',
                containerIf = '',
                containerShow = '',
                containerHide = '';

            actions = element.children('action').clone() || [];

            if (attrs.$attr.class) {
                if (attrs.class.indexOf('col-xs') < 0) {
                    cssClass += ' col-xs-2';
                }
                if (attrs.class.indexOf('col-sm') < 0) {
                    cssClass += ' col-sm-5';
                }
                if (attrs.class.indexOf('col-md') < 0) {
                    cssClass += ' col-md-5';
                }
                if (attrs.class.indexOf('col-lg') < 0) {
                    cssClass += ' col-lg-5';
                }

                element.removeAttr('class');

                cssClass += ' ' + attrs.class;
            } else {
                cssClass += 'col-lg-5 col-md-5 col-sm-5 col-xs-2';
            }

            element.html(
                '<div class="' + cssClass + ' actions-group">' +
                    '<div class="btn-group btn-group-sm actions pull-right" ' +
                        'role="group" aria-label="item-actions"></div>' +
                '</div>');

            parse = function (el, action, primaryAction) {

                var css,
                    icon,
                    link,
                    ngClick;

                css = action.attr('class');
                icon = action.attr('icon');
                link = action.attr('link');
                ngClick = action.attr('ng-click');

                if (link) {
                    el.attr('href', link);
                } else if (ngClick) {
                    el.addClass('clickable');
                    el.attr('ng-click', ngClick);
                }

                if (css) {
                    el.addClass(css);
                }

                if (icon) {
                    if (primaryAction) {
                        el.children('.glyphicon').addClass(icon);
                    }
                }

                if (primaryAction) {
                    el.append('&nbsp;&nbsp;' + action.text());
                } else {
                    el.append(action.text());
                }

                angular.forEach($(action).get(0).attributes, function (attr) {
                    if (attr.name !== 'link' && attr.name !== 'class' &&
                        attr.name !== 'ng-click' && attr.name !== 'icon') {
                        el.attr(attr.name, attr.value);
                    }
                });
            };

            if (actions.length === 1) {
                primaryTemplate = angular.element('<a role="button" class="btn btn-default">' +
                        '<span class="glyphicon hidden-xs"></span></a>');

                parse(primaryTemplate, angular.element(actions[0]), true);
                element.find('.actions').append(primaryTemplate);
            } else {
                actionsTemplate = angular.element(
                    '<div class="btn-group btn-group-sm pull-right" role="group">' +
                        '<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" ' +
                            'role="button" aria-expanded="false">' +
                            '<span>{{\'btn-actions\'|i18n}}&nbsp;&nbsp;</span>' +
                            '<span class="hidden-xs glyphicon glyphicon-triangle-bottom"></span>' +
                        '</a>' +
                        '<ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>' +
                    '</div>');

                if (angular.isUndefined(attrs.limitPrimaryAction)) {
                    attrs.limitPrimaryAction = 2;
                }

                attrs.limitPrimaryAction = parseInt(attrs.limitPrimaryAction, 10);

                listContainer = actionsTemplate.find('ul');
                ignoreDisplayLimit = ((attrs.limitPrimaryAction + 1) >= actions.length);

                for (i = 0; i < actions.length; i++) {

                    action = angular.element(actions[i]);

                    primaryTemplate = angular.element('<a role="button" class="btn btn-default hidden-xs">' +
                        '<span class="glyphicon"></span></a>');

                    if (ignoreDisplayLimit || i < attrs.limitPrimaryAction) {
                        parse(primaryTemplate, action, true);
                        element.find('.actions').append(primaryTemplate);
                    }

                    item = angular.element('<li><a></a></li>');

                    parse(item.children('a'), action, false);
                    item.children('a').removeClass(action.attr('class'));

                    if (i < attrs.limitPrimaryAction) {
                        item.addClass('visible-xs');
                    } else {

                        if (action.attr('ng-if')) {
                            if (containerIf.length > 0) {
                                containerIf += ' || (' + action.attr('ng-if') + ')';
                            } else {
                                containerIf = '(' + action.attr('ng-if') + ')';
                            }
                        } else {
                            containerIf = '(true)';
                        }

                        if (action.attr('ng-show')) {
                            if (containerShow.length > 0) {
                                containerShow += ' || (' + action.attr('ng-show') + ')';
                            } else {
                                containerShow = '(' + action.attr('ng-show') + ')';
                            }
                        } else {
                            containerShow = '(true)';
                        }

                        if (action.attr('ng-hide')) {
                            if (containerHide.length > 0) {
                                containerHide += ' || (' + action.attr('ng-hide') + ')';
                            } else {
                                containerHide = '(' + action.attr('ng-hide') + ')';
                            }
                        } else {
                            containerHide = '(false)';
                        }
                    }

                    listContainer.append(item);
                }

                if (containerIf && containerIf.length > 0) {
                    actionsTemplate.attr('ng-if', containerIf);
                }
                if (containerShow && containerShow.length > 0) {
                    actionsTemplate.attr('ng-show', containerShow);
                }

                if (containerHide && containerHide.length > 0) {
                    actionsTemplate.attr('ng-hide', containerHide);
                }

                if (ignoreDisplayLimit) {
                    actionsTemplate.addClass('visible-xs');
                }

                element.find('.actions-group > .actions').append(actionsTemplate);
            }

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemContent
* @name totvsListItemContent
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-list-item-content.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsListItemContent')
        .directive('totvsListItemContent', totvsListItemContent);

    totvsListItemContent.$inject = [];

    function totvsListItemContent() {

        var directive = {
            template: '<div class="item-info"><div class="row" ng-transclude></div></div>',
            restrict: 'E',
            replace: true,
            transclude: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemContentDetail
* @name totvsListItemContentDetail
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-list-item-content-detail.module
*
* @dependencies
*
* @description
*
* A única diferença entre o container de detalhamento e o padrão para exibição de conteúdo nos
* itens da lista é que o container de detalhamento por padrão vem fechado e possui a opção para
* exibi-lo. Nesta diretiva por convenção são colocadas informações extras e relacionais para o
* registro. É possivel informar uma função para ser chamada no momento em que este container for
* aberto; esta função pode ser utilizada para carregamento dos dados relacionais que não precisam
* ser carregados juntamente ao dados principais.
*
* @restrict E
*
* @example
*
* <totvs-list-item-content-detail></totvs-list-item-content-detail>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+List+Item+Content+Detail
*/

(function () {

    'use strict';

    angular
        .module('totvsListItemContentDetail')
        .directive('totvsListItemContentDetail', totvsListItemContentDetail);

    totvsListItemContentDetail.$inject = [];

    function totvsListItemContentDetail() {

        var directive = {
            template:
                '<div><div class="item-details" style="display: none;">' +
                    '<div class="row" ng-transclude></div></div>' +
                    '<div class="row info-more text-center"><a class="clickable" ng-click="showDetail();">' +
                        '<span style="opacity:.8;">{{ isOpen ? "&#9650;" : "&#9660;"}}&nbsp;' +
                            '{{ (isOpen ? "close-info-more" : "open-info-more") | i18n }}' +
                        '</span></a>' +
                    '</div>' +
                '</div>',
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                open: '&'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        */
        function link(scope, element) {

            scope.showDetail = function () {

                var elementeDisplay = element.children('.item-details');

                elementeDisplay.slideToggle();
                elementeDisplay.toggleClass('open');

                scope.isOpen = elementeDisplay.hasClass('open');

                if (scope.isOpen && typeof scope.open === 'function') {
                    scope.open();
                }
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemHeader
* @name totvsListItemHeader
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-list-item-header.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsListItemHeader')
        .directive('totvsListItemHeader', totvsListItemHeader);

    totvsListItemHeader.$inject = [];

    function totvsListItemHeader() {

        var directive = {
            template: '<div class="item-actions"><div class="row" ng-transclude></div></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemInfo
* @name totvsListItemInfo
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-list-item-info.module
*
* @dependencies
*
* @description
*
* A diretiva de informação do item se resume a realizar a exibição das informações do registro.
* Para isto basta informar o titulo da propriedade e o valor correspondente. Está diretiva pode
* ser utilizada nos containers padrão e de detalhamento do item na lista conforme veremos nos
* itens a seguir.
* Para dimensionamento dos itens é sugerido que seja estudado o modelo de orientação de grid do
* Bootstrap: Guia de Orientação do Sistema de Grid.
*
* @restrict E
*
* @example
*
* <totvs-list-item-info></totvs-list-item-info>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+List+Item+Info
*/

(function () {

    'use strict';

    angular
        .module('totvsListItemInfo')
        .directive('totvsListItemInfo', totvsListItemInfo);

    totvsListItemInfo.$inject = [];

    function totvsListItemInfo() {

        var directive = {
            template:
                '<div><div class="item-field">' +
                    '<label ng-if="title">{{title}}:</label>' +
                    '<span ng-if="!value" ng-transclude></span>' +
                    '<span ng-if="value">{{value}}</span>' +
                '</div></div>',
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                title: '@',
                value: '@'
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function compile(element, attrs) {

            if (attrs.$attr.class) {
                element.addClass('col-xs-12');
            } else {
                element.addClass('col-xs-12 col-sm-6 col-md-6 col-lg-6');
            }

            if (attrs.hasOwnProperty('valueBreak')) {

                var valueBreak = attrs.valueBreak.toLowerCase();

                if (valueBreak === 'false' || valueBreak === false) {
                    element.find('div.item-field').addClass('overflow-text-ellipsis');
                    element.find('div.item-field > span + span').attr('tooltip', '{{value}}');
                }
            }

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListItemTitle
* @name totvsListItemTitle
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-list-item-title.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsListItemTitle')
        .directive('totvsListItemTitle', totvsListItemTitle);

    totvsListItemTitle.$inject = [];

    function totvsListItemTitle() {

        var directive = {
            template: '<div>' +
                        '<a class="title link">{{title}}</a>' +
                        '<span class="title" ng-transclude></span>' +
                    '</div>',
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                link: '@',
                title: '@'
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function compile(element, attrs) {

            if (attrs.$attr.class) {

                if (attrs.class.indexOf('col-xs') < 0) {
                    element.addClass('col-xs-10');
                }
                if (attrs.class.indexOf('col-sm') < 0) {
                    element.addClass('col-sm-7');
                }
                if (attrs.class.indexOf('col-md') < 0) {
                    element.addClass('col-md-7');
                }
                if (attrs.class.indexOf('col-lg') < 0) {
                    element.addClass('col-lg-7');
                }
            } else {
                element.addClass('col-xs-10 col-sm-7 col-md-7 col-lg-7');
            }

            return function (scope, element) {

                if (scope.link) {
                    element.find('a').attr('href', scope.link);
                }

                element.find('a').attr('ng-if', scope.title);
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsMashupCaptcha
* @name totvsMashupCaptcha
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-mashup-captcha.module
*
* @dependencies
*
* @description
*
* A diretiva <totvs-mashup-captcha> deve ser usada quando há necessidade de exibição de imagens
* de verificação de serviços do TOTVS Mashup. A diretiva irá executar o serviço e exibir a imagem
* retornada.
*
* @restrict E
*
* @example
*
* <totvs-mashup-captcha></totvs-mashup-captcha>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Mashup+Captcha
*/

(function () {

    'use strict';

    angular
        .module('totvsMashupCaptcha')
        .directive('totvsMashupCaptcha', totvsMashupCaptcha);

    totvsMashupCaptcha.$inject = ['TotvsMashup'];

    function totvsMashupCaptcha(TotvsMashup) {

        var directive = {
            template:
                '<div class="captcha-box">' +
                    '<div class="captcha-img">' +
                        '<img alt="Embedded Image" src="{{captchaImage}}" />' +
                    '</div>' +
                    '<div class="input-group">' +
                        '<input class="form-control" placeholder="{{ \'l-type-your-text-here\' | i18n }}" ' +
                            'type="text" ng-model="totvsMashupCaptchaResult.code" ng-disabled="disableCode" />' +
                        '<span class="input-group-btn">' +
                            '<button type="button" class="btn btn-default btn-md" ng-click="recaptcha()" ' +
                                'ng-disabled="disableRecaptcha">' +
                                '<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>' +
                            '</button>' +
                        '</span>' +
                    '</div>' +
                '</div>',
            restrict: 'E',
            replace: true,
            scope: {
                totvsMashupCaptchaService: '@',
                totvsMashupCaptchaParams: '=',
                totvsMashupCaptchaResult: '='
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        */
        function link(scope) {

            scope.captchaImage = 'assets/img/loading-bar.gif';
            scope.disableCode = true;
            scope.disableRecaptcha = true;

            scope.executeService = function (parameters, callback) {
                TotvsMashup.getGeneric(parameters, callback);
            };

            scope.recaptcha = function () {
                var params = {};

                scope.disableCode = true;
                scope.disableRecaptcha = true;

                try {
                    scope.captchaImage = 'assets/img/loading-bar.gif';
                    scope.totvsMashupCaptchaResult = {};

                    if (scope.totvsMashupCaptchaParams) {
                        params = angular.copy(scope.totvsMashupCaptchaParams);
                    }
                    params.method = scope.totvsMashupCaptchaService;

                    scope.executeService(params, function (result) {
                        if (result.Captcha) {
                            if (result.Captcha.substring(0, 22) !== 'data:image/png;base64,') {
                                result.Captcha = 'data:image/png;base64,' + result.Captcha;
                            }
                            scope.captchaImage = result.Captcha;
                            scope.totvsMashupCaptchaResult.code = '';
                            scope.totvsMashupCaptchaResult.id = result.ServiceExecutionId;
                            scope.disableCode = false;
                        } else {
                            scope.captchaImage = 'assets/img/error404.png';
                        }
                        scope.disableRecaptcha = false;
                    });
                } catch (e) {
                    scope.captchaImage = 'assets/img/error404.png';
                    scope.disableRecaptcha = false;
                }
            };

            scope.recaptcha();

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsListPagination
* @name totvsListPagination
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-list-pagination.module
*
* @dependencies
*
* @description
*
* Esta diretiva é o container para o componente de paginação. Para correta utilização devemos
* informar, na tag ng-if, uma condição para que o botão de paginação seja apresentado e uma ação,
* na tag ng-click, a ser executada ao clicar no botão.
*
* @restrict E
*
* @example
*
* <totvs-list-pagination></totvs-list-pagination>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+List+Pagination
*/

(function () {

    'use strict';

    angular
        .module('totvsListPagination')
        .directive('totvsListPagination', totvsListPagination);

    totvsListPagination.$inject = [];

    function totvsListPagination() {

        var directive = {
            template:
                '<div class="more-results"><a class="btn btn-primary col-xs-12">' +
                    '{{ \'l-more-results\' | i18n }}</a></div>',
            restrict: 'E',
            replace: true,
            transclude: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsModalBody
* @name totvsModalBody
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-modal-body.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Modal Body deve ser usada em conjunto com as diretiva Totvs Modal Header e
* Totvs Modal Footer para construção de telas modais, serve como container para o conteúdo podendo
* conter outras diretivas do TOTVS | HTML Framework ou elementos HTML para construção de
* formulários ou exibição de dados.
*
* @restrict E
*
* @example
*
* <totvs-modal-body></totvs-modal-body>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Modal+Body
*/

(function () {

    'use strict';

    angular
        .module('totvsModalBody')
        .directive('totvsModalBody', totvsModalBody);

    totvsModalBody.$inject = [];

    function totvsModalBody() {

        var directive = {
            template: '<div class="modal-body page-content" ng-transclude></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsModalFooter
* @name totvsModalFooter
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-modal-footer.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Modal Footer deve ser usada em conjunto com as diretiva Totvs Modal Header e
* Totvs Modal Body para construção de telas modais, serve como container para o rodapé das telas
* modais.
* É recomendado que os botões de ação da modal sejam incluídos nessa diretiva.
*
* @restrict E
*
* @example
*
* <totvs-modal-footer></totvs-modal-footer>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Modal+Footer
*/

(function () {

    'use strict';

    angular
        .module('totvsModalFooter')
        .directive('totvsModalFooter', totvsModalFooter);

    totvsModalFooter.$inject = [];

    function totvsModalFooter() {

        var directive = {
            template: '<div class="modal-footer" ng-transclude></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsModalHeader
* @name totvsModalHeader
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-modal-header.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Modal Header deve ser usada em conjunto com as diretiva Totvs Modal Body e
* Totvs Modal Footer para construção de telas modais, seu uso especifico é para incluir um título
* nas telas modais.
*
* @restrict E
*
* @example
*
* <totvs-modal-header></totvs-modal-header>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Modal+Header
*/

(function () {

    'use strict';

    angular
        .module('totvsModalHeader')
        .directive('totvsModalHeader', totvsModalHeader);

    totvsModalHeader.$inject = [];

    function totvsModalHeader() {

        var directive = {
            template: '<div class="modal-header"><div class="modal-title"><h3 ng-transclude></h3></div></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsMultiSelect
* @name totvsMultiSelect
* @object directive
*
* @created 19/08/2016 v12.1.13
* @updated 19/08/2016 v12.1.13
*
* @requires
*
* @dependencies
*
* @description Diretiva totvs-multiselect
*
* @restrict A
*
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsMultiSelect')
        .directive('totvsMultiSelect', totvsMultiSelect);

    totvsMultiSelect.$inject = ['$injector', 'totvsFieldService', '$compile'];

    function totvsMultiSelect($injector, totvsField, $compile) {

        var directive = {
            restrict: 'A',
            scope: {
                ngDisabled: '&',
                ngModel: '=',
                tUrlData: '=',
                tData: '=',
                tMultiId: '@',
                tMultiDescription: '@',
                tOnChange: '&',
                tOnSelect: '&',
                tDelay: '@',
                tFilter: '@',
                tHighlightFirst: '@',
                tPlacheholder: '@',
                tMinLength: '@',
                tMaxSelectedItems: '@',
                tAutoClose: '@'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl NgModel da diretiva
        */
        function link(scope, element, attrs, ngModelCtrl) {
            var multiSelect,
                inputGroup,
                templateElement,
                dataMultiSelect;

            /* Build multi select element */
            multiSelect = angular.element('<select kendo-multi-select k-options="options" ' +
                'k-ng-model="ngModel" ng-disabled="ngDisabled()" ng-show="ngShow()" ' +
                'ng-hide="ngHide()"></select>');

            inputGroup = element.find('.input-group');
            inputGroup.append(multiSelect);
            totvsField.pattern(scope, attrs, element, scope, ngModelCtrl, multiSelect);

            templateElement = element.find('.field-container');
            $compile(templateElement)(scope);
            /* end */

            function getMultiSelect() {
                if (dataMultiSelect) { return dataMultiSelect; }

                dataMultiSelect = element.find('select').data('kendoMultiSelect');

                return dataMultiSelect;
            }

            scope.options = {
                placeholder: scope.tPlacheholder,
                dataValueField: scope.tMultiId,
                dataTextField: scope.tMultiDescription,
                filter: scope.tFilter,
                minLength: scope.tMinLength,
                delay: scope.tDelay || 500,
                change: scope.tOnChange(),
                select: scope.tOnSelect(),
                highlightFirst: (scope.tHighlightFirst === 'true'),
                maxSelectedItems: scope.tMaxSelectedItems,
                autoClose: (scope.tAutoClose === 'true')
            };

            if (scope.tUrlData) {
                scope.options.dataSource = {
                    serverFiltering: true,
                    transport: {
                        read: {
                            url: scope.tUrlData,
                            dataType: 'json'
                        }
                    },
                    schema: {
                        data: function (response) {
                            return response.data;
                        }
                    }
                };
            } else {
                scope.options.dataSource = scope.tData;

                scope.$watchCollection('tData', function (newVal, oldVal) {
                    if (newVal !== oldVal) {
                        getMultiSelect().setDataSource(newVal);
                    }
                });
            }
        }
    }
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsNumber
* @name totvsNumber
* @object directive
*
* @created 09/09/2016 v12.1.13
* @updated 09/09/2016 v12.1.13
*
* @requires
*
* @dependencies
*
* @description
*
* @restrict A
*
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsNumber')
        .directive('totvsNumber', totvsNumber);

    totvsNumber.$inject = ['$compile', 'totvsFieldService', '$timeout'];

    function totvsNumber($compile, totvsField, $timeout) {

        var directive = {
            require: 'ngModel',
            restrict: 'A',
            scope: {
                ngModel: '=',
                ngDisabled: '&',
                min: '@',
                max: '@',
                tMask: '@',
                ngMaxlength: '@',
                ngMinlength: '@',
                ngPattern: '@',
                ngChange: '@',
                ngBlur: '&'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl Controller do ngModel do elemento da diretiva
        */
        function link(scope, element, attrs, ngModelCtrl) {
            var elInputNumber,
                inputGroup,
                templateElement;

            elInputNumber = getElement();

            if (scope.tMask) { elInputNumber.attr('mask', scope.tMask); }
            if (scope.ngPattern) { elInputNumber.attr('ng-pattern', scope.ngPattern); }

            inputGroup = element.find('.input-group');
            inputGroup.append(elInputNumber);

            totvsField.pattern(scope, attrs, element, scope, ngModelCtrl, elInputNumber);
            totvsField.canclean(attrs, element, scope, elInputNumber);

            templateElement = element.find('.field-container');
            $compile(templateElement)(scope);

            totvsField.checkField(scope, elInputNumber, ngModelCtrl);

            /* Functions */
            /* Foca o elemento caso houver o atributo */
            if (attrs.$attr.focus) {
                $timeout(function () {
                    elInputNumber.focus();
                }, 200);
            }

            function getElement() {
                return angular.element('<input class="form-control" type="number" ng-model="ngModel"' +
                    ' ng-change="ngChange()" ng-blur="ngBlur()" min="{{::min}}" max="{{::max}}"' +
                    ' ng-minlength="{{::ngMinlength}}" ng-maxlength="{{::ngMaxlength}}" ng-disabled="ngDisabled()">');
            }
        }
    }
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module totvsPage
* @name totvsPage
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page.module
*
* @dependencies
*
* @description
*
* Esta diretiva deve ser utilizada como container principal para as telas desenvolvidas utilizando
* o TOTVS | HTML Framework.
* A diretiva se comporta diferente de acordo com o tipo definido em sua declaração, é importante
* definir corretamente seu tipo para obter o resultado esperado.
*
* @restrict E
*
* @example
*
* <totvs-page></totvs-page>
*
* @see TDN http://tdn.totvs.com/display/THF/totvs+page
*/

(function () {

    'use strict';

    angular
        .module('totvsPage')
        .directive('totvsPage', totvsPage);

    totvsPage.$inject = [];

    function totvsPage() {

        var directive = {
            restrict: 'E',
            transclude: true,
            replace: true,
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function compile(element, attrs) {

            var execution = '',
				attribute,
                attributes = '';

            if (!attrs.type) {
                attrs.type = 'base';
                attributes = 'type="base" ';
            }

            if (attrs.type === 'execution') {
                execution = 'du-scroll-container';
            }

            for (attribute in attrs.$attr) {
                if (attrs.$attr.hasOwnProperty(attribute)) {
                    attributes += attribute + '="' + attrs[attribute] + '" ';
                }
            }

            element.html(
                '<div class="totvs-style-guide page-wrapper container-fluid ng-cloak" ' + attributes + execution +
                ' ng-transclude></div>');

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageAlert
* @name totvsPageAlert
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-alert
*
* @dependencies
*
* @description
*
* Exibe uma mensagem no meio do conteúdo da tela.
* É possível incluir diretivas e conteúdo HTML dentro dessa diretiva possibilitando incluir ações
* para que o usuário possa tomar alguma ação mediante a mensagem exibida.
*
* @restrict E
*
* @example
*
* <totvs-page-alert></totvs-page-alert>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Alert
*/

(function () {

    'use strict';

    angular
        .module('totvsPageAlert')
        .directive('totvsPageAlert', totvsPageAlert);

    totvsPageAlert.$inject = [];

    function totvsPageAlert() {

        var directive = {
            template: '<div class="alert alert-{{type}}"><h5>{{message}}</h5><span ng-transclude></span></div>',
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                type: '@',
                message: '@'
            }
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module totvsPageBreadcrumb
* @name totvsPageBreadcrumb
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-breadcrumb.module
*
* @dependencies
*
* @description Esta diretiva deve ser usada para auxiliar o usuário a identificar a página em que
* eles está, dentro de uma hierarquia de páginas e facilitar a sua navegação entre essas páginas.
* Para adicionar os níveis deve usar o elemento <breadcrumb>, sendo assim, para cada nível deve
* existir um <breadcrumb> configurado de forma independente.
*
* @restrict E
*
* @example
*
* <totvs-page-breadcrumb>
*   <breadcrumb> ... </breadcrumb>
*   <breadcrumb> ... </breadcrumb>
* </totvs-page-breadcrumb>
*
* @see TDN http://tdn.totvs.com/display/THF/totvs+page+breadcrumb
*/

(function () {

    'use strict';

    angular
        .module('totvsPageBreadcrumb')
        .directive('totvsPageBreadcrumb', totvsPageBreadcrumb);

    totvsPageBreadcrumb.$inject = ['$compile', '$injector', '$rootScope'];

    function totvsPageBreadcrumb($compile, $injector, $rootScope) {

        var directive = {
            restrict: 'E',
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        *
        * @return {function} Função postLink
        */
        function compile(element) {

            var breadcrumbs;

            breadcrumbs = element.children('breadcrumb').clone() || [];

            // Hides home link when running in Fluig
            if ($rootScope.isFluig) {
                breadcrumbs.splice(0, 1);
            }

            element.html('<div class="page-navbar"><div class="row">' +
                         '<div class="col-xs-12"><ol class="breadcrumb">' +
                         '</ol></div></div></div>');

            return function postLink(scope, element) {

                var i,
                    breadcrumbContainer,
                    title,
                    link,
                    ngClick,
                    breadcrumbTemplate,
                    breadcrumbLink;

                breadcrumbContainer = element.find('.breadcrumb');

                for (i = 0; i < breadcrumbs.length; i++) {

                    breadcrumbs[i] = angular.element(breadcrumbs[i]);

                    title = breadcrumbs[i].html();
                    link = breadcrumbs[i].attr('link');
                    ngClick = breadcrumbs[i].attr('ng-click');
                    breadcrumbTemplate = angular.element('<li></li>');

                    if (link || ngClick) {

                        breadcrumbTemplate.append(angular.element('<a></a>'));

                        breadcrumbLink = breadcrumbTemplate.find('a');

                        breadcrumbLink.html(title);

                        if (link) {
                            breadcrumbLink.attr('href', link);
                        } else if (ngClick) {
                            breadcrumbLink.attr('ng-click', ngClick);
                            breadcrumbLink.addClass('clickable');
                        }
                    } else if (i + 1 === breadcrumbs.length) {// Se for o último, não adiciona o 'link' <a>.
                        breadcrumbTemplate.html(title);
                    } else {
                        breadcrumbTemplate.html(title);
                    }

                    breadcrumbContainer.append(breadcrumbTemplate);
                }

                $compile(breadcrumbContainer.parents('.page-navbar'))(scope.$parent);
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module totvsPageChild
* @name totvsPageChild
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-child.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Page Child é um container que deve ser usado no lugar da Totvs Page nas páginas
* que serão incorporadas em uma página principal através da diretiva ng-include, isso permite que
* páginas filhas possam ter comportamentos (type) diferente da página principal.
*
* @restrict E
*
* @example
*
* <totvs-page-child></totvs-page-child>
*
* @see TDN http://tdn.totvs.com/display/THF/totvs+page+child
*/

(function () {

    'use strict';

    angular
        .module('totvsPageChild')
        .directive('totvsPageChild', totvsPageChild);

    totvsPageChild.$inject = [];

    function totvsPageChild() {

        var directive = {
            template: '<div class="row page-wrapper-child container-fluid ng-cloak" ng-transclude></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module totvsPageContent
* @name totvsPageContent
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-content.module
*
* @dependencies
*
* @description A diretiva page content existe apenas como container para o conteúdo da página.
*
* @restrict E
*
* @example
*
* <totvs-page-content></totvs-page-content>
*
* @see TDN http://tdn.totvs.com/display/THF/totvs+page+content
*/

(function () {

    'use strict';

    angular
        .module('totvsPageContent')
        .directive('totvsPageContent', totvsPageContent);

    totvsPageContent.$inject = [];

    function totvsPageContent() {

        var directive = {
            template: '<div class="page-content" ng-transclude></div>',
            replace: true,
            transclude: true,
            restrict: 'E'
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageContentHeader
* @name totvsPageContentHeader
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-content-header.module
*
* @dependencies
*
* @description
*
* A diretiva page content header existe apenas como container para adição de um cabeçalho para o
* conteúdo da página. Originalmente projetada para ser utilizada nas telas de lista onde é
* disponibilizado a operação de selecionar todos, filtros rápidos e ordenação.
*
* @restrict E
*
* @example
*
* <totvs-page-content-header></totvs-page-content-header>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Content+Header
*/

(function () {

    'use strict';

    angular
        .module('totvsPageContentHeader')
        .directive('totvsPageContentHeader', totvsPageContentHeader);

    totvsPageContentHeader.$inject = [];

    function totvsPageContentHeader() {

        var directive = {
            template:
                '<div class="page-content-header">' +
                    '<span ng-transclude></span>' +
                    '<div class="clearfix"></div>' +
                '</div>',
            restrict: 'E',
            replace: true,
            transclude: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageDetail
* @name totvsPageDetail
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-detail.module
*
* @dependencies
*
* @description
*
* Esta diretiva é o container principal da página de detalhamento. Para alinhamento das
* propriedades (totvs-page-detail-info) e do próprio conteúdo é sugerido que seja estudado o modelo
* de orientação de grid do Bootstrap: Guia de Orientação do Sistema de Grid.
*
* @restrict E
*
* @example
*
* <totvs-page-detail></totvs-page-detail>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Detail
*/

(function () {

    'use strict';

    angular
        .module('totvsPageDetail')
        .directive('totvsPageDetail', totvsPageDetail);

    totvsPageDetail.$inject = [];

    function totvsPageDetail() {

        var directive = {
            template: '<div class="page-details"><div class="row" ng-transclude></div></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageDetailInfo
* @name totvsPageDetailInfo
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-detail-info.module
*
* @dependencies
*
* @description
*
* A diretiva de informação para o detalhamento se resume a realizar a exibição das informações
* do registro. Para isto basta informar o titulo da propriedade e o valor correspondente.
* De acordo com o Guideline da TOTVS, a descrição do item fica disposta acima e o valor abaixo.
* Para dimensionamento dos itens é sugerido que seja estudado o modelo de orientação de grid do
* Bootstrap: Guia de Orientação do Sistema de Grid.
*
* @restrict E
*
* @example
*
* <totvs-page-detail-info></totvs-page-detail-info>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Detail+Info
*/

(function () {

    'use strict';

    angular
        .module('totvsPageDetailInfo')
        .directive('totvsPageDetailInfo', totvsPageDetailInfo);

    totvsPageDetailInfo.$inject = [];

    function totvsPageDetailInfo() {

        var directive = {
            template:
                '<div class="detail-field"><div class="field-label">{{ title }}</div>' +
                    '<div class="field-value"><span ng-if="!value" ng-transclude></span>' +
                    '<span ng-if="value">{{value}}</span></div></div>',
            restrict: 'E',
            transclude: true,
            replace: true,
            scope : {
                class: '@',
                title: '@',
                value: '@'
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function compile(element, attrs) {

            if (attrs.$attr.class) {
                element.addClass('col-xs-12');
            } else {
                element.addClass('col-xs-12 col-sm-6 col-md-6 col-lg-6');
            }

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module totvsPageDisclaimers
* @name totvsPageDisclaimers
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-disclaimers.module
*
* @dependencies
*
* @description
*
* A diretiva de page disclaimer foi concebida para exibir os filtros que são aplicados a uma
* consulta.
* Cada disclaimer representa um filtro aplicado, sendo que ao clicar sobre o mesmo ele é removido
* da lista de filtros aplicados a consulta.
* Para correta utilização é preciso informar a função que será responsável por remover o
* disclaimer, essa função irá receber como parâmetro o próprio objeto que representa o disclaimer
* selecionado; e prover para a diretiva uma lista de objetos disclaimers.
*
* @restrict E
*
* @example
*
* <totvs-page-disclaimers disclaimer-list="disclaimers" ng-click="removeDisclaimer">
* </totvs-page-disclaimers>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Disclaimers
*/

(function () {

    'use strict';

    angular
        .module('totvsPageDisclaimers')
        .directive('totvsPageDisclaimers', totvsPageDisclaimers);

    totvsPageDisclaimers.$inject = ['$compile', '$interpolate'];

    function totvsPageDisclaimers($compile, $interpolate) {

        var directive = {
            restrict: 'E',
            scope: {
                disclaimerList: '=',
                ngClick: '&'
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        */
        function compile(element) {

            element.html(
                '<div class="row hidden-xs"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
				'<div class="page-disclaimers"><h5></h5></div></div></div>');

            element.removeAttr('ng-click');

            return function postLink(scope, element) {

                var disclaimerContainer,
                    disclaimerTemplate;

                scope.disclaimerList = scope.disclaimerList || [];

                disclaimerContainer = element.find('h5');

                disclaimerContainer.append(
                    $interpolate(
                        '<span ng-if="disclaimerList.length > 0">{{ \'l-filter-by\' | i18n }}: ' +
                        '</span>'
                    )(scope));

                disclaimerTemplate =
                    angular.element(
                        '<span ng-repeat="disclaimer in disclaimerList track by $index" ' +
                            'ng-if="disclaimer.hide !== true" ' +
                            'class="label label-default" ng-click="onRemove(disclaimer)" ' +
                            'tooltip="{{disclaimer.tooltip}}" ' +
                            'ng-class="(ngClick && disclaimer.fixed != true) ? \'clickable\' : \'\'">' +
                            '<span>{{ disclaimer.title }}</span>' +
                            '<i class="glyphicon glyphicon-remove" ' +
                                'ng-if="(ngClick && disclaimer.fixed != true)">' +
                            '</i>' +
                        '</span>');

                scope.onRemove = function (disclaimer) {
                    if (disclaimer.fixed !== true) {
                        scope.ngClick(scope)(disclaimer);
                    }
                };

                disclaimerContainer.append(disclaimerTemplate);

                $compile(disclaimerContainer)(scope);
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageDetailInfoGroup
* @name totvsPageDetailInfoGroup
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-detail-info-group.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
* <totvs-page-detail-info-group></totvs-page-detail-info-group>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Detail+Info+Group
*/

(function () {

    'use strict';

    angular
        .module('totvsPageDetailInfoGroup')
        .directive('totvsPageDetailInfoGroup', totvsPageDetailInfoGroup);

    totvsPageDetailInfoGroup.$inject = [];

    function totvsPageDetailInfoGroup() {

        var directive = {
            template:
                '<div class="page-details-infogroup"><div class="col-xs-12">' +
                    '<h4 ng-transclude></h4><hr></div></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module totvsPageForm
* @name totvsPageForm
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-form
*
* @dependencies
*
* @description
*
* Esta diretiva é o container principal da página de edição / adição. Para alinhamento das
* propriedades (field) e do próprio conteúdo é sugerido que seja estudado o modelo de orientação
* de grid do Bootstrap: Guia de Orientação do Sistema de Grid.
* Os <field> a serem disponibilizados no formulário devem estar agrupados dentro de fieldset
* padrões do Bootstrap.
* Para exibição de cabeçalho entre os grupos de informação deve se utilizar a diretiva <legend>
* dentro de um <fieldset>.
*
* @restrict E
*
* @example
*
* <totvs-page-form></totvs-page-form>
*
* @see TDN http://tdn.totvs.com/display/THF/totvs+page+form
*/

(function () {

    'use strict';

    angular
        .module('totvsPageForm')
        .directive('totvsPageForm', totvsPageForm);

    totvsPageForm.$inject = [];

    function totvsPageForm() {

        var directive = {
            template: '<div class="page-form"><form class="form-horizontal row" ng-transclude></form></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageHeader
* @name totvsPageHeader
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-header.module
*
* @dependencies
*
* @description
*
* Esta diretiva serve como container para as diretivas Page Header Title e Page Header Operation,
* a mesma deve ficar dentro da diretiva Totvs Page Navbar.
*
* @restrict E
*
* @example
*
* <totvs-page-header></totvs-page-header>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Header
*/

(function () {

    'use strict';

    angular
        .module('totvsPageHeader')
        .directive('totvsPageHeader', totvsPageHeader);

    totvsPageHeader.$inject = [];

    function totvsPageHeader() {

        var directive = {
            template: '<div class="page-head" ng-transclude></div>',
            restrict: 'E',
            replace: true,
            transclude: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageHeaderOperationAction
* @name totvsPageHeaderOperationAction
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 25/10/2016 v12.1.14
*
* @requires totvsPageHeaderOperationAction.module
*
* @dependencies
*
* @description
*
* A  diretiva Page Header Operation Action exibe botões padrões de ação para cada tipo de página.
* A diretiva ainda consiste em uma lista de ações a serem especificadas no seu próprio conteúdo,
* disponível apenas quando a página for do tipo lista (list) ou detalhamento (detail).
* No caso da lista, por convenção a primeira ação da lista será considerar como ação primária
* recebendo a cor azul e um botão exclusivo enquanto as demais ações estarão dispostas através da
* lista de ações representado por um botão ao lado, não focal.
* No caso do detalhamento, todas as ações especificadas estarão dispostas através da lista de
* ações representado por um botão ao lado, não focal.
* Para cada operação deve ser criado uma nova ação, por padrão podemos considerar as seguintes
* opções para cada:
*
* @restrict E
*
* @example
*
* <totvs-page-header-operation-action>
*   <action> ... </action>
*   <action> ... </action>
* </totvs-page-header-operation-action>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Header+Operation+Action
*/

(function () {

    'use strict';

    angular
        .module('totvsPageHeaderOperationAction')
        .directive('totvsPageHeaderOperationAction', totvsPageHeaderOperationAction);

    totvsPageHeaderOperationAction.$inject = ['$compile'];

    function totvsPageHeaderOperationAction($compile) {

        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                onSave: '&',
                onSaveNew: '&',
                onCancel: '&',
                onBack: '&',
                onEdit: '&',
                onRemove: '&',
                onExec: '&',
                hideBack: '@',
                hideRemove: '@',
                hideEdit: '@',
                hideActions: '@',
                hideSaveNew: '@',
                items: '&',
                itemsAs: '@'
            },
            controller: Controller,
            compile: compile

        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        */
        function compile(element) {

            var actions,
                onEditLink,
                onBackLink,
                onSaveLink,
                actionsTemplate,
                parse;

            actions = element.children('action').clone() || [];

            onEditLink = element.attr('on-edit-link');
            onBackLink = element.attr('on-back-link');
            onSaveLink = element.attr('on-save-link');

            element.html('<div class="col-lg-7 col-md-7 col-sm-7 col-xs-12"><div class="operations"></div></div>');

            actionsTemplate = angular.element(
                '<div class="btn-group" role="group">' +
                    '<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" role="button">' +
                        '<span>{{\'btn-actions\'|i18n}}&nbsp;&nbsp;</span>' +
                        '<span class="glyphicon glyphicon-triangle-bottom hidden-xs"></span>' +
                    '</a>' +
                    '<ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>' +
                '</div>');

            parse = function (el, action, primaryAction) {

                var css,
                    icon,
                    link,
                    ngClick,
                    title;

                css = action.attr('class');
                icon = action.attr('icon');
                link = action.attr('link');
                ngClick = action.attr('ng-click');
                title = action.text();

                if (link) {
                    el.attr('href', link);
                } else if (ngClick) {
                    el.addClass('clickable');
                    el.attr('ng-click', ngClick);
                }

                if (css) {
                    el.addClass(css);
                }

                if (primaryAction && icon) {
                    el.children('.glyphicon').addClass(icon);
                }

                if (primaryAction && icon) {
                    el.children('.hidden-xs').append('&nbsp;&nbsp;' + title);
                } else {
                    el.append(title);
                }

                angular.forEach($(action).get(0).attributes, function (attr) {
                    if (attr.name !== 'link' && attr.name !== 'class' &&
                        attr.name !== 'ng-click' && attr.name !== 'icon') {
                        el.attr(attr.name, attr.value);
                    }
                });
            };

            return function postLink(scope, element, attrs) {

                var i,
                    page,
                    limit,
                    ignoreDisplayLimit,
                    action,
                    primaryTemplate,
                    listContainer,
                    item,
                    items,
                    itemsAs,
                    template,
                    templateContainer,
                    backAction,
                    editAction,
                    removeAction,
                    saveAction,
                    saveNewAction,
                    cancelAction,
                    execAction,
                    current,
                    last;

                page = element.parents('div.page-wrapper-child');

                if (page === null || page === undefined || page.length < 1) {
                    page = element.parents('div.page-wrapper');
                }

                if (angular.isUndefined(attrs.limitPrimaryAction)) {
                    if (page.attr('local') === 'true' || page.attr('local') === true) {
                        attrs.limitPrimaryAction = 4;
                    } else {
                        attrs.limitPrimaryAction = 3;
                    }
                }

                attrs.limitPrimaryAction = parseInt(attrs.limitPrimaryAction, 10);

                if (attrs.limitPrimaryAction < 1) {
                    attrs.limitPrimaryAction = 1;
                }

                if (page.attr('type') === 'list') {

                    limit = attrs.limitPrimaryAction + 1;

                    ignoreDisplayLimit = (limit === actions.length);

                    for (i = 0; i < actions.length; i++) {

                        action = angular.element(actions[i]);

                        primaryTemplate = angular.element('<a class="btn" role="button">' +
                            '<span class="glyphicon"></span><span class="hidden-xs"></span></a>');

                        listContainer = actionsTemplate.find('ul');
                        listContainer.removeClass('dropdown-menu-right');

                        if (ignoreDisplayLimit || i < attrs.limitPrimaryAction) {

                            if (i === 0) {
                                primaryTemplate.addClass('btn-primary');
                            } else {
                                primaryTemplate.addClass('btn-default');
                            }

                            parse(primaryTemplate, action, true, scope);

                            element.find('.operations').append(primaryTemplate);
                        } else {

                            item = angular.element('<li><a></a></li>');

                            parse(item.children('a'), action, false, scope);

                            if (i < attrs.limitPrimaryAction) {
                                item.addClass('visible-xs');
                            }

                            listContainer.append(item);
                        }
                    } // end:for

                    if (listContainer && listContainer.find('li').length > 0) {
                        element.find('.operations').append(actionsTemplate);
                    }

                    $compile(element.find('.operations'))(scope.$parent);

                    items = scope.items();
                    itemsAs = (scope.itemsAs || 'item');

                    scope.$watch(function () {

                        var count = 0;

                        if (items === undefined || items === null) {
                            return count;
                        }

                        for (i = 0; i < items.length; i++) {
                            if (items[i].$selected) {
                                count++;
                            }
                        }

                        return count;

                    }, function () {

                        if (items === undefined || items === null) {
                            return;
                        }

                        scope[itemsAs] = undefined;

                        var count = 0;

                        for (i = 0; i < items.length; i++) {
                            if (items[i].$selected) {
                                count++;
                                scope[itemsAs] = items[i];
                                if (count > 1) {
                                    scope[itemsAs] = undefined;
                                    break;
                                }
                            }
                        }
                    });

                } else if (page.attr('type') === 'detail') {

                    limit = attrs.limitPrimaryAction;

                    if (page.attr('local') === 'true' || page.attr('local') === true) {
                        attrs.hideBack = true;
                    }

                    listContainer = actionsTemplate.find('ul');

                    template = angular.element(
                        '<div class="col-xs-12"><div class="operations page-detail-actions"></div></div>');

                    templateContainer = template.find('.operations');

                    current = 0;

                    // Configura os botões padrões como botão ou lista
                    if (page.attr('local') === 'true') {
                        current++;
                        if (current <= limit) {
                            saveAction = angular.element(
                                '<a class="btn btn-primary" role="button">{{\'btn-save\' | i18n}}</a>');
                            templateContainer.append(saveAction);
                        } else {
                            saveAction = angular.element(
                                '<li><a class="clickable">{{\'btn-save\'|i18n}}</a></li>');
                            listContainer.append(saveAction);
                        }
                        current++;
                        if (current <= limit) {
                            cancelAction = angular.element(
                                '<a class="btn btn-default" role="button">{{\'btn-cancel\' | i18n}}</a>');
                            templateContainer.append(cancelAction);
                        } else {
                            cancelAction = angular.element(
                                '<li><a class="clickable">{{\'btn-cancel\'|i18n}}</a></li>');
                            listContainer.append(cancelAction);
                        }
                    } else {
                        if (attrs.hideBack !== true && attrs.hideBack !== 'true') {
                            current++;
                        }

                        if (current <= limit) {
                            backAction = angular.element(
                                '<a class="btn" role="button">{{\'btn-back\' | i18n}}</a>');
                            if (page.attr('local') !== 'true' &&
                                attrs.hideBack !== true &&
                                attrs.hideBack !== 'true') {
                                backAction.addClass('btn-primary');
                            } else {
                                backAction.addClass('btn-default');
                            }

                            templateContainer.append(backAction);
                        } else {
                            backAction = angular.element(
                                '<li><a class="clickable">{{\'btn-back\'|i18n}}</a></li>');
                            listContainer.append(backAction);
                        }
                    }

                    if (attrs.hideEdit !== true && attrs.hideEdit !== 'true') {
                        current++;
                    }
                    if (current <= limit) {
                        editAction = angular.element(
                            '<a class="btn" role="button"><span class="glyphicon glyphicon-pencil">' +
                                '</span><span class="hidden-xs">&nbsp;&nbsp;{{\'btn-edit\'|i18n}}</span></a>');

                        if (page.attr('local') !== 'true' &&
                                (attrs.hideEdit !== true && attrs.hideEdit !== 'true') &&
                                (attrs.hideBack === true || attrs.hideBack === 'true')) {
                            editAction.addClass('btn-primary');
                        } else {
                            editAction.addClass('btn-default');
                        }

                        templateContainer.append(editAction);
                    } else {
                        editAction = angular.element('<li><a class="clickable">{{\'btn-edit\'|i18n}}</a></li>');

                        listContainer.append(editAction);
                    }

                    if (attrs.hideRemove !== true && attrs.hideRemove !== 'true') {
                        current++;
                    }
                    if (current <= limit) {
                        removeAction = angular.element(
                            '<a class="btn btn-default" role="button"><span class="glyphicon glyphicon-trash">' +
                                '</span><span class="hidden-xs">&nbsp;&nbsp;{{\'btn-remove\'|i18n}}</span></a>');

                        if (page.attr('local') !== 'true' &&
                                (attrs.hideRemove !== true && attrs.hideRemove !== 'true') &&
                                (attrs.hideEdit === true || attrs.hideEdit === 'true') &&
                                (attrs.hideBack === true || attrs.hideBack === 'true')) {
                            removeAction.addClass('btn-primary');
                        } else {
                            removeAction.addClass('btn-default');
                        }

                        templateContainer.append(removeAction);
                    } else {
                        removeAction = angular.element('<li><a class="clickable">{{\'btn-remove\'|i18n}}</a></li>');

                        listContainer.append(removeAction);
                    }

                    scope.$watch('hideBack', function (value) {
                        if (value === true || value === 'true') {
                            backAction.css('display', 'none');
                        } else {
                            backAction.css('display', '');
                        }
                    });

                    if (page.attr('local') === 'true') {
                        if (angular.isFunction(scope.onSave())) {
                            saveAction.attr('ng-click', 'callOnSave();');
                            scope.callOnSave = function () {
                                scope.onSave()();
                            };
                            $compile(saveAction)(scope);
                        } else if (angular.isString(onSaveLink)) {
                            saveAction.attr('href', onSaveLink);
                            $compile(saveAction)(scope.$parent);
                        } else {
                            saveAction.attr('ng-click', 'controller.save();');
                            $compile(saveAction)(scope.$parent);
                        }
                        if (angular.isFunction(scope.onCancel())) {
                            cancelAction.attr('ng-click', 'callOnBack();');
                            scope.callOnBack = function () {
                                scope.onBack()();
                            };
                            $compile(cancelAction)(scope);
                        } else if (angular.isString(onBackLink)) {
                            cancelAction.attr('href', onBackLink);
                            $compile(cancelAction)(scope.$parent);
                        } else {
                            cancelAction.attr('ng-click', 'controller.back();');
                            $compile(cancelAction)(scope.$parent);
                        }
                    } else {
                        if (angular.isFunction(scope.onBack())) {
                            backAction.attr('ng-click', 'callOnBack();');
                            scope.callOnBack = function () {
                                scope.onBack()();
                            };
                            $compile(backAction)(scope);
                        } else if (angular.isString(onBackLink)) {
                            backAction.attr('href', onBackLink);
                            $compile(backAction)(scope.$parent);
                        } else {
                            backAction.attr('ng-click', 'controller.back();');
                            $compile(backAction)(scope.$parent);
                        }
                    }

                    scope.$watch('hideEdit', function (value) {
                        if (value === true || value === 'true') {
                            editAction.css('display', 'none');
                        } else {
                            editAction.css('display', '');
                        }
                    });

                    if (angular.isFunction(scope.onEdit())) {
                        editAction.attr('ng-click', 'callOnEdit();');
                        scope.callOnEdit = function () {
                            scope.onEdit()();
                        };
                        $compile(editAction)(scope);
                    } else if (angular.isString(onEditLink)) {
                        editAction.attr('href', onEditLink);
                        $compile(editAction)(scope.$parent);
                    } else {
                        editAction.attr('ng-click', 'controller.edit();');
                        $compile(editAction)(scope.$parent);
                    }

                    scope.$watch('hideRemove', function (value) {
                        if (value === true || value === 'true') {
                            removeAction.css('display', 'none');
                        } else {
                            removeAction.css('display', '');
                        }
                    });

                    if (angular.isFunction(scope.onRemove())) {
                        removeAction.attr('ng-click', 'callOnRemove();');
                        scope.callOnRemove = function () {
                            scope.onRemove()();
                        };
                        $compile(removeAction)(scope);
                    } else {
                        removeAction.attr('ng-click', 'controller.remove();');
                        $compile(removeAction)(scope.$parent);
                    }

                    scope.$watch('hideActions', function (value) {
                        if (value === true || value === 'true') {
                            actionsTemplate.css('display', 'none');
                        } else {
                            actionsTemplate.css('display', '');
                        }
                    });

                    last = current + actions.length;

                    for (i = 0; i < actions.length; i++) {

                        action = angular.element(actions[i]);

                        current++;
                        if (current <= limit || last === limit + 1) {
                            primaryTemplate = angular.element('<a class="btn" role="button">' +
                                '<span class="glyphicon"></span><span class="hidden-xs"></span></a>');
                            if ((i + current) === 1) {
                                primaryTemplate.addClass('btn-primary');
                            } else {
                                primaryTemplate.addClass('btn-default');
                            }
                            parse(primaryTemplate, action, true);
                            templateContainer.append($compile(primaryTemplate)(scope.$parent));
                        } else {
                            item = angular.element('<li><a></a></li>');

                            parse(item.children('a'), action, false);

                            listContainer.append(item);
                        }
                    }

                    if (listContainer.find('li').length > 0) {
                        $compile(actionsTemplate)(scope.$parent);
                        templateContainer.append(actionsTemplate);
                    }

                    element.html(template);

                } else if (page.attr('type') === 'edit') {

                    template = angular.element(
                        '<div class="col-xs-12"><div class="operations page-detail-actions"></div></div>');

                    templateContainer = template.find('.operations');

                    if (page.attr('local') === 'true') {
                        saveAction = angular.element(
                            '<button class="btn btn-primary">{{\'btn-update\' | i18n}}</button>');
                    } else {
                        saveAction = angular.element(
                            '<button class="btn btn-primary">{{\'btn-save\' | i18n}}</button>');
                    }
                    if (page.attr('local') === 'true') {
                        saveNewAction = angular.element(
                            '<button class="btn btn-default">{{\'btn-update-new\' | i18n}}</button>');
                    } else {
                        saveNewAction = angular.element(
                            '<button class="btn btn-default">{{\'btn-save-new\' | i18n}}</button>');
                    }
                    cancelAction = $('<button class="btn btn-default">{{\'btn-cancel\' | i18n}}</button>');

                    if (angular.isFunction(scope.onSave())) {
                        saveAction.attr('ng-click', 'callOnSave();');
                        scope.callOnSave = function () { scope.onSave()(); };
                        $compile(saveAction)(scope);
                    } else {
                        saveAction.attr('ng-click', 'controller.save();');
                        $compile(saveAction)(scope.$parent);
                    }

                    if (angular.isFunction(scope.onSaveNew())) {
                        saveNewAction.attr('ng-click', 'callOnSaveNew();');
                        scope.callOnSaveNew = function () { scope.onSaveNew()(); };
                        $compile(saveNewAction)(scope);
                    } else {
                        saveNewAction.attr('ng-click', 'controller.saveNew();');
                        $compile(saveNewAction)(scope.$parent);
                    }

                    if (angular.isFunction(scope.onCancel())) {
                        cancelAction.attr('ng-click', 'callOnCancel();');
                        scope.callOnCancel = function () { scope.onCancel()(); };
                        $compile(cancelAction)(scope);
                    } else {
                        cancelAction.attr('ng-click', 'controller.cancel();');
                        $compile(cancelAction)(scope.$parent);
                    }

                    scope.$watch('hideSaveNew', function (value) {
                        if (value === true || value === 'true') {
                            saveNewAction.css('display', 'none');
                        } else {
                            saveNewAction.css('display', '');
                        }
                    });

                    templateContainer.append(cancelAction);
                    templateContainer.append(saveNewAction);
                    templateContainer.append(saveAction);
                    element.html(template);

                } else if (page.attr('type') === 'execution') {

                    template = angular.element(
                        '<div class="col-xs-12"><div class="operations page-detail-actions"></div></div>');

                    templateContainer = template.find('.operations');

                    execAction    = angular.element(
                        '<button class="btn btn-primary">{{\'btn-execution\' | i18n}}</button>');
                    cancelAction  = angular.element(
                        '<button class="btn btn-default">{{\'btn-cancel\' | i18n}}</button>');

                    if (angular.isFunction(scope.onExec())) {
                        execAction.attr('ng-click', 'callOnExec();');
                        scope.callOnExec = function () { scope.onExec()(); };
                        $compile(execAction)(scope);
                    } else {
                        execAction.attr('ng-click', 'controller.exec();');
                        $compile(execAction)(scope.$parent);
                    }

                    if (angular.isFunction(scope.onCancel())) {
                        cancelAction.attr('ng-click', 'callOnCancel();');
                        scope.callOnCancel = function () { scope.onCancel()(); };
                        $compile(cancelAction)(scope);
                    } else {
                        cancelAction.attr('ng-click', 'controller.cancel();');
                        $compile(cancelAction)(scope.$parent);
                    }

                    templateContainer.append(cancelAction);
                    templateContainer.append(execAction);

                    element.html(template);
                } else {
                    // type = base or undefined

                    limit = attrs.limitPrimaryAction + 1;

                    ignoreDisplayLimit = (limit === actions.length);

                    template = angular.element(
                        '<div class="col-xs-12"><div class="operations page-detail-actions"></div></div>');
                    templateContainer = template.find('.operations');

                    for (i = 0; i < actions.length; i++) {
						var hasIcon;

                        action = angular.element(actions[i]);
						hasIcon = action.attr('icon');

                        if (hasIcon) {
							primaryTemplate = angular.element('<a class="btn" role="button">' +
								'<span class="glyphicon"></span><span class="hidden-xs"></span></a>');
						} else {
							primaryTemplate = angular.element('<a class="btn" role="button"></a>');
						}

                        listContainer = actionsTemplate.find('ul');
                        listContainer.removeClass('dropdown-menu-right');

                        if (ignoreDisplayLimit || i < attrs.limitPrimaryAction) {

                            if (i === (attrs.limitPrimaryAction - 1)) {
                                primaryTemplate.addClass('btn-primary');
                            } else {
                                primaryTemplate.addClass('btn-default');
                            }

                            parse(primaryTemplate, action, true, scope);

                            templateContainer.append(primaryTemplate);
                        } else {

                            item = angular.element('<li><a></a></li>');

                            parse(item.children('a'), action, false, scope);

                            if (i < attrs.limitPrimaryAction) {
                                item.addClass('visible-xs');
                            }

                            listContainer.append(item);
                        }
                    }

                    if (listContainer.find('li').length > 0) {
                        templateContainer.append(actionsTemplate);
                    }

                    $compile(templateContainer)(scope.$parent);

                    element.html(template);
                }
            };

        }
    }

    Controller.$inject = ['$scope'];

    function Controller($scope) {

        this.scope = $scope;

        window.addEventListener('scroll', function () {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                pageHeaders = $('.page-head'),
                shrinkOn = 100,
				menuTopbar = $('#menu-topbar:visible')[0],
				menuHeader = $('#menu-header:visible')[0],
				style,
                top = 0,
                header = pageHeaders[0],
                filter = $('totvs-page-header-operation-filter').length > 0,
                i,
                j,
                divs,
				tags,
                h2,
                actions,
                item,
                subItem,
                ngInclude = false,
                mobile = menuHeader === undefined,
				diffResScroll = document.documentElement.scrollHeight - window.screen.availHeight;

			if (menuTopbar) {
				style = window.getComputedStyle(menuTopbar);
				if (style['position'] === 'fixed') {
					top += parseInt(style['height']);
				}
			}

			if (menuHeader) {
				style = window.getComputedStyle(menuHeader);
				if (style['position'] === 'fixed') {
					top += parseInt(style['height']);
				}
			}

			top = top + 'px';

            if (!header) {
                return;
            }

            function removeClass(item, className) {
                var classList,
                    index;

                classList = item.className.split(' ');
                index = classList.indexOf(className);

                if (index >= 0) {
                    classList.splice(index, 1);
                }

                return classList.join(' ');
            }

            function containsClass(item, className) {
                var classList = item.className.split(' ');

                return classList.indexOf(className) >= 0;
            }

            if (!menuHeader) {
                shrinkOn = 55;
            }

            if (!header.shrinkOn) {
                header.shrinkOn = shrinkOn;
            }

            if (distanceY > header.shrinkOn && diffResScroll > header.shrinkOn) {

                $('.page-fixed').css('z-index', '4');

                header.style.position    = 'fixed';
                header.style.top         = top;
                header.style.left        = '15px';
                header.style.right       = '15px';
                header.style.zIndex      = 100;
                divs = header.getElementsByTagName('div');
				tags = header.getElementsByTagName('totvs-page-tags');

                for (i = 0; i < divs.length; i++) {
                    item = divs[i];
                    if (!containsClass(item, 'hidden')) {
                        item.className += ' hidden';
                    }
                }

				for (i = 0; i < tags.length; i++) {
					divs = tags[i].getElementsByTagName('div');
					for (j = 0;j < divs.length; j++) {
						item = divs[j];
						item.className = removeClass(item, 'hidden');
					}
					item = tags[i].parentElement;
					while (item != header) {
						item.className = removeClass(item, 'hidden');
						item = item.parentElement;
					}
				}

                h2 = header.getElementsByTagName('h2');

                for (i = 0; i < h2.length; i++) {
                    item = h2[i];
                    item.parentElement.style.paddingLeft = '15px';

                    while (item.parentElement !== header) {
                        item.className = removeClass(item, 'hidden');
                        if (item.parentElement.outerHTML.indexOf('ng-include') > 0) {
                            ngInclude = true;
                            if (!containsClass(item, 'col-md-6') && !mobile) {
                                item.className += ' col-md-6';
                            }
                        }
                        item = item.parentElement;
                    }

                    item.className = removeClass(item, 'hidden');

                    if ((header.children.length > 2 || filter) && !ngInclude &&
                        !containsClass(item, 'col-md-6') && !mobile) {
                        item.className += ' col-md-6';
                    }
                }

                actions = header.getElementsByTagName('totvs-page-header-operation-action');

                for (i = 0; i < actions.length; i++) {
                    item = actions[i];
                    divs = item.getElementsByTagName('div');

                    if (!mobile) {
                        item.style.position = 'absolute';
                        item.style.right    = '0px';

                        if (header.children.length > 2 || filter) {
                            item.style.right                  = '10px';
                            item.style.top                    = '30px';
                            item.parentElement.style.position = 'absolute';
                            item.parentElement.style.right    = '0px';
                        }
                    }

                    for (j = 0; j < divs.length; j++) {
                        subItem = divs[j];
                        subItem.className = removeClass(subItem, 'hidden');
                    }

                    if (!header.actionClasses) {
                        header.actionClasses = item.children[0].className;
                    }

                    if (!containsClass(item.children[0], 'col-md-12') && !mobile) {
                        item.children[0].className = 'col-md-12';
                    }

                    while (item.parentElement !== header) {

                        item.className = removeClass(item, 'hidden');

                        if (item.parentElement.outerHTML.indexOf('ng-include') > 0) {
                            ngInclude = true;
                            if (!containsClass(item, 'col-md-6') && !mobile) {
                                item.className += ' col-md-6';
                            }
                        }

                        item = item.parentElement;
                    }

                    item.className = removeClass(item, 'hidden');

                    if ((header.children.length > 2 || filter) &&
                        !ngInclude && !containsClass(item, 'col-md-6') && !mobile) {
                        item.className += ' col-md-6';
                    }
                }

            } else {

                while (header.parentElement.contains(pageHeaders[1])) {
                    header.parentElement.removeChild(pageHeaders[1]);
                }

                $('.page-fixed').css('z-index', '');

                header.style.position   = '';
                header.style.top        = '';
                header.style.left       = '';
                header.style.right      = '';
                header.style.zIndex     = '';
                divs = header.getElementsByTagName('div');

                for (i = 0; i < divs.length; i++) {
                    item = divs[i];
                    item.className = removeClass(item, 'hidden');
                }

                h2 = header.getElementsByTagName('h2');

                for (i = 0; i < h2.length; i++) {
                    item = h2[i];
                    item.parentElement.style.paddingLeft = '';
                    while (item.parentElement !== header) {
                        item = item.parentElement;
                    }
                    item.className = removeClass(item, 'col-md-6');
                }

                actions = header.getElementsByTagName('totvs-page-header-operation-action');

                for (i = 0; i < actions.length; i++) {

                    item = actions[i];

                    if (header.actionClasses) {
                        item.children[0].className = header.actionClasses;
                    }

                    item.style.position = '';
                    item.style.right    = '';
                    item.style.top      = '';
                    item.parentElement.style.position = '';
                    item.parentElement.style.right    = '';
                    item.parentElement.style.top      = '';

                    while (item.parentElement !== header) {
                        item.className = removeClass(item, 'col-md-6');
                        item = item.parentElement;
                    }

                    item.className = removeClass(item, 'col-md-6');
                }
            }
        });
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageHeaderOperation
* @name totvsPageHeaderOperation
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-header-operation.module
*
* @dependencies
*
* @description
*
* A diretiva Page Header Operation é um container para a diretiva Page Header Operation Action
* e Page Header Operation Filter e tem o objetivo de alinhar as operações disponíveis na tela.
*
* @restrict E
*
* @example
*
* <totvs-page-header-operation></totvs-page-header-operation>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Header+Operation
*/

(function () {

    'use strict';

    angular
        .module('totvsPageHeaderOperation')
        .directive('totvsPageHeaderOperation', totvsPageHeaderOperation);

    totvsPageHeaderOperation.$inject = [];

    function totvsPageHeaderOperation() {

        var directive = {
            template: '<div class="row" ng-transclude></div>',
            restrict: 'E',
            replace: true,
            transclude: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageHeaderOperationFilter
* @name totvsPageHeaderOperationFilter
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-header-operation-filter.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsPageHeaderOperationFilter')
        .directive('totvsPageHeaderOperationFilter', totvsPageHeaderOperationFilter);

    totvsPageHeaderOperationFilter.$inject = ['$compile'];

    function totvsPageHeaderOperationFilter($compile) {

        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                advancedSearch: '&',
                cleanSearch: '&',
                placeholder: '@',
                'ngModel': '@'
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        */
        function compile(element) {

            var content,
                advancedSearch,
                defaultFilter;

            content = element.html();

            advancedSearch =
                '<div class="advanced-search">' +
                    '<a ng-click="callAdvancedSearch()" class="clickable advanced-search">' +
                        '{{ \'btn-advanced-search\' | i18n }}' +
                    '</a>' +
                '</div>';

            defaultFilter =
                '<form><div class="input-group pull-right">' +
                    '<input type="text" class="form-control">' +
                    '<span class="input-group-btn">' +
                        '<button class="btn btn-default" type="button" ng-click="callCleanSearch()">' +
                           '<span class="glyphicon glyphicon-remove"></span>' +
                        '</button>' +
                        '<button class="btn btn-default" type="submit">' +
                            '<span class="glyphicon glyphicon-filter" aria-hidden="true"></span>' +
                        '</button>' +
                    '</span>' +
                '</div></form>';

            element.html(
                '<div class="col-lg-5 col-md-5 col-sm-5 col-xs-12"><div class="filters">' +
                    '<div class="search-field"></div>' +
                '</div></div>');

            return function postLink(scope, element) {

                var control;

                if (angular.isFunction(scope.advancedSearch())) {

                    scope.callAdvancedSearch = function () {
                        scope.advancedSearch()();
                    };

                    element.find('div.filters').append(advancedSearch);
                    $compile(element.find('div.advanced-search'))(scope);
                }

                if (scope.ngModel) {

                    element.find('.search-field').prepend(defaultFilter);

                    element.find('input').attr('ng-model', scope.ngModel);
                    element.find('input').attr('placeholder', scope.placeholder);

                    control = element.find('input').controller('ngModel');

                    scope.callCleanSearch = function () {
                        control.$setViewValue(undefined);
                        element.find('input').focus();
                        if (angular.isFunction(scope.cleanSearch())) {
                            scope.cleanSearch()();
                        }
                    };

                    $compile(element.find('button')[0])(scope); //canclean
                    $compile(element.find('input'))(scope.$parent);
                    $compile(element.find('.search-field'))(scope.$parent);

                } else if (content) {
                    element.find('.search-field').html(content);
                    $compile(element.find('.search-field'))(scope.$parent);
                }
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module totvsPageNavbar
* @name totvsPageNavbar
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-navbar.module
*
* @dependencies
*
* @description
*
* Esta diretiva serve como container para as diretivas Totvs Page Breadcrumb e Totvs Page Header,
* a mesma deve ficar dentro da diretiva Totvs Page.
*
* @restrict E
*
* @example
*
* <totvs-page-navbar></totvs-page-navbar>
*
* @see TDN http://tdn.totvs.com/display/THF/totvs+page+navbar
*/

(function () {

    'use strict';

    angular
        .module('totvsPageNavbar')
        .directive('totvsPageNavbar', totvsPageNavbar);

    totvsPageNavbar.$inject = [];

    function totvsPageNavbar() {

        var directive = {
            template: '<div class="page-fixed" ng-transclude></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageHeaderTitle
* @name totvsPageHeaderTitle
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-header-title.module
*
* @dependencies
*
* @description
*
* Para o titulo é preciso informar apenas a propriedade title. Quando a página for do tipo lista
* (list) pode ser informado adicionalmente a propriedade total, esta por sua vez é aplicada nas
* telas de pesquisa para representar a quantidade total de registros encontrados de acordo com a
* pesquisa realizada; o atributo é opcional em outras situações.
*
* @restrict E
*
* @example
*
* <totvs-page-header-title></totvs-page-header-title>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Header+Title
*/

(function () {

    'use strict';

    angular
        .module('totvsPageHeaderTitle')
        .directive('totvsPageHeaderTitle', totvsPageHeaderTitle);

    totvsPageHeaderTitle.$inject = ['$compile'];

    function totvsPageHeaderTitle($compile) {

        var directive = {
            template: '<div class="row"><div class="col-xs-12">' +
                        '<h2 class="title" ng-if="!title" ng-transclude></h2>' +
                        '<h2 class="title" ng-if="title">{{title}}' +
                            '<span ng-if="total">&nbsp;({{total}})</span>' +
                            '<span ng-if="!title">&nbsp;{{placeholder}}</span>' +
                        '</h2>' +
                    '</div></div>',
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                title: '@',
                total: '@',
                placeholder: '@',
                settings: '&'
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        */
        function compile() {

            return function postLink(scope, element, attrs) {

                var page,
                    haveSettings,
                    settingsTemplate,
                    row;

                page = element.parents('div.page-wrapper-child');

                if (page === null || page === undefined || page.length < 1) {
                    page = element.parents('div.page-wrapper');
                }

                if (page.attr('type') === 'list') {

                    haveSettings = (attrs.settings !== null && attrs.settings !== undefined);

                    if (haveSettings) {

                        row = element.find('.col-xs-12');

                        row.removeClass('.col-xs-12');
                        row.addClass('col-xs-10 col-lg-10 col-md-10 col-sm-10');

                        settingsTemplate = $compile('<div class="col-xs-2 col-lg-2 col-md-2 col-sm-2">' +
                            '<div class="settings"><h3><a class="clickable" ng-click="settings()">' +
                            '<span class="glyphicon glyphicon-cog"></span></a></h3></div></div>')(scope);

                        element.append(settingsTemplate);
                    }
                }
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageQuickFilter
* @name totvsPageQuickFilter
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-quick-filter.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsPageQuickFilter')
        .directive('totvsPageQuickFilter', totvsPageQuickFilter);

    totvsPageQuickFilter.$inject = ['$compile'];

    function totvsPageQuickFilter($compile) {

        var directive = {
            restrict: 'E',
            scope: {
                filtersList : '=',
                filtersListCustom : '=',
                orderbyList : '=',
                onSelectFilter: '&',
                onAddEditCustom: '&',
                onRemoveCustom: '&',
                onSelectOrderby: '&',
                orderbySelected: '='
            },
            compile: compile

        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function compile(element, attrs) {

            var templateFilter,
                templateFilterMobile,
                templateCustom,
                templateOrderby,
                isOrderbySelectedEnabled;

            if (attrs.hasOwnProperty('orderbySelected') && attrs.orderbySelected !== undefined &&
                attrs.orderbySelected.trim().length > 0) {
                isOrderbySelectedEnabled = true;
            } else {
                isOrderbySelectedEnabled = false;
            }

            element.html('<div class="quick-filters pull-right">' +
                            '<ul class="list-inline"></ul>' +
                        '</div>' +
                        '<div class="clearfix"></div>');

            element.removeAttr('ng-click');

            templateFilter = angular.element(
                '<li ng-repeat="filter in filtersList" class="hidden-xs">' +
                    '<a role="button" class="clickable" ng-click="onClick(filter);">{{ filter.title }}</a>' +
                '</li>');

            templateFilterMobile = angular.element(
                '<li class="dropdown visible-xs">' +
                    '<div class="btn-group">' +
                        '<a role="button" class="btn btn-default btn-sm">{{ \'l-filter\' | i18n }}</a>' +
                        '<a role="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">' +
                            '<span class="caret"></span>' +
                        '</a>' +
                        '<ul class="dropdown-menu dropdown-menu-right">' +
                            '<li ng-repeat="filter in filtersList">' +
                                '<a role="button" class="clickable" ng-click="onClick(filter)">' +
                                    '{{ filter.title }}</a>' +
                            '</li>' +
                        '</ul>' +
                    '<div>' +
                    '</li>'
            );

            templateCustom = angular.element(
                '<li class="dropdown custom-filters" ng-if="filtersListCustom !== undefined">' +
                    '<div class="btn-group">' +
                        '<a role="button" class="btn btn-default btn-sm">{{ \'l-more-filters\' | i18n }}</a>' +
                        '<a role="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">' +
                            '<span class="caret"></span>' +
                        '</a>' +
                        '<ul class="dropdown-menu dropdown-menu-right">' +
                            '<li style="padding: 5px" class="row no-gutters">' +
                                '<div class="input-group pull-right">' +
                                    '<input class="form-control input-sm" type="text" ng-model="filterCustomText" ' +
                                        'placeholder="{{ \'l-filter\' | i18n }}">' +
                                    '<span class="input-group-btn">' +
                                        '<a role="button" class="btn btn-primary btn-sm" ' +
                                            'ng-click="onCustomAddEdit($event)">' +
                                            '<span class="glyphicon glyphicon-plus"></span>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                            '</li>' +
                            '<li role="separator" class="divider"></li>' +
                            '<li ng-repeat="custom in filtersListCustom | filter: filterCustomText track by $index">' +
                                '<div class="col-xs-9 title">' +
                                    '<a class="clickable" ng-click="onClick(custom);">{{ custom.title }}</a>' +
                                '</div>' +
                                '<div class="pull-right">' +
                                    '<a role="button" class="clickable" ng-click="onCustomAddEdit(custom);">' +
                                        '<span class="glyphicon glyphicon-pencil"></span>' +
                                    '</a> &nbsp;&nbsp;' +
                                    '<a role="button" class="clickable" ng-click="onCustomRemove(custom);">' +
                                        '<span class="glyphicon glyphicon-trash"></span>' +
                                    '</a>' +
                                '</div>' +
                            '</li>' +
                        '</ul>' +
                    '</div>' +
                    '</li>'
            );

            templateOrderby = angular.element(
                '<li class="dropdown">' +
                    '<div class="btn-group">' +
                        '<a role="button" class="btn btn-default btn-sm">' +
                            '{{ (orderby ? orderby.title : (\'l-orderby\' | i18n)) }}</a>' +
                        '<a role="button" class="btn btn-default btn-sm" ng-if="orderby" ' +
                            'ng-click="onClickSort(orderby)">' +
                            '<span class="glyphicon" ' +
                                'ng-class="orderby.asc === true ? \'glyphicon-sort-by-attributes\' : ' +
                                '\'glyphicon-sort-by-attributes-alt\'"></span>' +
                        '</a>' +
                        '<a role="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">' +
                            '<span class="caret"></span>' +
                        '</a>' +
                        '<ul class="dropdown-menu dropdown-menu-right">' +
                            '<li ng-repeat="order in orderbyList">' +
                                '<a role="button" class="clickable" ng-click="onOrderbySelect(order)">' +
                                    '{{ order.title }}</a>' +
                            '</li>' +
                        '</ul>' +
                    '</div>' +
                    '</li>'
            );

            return function postLink(scope, element) {

                var container;

                container = element.find('ul.list-inline');

                if (scope.filtersList) {
                    container.append(templateFilter);
                    container.append(templateFilterMobile);
                }

                scope.onClick = function (filter) {

                    scope.filterCustomText = undefined;

                    if (angular.isFunction(scope.onSelectFilter(scope))) {
                        scope.onSelectFilter(scope)(filter);
                    }
                };

                if (scope.filtersListCustom) {

                    container.append(templateCustom);

                    scope.onCustomAddEdit = function (custom) {

                        scope.filterCustomText = undefined;

                        if (angular.isFunction(scope.onAddEditCustom(scope))) {
                            scope.onAddEditCustom(scope)(custom);
                        }
                    };

                    scope.onCustomRemove = function (custom) {

                        if (!custom) {
                            custom = { name : scope.filterCustomText };
                        }

                        scope.filterCustomText = undefined;

                        if (angular.isFunction(scope.onRemoveCustom(scope))) {
                            scope.onRemoveCustom(scope)(custom);
                        }
                    };
                }

                if (scope.orderbyList) {

                    container.append(templateOrderby);

                    scope.onOrderbySelect = function (orderby) {

                        if (!scope.orderby || scope.orderby.property !== orderby.property) {

                            if (!orderby.hasOwnProperty('asc')) {
                                orderby.asc = true;
                            }

                            scope.orderby = angular.copy(orderby);
                        }

                        if (isOrderbySelectedEnabled) {
                            scope.orderbySelected = angular.copy(orderby);
                        }

                        if (angular.isFunction(scope.onSelectOrderby(scope))) {
                            scope.onSelectOrderby(scope)(scope.orderby);
                        }
                    };

                    scope.onClickSort = function (orderby) {
                        if (orderby) {
                            orderby.asc = !orderby.asc;
                            scope.onOrderbySelect(orderby);
                        }
                    };

                    scope.$watchCollection('orderbyList', function () {

                        var i;

                        scope.orderby = undefined;

                        if (isOrderbySelectedEnabled) {
                            scope.orderbySelected = scope.orderby;
                        }

                        if (!scope.orderbyList) {
                            return;
                        }

                        for (i = 0; i < scope.orderbyList.length; i++) {
                            if (scope.orderbyList[i].default === true) {

                                scope.orderby = scope.orderbyList[i];

                                if (isOrderbySelectedEnabled) {
                                    scope.orderbySelected = scope.orderby;
                                }

                                break;
                            }
                        }
                    });
                }

                $compile(container)(scope);
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPageQuickSelect
* @name totvsPageQuickSelect
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-quick-select.module
*
* @dependencies
*
* @description
*
* Esta diretiva foi projetada para ser utilizada com a página em formato de lista. Nela é
* disponibilizada a operação de selecionar todos para a lista.
*
* @restrict E
*
* @example
*
* <totvs-page-quick-select></totvs-page-quick-select>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Quick+Select
*/

(function () {

    'use strict';

    angular
        .module('totvsPageQuickSelect')
        .directive('totvsPageQuickSelect', totvsPageQuickSelect);

    totvsPageQuickSelect.$inject = [];

    function totvsPageQuickSelect() {

        var directive = {
            template:
                '<div class="quick-select clickable pull-left" ng-click="onClickSelectAll()">' +
                    '<span class="input-check">' +
                        '<input id="selectAll" type="checkbox" ng-click="onClickSelectAll()">' +
                        '<label for="selectAll"></label>' +
                    '</span>' +
                    '<span class="hidden-xs">{{ title }}</span>' +
                '</div>',
            restrict: 'E',
            scope: {
                title : '@',
                list : '=',
                ngClick : '&',
                gridOptions : '='
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        */
        function compile(element) {

            element.removeAttr('ng-click');

            return function (scope) {

                var selectAllOnGrid,
                    fnIsAllSelected;

                fnIsAllSelected = function () {
                    var i;

                    scope.isSelected = false;

                    if (scope.list !== undefined && scope.list !== null && scope.list.length > 0) {
                        scope.isSelected = true;
                        for (i = 0; i < scope.list.length; i++) {
                            if (scope.list[i].$selected !== true) {
                                scope.isSelected = false;
                                break;
                            }
                        }
                    }

                    $('.quick-select > .input-check > input[type=checkbox]').prop('checked', scope.isSelected);
                };

                scope.$watch(function () {

                    var count = 0,
                        i;

                    if (scope.list === undefined || scope.list === null) {
                        return count;
                    }

                    for (i = 0; i < scope.list.length; i++) {
                        if (scope.list[i].$selected) {
                            count++;
                        }
                    }

                    return count;

                }, function () {

                    fnIsAllSelected();
                });

                selectAllOnGrid = function (isSelected) {
                    if (scope.gridOptions !== undefined) {
                        if (isSelected === true) {
                            scope.gridOptions.api.selectAll();
                        } else {
                            scope.gridOptions.api.deselectAll();
                        }
                    }
                };

                scope.onClickSelectAll = function () {

                    var i;

                    scope.isSelected = (scope.isSelected === undefined ? true : !scope.isSelected);

                    if (angular.isFunction(scope.ngClick(scope))) {
                        scope.ngClick(scope)(scope.isSelected);
                    } else if (scope.list) {

                        for (i = 0; i < scope.list.length; i++) {
                            scope.list[i].$selected = scope.isSelected;
                        }

                        $('.input-check input[type=checkbox]').prop('checked', scope.isSelected);

                        selectAllOnGrid(scope.isSelected);
                    }
                };
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @todo SPEC e REFACTORY
*
* @module totvsPageTags
* @name totvsPageTags
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-page-tags.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
* <totvs-page-tags></totvs-page-tags>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Page+Tags
*/

(function () {

    'use strict';

    angular
        .module('totvsPageTags')
        .directive('totvsPageTags', totvsPageTags);

    totvsPageTags.$inject = [];

    function totvsPageTags() {

        var directive = {
            restrict: 'E',
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        */
        function compile(element) {

            var tags,
                tagContainer;

            tags = element.children('tag').clone() || [];

            element.html('<div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-xs">' +
                        '<div class="page-tags"></div></div></div>');

            tagContainer = element.find('.page-tags');

            angular.forEach(tags, function (tag) {

                tag = angular.element(tag);

                var tagTemplate = angular.element('<div class="tag legend"></div>');

                if (tag.attr('class')) {
                    tagTemplate.addClass(tag.attr('class'));
                }

                tagTemplate.html(tag.text());

                angular.forEach($(tag).get(0).attributes, function (attr) {
                    if (attr.name !== 'class') {
                        tagTemplate.attr(attr.name, attr.value);
                    }
                });

                tagContainer.append(tagTemplate);
            });

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsPhone
* @name totvsPhone
* @object directive
*
* @created 25/08/2016 v12.1.13
* @updated 25/08/2016 v12.1.13
*
* @requires
*
* @dependencies
*
* @description
*
* @restrict A
*
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsPhone')
        .directive('totvsPhone', totvsPhone);

    totvsPhone.$inject = ['$compile', 'totvsFieldService', '$timeout'];

    function totvsPhone($compile, totvsField, $timeout) {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                ngDisabled: '&',
                ngChange: '&',
                ngBlur: '&',
                placeholder: '@',
                ngModel: '=',
                uiMask: '@',
                tMask: '@'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl Controller do ngModel do elemento da diretiva
        */
        function link(scope, element, attrs, ngModelCtrl) {
            var phoneElement,
                inputGroup,
                templateElement;

            /* Begin html component */
            phoneElement = getELement();

            if (scope.tMask) { phoneElement.attr('mask', scope.tMask); }

            inputGroup = element.find('.input-group');
            inputGroup.append(phoneElement);

            totvsField.pattern(scope, attrs, element, scope, ngModelCtrl, phoneElement);
            totvsField.canclean(attrs, element, scope, phoneElement);

            templateElement = element.find('.field-container');
            $compile(templateElement)(scope);
            /* End */

            /* Functions */
            /* Foca o elemento caso houver o attr focus */
            if (attrs.$attr.focus) {
                $timeout(function () {
                    phoneElement.focus();
                }, 200);
            }

            function getELement() {
                return angular.element('<input type="tel" ng-model="ngModel" placeholder="{{::placeholder}}"' +
                    ' ng-blur="ngBlur()" class="form-control" ng-change="ngChange()" clean="true"' +
                    ' placeholder="{{::placeholder}}" ui-mask="{{::uiMask}}" ng-disabled="ngDisabled()">');
            }
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsSchedule
* @name totvsSchedule
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-schedule.controller totvs-schedule.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    var template =
        '<div class="schedule-panel form-inline row">' +
            '<field type="radio" class="col-md-3" ng-model="config.type" ng-change="changeType()">' +
                '<label>{{"l-date-execution" | i18n}}</label>' +
                '<totvs-options>' +
                    '<totvs-option value="TODAY">{{\'l-execution-today\' | i18n}}</totvs-option>' +
                '</totvs-options>' +
            '</field>' +

            '<field type="radio" class="col-md-3" ng-model="config.type" ng-change="changeType()">' +
                '<label>&nbsp;</label>' +
                '<totvs-options>' +
                    '<totvs-option value="DATE">{{\'l-schedule-execution\' | i18n}}</totvs-option>' +
                '</totvs-options>' +
            '</field>' +

            '<field type="date" class="col-md-3" ng-disabled="config.type !== \'DATE\'" canclean ' +
                'ng-model="config.date" label="{{\'l-schedule-to\' | i18n}}">' +
            '</field>' +

            '<field type="time" class="col-md-3" ng-disabled="config.type !== \'DATE\'" ' +
                'ng-model="config.time" label="{{\'l-time\' | i18n}}" canclean>' +
            '</field>' +

            '<field type="checkbox" class="col-md-12" ng-model="config.repeat" ' +
                    'ng-change="changeRepeat()" ng-if="hideRepeat !== \'true\'">' +
                '<label>{{\'l-repeat-occurrence\' | i18n}}</label>' +
            '</field>' +

            '<div class="col-md-12" ng-if="config.repeat && description">' +
                '<label style="margin-top:2px;font-weight:200;font-size:12px;color:gray;">' +
                    '{{\'l-configuration\' | i18n}}</label>' +
                '<div style="font-weight:bold">{{description}}</div>' +
            '</div>' +

            '<div class="col-md-12" ng-if="config.repeat" style="padding-top:5px">' +
                '<a class="clickable" ng-click="changeConfig(false);">{{\'btn-edit\' | i18n}}</a>' +
            '</div>' +
        '</div>',

    templateModal =
        '<totvs-modal-header>{{"l-repeat-occurrence" | i18n}}</totvs-modal-header>' +

        '<totvs-modal-body>' +
            '<div class="row">' +
                '<field type="radio" class="col-md-12" ng-model="scheduleController.config.repeatType" ' +
                        'label="{{\'l-repeat-pattern\' | i18n}}" ' +
                        'ng-change="scheduleController.changeRepeatCycle(' +
                            'scheduleController.config.repeatType, true)">' +
                    '<totvs-options>' +
                        '<totvs-option value="D">{{"l-repeat-daily" | i18n}}</totvs-option>' +
                        '<totvs-option value="W">{{"l-repeat-weekly" | i18n}}</totvs-option>' +
                        '<totvs-option value="M">{{"l-repeat-monthly" | i18n}}</totvs-option>' +
                    '</totvs-options>' +
                '</field>' +

                '<field type="combo" class="col-md-6" ng-model="scheduleController.config.repeatCycle" ' +
                    'label="{{ \'l-repeat-every\' | i18n }}" ' +
                    'ng-options="item.index as item.description ' +
                        'for item in scheduleController.repeatCycleItems">' +
                '</field>' +

                '<field type="time" class="col-md-6" ng-model="scheduleController.config.repeatTime" ' +
                    'label="{{ \'l-time\' | i18n}}"></field>' +

                '<div class="field-container col-md-12" ' +
                    'ng-if="scheduleController.config.repeatType === \'W\'">' +
                    '<div class="row seven-cols">' +
                        '<field type="checkbox" class="col-md-1" label="{{\'l-day-sunday\' | i18n}}" ' +
                            'ng-model="scheduleController.config.repeatWeekDays.sunday"></field>' +
                        '<field type="checkbox" class="col-md-1" label="{{\'l-day-monday-single\' | i18n}}"' +
                            'ng-model="scheduleController.config.repeatWeekDays.monday"></field>' +
                        '<field type="checkbox" class="col-md-1" label="{{\'l-day-tuesday-single\' | i18n}}"' +
                            'ng-model="scheduleController.config.repeatWeekDays.tuesday"></field>' +
                        '<field type="checkbox" class="col-md-1" label="{{\'l-day-wednesday-single\' | i18n}}"' +
                            'ng-model="scheduleController.config.repeatWeekDays.wednesday"></field>' +
                        '<field type="checkbox" class="col-md-1" label="{{\'l-day-thursday-single\' | i18n}}"' +
                            'ng-model="scheduleController.config.repeatWeekDays.thursday"></field>' +
                        '<field type="checkbox" class="col-md-1" label="{{\'l-day-friday-single\' | i18n}}"' +
                            'ng-model="scheduleController.config.repeatWeekDays.friday"></field>' +
                        '<field type="checkbox" class="col-md-1" label="{{\'l-day-saturday\' | i18n}}"' +
                            'ng-model="scheduleController.config.repeatWeekDays.saturday"></field>' +
                    '</div>' +
                '</div>' +

                '<div ng-if="scheduleController.config.repeatType === \'M\'">' +
                    '<field type="radio" class="col-md-3" label="{{\'l-always-on\' | i18n}}" ' +
                        'ng-model="scheduleController.config.repeatMonthDay.last">' +
                        '<totvs-options>' +
                            '<totvs-option value=false>{{\'l-day-of-the-month\' | i18n}}</totvs-option>' +
                        '</totvs-options>' +
                    '</field>' +
                    '<field type="combo" class="col-md-3" ' +
                        'ng-model="scheduleController.config.repeatMonthDay.day" ' +
                        'ng-disabled="scheduleController.config.repeatMonthDay.last === \'true\'"  ' +
                        'ng-options="item for item in ' +
                            '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]">' +
                        '<label>&nbsp;</label>' +
                    '</field>' +
                    '<field type="radio" class="col-md-6" ng-model="scheduleController.config.repeatMonthDay.last">' +
                        '<label>&nbsp;</label>' +
                        '<totvs-options>' +
                            '<totvs-option value=true>{{\'l-last-day-of-the-month\' | i18n}}</totvs-option>' +
                        '</totvs-options>' +
                    '</field>' +
                '</div>' +

                '<field type="radio" class="col-md-3" label="{{\'l-execute\' | i18n}}" ' +
                    'ng-model="scheduleController.config.repeatFinish">' +
                    '<totvs-options>' +
                        '<totvs-option value="FOREVER">{{"l-forever" | i18n}}</totvs-option>' +
                    '</totvs-options>' +
                '</field>' +

                '<field type="radio" class="col-md-3" ng-model="scheduleController.config.repeatFinish">' +
                    '<label>&nbsp;</label>' +
                    '<totvs-options>' +
                        '<totvs-option value="DATE">{{"l-until-to-date" | i18n}}</totvs-option>' +
                    '</totvs-options>' +
                '</field>' +

                '<field type="date" class="col-md-6" ng-model="scheduleController.config.repeatFinishDate" ' +
                    'ng-disabled="scheduleController.config.repeatFinish !== \'DATE\'" canclean>' +
                    '<label>&nbsp;</label>' +
                '</field>' +
            '</div>' +
        '</totvs-modal-body>' +

        '<totvs-modal-footer>' +
            '<button type="button" class="btn btn-default" data-ng-click="scheduleController.close();">' +
                '{{ "btn-cancel" | i18n }}</button>' +
            '<button type="button" class="btn btn-primary" data-ng-click="scheduleController.save();">' +
                '{{ "l-save-schedule" | i18n }}</button>' +
        '</totvs-modal-footer>';

    angular
        .module('totvsSchedule')
        .directive('totvsSchedule', totvsSchedule);

    totvsSchedule.$inject = ['$rootScope', '$modal', '$filter'];

    function totvsSchedule($rootScope, $modal, $filter) {

        var directive = {
            template: template,
            restrict: 'E',
            require: 'ng-model',
            replace: true,
            scope: {
                hideRepeat: '@'
            },
            link: link
        };

        return directive;

        function link (scope, element, attrs, ngModel) {

            // ******************************************************
            // Manipulação do ng-model
            // ******************************************************

            // Inicia a diretiva com valores passados pelo controller
            ngModel.$render = ngModelRender;

            // Atualiza o ngModel a cada alteração
            scope.$watch('config', watchConfig, true);

            // ******************************************************
            // Modal de configuração
            // ******************************************************

            scope.changeType = changeType;

            scope.changeRepeat = changeRepeat;

            scope.changeConfig = changeConfig;

            // ******************************************************
            // Functions
            // ******************************************************

            function ngModelRender() {

                if (!ngModel.$viewValue) {
                    ngModel.$viewValue = {};
                }

                scope.config = {
                    type: ngModel.$viewValue.type || 'TODAY',
                    date: ngModel.$viewValue.date || undefined,
                    time: ngModel.$viewValue.time || null,
                    repeat: ngModel.$viewValue.repeat || false,

                    repeatType: ngModel.$viewValue.repeatType || 'D',
                    repeatTime: ngModel.$viewValue.repeatTime || null,
                    repeatCycle: ngModel.$viewValue.repeatCycle || 1,
                    repeatWeekDays: ngModel.$viewValue.repeatWeekDays || {},
                    repeatMonthDay: ngModel.$viewValue.repeatMonthDay || {'day': 1, last: 'false'},

                    repeatFinish: ngModel.$viewValue.repeatForever || 'FOREVER',
                    repeatFinishDate: ngModel.$viewValue.repeatFinishDate || undefined
                };
            }

            function watchConfig(config) {
                ngModel.$setViewValue({
                    type: config.type,
                    date: config.date,
                    time: config.time,
                    repeat: config.repeat,
                    repeatType: config.repeatType,
                    repeatTime: config.repeatTime,
                    repeatCycle: config.repeatCycle,
                    repeatWeekDays: config.repeatWeekDays,
                    repeatMonthDay: config.repeatMonthDay,
                    repeatFinish: config.repeatFinish,
                    repeatFinishDate: config.repeatFinishDate
                });

                fnUpdateDescription(scope.config);
            }

            function changeType() {
                if (scope.config.type === 'TODAY') {
                    scope.config.date = undefined;
                    scope.config.time = undefined;
                }
            }

            function changeRepeat() {
                if (scope.config.repeat === true) {
                    scope.changeConfig(true);
                } else {
                    scope.config.repeatType = 'D';
                    scope.config.repeatTime = undefined;
                    scope.config.repeatCycle = 1;
                    scope.config.repeatWeekDays = {};
                    scope.config.repeatMonthDay = {'day': 1, last: 'false'};
                    scope.config.repeatFinish = 'FOREVER';
                    scope.config.repeatFinishDate = undefined;
                }
            }

            function changeConfig(reload) {
                var configModalInstance,
                    cloneConfig;

                configModalInstance = $modal.open({
                    template: templateModal,
                    controller: 'TotvsScheduleController as scheduleController',
                    size: 'md',
                    resolve: {
                        config: function () {
                            // passa o objeto com os dados da pesquisa avançada para o modal
                            cloneConfig = angular.copy(scope.config);

                            return cloneConfig;
                        }
                    }
                });

                configModalInstance.result.then(function () {
                    scope.config = angular.copy(cloneConfig);
                }, function () {
                    if (reload) {
                        scope.config.repeat = false;
                    }
                });
            }

            function fnUpdateDescription (config) {

                if (!config.repeat) {
                    scope.description = undefined;
                    return;
                }

                scope.description =
                    fnDescriptionType() +
                    fnDescriptionTime() +
                    fnDescriptionDay() + ' ' +
                    fnDescriptionFinish();

                function fnDescriptionType() {
                    switch (config.repeatType) {
                    case 'D':
                        return $filter('i18n')(
                            (config.repeatCycle === 1 ? 'l-repeat-every-days' : 'l-repeat-every-x-days'),
                            config.repeatCycle);
                    case 'W':
                        return $filter('i18n')(
                            (config.repeatCycle === 1 ? 'l-repeat-every-weeks' : 'l-repeat-every-x-weeks'),
                            config.repeatCycle);
                    case 'M':
                        return $filter('i18n')(
                            (config.repeatCycle === 1 ? 'l-repeat-every-months' : 'l-repeat-every-x-months'),
                            config.repeatCycle);
                    default:
                        return '';
                    }
                }

                function fnDescriptionTime() {
                    if (config.repeatTime) {
                        return ' ' + $filter('i18n')('l-prep-at') + ' ' + config.repeatTime + '. ';
                    } else {
                        return '. ';
                    }
                }

                function fnDescriptionDay() {
                    var daysOfWeek = '',
                        index;

                    if (config.repeatType === 'W') {

                        if (!config.repeatWeekDays) {
                            return '';
                        }

                        if (config.repeatWeekDays.sunday) {
                            daysOfWeek = $filter('i18n')('l-prep-on-m') + ' ' +
                                $filter('i18n')('l-day-sundays');
                        }

                        if (config.repeatWeekDays.monday) {
                            daysOfWeek += (!daysOfWeek ? $filter('i18n')('l-prep-on-f') + ' ' : ', ') +
                                $filter('i18n')('l-day-mondays');
                        }

                        if (config.repeatWeekDays.tuesday) {
                            daysOfWeek += (!daysOfWeek ? $filter('i18n')('l-prep-on-f') + ' ' : ', ') +
                                $filter('i18n')('l-day-tuesdays');
                        }

                        if (config.repeatWeekDays.wednesday) {
                            daysOfWeek += (!daysOfWeek ? $filter('i18n')('l-prep-on-f') + ' ' : ', ') +
                                $filter('i18n')('l-day-wednesdays');
                        }

                        if (config.repeatWeekDays.thursday) {
                            daysOfWeek += (!daysOfWeek ? $filter('i18n')('l-prep-on-f') + ' ' : ', ') +
                                $filter('i18n')('l-day-thursdays');
                        }

                        if (config.repeatWeekDays.friday) {
                            daysOfWeek += (!daysOfWeek ? $filter('i18n')('l-prep-on-f') + ' ' : ', ') +
                                $filter('i18n')('l-day-fridays');
                        }

                        if (config.repeatWeekDays.saturday) {
                            daysOfWeek += (!daysOfWeek ? $filter('i18n')('l-prep-on-m') + ' ' : ', ') +
                                $filter('i18n')('l-day-saturdays');
                        }

                        // Procura a última ',' para substituir por um 'e'
                        index = daysOfWeek.lastIndexOf(',');

                        return daysOfWeek.slice(0, index) + daysOfWeek.slice(index).replace(',', ' e') + '. ';

                    } else if (config.repeatType === 'M') {
                        if (config.repeatMonthDay.last === 'true') {
                            return $filter('i18n')('l-last-day-each-month');
                        } else {
                            return $filter('i18n')('l-on-day-of-each-month-x', config.repeatMonthDay.day);
                        }
                    } else {
                        return '';
                    }
                }

                function fnDescriptionFinish() {
                    if (config.repeatFinish === 'FOREVER') {
                        return $filter('i18n')('l-forever') + '. ';
                    } else {
                        return $filter('i18n')(
                            'l-finish-in', $filter('date')(config.repeatFinishDate, 'dd/MM/yyyy')) + '. ';
                    }
                }
            }
        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsSelect
* @name totvsSelect
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires
*
* @dependencies
*
* @description
*
* @restrict A
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsSelect')
        .directive('totvsSelect', totvsSelect);

    totvsSelect.$inject = ['$injector', '$timeout', '$compile', '$parse', 'totvsFieldService',
        'i18nFilter', '$location'];

    function totvsSelect($injector, $timeout, $compile, $parse, totvsField, i18nFilter, $location) {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            scope: true,
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModelCtrl) {

            scope.initfn = $parse(attrs.selectInit);

            scope.selectId           = attrs.selectId;
            scope.selectService      = attrs.selectService;
            scope.selectDescription  = attrs.selectDescription;
            scope.filter             = attrs.filter || 'contains';
            scope.placeholder        = attrs.placeholder || '';
            scope.minLength          = attrs.minLength || '1';
            scope.delay              = attrs.delay || 500;

            var timerFormatter  = '',
                firstTime,
                service,
                selectModel,
                selectMatch,
                inputGroup,
                select,
                childScope,
                selectElement,
                callbackfn,
                newValue,
                oldValue,
                oldText,
                templateElement,
                kendoElement,
                doChange = true;
            /***                        BEGIN TEMPLATE                        ***/
            select = angular.element('<select kendo-combo-box k-options="selectOptions" style="width: 100%"></select>');
            inputGroup = element.find('.input-group');
            inputGroup.append(select);

            childScope = scope.$new();
            selectElement = element.find('select');

            totvsField.pattern(scope, attrs, element, childScope, ngModelCtrl, selectElement);
            totvsField.zoom(attrs, element);
            totvsField.ngHide(scope, attrs, element);
            totvsField.ngShow(scope, attrs, element);
            totvsField.ngDisabled(scope, attrs, element, select);

            callbackfn = function () {
                var value;

                switch (attrs.canclean) {
                case 'undefined':
                    value = undefined;
                    break;
                case 'null':
                case '':
                    value = null;
                    break;
                default:
                    value = attrs.canclean;
                }

                ngModelCtrl.$setViewValue(value);
                ngModelCtrl.$render();

                getKendoSelect().value(value);
            };

            totvsField.canclean(attrs, element, childScope, selectElement, callbackfn);
            templateElement = element.find('.field-container');

            $compile(templateElement)(childScope);
            /***                        END TEMPLATE                           ***/

            scope.selectOptions = {
                dataValueField:  "['" + scope.selectId + "']",
                dataTextField: 'DisplayText',
                filter: scope.filter,
                placeholder: scope.placeholder,
                minLength: scope.minLength,
                delay: scope.delay,
                filtering: function (e) {
                    if (e.filter) {
                        refreshSelectList(e.filter.value);
                    }
                },
                change: function (e) {
                    if (!doChange) {
                        if (this.select() === -1) {
                            return e.preventDefault();
                        }
                    }

                    updateSelectModel(this);
                    doChange = true;
                },
                select: function (e) {
                    var itemText = e.item.text();
                    if (itemText === (attrs.linkText || i18nFilter('btn-add'))) {
                        return callUrl();
                    }

                }
            };
			
			/* Functions */
            function getDesktopElement() {
                return angular.element('<select kendo-combo-box k-options="selectOptions" style="width: 100%">' +
                                       '</select>');
            }

            function getKendoSelect() {
                if (kendoElement) { return kendoElement; }

                kendoElement = element.find('[kendo-combo-box]').data('kendoComboBox');

                return kendoElement;
            }

            if (scope.selectService) {
                service = $injector.get(scope.selectService);
            }

            function validObject(data) {
                var attr, object = {},
                    rejectAttr = ['_events', '_handlers', 'DisplayText', 'uid', '$selected', '$promise', '$resolved'];

                for (attr in data) {
                    if (data.hasOwnProperty(attr)) {
                        if (!angular.isFunction(data[attr])) {
                            if (rejectAttr.indexOf(attr) === -1) {
                                object[attr] = data[attr];
                            }
                        }
                    }
                }

                return object;
            }

            function formatString(item) {
                var index = {}, formatedString = '', attr = '';

                if (attrs.$attr.selectMatch) {

                    if (!selectMatch) {
                        selectMatch = JSON.parse(attrs.selectMatch);
                    }

                    for (index in selectMatch) {
                        if (selectMatch.hasOwnProperty(index)) {
                            attr = selectMatch[index].field;
                            formatedString += fetchPropertyFromObject(item, attr);

                            if (selectMatch[index].separator) {
                                formatedString += selectMatch[index].separator;
                            }
                        }
                    }
                    return formatedString;
                } else {
                    if (item[scope.selectId]) {
                        return item[scope.selectId] + ' - ' + item[scope.selectDescription];
                    } else {
                        return item[scope.selectDescription];
                    }
                }
            }

            function fetchPropertyFromObject(obj, prop) {
                var index;
                // Verifica o objeto
                if (typeof obj === 'undefined') {
                    return false;
                }

                // Index da próxima propriedade na lista
                index = prop.indexOf('.');

                // Existe uma próxima propriedade; chamada recursiva
                if (index >= 0) {
                    // busca a propriedade
                    return fetchPropertyFromObject(obj[prop.substring(0, index)], prop.substr(index + 1));
                }

                //Não existe uma próxima propriedade ('.'), simplesmente retorna a propriedade
                return obj[prop];
            }

            function setDataSource(data) {
                var dataSource, newData;

                if (data) {
                    newData = angular.isArray(data) ? data : [data];

                    if (newData) {
                        dataSource = new kendo.data.DataSource({
                            data: newData,
                            schema: {
                                parse: function (response) {
                                    angular.forEach(response, function (elem) {
                                        elem.DisplayText = formatString(elem);
                                    });
                                    return response;
                                }
                            }
                        });

                        getKendoSelect().setDataSource(dataSource);
                    }
                }
            }

            function selectItem(value) {
                var model;

                model = angular.isObject(value) ? value[scope.selectId] : value;

                if (model) {
                    getKendoSelect().select(function (item) {
                        return item[scope.selectId] === model;
                    });
                }
                getKendoSelect().trigger('change');
            }

            function loadValue(value) {
                var promise;

                if (value && angular.isObject(value)) {
                    value = value[scope.selectId];
                }

                promise = service.getObjectFromValue(value, scope.initfn(scope));

                if (promise) {
                    if (promise.then) {
                        promise.then(function (data) {
                            if (data && data.hasOwnProperty(scope.selectId)) {
                                var validData = validObject(data);
                                setDataSource(validData);
                                selectItem(data[scope.selectId]);
                            } else {
                                if (selectModel && selectModel.hasOwnProperty(scope.selectId)) {
                                    setDataSource(selectModel);
                                    selectItem(selectModel);
                                } else {
                                    getKendoSelect().value('');

                                    // Necessario par ao funcionamento do link para alguma url
                                    if (attrs.link) {
                                        data = objToLink();
                                        setDataSource(data);
                                        $timeout(function () {
                                            getKendoSelect().open();
                                        }, 150);
                                    }
                                }
                            }
                        });
                    }
                }
            }

            function refreshSelectList(filterValue) {
                var promise, filter, value;

                filter = { property : scope.selectDescription || scope.selectId };

                if (angular.isObject(filterValue)) {
                    value = filterValue[scope.selectId];
                } else {
                    value = filterValue;
                }

                promise = service.applyFilter({
                    init: scope.initfn(scope),
                    disclaimers: [{ property : filter.property, value : value }],
                    selectedFilter: filter,
                    selectedFilterValue: value,
                    more: false,
                    isAdvanced: false,
                    isSelectValue: true
                });

                if (promise) {
                    if (promise.then) {
                        promise.then(function (data) {
                            if (attrs.link) {
                                var link = objToLink();
                                data.push(link);
                            }

                            setDataSource(data);

                            if (!firstTime && data.length === 1) {
                                $timeout(function () {
                                    getKendoSelect().open();
                                }, 150);
                            }

                            firstTime = false;
                        });
                    } else {
                        firstTime = false;
                    }
                }
            }

            function objToLink() {
                var object = {};
                object[scope.selectId] = undefined;
                object[scope.selectDescription] = attrs.linkText || i18nFilter('btn-add');

                return object;
            }

            function updateSelectModel(self) {
                var item = {}, data;

                if (self) {
                    data = self.dataItem(self.select());
                    oldText = (data !== undefined) ? data.DisplayText : undefined;
                    item = validObject(data);
                }

                if (item.hasOwnProperty(scope.selectId)) {
                    selectModel = item;
                    if (attrs.$attr.returnObject) {
                        ngModelCtrl.$setViewValue(item);
                    } else {
                        ngModelCtrl.$setViewValue(item[scope.selectId]);
                    }
                    oldValue = item[scope.selectId];
                } else {
                    ngModelCtrl.$setViewValue(undefined);
                    oldValue = undefined;

                    getKendoSelect().value('');
                }

                ngModelCtrl.$render();
            }

            ngModelCtrl.$formatters.unshift(function (value) {
                if (!value) {
                    if (getKendoSelect()) {
                        updateSelectModel(value);
                    }
                }

                if (timerFormatter) {
                    $timeout.cancel(timerFormatter);
                }

                timerFormatter = $timeout(function () {
                    loadValue(value);
                }, scope.delay);
            });


            function callUrl() {
                var link = attrs.link;
                $location.path(link);
            }

            scope.updateSelectModelZoom = function (zoomValue) {
                var vId = zoomValue[scope.selectId];

                setDataSource(zoomValue);

                getKendoSelect().select(function (item) {
                    return item[scope.selectId] === vId;
                });

                getKendoSelect().trigger('change');
            };

            $timeout(function () {
                var span, inputGroupBtn;

                span = element.find('.k-dropdown-wrap');
                inputGroupBtn = element.find('.input-group-btn').children();

                if (inputGroupBtn.length > 0) {
                    span.css('border-bottom-right-radius', '0px');
                    span.css('border-top-right-radius', '0px');
                }

                element.find('input.k-input').on('keydown', function (e) {
                    if (e.keyCode === 9) {
                        doChange = false;
                        var textInput = getKendoSelect().text(),
                            currentObject = getKendoSelect().dataItem(getKendoSelect().select());

                        if (textInput) {
                            currentObject = (currentObject === undefined) ? '' : currentObject;
                            if (textInput !== oldText && currentObject.DisplayText !== textInput) {
                                loadValue(textInput);
                            }
                        } else {
                            doChange = true;
                        }
                    }
                });

                if (attrs.$attr.focus) {
                    getKendoSelect().input.focus();
                }

                element.find('input.k-input').focusin(function () {
                    newValue = getKendoSelect().value();

                    if ((newValue !== oldValue) && (getKendoSelect().select() === -1)) {
                        refreshSelectList('');
                        oldValue = newValue;
                    }

                    getKendoSelect().open();
                });

                if (!ngModelCtrl.$modelValue) {
                    firstTime = true;
                    refreshSelectList(ngModelCtrl.$modelValue);
                }
            }, 200);
        }

    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTab
* @name totvsTab
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-tab.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Tab serve como container para organizar conteúdos facilitando a visualização
* do usuário.
*
* @restrict EA
*
* @example
*
* <totvs-tab></totvs-tab>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Tab
*/

(function () {

    'use strict';

    angular
        .module('totvsTab')
        .directive('totvsTab', totvsTab);

    totvsTab.$inject = ['$parse'];

    function totvsTab($parse) {

        var directive = {
			templateUrl: 'templates/tab.html',
            restrict: 'EA',
            require: '^totvsTabset',
            replace: true,
            transclude: true,
            scope: {
                active: '=?',
                heading: '@',
                onSelect: '&select',
                onDeselect: '&deselect'
            },
            controller: function () {},
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} elm Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} transclude Controller da diretiva
        */
        function compile(elm, attrs, transclude) {

            return function (scope, elm, attrs, control) {

                scope.$watch('active', function (active) {
                    if (active) {
                        control.select(scope);
                    }
                });

                scope.disabled = false;
                if (attrs.disabled) {
                    scope.$parent.$watch($parse(attrs.disabled), function (value) {
                        scope.disabled = !!value;
                    });
                }

                scope.select = function () {
                    if (!scope.disabled) {
                        scope.active = true;
                        elm.parent().children('li.dropdown').removeClass('active');
                    }
                };

                control.addTab(scope);

                scope.$on('$destroy', function () {
                    control.removeTab(scope);
                });

                scope.$transcludeFn = transclude;
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabContentTransclude
* @name totvsTabContentTransclude
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-tab-content-transclude.module
*
* @dependencies
*
* @description
*
* @restrict A
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsTabContentTransclude')
        .directive('totvsTabContentTransclude', totvsTabContentTransclude);

    totvsTabContentTransclude.$inject = [];

    function totvsTabContentTransclude() {

        var directive = {
            restrict: 'A',
            require: '^totvsTabset',
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} elm Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function link(scope, elm, attrs) {

            var tab = scope.$eval(attrs.totvsTabContentTransclude);

            if (!tab.$transcludeFn) {
                return;
            }

            function isTabHeading(node) {
                return node.tagName &&  (
                    node.hasAttribute('totvs-tab-heading') ||
                    node.hasAttribute('data-totvs-tab-heading') ||
                    node.tagName.toLowerCase() === 'totvs-tab-heading' ||
                    node.tagName.toLowerCase() === 'data-totvs-tab-heading'
                );
            }

            tab.$transcludeFn(tab.$parent, function (contents) {
                var i,
                    node;

                for (i = 0; i < contents.length; i++) {

                    node = contents[i];

                    if (isTabHeading(node)) {
                        tab.headingElement = node;
                    } else {
                        elm.append(node);
                    }
                }
            });

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabDropdown
* @name totvsTabDropdown
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-tab-dropdown.module
*
* @dependencies
*
* @description
*
* O Totvs Tab Dropdown cria uma aba no Totvs Tabset, mas ao invés de exibir um conteúdo, o mesmo
* exibe uma lista de abas agrupadas para serem selecionadas.
* Para cada item da lista de abas agrupadas de ser criado um Totvs Tab Dropdown Item.
*
* @restrict EA
*
* @example
*
* <totvs-tab-dropdown></totvs-tab-dropdown>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Tab+Dropdown
*/

(function () {

    'use strict';

    angular
        .module('totvsTabDropdown')
        .directive('totvsTabDropdown', totvsTabDropdown);

    totvsTabDropdown.$inject = ['$parse'];

    function totvsTabDropdown($parse) {

        var directive = {
			templateUrl: 'templates/tabdropdown.html',
            restrict: 'EA',
            require: '^totvsTabset',
            replace: true,
            transclude: true,
            scope: {
                active: '=?',
                heading: '@',
                onSelect: '&select',
                onDeselect: '&deselect'
            },
            controller: function () {},
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        */
        function compile() {

            return function (scope, elm, attrs, control) {

                scope.disabled = false;
                if (attrs.disabled) {
                    scope.$parent.$watch($parse(attrs.disabled), function (value) {
                        scope.disabled = !!value;
                    });
                }

                control.addTab(scope);

                scope.$on('$destroy', function () {
                    control.removeTab(scope);
                });
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabDropdownItem
* @name totvsTabDropdownItem
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-tab-dropdown-item.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Tab Dropdown Item serve como container para organizar conteúdos assim como a
* Totvs Tab.
*
* @restrict EA
*
* @example
*
* <totvs-tab></totvs-tab>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Tab+Dropdown+Item
*/

(function () {

    'use strict';

    angular
        .module('totvsTabDropdownItem')
        .directive('totvsTabDropdownItem', totvsTabDropdownItem);

    totvsTabDropdownItem.$inject = ['$parse'];

    function totvsTabDropdownItem($parse) {

        var directive = {
			templateUrl: 'templates/tabdropdownitem.html',
            restrict: 'EA',
            require: '^totvsTabset',
            replace: true,
            transclude: true,
            scope: {
                active: '=?',
                heading: '@',
                onSelect: '&select',
                onDeselect: '&deselect'
            },
            controller: function () {},
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} elm Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} transclude Controller da diretiva
        */
        function compile(elm, attrs, transclude) {

            return function (scope, elm, attrs, control) {

                scope.$watch('active', function (active) {
                    if (active) {
                        control.select(scope);
                    }
                });

                scope.disabled = false;
                if (attrs.disabled) {
                    scope.$parent.$watch($parse(attrs.disabled), function (value) {
                        scope.disabled = !!value;
                    });
                }

                scope.select = function () {
                    if (!scope.disabled) {
                        scope.active = true;
                        elm.parents('.nav').children('li.dropdown').removeClass('active');
                        elm.parents('li.dropdown:eq(0)').addClass('active');
                    }
                };

                control.addTab(scope);

                scope.$on('$destroy', function () {
                    control.removeTab(scope);
                });

                scope.$transcludeFn = transclude;
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabHeadingTransclude
* @name totvsTabHeadingTransclude
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-tab-heading-transclude.module
*
* @dependencies
*
* @description
*
* @restrict A
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsTabHeadingTransclude')
        .directive('totvsTabHeadingTransclude', totvsTabHeadingTransclude);

    totvsTabHeadingTransclude.$inject = [];

    function totvsTabHeadingTransclude() {

        var directive = {
            restrict: 'A',
            require: '^totvsTab',
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} elm Elemento da diretiva
        */
        function link(scope, elm) {

            scope.$watch('headingElement', function (heading) {
                if (heading) {
                    elm.html('');
                    elm.append(heading);
                }
            });

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTable
* @name totvsTable
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-table.module
*
* @dependencies
*
* @description
*
* @restrict E
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsTable')
        .directive('totvsTable', totvsTable);

    totvsTable.$inject = ['$compile', '$interpolate'];

    function totvsTable($compile, $interpolate) {

        var directive = {
            restrict: 'E',
            scope: {
                items: '&',
                itemsAs: '@',
                itemsFilter: '@',
                dblclick: '&'
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        */
        function compile(element) {

            var columns,
                template;

            columns = element.children('column');

            template = $('<div class="table-content">' +
                            '<div class="table-responsive">' +
                                '<table class="table table-condensed">' +
                                    '<colgroup><col span="2" style="position: absolute"></colgroup>' +
                                    '<thead><tr></tr></thead>' +
                                    '<tbody><tr class="clickable"></tr></tbody>' +
                                '</table>' +
                            '</div>' +
                        '</div>');

            element.html(template);

            return function postLink(scope, element, attrs) {

                var header,
                    body,
                    itemsAs,
                    itemsFilter,
                    selectColumnTemplate,
                    selectRowColumnTemplate;

                header = element.find('thead > tr');
                body = element.find('tbody > tr');

                // ng-repeat
                itemsAs = (scope.itemsAs || 'item');
                itemsFilter = (scope.itemsFilter ? ' | ' + scope.itemsFilter : '');

                scope.objects = [];

                scope.$watch('items()', function (values) {
                    scope.objects = values;
                });

                body.attr('ng-repeat', itemsAs + ' in objects track by $index' + itemsFilter);

                // Selection
                body.attr('ng-class', '{"selected":' + itemsAs + '.$selected}');

                attrs.typeSelect = (attrs.typeSelect || 'multi').toLowerCase();

                if (attrs.typeSelect !== 'off') {

                    scope.isAllSelected = false;

                    selectColumnTemplate = '<th style="width: 0px">' +
                        '<input type="checkbox" style="margin-left: 3px;" ng-model="isAllSelected"' +
                        'ng-click="selectedAll()"></th>';

                    selectRowColumnTemplate = '<td scope="row" class="select">' +
                        '<input type="checkbox" ng-model="' + itemsAs + '.$selected"></td>';

                    //if (attrs.typeSelect === 'single') {
                    // Alterar o template para single (radio button);
                    //} else {
                    if (attrs.typeSelect !== 'single') {
                        header.append(selectColumnTemplate);
                        body.append(selectRowColumnTemplate);
                    }
                }

                // Columns
                angular.forEach(columns, function (column) {

                    column = angular.element(column);

                    header.append('<th>' + $interpolate(column.attr('title'))(scope) + '</th>');

                    var row = $('<td></td>');

                    if (angular.isFunction(scope.dblclick)) {
                        row.attr('ng-dblclick', 'onDoubleClick(' + itemsAs + ')');
                    }

                    row.attr('ng-click', 'onClick(' + itemsAs + ')');

                    if (column.text().trim().length > 0) {
                        row.html(column.text());
                    } else {
                        if (column.html().trim() === '&nbsp;') {
                            row.html(column.html());
                        } else {
                            row.html($compile(column.html())(scope.$parent));
                        }
                    }

                    angular.forEach($(column).get(0).attributes, function (attr) {
                        if (attr.name !== 'title') {
                            row.attr(attr.name, attr.value);
                        }
                    });

                    body.append(row);
                });

                $compile(header)(scope);
                $compile(body)(scope);

                // Events
                scope.onClick = function (object) {
                    if (object.hasOwnProperty('$selected')) {
                        object.$selected = !object.$selected;
                    } else {
                        object.$selected = true;
                    }
                };

                scope.onDoubleClick = function (object) {
                    var param = {};
                    param[itemsAs] = object;
                    scope.dblclick(param);
                };

                scope.selectedAll = function () {
                    angular.forEach(scope.objects, function (object) {
                        object.$selected = scope.isAllSelected;
                    });
                };
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabset
* @name totvsTabset
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-tabset.module
*
* @dependencies cfp.hotkeys
*
* @description
*
* O Totvs Tabset é uma diretiva que server como container para um conjunto de abas que organizam
* o conteúdo por categoria.
* Para cada aba deve-se criar uma Totvs Tab.
*
* Caso todas as abas não caibam no Totvs Tabset, é possível usar a diretiva Totvs Tab Dropdown
* para agrupar várias Totvs Tab Dropdown Item que tem a mesma função da Totvs Tab.
*
* @restrict EA
*
* @example
*
* <totvs-tabset>
*   <totvs-tab> ... </totvs-tab>
*   <totvs-tab> ... </totvs-tab>
* </totvs-tabset>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Tabset
*/

(function () {

    'use strict';

    angular
        .module('totvsTabset')
        .directive('totvsTabset', totvsTabset);

    totvsTabset.$inject = ['hotkeys'];

    function totvsTabset(hotkeys) {
        var directive = {
			templateUrl: 'templates/tabset.html',
			restrict: 'EA',
			transclude: true,
			replace: true,
			scope: {
				type: '@'
			},
			controller: 'TotvsTabsetController',
			link: link
		};

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        */
        function link(scope, element, attrs) {
			var deactivateTabs,
				li,
				siblings,
				contents,
				i,
				k,
				sibling,
				classes,
				chosen,
				activeIndex,
				content,
				links,
				child,
				lastIndex,
				divTabsets,
				divTabset,
				selectedElement,
				activeElementTabset;

            scope.vertical  = angular.isDefined(attrs.vertical)  ? scope.$parent.$eval(attrs.vertical)  : false;
            scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;

            // função para retirar classe de foco de tab ativada por tecla de atalho
            deactivateTabs = function (e) {
                li = e.currentTarget;
                siblings = li.parentElement.children;
                contents = li.parentElement.parentElement.children[1].children;
                for (i = 0; i < siblings.length; i++) {
                    sibling = siblings[i];
                    classes = sibling.className.split(' ');

                    chosen = sibling === li;

                    activeIndex = classes.indexOf('active');
                    if (activeIndex >= 0) {
                        classes.splice(activeIndex, 1);
                        sibling.className = classes.join(' ');

                        content = contents[i];
                        classes = content.className.split(' ');
                        activeIndex = classes.indexOf('active');
                        if (activeIndex > 0) {
                            classes.splice(activeIndex, 1);
                            content.className = classes.join(' ');
                        }
                    }

                    if (chosen) {
                        classes.push('active');
                        sibling.className = classes.join(' ');

                        content = contents[i];
                        classes = content.className.split(' ');
                        classes.push('active');
                        content.className = classes.join(' ');
                    }
                }
            };

            /* Comentado para manutenção, bug quando utilizado dropdown
			links = element.find('li');
            for (i = 0; i < links.length; i++) {
                li = links[i];
                li.onclick = deactivateTabs;
            }*/

            hotkeys.bindTo(scope)
                .add({
                    combo: 'ctrl+alt+pagedown',
                    description: 'Próxima Aba',
                    allowIn: ['input','select','textarea'],
                    callback: function (event) {
                        function chooseNextTab(divTabsetForNext, goingForParent) {
                            var j, k, divActive, liActive, divTabsetChildren, divTabsetParent;
                            // pega primeira tab na div
                            divActive = divTabsetForNext.querySelector('div.tab-pane');
                            // pega tabs para navegação e ativação
                            liActive  = divTabsetForNext.querySelector('.nav-tabs>li').parentElement.children;
                            child = divActive;
                            siblings = child.parentElement.children;
                            lastIndex = siblings.length - 1;
                            // procura tab ativa
                            for (j = 0; j < siblings.length; j++) {
                                sibling = siblings[j];
                                classes = sibling.className.split(' ');
                                activeIndex = classes.indexOf('active');
                                if (activeIndex >= 0) {
                                    break;
                                }
                            }

                            // verifica se tem tabsets aninhados para navegação
                            if (!goingForParent) {
                                divTabsetChildren = sibling.querySelectorAll('div.tabset');
                                for (k = 0;k < divTabsetChildren.length;k++) {
                                    if (chooseNextTab(divTabsetChildren[k])) {
                                        return true;
                                    }
                                }
                            }

                            // se for última tab, verifica se tem tab pai para navegação
                            if (j === lastIndex) {
                                divTabsetParent = divTabsetForNext.parentElement;
                                while (divTabsetParent.parentElement != null) {
                                    if (divTabsetParent.nodeName === 'DIV' &&
                                        divTabsetParent.className.split(' ').indexOf('tabset') >= 0) {
                                        if (chooseNextTab(divTabsetParent, true)) {
                                            return true;
                                        }
                                    }
                                    divTabsetParent = divTabsetParent.parentElement;
                                }
                                return false;
                            }

                            // navega para próxima tab
                            if (j < lastIndex) {
                                classes.splice(activeIndex, 1);
                                sibling.className = classes.join(' ');

                                sibling = siblings[j + 1];
                                classes = sibling.className.split(' ');
                                if (classes.indexOf('active') < 0) {
                                    sibling.className += ' active';
                                    for (k = 0;k < sibling.childNodes.length;k++) {
                                        if (sibling.childNodes[k].focus) {
                                            sibling.childNodes[k].focus();
                                            if (document.activeElement === sibling.childNodes[k]) {
                                                break;
                                            }
                                        }
                                    }
                                }

                                sibling = liActive[j];
                                classes = sibling.className.split(' ');
                                activeIndex = classes.indexOf('active');
                                classes.splice(activeIndex, 1);
                                sibling.className = classes.join(' ');

                                sibling = liActive[j + 1];
                                classes = sibling.className.split(' ');
                                if (classes.indexOf('active') < 0) {
                                    sibling.className += ' active';
                                }
                                return true;
                            }
                            return false;
                        }

                        event.preventDefault();
                        divTabset = null;
                        selectedElement = event.srcElement;
                        while (selectedElement.parentElement != null) {
                            if (selectedElement.nodeName === 'DIV' &&
                                selectedElement.className.split(' ').indexOf('tabset') >= 0) {
                                divTabset = selectedElement;
                                break;
                            }
                            selectedElement = selectedElement.parentElement;
                        }

                        divTabsets = $('div.tabset');

                        // se elemento com foco estiver dentro de um tabset, utiliza este para navegação
                        // se não estiver, navega na sequencia de tabs disponiveis
                        if (divTabset) {
                            activeElementTabset = false;
                            for (k = 0;k < divTabsets.length;k++) {
                                if (divTabsets[k] === divTabset) {
                                    activeElementTabset = true;
                                }
                                if (!activeElementTabset) {
                                    continue;
                                }
                                chosen = chooseNextTab(divTabsets[k]);
                                if (chosen) {
                                    break;
                                }
                            }
                        } else {
                            for (k = 0;k < divTabsets.length;k++) {
                                chosen = chooseNextTab(divTabsets[k]);
                                if (chosen) {
                                    //retirar foco de aba em caso de seleção com mouse
                                    document.activeElement.blur();
                                    break;
                                }
                            }
                        }
                    }
                });

            hotkeys.bindTo(scope)
                .add({
                    combo: 'ctrl+alt+pageup',
                    description: 'Aba Anterior',
                    allowIn: ['input','select','textarea'],
                    callback: function (event) {
                        function chooseNextTab(divTabsetForNext, goingForParent) {
                            var j, k, divActive, liActive, divTabsetChildren, divTabsetParent;
                            // pega primeira tab na div
                            divActive = divTabsetForNext.querySelector('div.tab-pane');
                            // pega tabs para navegação e ativação
                            liActive  = divTabsetForNext.querySelector('.nav-tabs>li').parentElement.children;
                            child = divActive;
                            siblings = child.parentElement.children;
                            lastIndex = siblings.length - 1;

                            // procura tab ativa
                            for (j = 0; j < siblings.length; j++) {
                                sibling = siblings[j];
                                classes = sibling.className.split(' ');
                                activeIndex = classes.indexOf('active');
                                if (activeIndex >= 0) {
                                    break;
                                }
                            }

                            // verifica se tem tabsets aninhados para navegação
                            if (!goingForParent) {
                                divTabsetChildren = sibling.querySelectorAll('div.tabset');
                                for (k = 0;k < divTabsetChildren.length;k++) {
                                    if (chooseNextTab(divTabsetChildren[k])) {
                                        return true;
                                    }
                                }
                            }

                            // se for primeira tab, procura se tem tabset pai para navegação
                            if (j === 0) {
                                divTabsetParent = divTabsetForNext.parentElement;
                                while (divTabsetParent.parentElement != null) {
                                    if (divTabsetParent.nodeName === 'DIV' &&
                                        divTabsetParent.className.split(' ').indexOf('tabset') >= 0) {
                                        if (chooseNextTab(divTabsetParent, true)) {
                                            return true;
                                        }
                                    }
                                    divTabsetParent = divTabsetParent.parentElement;
                                }
                                return false;
                            }

                            // navega para tab anterior
                            if (j > 0) {
                                classes.splice(activeIndex, 1);
                                sibling.className = classes.join(' ');

                                sibling = siblings[j - 1];
                                classes = sibling.className.split(' ');
                                if (classes.indexOf('active') < 0) {
                                    sibling.className += ' active';
                                    for (k = 0;k < sibling.childNodes.length;k++) {
                                        if (sibling.childNodes[k].focus) {
                                            sibling.childNodes[k].focus();
                                            if (document.activeElement === sibling.childNodes[k]) {
                                                break;
                                            }
                                        }
                                    }
                                }

                                sibling = liActive[j];
                                classes = sibling.className.split(' ');
                                activeIndex = classes.indexOf('active');
                                classes.splice(activeIndex, 1);
                                sibling.className = classes.join(' ');

                                sibling = liActive[j - 1];
                                classes = sibling.className.split(' ');
                                if (classes.indexOf('active') < 0) {
                                    sibling.className += ' active';
                                }
                                return true;
                            }
                            return false;
                        }

                        event.preventDefault();
                        divTabset = null;
                        selectedElement = event.srcElement;
                        while (selectedElement.parentElement != null) {
                            if (selectedElement.nodeName === 'DIV' &&
                                selectedElement.className.split(' ').indexOf('tabset') >= 0) {
                                divTabset = selectedElement;
                                break;
                            }
                            selectedElement = selectedElement.parentElement;
                        }

                        divTabsets = $('div.tabset');

                        // se elemento com foco estiver dentro de um tabset, utiliza este para navegação
                        // se não estiver, navega na sequencia de tabs disponiveis
                        if (divTabset) {
                            activeElementTabset = false;
                            for (k = 0;k < divTabsets.length;k++) {
                                if (divTabsets[k] === divTabset) {
                                    activeElementTabset = true;
                                }
                                if (!activeElementTabset) {
                                    continue;
                                }
                                chosen = chooseNextTab(divTabsets[k]);
                                if (chosen) {
                                    break;
                                }
                            }
                        } else {
                            for (k = 0;k < divTabsets.length;k++) {
                                chosen = chooseNextTab(divTabsets[k]);
                                if (chosen) {
                                    //retirar foco de aba em caso de seleção com mouse
                                    document.activeElement.blur();
                                    break;
                                }
                            }
                        }
                    }
                });
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTime
* @name totvsTime
* @object directive
*
* @created 25/08/2016 v12.1.13
* @updated 25/08/2016 v12.1.13
*
* @requires
*
* @dependencies
*
* @description
*
* @restrict A
*
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('totvsTime')
        .directive('totvsTime', totvsTime);

    totvsTime.$inject = ['$compile', 'totvsFieldService', 'totvs.utils.Service'];

    function totvsTime($compile, totvsField, totvsUtils) {

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                ngDisabled: '&',
                ngBlur: '&',
                ngChange: '&',
                ngModel: '=',
                placeholder: '@'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl Controller do ngModel do elemento da diretiva
        */
        function link(scope, element, attrs, ngModelCtrl) {
            var templateElement,
                inputgroup,
                input,
                timeElement,
                isMobile;

            isMobile = totvsUtils.isMobile;
            // Cria o elemento para dispositivo mobile.
            if (isMobile.any()) {
                timeElement = getMobileElement();
            } else {
                timeElement = getDesktopElement();
            }

            inputgroup = element.find('.input-group');
            inputgroup.append(timeElement);
            inputgroup.addClass('no-block bootstrap-timepicker');

            input = inputgroup.find('input');

            totvsField.pattern(scope, attrs, element, scope, ngModelCtrl, input);

            if (!isMobile.any()) {
                totvsField.canclean(attrs, element, scope, input);
            }

            templateElement = element.find('.field-container');
            $compile(templateElement)(scope);

            /* Functions */
            function getMobileElement() {
                return angular.element('<input type="time" class="form-control" ng-model="ngModel"' +
                    ' ng-blur="ngBlur()" ng-change="ngChange()" placeholder="{{::placeholder}}"' +
                    ' ng-disabled="ngDisabled()">' +
                    '<span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>');
            }

            function getDesktopElement() {
                return angular.element('<input type="text" class="form-control" time-picker ' +
                    ' ng-model="ngModel" ng-change="ngChange()" ng-blur="ngBlur()" data-minute-step="5"' +
                    ' data-show-meridian="false" placeholder="{{::placeholder}}" ng-disabled="ngDisabled()">' +
                    '<span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>');
            }
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsUpload
* @name totvsUpload
* @object directive
*
* @created 20/06/2016 v12.1.12
* @updated 20/06/2016 v12.1.12
*
* @requires totvs-upload.module
*
* @dependencies
*
* @description
*
* @restrict A
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Upload
*/

(function () {

    'use strict';

    angular
        .module('totvsUpload')
        .directive('totvsUpload', totvsUpload);

    totvsUpload.$inject = ['$compile', '$q', '$timeout', '$rootScope', 'totvsFieldService'];

    function totvsUpload($compile, $q, $timeout, $rootScope, totvsField) {

        var directive = {
            require: 'ngModel',
            restrict: 'A',
            scope: {
                tPromise: '=',
                tMultiple: '=',
                tShowFileList: '@',
                tSelect: '@',
                tDropFilesHere: '@',
                tStatusUploaded: '@',
                tRetry: '@',
                tStatusUploading: '@',
                tUploadSelectedFiles: '@',
                tRemove: '@',
                tCancel: '@',
                tSaveUrl: '=',
                tSaveField: '=',
                tRemoveUrl: '=',
                tRemoveField: '@',
                tRemoveVerb: '@',
                tEnabled: '=',
                tAutoUpload: '=',
                tWithCredentials: '@',
                tOnSelect: '&',
                tOnUpload: '&',
                tOnRemove: '&',
                tOnProgress: '&',
                tOnSuccess: '&',
                tOnError: '&',
                tOnComplete: '&',
                tOnCancel: '&'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModel Controller do ngModel
        */
        function link(scope, element, attrs, ngModel) {
            var promise,
                upload,
                initialFiles = [];

            if (scope.tPromise) {
                promise = scope.tPromise();

                if (promise && promise.$promise) {
                    promise = promise.$promise;
                }

                $q.when(promise).then(function () {
                    setupUpload();
                }, function () {
                    setupUpload();
                });
            } else {
                setupUpload();
            }

            function setupUpload() {

                buildTemplate(scope, element, attrs, ngModel);

                $timeout(function () {
                    setNgModel();

                    if (attrs.$attr.tShowDragDrop) {
                        element.find('div.k-dropzone em').css('visibility', 'visible');
                    }
                }, 250);

                if (ngModel.$modelValue) {
                    if (ngModel.$modelValue.length) {
                        initialFiles = ngModel.$modelValue.filter(function (obj) {
                            return !obj.isntUploaded;
                        });
                    }
                }

                if (attrs.$attr.tManualUpload) {
                    var hideBtnUpload = document.createElement('style');
                    hideBtnUpload.innerHTML = '.k-upload-selected {display: none;}';
                    document.body.appendChild(hideBtnUpload);
                }

                window.formatSize = function (size) {
                    var kbSize = 0;

                    if (size) {
                        kbSize = Math.ceil(size / 1024);
                    }

                    return kbSize;
                };

                scope.uploadOptions = {
                    multiple: scope.tMultiple,
                    showFileList: scope.tShowFileList,
                    localization: {
                        select: scope.tSelect || $rootScope.i18n('l-select-file'),
                        dropFilesHere: scope.tDropFilesHere || $rootScope.i18n('l-drop-files'),
                        cancel: scope.tCancel || $rootScope.i18n('btn-cancel'),
                        headerStatusUploaded: scope.tStatusUploaded || $rootScope.i18n('l-status-uploaded'),
                        retry: scope.tRetry || $rootScope.i18n('l-retry'),
                        headerStatusUploading: scope.tStatusUploading || $rootScope.i18n('l-status-uploading'),
                        uploadSelectedFiles: scope.tUploadSelectedFiles || $rootScope.i18n('l-upload-selected-files'),
                        statusFailed: scope.tStatusFailed || $rootScope.i18n('l-status-failed'),
                        remove: scope.tRemove || $rootScope.i18n('l-remove')
                    },
                    files: initialFiles,
                    enabled: scope.tEnabled,
                    async: {
                        saveUrl: scope.tSaveUrl,
                        saveField: scope.tSaveField,
                        removeUrl: scope.tRemoveUrl,
                        removeField: scope.tRemoveField,
                        removeVerb: scope.tRemoveVerb,
                        withCredentials: scope.tWithCredentials,
                        autoUpload: scope.tAutoUpload || false
                    },
                    select: onSelect,
                    upload: scope.tOnUpload(),
                    remove: onRemove,
                    progress: scope.tOnProgress(),
                    success: onSuccess,
                    error: onError,
                    complete: scope.tOnComplete(),
                    cancel: onCancel,
                    template: '<div class="template-upload" style="width: auto">' +
                                '<div class="row">' +
                                '<span class="k-progress"></span>' +
                                   '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-9" ' +
                                    'style="overflow: hidden; white-space: nowrap; text-overflow:ellipsis;" ' +
                                    'title="#=name#">#=name#</div>' +
                                   '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">#= formatSize(size)# KB</div>' +
                                   '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1" style="float: right;"> ' +
                                        '<button type="button" class="k-upload-action">' +
                                        '</button>' +
                                   '</div>' +
                                '</div>' +
                             '</div>'
                };

                /* Necessario para gerar o uid dos files pré carregados */
                function setNgModel() {
                    initialFiles = getKendoUpload().options.files;
                    ngModel.$setViewValue(initialFiles);
                }

                /* Remove um arquivo a partir do UID,
                   que contenha em uma lista de arquivos   */
                function removeFile(file, files) {
                    var i,
                        uid = file.uid;

                    for (i in files) {
                        if (files.hasOwnProperty(i)) {
                            if (files[i].uid === uid) {
                                files.splice(i, 1);
                            }
                        }
                    }
                }

                function removeAttrIsUploaded(uid) {
                    var i,
                        size = ngModel.$modelValue.length;
                    for (i = 0; i < size; i += 1) {
                        if (ngModel.$modelValue[i].uid === uid) {
                            delete ngModel.$modelValue[i].isntUploaded;
                            break;
                        }
                    }
                }

                function onSelect(e) {
                    angular.forEach(e.files, function (value, index) {
                        if (!scope.tMultiple) {
                            if (initialFiles.length) {
                                removeFile(initialFiles[0], initialFiles);
                            }
                        }
                        /* atributo para tramento de arquivos que
                            não foram enviados ao servidor */
                        e.files[index].isntUploaded = true;
                        initialFiles.push(e.files[index]);
                    });

                    ngModel.$setViewValue(initialFiles);

                    if (attrs.tOnSelect) {
                        scope.tOnSelect()(e);
                    }
                }

                function onSuccess(e) {
                    if (e.operation === 'upload') {
                        removeAttrIsUploaded(e.files[0].uid);
                    }

                    if (attrs.tOnSuccess) {
                        scope.tOnSuccess()(e);
                    }
                }

                function onCancel(e) {
                    removeFile(e.files[0], initialFiles);
                    ngModel.$setViewValue(initialFiles);

                    if (attrs.tOnCancel) {
                        scope.tOnCancel()(e);
                    }
                }

                function onRemove(e) {
                    removeFile(e.files[0], initialFiles);
                    ngModel.$setViewValue(initialFiles);

                    if (attrs.tOnRemove) {
                        scope.tOnRemove()(e);
                    }
                }

                function onError(e) {
                    if (!scope.tMultiple) {
                        if (initialFiles.length === 0) {
                            if (e.operation === 'remove') {
                                initialFiles.push(e.files[0]);
                            }
                        }
                    } else {
                        if (e.operation === 'remove') {
                            initialFiles.push(e.files[0]);
                        }
                    }

                    ngModel.$setViewValue(initialFiles);

                    if (attrs.tOnError) {
                        scope.tOnError()(e);
                    }
                }
            }

            function buildTemplate(scope, element, attrs, ngModel) {
                var childScope,
                    inputGroup,
                    templateElement,
                    totvsUpload;

                totvsUpload = angular.element('<input name="file" type="file" kendo-upload ' +
                                              'k-options="uploadOptions" />');

                inputGroup = element.find('.input-group');
                inputGroup.append(totvsUpload);

                childScope = scope.$new();

                totvsField.pattern(scope, attrs, element, childScope, ngModel, totvsUpload);
                totvsField.ngHide(scope, attrs, element);
                totvsField.ngShow(scope, attrs, element);

                templateElement = element.find('.field-container');
                $compile(templateElement)(childScope);
            }

            function getKendoUpload() {
                if (upload) { return upload; }

                upload = element.find('div [kendo-upload]').getKendoUpload();
                return upload;
            }
        }
    }
}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidget
* @name totvsWidget
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-widget.module
*
* @dependencies
*
* @description
*
* Container para as diretivas Totvs Widget Header, Totvs Widget Body e Totvs Widget Footer.
* É possível incluir qualquer tipo de conteúdo dentro da diretiva Totvs Widget como gráficos,
* tabelas e grids reunindo todo tipo de informação para o usuário.
* Para dimensionamento dos itens é sugerido que seja estudado o modelo de orientação de grid
* do Bootstrap: Guia de Orientação do Sistema de Grid.
*
* @restrict E
*
* @example
*
* <totvs-widget></totvs-widget>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Widget
*/

(function () {

    'use strict';

    angular
        .module('totvsWidget')
        .directive('totvsWidget', totvsWidget);

    totvsWidget.$inject = [];

    function totvsWidget() {

        var directive = {
            template: '<div class="widget-panel panel panel-default" ng-transclude></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidgetBody
* @name totvsWidgetBody
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-widget-body.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Widget Body é um container para o conteúdo da Totvs Widget.
* É possível renderizar qualquer conteúdo html dentro dessa diretiva, inclusive outras diretivas do
* TOTVS | HTML Framework.
*
* @restrict E
*
* @example
*
* <totvs-widget-body></totvs-widget-body>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Widget+Body
*/

(function () {

    'use strict';

    angular
        .module('totvsWidgetBody')
        .directive('totvsWidgetBody', totvsWidgetBody);

    totvsWidgetBody.$inject = [];

    function totvsWidgetBody() {

        var directive = {
            template: '<div class="panel-body" ng-transclude></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidgetFooter
* @name totvsWidgetFooter
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-widget-footer.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Widget Footer serve como container para o rodapé da diretiva Totvs Widget.
*
* @restrict E
*
* @example
*
* <totvs-widget-footer></totvs-widget-footer>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Widget+Footer
*/

(function () {

    'use strict';

    angular
        .module('totvsWidgetFooter')
        .directive('totvsWidgetFooter', totvsWidgetFooter);

    totvsWidgetFooter.$inject = [];

    function totvsWidgetFooter() {

        var directive = {
            template:
                '<div class="panel-footer"><div class="row" style="height: 34px;">' +
                    '<div class="col-xs-12" ng-transclude></div></div></div>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidgetFooterActions
* @name totvsWidgetFooterActions
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-widget-footer-actions.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Widget Footer Actions permite adicionar ações a Totvs Widget, isso permite que
* o desenvolvedor inclua uma lista de ações baseadas na widget apresentada com atalhos para outras
* telas e funcionalidades.
* Para cada funcionalidade deve ser adicionado um elemento <action>.
*
* @restrict E
*
* @example
*
* <totvs-widget-footer-actions>
*   <action> ... </action>
*   <action> ... </action>
* </totvs-widget-footer-actions>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Widget+Footer+Actions
*/

(function () {

    'use strict';

    angular
        .module('totvsWidgetFooterActions')
        .directive('totvsWidgetFooterActions', totvsWidgetFooterActions);

    totvsWidgetFooterActions.$inject = [];

    function totvsWidgetFooterActions() {

        var directive = {
            restrict: 'E',
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        *
        * @param {element} element Elemento da diretiva
        */
        function compile(element) {

            var actions = element.children('action').clone() || [],
                actionsTemplate = '',
                listContainer,
                action,
                item,
                i;

            element.html('<span class="actions"></span>');

            function parse(el, action) {

                var link = action.attr('link'),
                    ngClick = action.attr('ng-click');

                el.append(action.text());

                if (link) {
                    el.attr('href', link);
                } else if (ngClick) {
                    el.addClass('clickable');
                    el.attr('ng-click', ngClick);
                }
            }

            if (actions.length > 1) {
                actionsTemplate = angular.element(
                    '<span class="pull-right dropup">' +
                        '<span class="widget-details clickable dropdown-toggle" id="widget-detail-dropdown" ' +
                            'data-toggle="dropdown" aria-expanded="true">' +
                            '<button class="btn btn-link" role="link">{{"l-detail"|i18n}}&nbsp;' +
                                '<span class="caret"></span>' +
                            '</button>' +
                        '</span>' +
                        '<ul class="dropdown-menu" role="menu" aria-labelledby="widget-detail-dropdown"></ul>' +
                    '<span>'
                );

                listContainer = actionsTemplate.find('ul');

                for (i = 0; i < actions.length; i++) {
                    action = angular.element(actions[i]);
                    item = angular.element('<li role="presentation"><a role="menuitem" tabindex="-1"></a></li>');
                    parse(item.children('a'), action);
                    listContainer.append(item);
                }
            }

            if (actions.length === 1) {
                actionsTemplate = angular.element(
                    '<span class="pull-right">' +
                        '<a class="btn btn-link" role="menuitem" tabindex="-1"></a>' +
                    '<span>');

                action = angular.element(actions[0]);
                parse(actionsTemplate.children('a'), action);
            }

            element.find('.actions').append(actionsTemplate);

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidgetFooterBody
* @name totvsWidgetFooterBody
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-widget-footer-body.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Widget Footer Body serve como container para o corpo do rodapé da diretiva
* Totvs Widget Footer.
*
* @restrict E
*
* @example
*
* <totvs-widget-footer-body></totvs-widget-footer-body>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Widget+Footer+Body
*/

(function () {

    'use strict';

    angular
        .module('totvsWidgetFooterBody')
        .directive('totvsWidgetFooterBody', totvsWidgetFooterBody);

    totvsWidgetFooterBody.$inject = [];

    function totvsWidgetFooterBody() {

        var directive = {
            template: '<span class="panel-title"><span ng-transclude></span></span>',
            restrict: 'E',
            transclude: true,
            replace: true
        };

        return directive;
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsWidgetHeader
* @name totvsWidgetHeader
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires totvs-widget-header.module
*
* @dependencies
*
* @description
*
* A diretiva Totvs Widget Header serve para exibir um título para a diretiva Totvs Widget.
* Além do título é possível incluir uma opção de ajuda e configurações.
*
* @restrict E
*
* @example
*
* <totvs-widget-header></totvs-widget-header>
*
* @see TDN http://tdn.totvs.com/display/THF/Totvs+Widget+Header
*/

(function () {

    'use strict';

    angular
        .module('totvsWidgetHeader')
        .directive('totvsWidgetHeader', totvsWidgetHeader);

    totvsWidgetHeader.$inject = ['$window'];

    function totvsWidgetHeader($window) {

        var directive = {
            template:
                '<div class="panel-heading">' +
                    '<div class="row">' +
                        '<div class="col-xs-12">' +
                            '<h3 class="panel-title" style="display:inline">{{title}}</h3>&nbsp;' +
                            '<span ng-transclude></span>' +
                            '<span class="pull-right">' +
                            '<span ng-if="hasSettings && !help" class="clickable glyphicon glyphicon-cog" ' +
                                'aria-hidden="true" ng-click="callSettings()"></span>' +
                            '<span ng-if="!hasSettings && help" class="clickable glyphicon glyphicon-question-sign" ' +
                                'aria-hidden="true" ng-click="callHelp()"></span>' +
                            '<div ng-if="hasSettings && help" class="clickable dropdown-toggle" ' +
                                'data-toggle="dropdown" aria-hidden="true">' +
                                '<span class="glyphicon glyphicon-cog" aria-hidden="true"></span>' +
                                '<span class="caret" aria-hidden="true"></span>' +
                            '</div>' +
                            '<ul class="dropdown-menu" role="menu" aria-labelledby="widget-actions-dropdown">' +
                                '<li role="presentation"><a role="menuitem" tabindex="-1" ' +
                                    'ng-click="callSettings()">{{ "l-settings" | i18n }}</a></li>' +
                                '<li role="presentation"><a role="menuitem" tabindex="-1" ' +
                                    'ng-click="callHelp()">{{ "l-help" | i18n }}</a></li>' +
                            '</ul>' +
                          '</span>' +
                        '</div>' +
                    '</div>' +
                '</div>',
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                title: '@',
                settings: '&',
                help: '@'
            },
            compile: compile
        };

        return directive;

        /**
        * @name compile
        *
        * @description Função compile da diretiva
        */
        function compile() {

            return function postLink(scope, element, attrs) {

                scope.hasSettings = attrs.$attr.hasOwnProperty('settings');

                scope.callHelp = function () {
                    $window.open(scope.help);
                };

                scope.callSettings = function () {
                    scope.settings();
                };
            };

        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module zoom
* @name zoom
* @object directive
*
* @created 05/08/2016 v12.1.12
* @updated 05/08/2016 v12.1.12
*
* @requires zoom.module zoom.controller
*
* @dependencies cfp.hotkeys
*
* @description
*
* @restrict AE
*
* @example
*
*
*
* @see TDN http://tdn.totvs.com/display/THF/
*/

(function () {

    'use strict';

    angular
        .module('zoom')
        .directive('zoom', zoom);

    zoom.$inject = [
        '$compile', '$modal', '$injector', '$controller',
        '$q', '$timeout', '$rootScope', 'hotkeys', 'zoomConstant'];

    function zoom($compile, $modal, $injector, $controller, $q, $timeout, $rootScope, hotkeys, zoomConstant) {

        var directive = {
            restrict: 'AE',
            require: 'ngModel',
            scope: {
                ngDisabled: '&',
                zoomSelected: '&',
                zoomSelectedInternal: '&',
                zoomInit: '&',
                zoomValidValues: '&',
                zoomValidSearchValues: '&',
                zoomRefreshDelay: '@'
            },
            link: link
        };

        return directive;

        /**
        * @name link
        *
        * @description Função link da diretiva
        *
        * @param {object} scope Escopo da diretiva
        * @param {element} element Elemento da diretiva
        * @param {object} attrs Atributos do elemento da diretiva
        * @param {object} ngModelCtrl Controller do ngModel
        */
        function link(scope, element, attrs, ngModelCtrl) {

            scope.zoomRefreshDelay = scope.zoomRefreshDelay || 500;

            var previous,
                timeoutPromise,
                timeoutGetObjectFromValue,
                inputgroup,
                inputgroupbtn,
                btZoom,
                firstScope,
                zooms,
                i,
                srcElement;

            scope.getObjectFromValue = function (value) {

                if (timeoutGetObjectFromValue) {
                    $timeout.cancel(timeoutGetObjectFromValue); //cancel previous timeout
                }

                timeoutGetObjectFromValue = $timeout(function () {

                    var selectedId,
                        controller,
                        service;

                    selectedId = scope.selectedItemObj;

                    if (attrs.zoomId && selectedId) {
                        selectedId = selectedId[attrs.zoomId];
                    }

                    if (value === selectedId) {
                        return scope.selectedItemObj;
                    }

                    controller = attrs.zoomController;
                    service = attrs.zoomService;

                    if (service) {
                        service = $injector.get(service);
                    } else {
                        if (controller) {
                            angular.module('zoom').constant('zoomoptions', 'zoomoptions');
                            angular.module('zoom').constant('zoomcallback', undefined);
                            angular.module('zoom').constant('zoominit', undefined);

                            service = $controller(controller, {

                                $modalInstance: '$modalInstance',
                                $injector: $injector,
                                $scope: scope

                            });
                        } else {
                            service = undefined;
                        }
                    }

                    return (service && service.getObjectFromValue ?
                            service.getObjectFromValue(value, scope.zoomInitFn()) :
                            value);
                }, scope.zoomRefreshDelay);

                return timeoutGetObjectFromValue;
            };

            scope.selectedItemFn = function (sel) {

                var equalobj,
                    oldvalue;

                equalobj = angular.equals(scope.selectedItemObj, sel);
                oldvalue = scope.selectedItemObj;

                scope.selectedItemObj = sel;
                scope.showDescription();

                if (scope.zoomSelected && !equalobj && attrs.disabled !== true) {
                    scope.zoomSelected({
                        selected: sel,
                        oldvalue: oldvalue
                    });
                }
                // especifico para integração como select2
                if (scope.zoomSelectedInternal && !equalobj && attrs.disabled !== true) {
                    scope.zoomSelectedInternal({
                        selected: sel,
                        oldvalue: oldvalue
                    });
                }
            };

            scope.showDescription = function () {

                var i,
                    validvalues,
                    valueisvalid,
                    viewValue,
                    validsearchvalues,
                    valuesearchisvalid;

                validvalues = scope.zoomValidValues();
                valueisvalid = false;

                if (validvalues) {
                    for (i = 0; i < validvalues.length; i++) {
                        if (scope.selectedItemObj === validvalues[i]) {
                            valueisvalid = true;
                        }
                        if (validvalues[i] === '' && scope.selectedItemObj === undefined) {
                            valueisvalid = true;
                        }
                    }
                }

                if (valueisvalid) {
                    $timeout(function () {
                        ngModelCtrl.$setValidity('zoom', true);
                    });
                }

                if (scope.selectedItemObj && !valueisvalid) {
                    if (attrs.zoomId) {

                        viewValue = scope.selectedItemObj[attrs.zoomId];

                        validsearchvalues = scope.zoomValidSearchValues();
                        valuesearchisvalid = false;

                        if (validsearchvalues) {
                            for (i = 0; i < validsearchvalues.length; i++) {
                                if (viewValue === validsearchvalues[i]) {
                                    valuesearchisvalid = true;
                                }
                            }
                        }

                        if (viewValue || valuesearchisvalid) {
                            if (attrs.zoomDescription) {
                                viewValue = viewValue + ' - ' + scope.selectedItemObj[attrs.zoomDescription];
                            }
                            scope.setModelValue(viewValue);
                        } else {
                            ngModelCtrl.$setValidity('zoom', false);
                        }
                    }
                }
            };

            scope.zoomInitFn = function () {
                if (scope.zoomInit) {
                    return scope.zoomInit();
                }
            };

            scope.openZoom = function () {
                var modaloptions = {
                    controller: (attrs.zoomController || 'zoomController') + ' as controller',
                    size: 'lg',
                    scope: scope,
                    backdrop: 'static',
                    resolve: {
                        zoomoptions: function () {
                            return attrs.zoomService;
                        },
                        zoomcallback: function () {
                            return scope.selectedItemFn;
                        },
                        zoominit: function () {
                            return scope.zoomInitFn;
                        },
                        zoomid: function () {
                            return attrs.zoomId;
                        },
                        zoommultiple: function () {
                            return attrs.hasOwnProperty('zoomMultiple');
                        },
                        zoomalertmessage: function () {
                            return attrs.zoomAlertMessage;
                        },
                        previousselect: function () {
                            return ngModelCtrl.$viewValue;
                        }
                    }
                };

                if (attrs.zoomTemplate) {

                    modaloptions.templateUrl = attrs.zoomTemplate;

                } else {

                    modaloptions.template = zoomConstant.TEMPLATE;

                }

                scope.zoominstance = $modal.open(modaloptions);

                scope.zoominstance.rendered.then(function () {

                    var percent = 0.65;

                    // se não tem seleção múltipla, o tamanho deve ser 55% da tela.
                    if ($('div.modal-body-zoom div.accordion').length <= 0) {
                        percent = 0.55;
                    }

                    $('div.modal-body-zoom div.row.zoom-result').css('height', window.innerHeight * percent);

                    // altera o tamanho do container dos grids do modal.
                    //scope.zoominstance.resizeZoomContainer(window.innerHeight * percent);

                    // força o resize das grids pois quando ela possui células travadas,
                    // o auto-resize não funciona como esperado.
                    $timeout(function () {

                        scope.zoominstance.refreshGrids();

                    }, 200);

                    $timeout(function () {

                        if ($('div.modal-body-zoom div.accordion').length <= 0) {
                            $('div.modal-body-zoom.page-content').css('display', 'inline-table');
                        }

                    }, 1000);
                });

                scope.zoominstance.result.then(function (selectedItem) {

                    if (angular.isArray(selectedItem)) {
                        scope.selectedItemObj = selectedItem;
                    }
                    scope.setModelValue(selectedItem);
                });

            };

            //  busca escopo pai - primeiro a ser criado
            //  este escopo existe em comum para qualquer elemento
            //  funções para abertura de zoom serão armazenadas neste escopo,
            //      assim pode ser aberto o zoom de acordo com o elemento de foco acionado
            firstScope = scope;
            while (firstScope.$parent) {
                firstScope = firstScope.$parent;
            }

            if (!firstScope.zooms) {
                firstScope.zooms = [];
            }

            firstScope.zooms.push(scope.openZoom);

            hotkeys.bindTo(scope)
                .add({
                    combo: 'f7',
                    description: 'zoom',
                    allowIn: ['input'],
                    callback: function (event) {
                        event.preventDefault();

                        firstScope = scope;
                        while (firstScope.$parent) {
                            firstScope = firstScope.$parent;
                        }
                        if (!firstScope.zooms) {
                            firstScope.zooms = [];
                        }

                        srcElement = event.srcElement;
                        if (srcElement.attributes.getNamedItem('zoom-hotkey')) {
                            zooms = $('[zoom-hotkey]');
                            for (i = 0; i < zooms.length; i++) {
                                if (zooms[i] === srcElement) {
                                    firstScope.zooms[i]();
                                }
                            }
                        }
                    }
                });

            scope.setModelValue = function (selectedItem) {
                ngModelCtrl.$setValidity('zoom', true);
                ngModelCtrl.$setViewValue(selectedItem);
                ngModelCtrl.$render();

                if (!attrs.$attr.istotvsselect) {
                    var span,
						input;

                    span = element.parent();
                    input = span.parent().children()[0];

                    /* Necessário para o totvsInput*/
                    if (input) { angular.element(input).val(ngModelCtrl.$viewValue); }
                }
            };

            scope.successCallback = function (val, viewValue) {

                previous = viewValue;
                ngModelCtrl.$setValidity('zoom', val !== null);
                if (val !== null) {
                    scope.selectedItemFn(val);
                }

            };

            scope.successCallbackData = function (val, viewValue) {

                previous = viewValue;
                ngModelCtrl.$setValidity('zoom', !val.hasOwnProperty('data'));
                if (!val.hasOwnProperty('data')) {
                    scope.selectedItemFn(val);
                }

            };

            scope.errorCallback = function (viewValue) {

                previous = viewValue;
                ngModelCtrl.$setValidity('zoom', false);

            };

            scope.loadFromValue = function (viewValue) {

                var i,
                    q,
                    validvalues,
                    valueisvalid,
                    validsearchvalues,
                    valuesearchisvalid;

                validvalues = scope.zoomValidValues();
                valueisvalid = false;

                if (validvalues) {
                    for (i = 0; i < validvalues.length; i++) {
                        if (viewValue === validvalues[i]) {
                            valueisvalid = true;
                        }
                        if (validvalues[i] === '' && viewValue === undefined) {
                            valueisvalid = true;
                        }
                    }
                }

                validsearchvalues = scope.zoomValidSearchValues();
                valuesearchisvalid = false;

                if (validsearchvalues) {
                    for (i = 0; i < validsearchvalues.length; i++) {
                        if (viewValue === validsearchvalues[i]) {
                            valuesearchisvalid = true;
                        }
                    }
                }

                if (attrs.required || valuesearchisvalid ||
                        (viewValue !== undefined &&
                        viewValue !== null &&
                        viewValue !== 'undefined' &&
                        viewValue !== '' &&
                        viewValue !== 0)) {

                    q = scope.getObjectFromValue(viewValue);

                    if (q) {
                        if (q && q.$then) {
                            q.$then(function (val) {
                                scope.successCallback(val, viewValue);
                            }, function () {
                                scope.errorCallback(viewValue);
                            });
                        } else if (q && q.then) {
                            q.then(function (val) {
                                scope.successCallback(val, viewValue);
                            }, function () {
                                scope.errorCallback(viewValue);
                            });
                        } else if (q && q.$promise) {
                            q.$promise.then(function (val) {
                                scope.successCallbackData(val, viewValue);
                            }, function () {
                                scope.errorCallback(viewValue);
                            });
                        } else if (q === null || q === undefined) {
                            scope.errorCallback();
                        } else {
                            previous = viewValue;
                            ngModelCtrl.$setValidity('zoom', true);
                            scope.selectedItemFn(q);
                        }
                    } else {
                        scope.errorCallback(undefined);
                    }
                } else {
                    if (previous && !valueisvalid) {
                        scope.errorCallback(viewValue);
                    } else {
                        scope.selectedItemFn(viewValue);
                    }
                }
            };

            if (element.prop('tagName') === 'BUTTON') {

                element.click(function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    scope.openZoom();
                });

            } else {

                inputgroup = element.parents('.input-group');
                inputgroupbtn = inputgroup.find('.input-group-btn');

                if (inputgroupbtn.length === 0) {
                    inputgroupbtn = angular.element('<span class="input-group-btn"></span>');
                    inputgroup.append(inputgroupbtn);
                    inputgroup.addClass('no-block');
                }

                btZoom = angular.element('<button class="btn btn-default" role="button"' +
                    'type="button" data-ng-click="openZoom()">' +
                    '<span class="glyphicon glyphicon-search"></span></button>');

				/* Utilizar ng disabled no zoom, caso não for totvs-select */
                if (!attrs.$attr.istotvsselect) {
                    btZoom.attr('ng-disabled', 'ngDisabled()');
                }

                $compile(btZoom)(scope);
                inputgroupbtn.append(btZoom);
            }

            ngModelCtrl.$formatters.push(function (modelValue) {

                if (attrs.zoomId) {
                    scope.loadFromValue(modelValue);
                }

                return modelValue;

            });

            ngModelCtrl.$parsers.push(function (viewValue) {

                if (attrs.zoomId) {

                    if (typeof viewValue === 'string') {
                        viewValue = viewValue.split(' - ')[0];
                    }

                    if (timeoutPromise) {
                        $timeout.cancel(timeoutPromise); //cancel previous timeout
                    }

                    timeoutPromise = $timeout(function () {
                        scope.loadFromValue(viewValue);
                    }, scope.zoomRefreshDelay);
                }

                return viewValue;

            });

            scope.$on('$destroy', function () {

                if (timeoutPromise) {
                    $timeout.cancel(timeoutPromise);
                    timeoutPromise = undefined;
                }

                if (timeoutGetObjectFromValue) {
                    $timeout.cancel(timeoutGetObjectFromValue);
                    timeoutGetObjectFromValue = undefined;
                }
            });
        }
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTab
* @object run
*
* @created 20/10/2016 v12.1.14
* @updated 20/10/2016 v12.1.14
*
* @dependencies
*
* @description Run do totvsTab para inserir o elemento da diretiva no templateCache.
*/

(function () {
    'use strict';

    angular
        .module('totvsTab')
        .run(['$templateCache', totvsTabRun]);

    function totvsTabRun($templateCache) {
        $templateCache.put('templates/tab.html',
            '<li ng-class="{active: active, disabled: disabled}">' +
                '<a href ng-click="select()" totvs-tab-heading-transclude>{{heading}}</a>' +
            '</li>');
    }

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabDropdown
* @object run
*
* @created 20/10/2016 v12.1.14
* @updated 20/10/2016 v12.1.14
*
* @dependencies
*
* @description Run do totvsTabDropdown para inserir o elemento da diretiva no templateCache.
*/

(function () {
    'use strict';

    angular
        .module('totvsTabDropdown').run(['$templateCache', totvsTabDropdownRun]);
	
	function totvsTabDropdownRun($templateCache) {
		$templateCache.put('templates/tabdropdown.html',
			'<li ng-class="{active: active, active: subActive, disabled: disabled}" class="dropdown">' +
			'	<a data-toggle="dropdown" class="dropdown-toggle">' +
			'		<span>{{heading}}&nbsp;</span>' +
			'		<span class="glyphicon glyphicon-option-vertical"></span>' +
			'	</a>' +
			'	<ul class="dropdown-menu dropdown-menu-right" ng-transclude></ul>' +
			'</li>');
	}

}());
/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabDropdownItem
* @object run
*
* @created 20/10/2016 v12.1.14
* @updated 20/10/2016 v12.1.14
*
* @dependencies
*
* @description Run do totvsTabDropdownItem para inserir o elemento da diretiva no templateCache.
*/

(function () {
    'use strict';

    angular
        .module('totvsTabDropdownItem')
			.run(['$templateCache', totvsTabDropdownItemRun]);
	
	function totvsTabDropdownItemRun($templateCache) {
		$templateCache.put('templates/tabdropdownitem.html',
			'<li ng-class="{active: active, disabled: disabled}">' +
			'	<a href ng-click="select()">{{heading}}</a>' +
			'</li>');
	}

}());

/**
* @license TOTVS | HTML Framework 12.1.14
* (c) 2015-2016 TOTVS S/A https://www.totvs.com
* License: Comercial
*/

/**
* @module totvsTabset
* @object run
*
* @created 20/10/2016 v12.1.14
* @updated 20/10/2016 v12.1.14
*
* @dependencies
*
* @description Run do totvsTabset para inserir o elemento da diretiva no templateCache.
*/

(function () {
    'use strict';

    angular
        .module('totvsTabset')
        .run(['$templateCache', totvsTabsetRun]);

    function totvsTabsetRun($templateCache) {
        $templateCache.put('templates/tabset.html',
            '<div class="tabset col-xs-12">' +
                '<ul class="nav nav-{{type || \'tabs\'}}" ' +
                    'ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ' +
                    'ng-transclude>' +
                '</ul>' +
                '<div class="tab-content">' +
                    '<div class="tab-pane" ' +
                        'ng-class="{active: tab.active}" ng-repeat="tab in tabs" ' +
                        'totvs-tab-content-transclude="tab.tab || tab">' +
                    '</div>' +
                '</div>' +
            '</div>');
    }

}());
