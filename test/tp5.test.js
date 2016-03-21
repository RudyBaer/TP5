describe('Projet kevin', function () {

    it('should display project name', function () {
        browser.get('http://localhost:3000');
        expect(browser.getTitle()).toEqual('Projet TP5');
    });


    it('should count jokes', function() {
        var jokeCount;
        element.all(by.repeater('currentJoke in main.jokes')).count().then(
            function (data) {
                jokeCount = data;

                //console.log(jokeCount);

                // Find the element with ng-model="user" and type "jacksparrow" into it
                element(by.model('main.joke')).sendKeys('jacksparrow');

                // Find the first (and only) button on the page and click it
                element(by.id('addJokeButton')).click();

                // Verify that there are 10 tasks
                expect(element.all(by.repeater('currentJoke in main.jokes')).count()).toEqual(jokeCount + 1);

            }
        );
    });
});