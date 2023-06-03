import Credentials from "../../cypress/fixtures/data/credentials.json";
import Login from "../../cypress/fixtures/pom/login.page";

// The tests have API status code 307 - Redirection (server problem);
describe("Sign In", () => {
  beforeEach(() => {
    cy.visit("/builder/login");
    Login.signIn(Credentials.email, Credentials.password);
    cy.wait(5000);
  });

  it("Should sign in with existing credentials", () => {
    Login.buttonHumburgerMenu.click();
    Login.buttonAccountMenu.click();
    Login.buttonLogOut.should("be.visible");
  });

  it("Should log out", () => {
    Login.buttonHumburgerMenu.click();
    Login.buttonAccountMenu.click();
    Login.buttonLogOut.click();
    Login.buttonSignIn.should('be.visible');
  });
});