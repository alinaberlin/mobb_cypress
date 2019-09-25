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
    cy.get("input[type=email]").type("alina.ghetlerrrr@gmail.com");
    //write the email of the user
    cy.get("input[type=password]").type('isNotAmatch');
    //write the password of the user

    cy.get("button[type=submit]").click();
    cy.contains('Forgot your password?');

    //click on the button
});
//<div class="position-fixed w-100 alert alert-danger fade show" role="alert"><div class="position-relative px-3 container"><div class="mr-3">Forgot your password? Please <a class="u" href="/password-recovery">click here</a> to recover.</div><span class="position-absolute close">×</span></div></div>