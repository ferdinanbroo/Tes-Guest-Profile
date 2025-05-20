describe('Test TC02', () => {
    beforeEach(() => {
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
        cy.wait(500)
      })

    it('TC02001. User ingin membuka form create guest profile - Account Information', () => {
        cy.get(':nth-child(1) > .column > .img-icon')
        .click()
        cy.wait(5000)
        cy.get('[data-cy="menu-apps-button"] > .q-btn__wrapper > .q-btn__content')
        .click()
        cy.get('[href="/fr/guest-profile"]')
        .click()
        cy.get('[data-cy="btn-add-individual"] > .q-btn__wrapper > .q-btn__content > img')
        .click()
        cy.get('[data-cy="account-information-tab"] > .q-tab__content')
        .click()
        .should('have.css', 'Color', 'rgb(40, 135, 210)')
    })

    it('TC02002. User mengisi private information dengan valid', () => {
        cy.get(':nth-child(1) > .column > .img-icon')
        .click()
        cy.wait(5000)
        cy.get('[data-cy="menu-apps-button"] > .q-btn__wrapper > .q-btn__content')
        .click()
        cy.get('[href="/fr/guest-profile"]')
        .click()
        cy.get('[data-cy="btn-add-individual"] > .q-btn__wrapper > .q-btn__content > img')
        .click()
        cy.get('[data-cy="account-information-tab"] > .q-tab__content')
        .click()
        //validasi value
        cy.get('[data-cy="mobile-number-input-individual"]')
        .type('+628837736461')
        .should('have.value', '+628837736461')

        cy.get('[data-cy="email-address-input-individual"]')
        .type('email@mail.com')
        .should('have.value', 'email@mail.com')
    })

    it('TC02003. User mengisi private information dengan Mobile Number tidak valid', () => {
        cy.get(':nth-child(1) > .column > .img-icon')
        .click()
        cy.wait(5000)
        cy.get('[data-cy="menu-apps-button"] > .q-btn__wrapper > .q-btn__content')
        .click()
        cy.get('[href="/fr/guest-profile"]')
        .click()
        cy.get('[data-cy="btn-add-individual"] > .q-btn__wrapper > .q-btn__content > img')
        .click()
        cy.get('[data-cy="account-information-tab"] > .q-tab__content')
        .click()
      
        cy.get('[data-cy="mobile-number-input-individual"]')
        .type('+62883773646!')
        
        //validasi warning
        cy.get('.q-field__messages > div')
        .should('be.visible')
        .and('contain', 'Only numbers, +, and - are allowed')
    })

    it('TC02004. User mengisi private information dengan Email Addres tidak valid', () => {
        cy.get(':nth-child(1) > .column > .img-icon')
        .click()
        cy.wait(5000)
        cy.get('[data-cy="menu-apps-button"] > .q-btn__wrapper > .q-btn__content')
        .click()
        cy.get('[href="/fr/guest-profile"]')
        .click()
        cy.get('[data-cy="btn-add-individual"] > .q-btn__wrapper > .q-btn__content > img')
        .click()
        cy.get('[data-cy="account-information-tab"] > .q-tab__content')
        .click()
        
        cy.get('[data-cy="mobile-number-input-individual"]')
        .type('+628837736461')

        cy.get('[data-cy="email-address-input-individual"]')
        .type('email@mail')

        //validasi warning
        cy.get(':nth-child(2) > [data-v-2c3f7e81=""] > .q-field > .q-field__inner > .q-field__bottom > .q-field__messages > div')
        .should('be.visible')
        .and('contain', 'Please enter correct email address.') 
    })

    it('TC02005. User mengisi Work Information dengan valid', () => {
        cy.get(':nth-child(1) > .column > .img-icon')
        .click()
        cy.wait(5000)
        cy.get('[data-cy="menu-apps-button"] > .q-btn__wrapper > .q-btn__content')
        .click()
        cy.get('[href="/fr/guest-profile"]')
        .click()
        cy.get('[data-cy="btn-add-individual"] > .q-btn__wrapper > .q-btn__content > img')
        .click()
        cy.get('[data-cy="account-information-tab"] > .q-tab__content')
        .click()
        //validasi value
        cy.get('[data-cy="phone-number-input-individual"]')
        .type('+628837736490')
        .should('have.value', '+628837736490')

        cy.get('[data-cy="fax-input-individual"]')
        .type('55546432')
        .should('have.value', '55546432')

        cy.get('[data-cy="occupation-input-individual"]')
        .type('IT QA')
        .should('have.value', 'IT QA')
    })

    it('TC02006. User mengisi Work Information dengan Phone Number tidak valid', () => {
        cy.get(':nth-child(1) > .column > .img-icon')
        .click()
        cy.wait(5000)
        cy.get('[data-cy="menu-apps-button"] > .q-btn__wrapper > .q-btn__content')
        .click()
        cy.get('[href="/fr/guest-profile"]')
        .click()
        cy.get('[data-cy="btn-add-individual"] > .q-btn__wrapper > .q-btn__content > img')
        .click()
        cy.get('[data-cy="account-information-tab"] > .q-tab__content')
        .click()
        //validasi value
        cy.get('[data-cy="phone-number-input-individual"]')
        .type('+62883773649qq')

        cy.get('[data-cy="fax-input-individual"]')
        .type('55546432')

        cy.get('[data-cy="occupation-input-individual"]')
        .type('IT QA')

        //validasi
        cy.get('.q-field__messages > div')
        .should('be.visible')
        .and('contain', 'Only numbers, +, and - are allowed')
    })

    it('TC02007. User mengisi Work Information dengan Fax tidak valid', () => {
        cy.get(':nth-child(1) > .column > .img-icon')
        .click()
        cy.wait(5000)
        cy.get('[data-cy="menu-apps-button"] > .q-btn__wrapper > .q-btn__content')
        .click()
        cy.get('[href="/fr/guest-profile"]')
        .click()
        cy.get('[data-cy="btn-add-individual"] > .q-btn__wrapper > .q-btn__content > img')
        .click()
        cy.get('[data-cy="account-information-tab"] > .q-tab__content')
        .click()

        cy.get('[data-cy="phone-number-input-individual"]')
        .type('+62883773649')

        cy.get('[data-cy="fax-input-individual"]')
        .type('55546432wer')

        cy.get('[data-cy="occupation-input-individual"]')
        .type('IT QA')

        //validasi
        cy.get('.q-field__messages > div')
        .should('be.visible')
        .and('contain', 'Only numbers, +, and - are allowed')
    })

    it.only('TC02008. User mengisi Work Information dengan Occupation tidak valid', () => {
        cy.get(':nth-child(1) > .column > .img-icon')
        .click()
        cy.wait(5000)
        cy.get('[data-cy="menu-apps-button"] > .q-btn__wrapper > .q-btn__content')
        .click()
        cy.get('[href="/fr/guest-profile"]')
        .click()
        cy.get('[data-cy="btn-add-individual"] > .q-btn__wrapper > .q-btn__content > img')
        .click()
        cy.get('[data-cy="account-information-tab"] > .q-tab__content')
        .click()
        
        cy.get('[data-cy="phone-number-input-individual"]')
        .type('+62883773649')

        cy.get('[data-cy="fax-input-individual"]')
        .type('55546432wer')

        cy.get('[data-cy="occupation-input-individual"]')
        .type('IT QA 12')

        //validasi
        cy.get(':nth-child(3) > [data-v-2c3f7e81=""] > .q-field > .q-field__inner > .q-field__bottom > .q-field__messages > div')
        .should('be.visible')
        .and('contain', 'Only letters, spaces, and / are allowed')
    })
  })