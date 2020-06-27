module.exports = {
    'Set up new app test - adcolony': function(browser) {
        const appName = 'AdColony Take Home Assignment - Barbara'

        browser
            .url(process.env.AUTH_HOST)
            .click('#email')
            .setValue('#email', process.env.AUTH_EMAIL)
            .click('#password')
            .setValue('#password', process.env.AUTH_PASSWORD)
            .submitForm('.link-login')
            .click('#pi_tracking_opt_in_yes')
            .waitForElementVisible('#ac-navbar')
            .click('a[href="/apps"]')
            .waitForElementVisible('a[href="/app/new"]')
            .click('a[href="/app/new"]')
            .waitForElementVisible('.ac-form-container-element')
            .click('#store_search')
            .setValue('#store_search', appName)
            .click('.action-deselect-all-filters')
            .click('input[value="3"]')
            .click('input[value="11"]')
            .click('input[value="26"]')
            .click('input[value="28"]')
            .click('input[value="40"]')
            .click('.action-create')
            .waitForElementVisible('#content')
            .click('#dropdownMenuButton')
            .click('a[href="/logout"]')
            .url(process.env.AUTH_HOST)
            .click('#email')
            .setValue('#email', process.env.AUTH_EMAIL)
            .click('#password')
            .setValue('#password', process.env.AUTH_PASSWORD)
            .submitForm('.link-login')
            .waitForElementVisible('#ac-navbar')
            .click('a[href="/apps"]')
            .waitForElementVisible(`.truncated-tooltip[data-original-title="${appName}"]`)
            .assert.attributeContains('.truncated-tooltip', 'data-original-title', appName, 'My test is visible');
    }
}
