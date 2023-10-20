it('should allow a user to input their first and last name and submit the form', () => {
    cy.visit(baseUrl);
    cy.get('input[name="fname"]').type('John');
    cy.get('input[name="lname"]').type('Doe');
    cy.get('input[type="submit"]').click();
    cy.on('window:alert', str => {
        expect(str).to.equal('First name: John\nLast name: Doe');
    });
});
