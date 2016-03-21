(function() {
    'use strict';

    angular
        .module('monapp')
        .controller('JokeController', JokeController);

    JokeController.$inject = [ 'jokeService', '$scope'];
    function JokeController(jokeService, $scope) {
        var vm = this;
        vm.addFavorite = addFavorite;
        vm.removeFavorite = removeFavorite;
        vm.plusOne = plusOne;


        function plusOne(joke) {

            if (joke.score == undefined) {
                joke.score = 0;

            }
            joke.score += 1;
            jokeService.updateJoke(joke);
        }


        function removeFavorite(joke) {
            joke.favorite = false;
            jokeService.updateJoke(joke);
        }


        function addFavorite(joke) {
            joke.favorite = true;
            jokeService.updateJoke(joke);
            $scope.$emit("notification", 'test');
        }



    }
})();