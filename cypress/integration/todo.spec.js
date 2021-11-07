describe('TODOS page', () => {
  it('should add a new TODO', () => {
    cy.visit('todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .should('contain', '1. new TODO');
  });

  it('should toogle a previous TODO', () => {
    cy.visit('/todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > p')
      .first()
      .click()
      .should('have.class', 'complete');
  });

  it('should delete a previous TODO', () => {
    cy.visit('/todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('.list-group > .list-group-item:first > button')
      .first()
      .click()
      .get('.list-group > .list-group-item:first')
      .should('not.exist');
  })
});
