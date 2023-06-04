import Helpers from "../../fixtures/data/helpers";

class Registration {
  get textCenter() {
    return cy.get('[class*="text-center text-white"]');
  }
  get buttonContext() {
    return cy.get('[class*="bg-[#F0F3F5]');
  }
  get buttonRandContext() {
    return cy.get('[class*="bg-[#F0F3F5]').eq(Helpers.getRandNum0To8(1));
  }
  get buttonGoal() {
    return cy.get("[class*=my-1]");
  }
  get buttonRandGoal() {
    return cy.get("[class*=my-1]").eq(Helpers.getRandNum0To6(1));
  }
  get inputBusinessName() {
    return cy.get('[type="text"]');
  }
  get buttonNext() {
    return cy.get("[class*=my-1]");
  }
  get inputMessage() {
    return cy.get(
      '[placeholder="Briefly provide an overview of your business?"]'
    );
  }
  get buttonNext1() {
    return cy.get("[class*=my-1]").eq(0);
  }
  get title() {
    return cy.get(".flex > .pl-2");
  }
  get buttonPublish() {
    return cy.contains("Publish");
  }
  get textCreateAnAccount() {
    return cy.contains("Create an account to publish your page for free");
  }
}

export default new Registration();
