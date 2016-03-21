(function () {
    'use strict';

    angular
        .module('monapp').config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                controller: 'MainController'
            })
            .when('/kevin', {
                template: '<div>NOOOOOOOO</div>'
            })
            .otherwise({
                template: '<div>Page 404</div>'
            });

    }

})();