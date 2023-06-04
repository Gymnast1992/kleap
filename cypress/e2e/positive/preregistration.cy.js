import Helpers from "../../fixtures/data/helpers";
import Registration from "../../fixtures/pom/preregistration.page";

const businessName = Helpers.getRandText(7);
const message = "My first successful business";

//In my opinion, this test isn't efficient.
//It should be running manually.
//But I would love to show you how I manage it!

describe("Preregistration", () => {
  beforeEach(() => {
    cy.visit("/start-context");
  });

  it("Should pass through the preregistration questionnaire", () => {
    Registration.textCenter.contains("Getting Started");
    Registration.buttonContext.should("have.length", 9);
    Registration.buttonRandContext.click();
    Registration.buttonGoal.should("have.length", 7);
    Registration.buttonRandGoal.click();
    Registration.inputBusinessName.type(businessName);
    Registration.buttonNext.click();
    Registration.inputMessage.type(message);
    Registration.buttonNext1.click();
    cy.wait(75000); //Here we wait until our website will be creting;
    Registration.title.should("have.value", businessName);
    Registration.buttonPublish.click();
    cy.wait(5000);
    Registration.textCreateAnAccount.should("be.visible");
  });
});
