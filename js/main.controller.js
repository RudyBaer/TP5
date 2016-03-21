(function() {
    'use strict';

    angular
        .module('monapp')
        .controller('MainController', MainController);

    MainController.$inject = ['jokeService', '$scope'];
    function MainController(jokeService, $scope) {
        var vm = this;
        vm.name = "Kevin";
        vm.jokes= [];
        vm.addJoke = addJoke;
        vm.predicate = '';
        vm.reverse = false;
        vm.order = order;

        activate();

        function activate() {
            jokeService.getJokes().then(function (data) {
                vm.jokes = data;
            });

            $scope.$on('notification', displayEvent);
        }


        function order(order) {
            vm.predicate = order;
            vm.reverse = !vm.reverse;
        }


        function addJoke(joke) {
            jokeService.addJoke(joke).then(function (j) {
                vm.jokes.push(j);
                vm.joke = "";
            })
        };

        function displayEvent(event, params) {
            vm.notification =  "c'est good";
        }

    }

})();
