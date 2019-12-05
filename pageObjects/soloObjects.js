var customs = {
    naviIsAnnoying: function () {
        this
            .waitForElementPresent('@page')

            // Home
            .click('@home')
            .waitForElementPresent('@page')


            // Staff
            .click('@staff')
            .waitForElementPresent('@page')

            // Teachers
            .moveToElement('@staff', 0, 0)
            .waitForElementPresent('@teachers')
            .click('@teachers')
            .waitForElementPresent('@page')

            // Contact
            .moveToElement('@staff', 0, 0)
            .waitForElementPresent('@contact')
            .click('@contact')
            .waitForElementPresent('@page')

            // Areas of Study
            .click('@study')
            .waitForElementPresent('@page')

            // Agriculture
            .moveToElement('@study', 0, 0)
            .waitForElementPresent('@cult')
            .click('@cult')
            .waitForElementPresent('@page')

            // Business
            .moveToElement('@study', 0, 0)
            .waitForElementPresent('@business')
            .click('@business')
            .waitForElementPresent('@page')

            // FACS
            .moveToElement('@study', 0, 0)
            .waitForElementPresent('@facs')
            .click('@facs')
            .waitForElementPresent('@page')

            // Health
            .moveToElement('@study', 0, 0)
            .waitForElementPresent('@health')
            .click('@health')
            .waitForElementPresent('@page')

            // Skilled
            .moveToElement('@study', 0, 0)
            .waitForElementPresent('@skilled')
            .click('@skilled')
            .waitForElementPresent('@page')

            // Clubs
            .click('@club')
            .waitForElementPresent('@page');

        return this;
    },
    offSites: function (site) {
        this
            .click(`${site}`);
    },
    teachers: function (teacher) {
        this
            .setValue('@teachSearch', `${teacher}`)
            .click('@teachSubmit')
            .waitForElementPresent(`a[title='${teacher}']`)
            .verify.containsText(`a[title='${teacher}']`, teacher)
            .click(`a[title='${teacher}']`)
            .verify.containsText(`a[title='${teacher}']`, teacher);
        return this;
    },

    subjects: function (subject) {
        this
            .click(`img[title='${subject}']`);
        return this;
    },
}
module.exports = {
    url: 'https://rivertoncte.org/',
    commands: [customs],
    elements: {
        // All
        page: 'iframe[title*="Twitter"]',

        //Navigation Bar
        home: '#menu-item-727',

        staff: '#menu-item-633', // Staff Drop Down
        teachers: '#menu-item-983',
        contact: '#menu-item-634', // Staff Drop Down

        study: '#menu-item-1010', // Areas of Study Drop Down
        cult: '#menu-item-755',
        business: '#menu-item-773',
        facs: '#menu-item-772',
        health: '#menu-item-771',
        skilled: '#menu-item-768', // Areas of Study Drop Down

        club: '#menu-item-991',

        // Subject Pages
        subTitle: '#page-title',


        // Teachers Page
        teachSearch: '#cn-search-input',
        teachSubmit: '#cn-search-submit',
    }
}