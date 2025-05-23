describe('Test Login', () => {
  it('passes', () => {
    cy.visit('https://e1-vhp.com/')
    cy.get('[data-cy="username-input-login"]')
    .type('qctest@qcbali03')
    cy.get('[data-cy="password-input-login"]')
    .type('vhp123')
    cy.get('[data-cy="btn-submit"] > .q-btn__wrapper > .q-btn__content')
    .click()
    cy.get('[data-cy="btn-submit"] > .q-btn__wrapper > .q-btn__content')
    .type('A3b9Z1')
    cy.get('[data-cy="btn-submit"] > .q-btn__wrapper > .q-btn__content')
    .click()
    cy.wait(100)
    cy.get('[data-cy="btn-user-account"] > .q-btn__wrapper')
    .should('be.visible')
  })
})