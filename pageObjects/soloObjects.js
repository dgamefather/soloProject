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
            // Click the _blank tabs on the Navigation Bar
            .click('@home')
            .waitForElementPresent('@page')
            .click(`${site}`);

        return this;
    },
    home: function () {
        this
            .verify.elementPresent('@classHome')
            .click('@classHome')
            .waitForElementPresent('@page')
            .click('@home')
            .waitForElementPresent('@page')
            .verify.elementPresent('@clubsHome')
            .click('@clubsHome')
            .waitForElementPresent('@page')
            .click('@home')
            .waitForElementPresent('@page')
            .verify.elementPresent('@jatcHome')
            .click('@jatcHome');

        return this;
    },
    teachers: function (teacher) {
        this
            // Search for a Specific Teacher
            .clearValue('@teachSearch')
            .setValue('@teachSearch', `${teacher}`)
            .click('@teachSubmit')
            .waitForElementPresent(`a[title='${teacher}']`)
            .verify.containsText(`a[title='${teacher}']`, teacher)
            .click(`a[title='${teacher}']`)
            .verify.containsText(`a[title='${teacher}']`, teacher)
            .api.back();
        return this;
    },
    subjects: function (subject) {
        this
            // Click a specific subject image
            .verify.visible(`img[title="${subject}"][src^="http"]`)
            .moveToElement(`img[title="${subject}"][src^="http"]`, 0, 0)
            .pause(5000)
            .click(`img[title="${subject}"][src^="http"]`);
        return this;
    },
    contact: function (data) {
        this
            // Load Page
            .waitForElementPresent('@page')
            .moveToElement('@staff', 0, 0)
            .waitForElementPresent('@contact')
            .click('@contact')
            .waitForElementPresent('@page')

            // Clear Form Fields
            .clearValue('@name')
            .clearValue('@email')
            .clearValue('@sub')
            .clearValue('@msg')

            // Fill Form
            .setValue('@name', data.name)
            .setValue('@email', data.email)
            .setValue('@sub', data.subject)
            .setValue('@msg', data.msg)

            //Verify Form
            .verify.value('@name', data.name)
            .verify.value('@email', data.email)
            .verify.value('@sub', data.subject)
            .verify.value('@msg', data.msg)

        // Send Button
        // .click('@send');

        return this;
    },
    clubs: function () {
        this
            // Select Clubs
            // DECA
            .verify.elementPresent('@deca')
            .click('@deca')
            .waitForElementPresent('@decaFblaHosaPage')
            .api.back();

        // FBLA
        this
            .waitForElementPresent('@page')
            .verify.elementPresent('@fbla')
            .click('@fbla')
            .waitForElementPresent('@decaFblaHosaPage')
            .api.back();

        // FCCLA
        this
            .waitForElementPresent('@page')
            .verify.elementPresent('@fccla')
            .click('@fccla')
            .waitForElementPresent('@fcclaPage')
            .api.back();

        // HOSA
        this
            .waitForElementPresent('@page')
            .verify.elementPresent('@hosa')
            .click('@hosa')
            .waitForElementPresent('@decaFblaHosaPage')
            .api.back();

        this
            .waitForElementPresent('@page');

        return this;
    },
    search: function (search) {
        this
            .clearValue('@searchBar')
            .setValue('@searchBar', search)
            .click('@searchBtn')
            .waitForElementPresent('@page')
            .verify.containsText('@searchTitle', `SEARCH RESULTS FOR: ${search}`)

        return this;
    },
}
module.exports = {
    url: 'https://rivertoncte.org/',
    commands: [customs],
    elements: {
        // All
        page: 'iframe[title*="Twitter"]',

        // Search Bar
        searchBar: '.search-input',
        searchBtn: '.search-button',
        searchTitle: '#page-title',

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

        // Contact Page
        name: '[name="contact-name"]',
        email: '[name="contact-email"]',
        sub: '[name="contact-subject"]',
        msg: '[name="contact-content"]',
        send: '[name="contact-submit"]',

        // Club Links
        deca: {
            selector: '//*[contains(text(), "Riverton DECA Website")]',
            locateStrategy: 'xpath'
        },
        fbla: {
            selector: '//*[contains(text(), "Riverton FBLA Wesite")]',
            locateStrategy: 'xpath'
        },
        fccla: {
            selector: '//*[contains(text(), "Riverton FCCLA Website")]',
            locateStrategy: 'xpath'
        },
        fcclaPage: '#SITE_CONTAINER',
        hosa: {
            selector: '//*[contains(text(), "Riverton HOSA Website")]',
            locateStrategy: 'xpath'
        },
        decaFblaHosaPage: '#footer-wrap',

        // Home Page
        classHome: '.icon-box-link a[href*="rivertoncte.org/?page_id=1305"]',
        clubsHome: '.icon-box-link a[href*="rivertoncte.org/?page_id=989"]',
        jatcHome: '.icon-box-link a[href*="http://www.jatc-wj.org/"]',
    }
}