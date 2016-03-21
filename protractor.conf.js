exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'test/tp5.test.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'http://localhost:3000',

    framework: 'jasmine2',


    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};