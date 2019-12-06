var cte = {};
var office = require('../assets/navBar');
var teachUS = require('../assets/teachers');
var subjectUS = require('../assets/subjects');
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
    // 'Navigation': browser => {
    // cte
    //     .naviIsAnnoying();
    //     office.forEach(site => {
    //         cte
    //             .offSites(site);
    //         browser
    //             .windowHandles(res => {
    //                 browser
    //                     .switchWindow(res.value[1])
    //                     .pause(30000)
    //                     .closeWindow()
    //                     .switchWindow(res.value[0]);
    //             });
    //     });
    // },
    // 'Search Teachers': browser => {
    //     cte
    //         .moveToElement('@staff', 0, 0)
    //         .waitForElementPresent('@teachers')
    //         .click('@teachers')
    //         .waitForElementPresent('@page')
    //     teachUS.forEach(teacher => {
    //         cte
    //             .teachers(teacher);
    //     });
    // },
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
                        .pause(30000)
                        .closeWindow()
                        .switchWindow(res.value[0]);
                });
        });
    },
}

