(function () {

    'use strict';

    angular
        .module('gridTest')
        .controller('GridTestController', GridTestController);

    GridTestController.$inject = ['i18nFilter', '$q'];

    function GridTestController(i18nFilter, $q) {

        var self = this;

        self.products = getProducts();

        self.showHeaderEditIcon = showEditIcon;

        self.sortableConfig = {
            allowUnsort: false,
            mode: 'single'
        };

        self.groupableConfig = {
            messages: { empty: 'Arraste uma coluna para agrupar...' }
        };

        self.onEdit = onEditCallback;

        self.onSave = onSaveCallback;

        self.onChange = onChangeCallback;

        self.onData = onDataCallback;

        self.headerTemplate = getHeaderTemplate;

        self.template = getTemplate;

        self.editor = getEditor;

        self.gridOptions = getGridOptions;


        function getProducts() {

            return [
                {
                    productId: 1,
                    productCode: 'DM001',
                    description: 'Dell Monitor 15" WideScreen',
                    stock: 15,
                    price: '259.99',
                    supplier: 1,
                    orders: [
                        {
                            clientId: 1,
                            orderId: 1,
                            date: new Date(2016, 10, 13, 0, 0, 0, 0),
                            status: 1,
                        }
                    ]
                },
                {
                    productId: 2,
                    productCode: 'DM002',
                    description: 'Dell Keyboard ABNT2',
                    stock: 60,
                    price: '9.99',
                    supplier: 1,
                    orders: [
                        {
                            clientId: 1,
                            orderId: 2,
                            date: new Date(2016, 10, 13, 0, 0, 0, 0),
                            status: 1,
                        },
                        {
                            clientId: 2,
                            orderId: 3,
                            date: new Date(2016, 8, 22, 0, 0, 0, 0),
                            status: 3,
                        },
                        {
                            clientId: 3,
                            orderId: 4,
                            date: new Date(2014, 1, 9, 0, 0, 0, 0),
                            status: 3,
                        }
                    ]
                },
                {
                    productId: 3,
                    productCode: 'MS001',
                    description: 'Microsoft LX-3000 Headset',
                    stock: 3,
                    price: '29.49',
                    supplier: 2,
                    orders: [
                        {
                            clientId: 3,
                            orderId: 4,
                            date: new Date(2014, 1, 9, 0, 0, 0, 0),
                            status: 3,
                        },
                        {
                            clientId: 4,
                            orderId: 5,
                            date: new Date(2015, 9, 12, 0, 0, 0, 0),
                            status: 3,
                        }
                    ]
                },
            ];
        }

        function showEditIcon(col) {

            if (col) {

                return col === 'description';

            }

            return false;

        }

        function onEditCallback (event, column) {

            console.log('onEditCallback');

        }

        function onSaveCallback(event, column, value, currentIndex, original) {

            console.log('onSaveCallback');

        }

        function onChangeCallback(event) {

            console.log('onChangeCallback');

        }

        function onDataCallback(data) {

            console.log('onDataCallback');

        }

        function getHeaderTemplate(dataItem) {

            var template = '<label for="favColor">Cor</label><input type="color" id="favColor" />';

            return template;
        }

        function getTemplate(dataItem) {

            var template = '<span style="color: blue;">' +
                dataItem.productId + ' - ' + dataItem.productCode +
                '</span>';

            return template;

        }

        function getEditor(container, options) {

            var input = angular.element('<label for="favColor">Cor</label><input type="color" id="favColor" />');
            input.appendTo(container);

        }

        function getGridOptions() {

            var opts = {
                reorderable: true,
                columns: [
                    { field: 'productId', title: i18nFilter('l-product-id', [], 'js/grid'), width: 100 },
                    { field: 'productCode', title: i18nFilter('l-product-code', [], 'js/grid'), width: 100 },
                    { field: 'description', title: i18nFilter('l-description', [], 'js/grid'), width: 300, editable: true },
                    { field: 'stock', title: i18nFilter('l-stock', [], 'js/grid'), width: 100 },
                    { field: 'price', title: i18nFilter('l-price', [], 'js/grid'), width: 100 }
                ]
            };

            var deferred = $q.defer();

            setTimeout(function () {

                deferred.resolve(opts);

            }, 5000);

            return deferred.promise;

        }

    }
}());
