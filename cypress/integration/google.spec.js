describe('Services', () => {
	it('should open up a page', () => {
		cy.visit('http://www.google.com/');

		cy.title().should('include', 'Google');
	});

	it('should add input value', () => {
		cy.get('input[type="text"][name="q"]').type('cypress');

		cy.get('input[type="submit"][name="btnK"]').first().click();
	});
});