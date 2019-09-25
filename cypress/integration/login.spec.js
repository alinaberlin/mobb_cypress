///<reference types ='cypress'/>

it("should navigate to the login page", () => {
    //positive test checking the login for an existing user
    cy.visit("https://app.moberries.com/login?redirectTo=%2F");
    cy.get("input[type=email]").type("alina.ghetler@gmail.com");
    //write the email of the user
    cy.get("input[type=password]").type(Cypress.env("PASSWORD"));
    //write the password of the user
    cy.get("button[type=submit]").click();
    //click on the button
});
//negative test wrong password for existing user
it("should navigate to the login page", () => {
    //positive test checking the login for an existing user
    cy.visit("https://app.moberries.com/login?redirectTo=%2F");
    cy.get("input[type=email]").type("alina.ghetler@gmail.com");
    //write the email of the user
    cy.get("input[type=password]").type('whatever123');
    //write the password of the user
    cy.get("button[type=submit]").click();
    //click on the button
});
//wrong user name id for an existing user
it("should navigate to the login page", () => {
    //positive test checking the login for an existing user
    cy.visit("https://app.moberries.com/login?redirectTo=%2F");
    cy.get("input[type=email]").type("alina.ghetlergmail.com");
    //write the email of the user
    cy.get("input[type=password]").type('isNotAmatch');
    //write the password of the user
    cy.get("button[type=submit]").click();
    //click on the button
});
