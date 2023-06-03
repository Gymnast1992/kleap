class HomePage {
    get buttonSignIn() {return cy.get('#menu-2-b82ddba')};
    get buttonGetStartedForFree() {return cy.contains('Get started for free')};
}

export default new HomePage()