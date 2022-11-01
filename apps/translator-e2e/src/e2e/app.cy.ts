describe('translator', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('h1').contains('Translator')
  });

  it('should get a translation', () => {
    cy.intercept('**/api/translate', { statusCode: 200, body: { translation: 'holla' } })
    cy.get('input').type('hello')
    cy.get('button').contains('Translate').click()
    cy.contains('holla')
  });

  it('should display an error message when fetching a translation fails', () => {
    cy.intercept('**/api/translate', { statusCode: 500 });
    cy.get('input').type('hello')
    cy.get('button').contains('Translate').click()
    cy.get('p').contains('Sorry, but there was a problem fetching an accurate translation')
  })
});
