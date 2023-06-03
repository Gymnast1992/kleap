import HomePage from "../../cypress/fixtures/pom/home.page";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("https://kleap.co");
  });

  it("Should navigate to the homepage", () => {
    HomePage.buttonSignIn.should("contains.text", "Sign in");
    HomePage.buttonGetStartedForFree.should("be.visible");
  });
});