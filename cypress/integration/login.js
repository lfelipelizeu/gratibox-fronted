describe('Sign Up Test', () => {
    it('should be successful', () => {
        cy.visit('http://localhost:3000/home');
        cy.contains('Já sou grato').click();

        cy.url().should('include', '/login');

        cy.get('.email')
            .type('teste@email.com')
            .should('have.value', 'teste@email.com');

        cy.get('.password')
            .type('12345')
            .should('have.value', '12345');

        cy.contains('Login').click();
        cy.url().should('include', '/');
    })
});
