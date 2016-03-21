(function () {
    'use strict';

    angular
        .module('monapp')
        .factory('jokeService', JokeService);


    JokeService.$inject = ['localStorageService', '$q'];
    function JokeService(localStorageService, $q) {

        var jokeService = {};
        jokeService.getJokes = function () {
            var defer = $q.defer();
            var jokes = localStorageService.get('jokes');
            if (jokes) {
            } else {
                jokes = [];

            }
            defer.resolve(jokes);
            return defer.promise;
        };

        jokeService.addJoke = function (txt) {
            var defer = $q.defer();

            var jokes = localStorageService.get('jokes');
            if (jokes) {
            } else {
                jokes = [];

            }
            var joke = {
                txt : txt,
                id : jokes.length + 1,
                date: new Date(),
                score: 0
            }
            jokes.push(joke);
            localStorageService.set('jokes', jokes);
            defer.resolve(joke);
            return defer.promise;
        };

        jokeService.updateJoke = function updateJoke(joke) {

            var jokes = localStorageService.get('jokes');
            if (jokes) {
            } else {
                jokes = [];

            }
            for (var i = 0; i < jokes.length; i++) {
                var currentJoke = jokes[i];
                if (currentJoke.id === joke.id) {
                    jokes[i] = joke;
                }
            }
            localStorageService.set('jokes', jokes);

        }

        return jokeService;
    }
})
();