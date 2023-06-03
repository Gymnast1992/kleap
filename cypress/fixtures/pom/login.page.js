class Login {
   get inputEmail() {return cy.get('[data-cy="login-email"]')};
   get inputPassword() {return cy.get('[data-cy="login-password"]')};
   get buttonSignIn() {return cy.get('[data-cy="btn-login"]')};
   get buttonHumburgerMenu() {return cy.get('button [stroke="currentColor"]').eq(0)};
   get buttonAccountMenu() {return cy.get('[class="szh-menu-button"]')};
   get buttonLogOut() {return cy.contains("Log out")}

   signIn(email, password) {
    this.inputEmail.type(email);
    this.inputPassword.type(password);
    this.buttonSignIn.click();
   }
};


export default new Login()