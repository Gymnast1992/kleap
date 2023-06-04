import Login from "../../fixtures/pom/login.page";
import Credentials from "../../fixtures/data/credentials.json";

describe("Sign In", () => {
  beforeEach(() => {
    cy.visit("/builder/login");
  });

  it("Should not sign in without email", () => {
    Login.inputPassword.type(Credentials.password);
    Login.buttonSignIn.click();
    Login.errorEmail.should("be.visible");
  });

  it("Should not sign in without password", () => {
    Login.inputEmail.type(Credentials.email);
    Login.buttonSignIn.click();
    Login.errorPassword.should("be.visible");
  });

  it("Should not sign in without credentials", () => {
    Login.buttonSignIn.click();
    Login.errorEmail.should("be.visible");
    Login.errorPassword.should("be.visible");
  });
});
