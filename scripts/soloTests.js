var cte = {};
var office = require('../assets/navBar');
var teachUS = require('../assets/teachers');
var subjectUS = require('../assets/subjects');
var meep = require('../assets/contact');
var searchUS = require('../assets/search');
module.exports = {
    before: browser => {
        cte = browser.page.soloObjects();
        cte
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    'Navigation': browser => {
        cte
            .naviIsAnnoying();
        office.forEach(site => {
            cte
                .click('@home')
                .offSites(site);
            browser
                .windowHandles(res => {
                    browser
                        .switchWindow(res.value[1])
                        .pause(2000)
                        .closeWindow()
                        .switchWindow(res.value[0]);
                });
        });
        cte
            .home()
            .navigate();
    },
    'Search Teachers': browser => {
        cte
            .moveToElement('@staff', 0, 0)
            .waitForElementPresent('@teachers')
            .click('@teachers')
            .waitForElementPresent('@page')
        teachUS.forEach(teacher => {
            cte
                .teachers(teacher);
        });
    },
    'Search Subjects': browser => {
        cte
            .click('@study')
            .waitForElementPresent('@page');
        subjectUS.forEach(sub => {
            cte
                .subjects(sub);
            browser
                .windowHandles(res => {
                    browser
                        .switchWindow(res.value[1])
                        .pause(2000)
                        .closeWindow()
                        .switchWindow(res.value[0]);
                });
        });
    },
    'Contact Me': browser => {
        cte
            .contact(meep);
    },
    'Club Organization Pages': browser => {
        cte
            .waitForElementPresent('@page')
            .click('@club')
            .waitForElementPresent('@page')
            .clubs();
    },
    'Search Bar': browser => {
        cte
            .click('@home')
            .waitForElementPresent('@page')
        searchUS.forEach(results => {
            cte
                .search(results);
        })
    },
}