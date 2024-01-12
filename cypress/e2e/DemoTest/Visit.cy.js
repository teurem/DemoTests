context("Demo Test", () => { 
  before(() => {
    cy.visit('https://mail.krsu.edu.kg/?_task=login&_err=session')
  });
  it("Sign In", () => { 
      //Авторизация
      cy.get('[name="_user"]').
      type('kachkinbaeva.meruertmasalbekovna@krsu.edu.kg').
      should('have.value', 'kachkinbaeva.meruertmasalbekovna@krsu.edu.kg')
      cy.get('[name="_pass"]').
      type('password').
      should('have.value', 'password')
      cy.contains('Войти').click()
      cy.wait(1500)

      //Отправить сообщение
      cy.contains('Написать сообщение').click()
      cy.wait(1500)
      cy.get('[name="_to"]').
      type('meribox55@gmail.com').
      should('have.value', 'meribox55@gmail.com')
      cy.get('[name="_subject"]')
      .type('Adilet Test')
      .should('have.value', 'Adilet Test')
      cy.get('[name="_message"]')
      .type('Adilet LOH')
      .should('have.value', 'Adilet LOH')
      cy.contains('Отправить').click()
      cy.wait(2000)

      //Удалить сообщение
      cy.contains('Отправленные').click({force: true})
      cy.get('[class="message"]').contains('Adilet Test').click({force: true})
      cy.contains('Удалить').click({force: true})
      cy.wait(1500)

  });
});


///////////