// context("Demo Test", () => { 
//   before(() => {
//     cy.visit('https://mail.krsu.edu.kg/?_task=login&_err=session')
//   });
//   it("Sign In", () => { 
//       //Авторизация
//       cy.get('[name="_user"]').
//       type('kachkinbaeva.meruertmasalbekovna@krsu.edu.kg').
//       should('have.value', 'kachkinbaeva.meruertmasalbekovna@krsu.edu.kg')
//       cy.get('[name="_pass"]').
//       type('password').
//       should('have.value', 'password')
//       cy.contains('Войти').click()
//       cy.wait(1500)

//       //Отправить сообщение
//       cy.contains('Написать сообщение').click()
//       cy.wait(1500)
//       cy.get('[name="_to"]').
//       type('meribox55@gmail.com').
//       should('have.value', 'meribox55@gmail.com')
//       cy.get('[name="_subject"]')
//       .type('Adilet Test')
//       .should('have.value', 'Adilet Test')
//       cy.get('[name="_message"]')
//       .type('Adilet LOH')
//       .should('have.value', 'Adilet LOH')
//       cy.contains('Отправить').click()
//       cy.wait(2000)

//       //Удалить сообщение
//       cy.contains('Отправленные').click({force: true})
//       cy.get('[class="message"]').contains('Adilet Test').click({force: true})
//       cy.contains('Удалить').click({force: true})
//       cy.wait(1500)

//   });
// });

let number1 = 1;
let number2 = 2;
let number3 = 3;

let numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
  context("Demo Test for Online-Restaurant", () => {
    before(() => { 
      cy.visit('https://restoran.onlineresheniya.ru/') //Ссылка на сайт
    });
    // choose client version
    it("Choose client version: " + numbers[i], () => { 
        cy.contains('Работа сервиса со стороны клиента').click()
        cy.wait(1000)
        cy.contains('Посмотреть сервис').click()
        cy.wait(1000)
        cy.get('[id="fld_5895935_1_opt1579921"]').click()
        cy.wait(1000)
        cy.get('[value="Первые блюда"]').click()
        .get('[value="Борщ"]').click()
        .get('[id="fld_8401512_1"]').select(numbers[i])
        cy.get('[placeholder="Номер столика"]').type(numbers[i])
        .should('have.value', numbers[i])
        cy.contains('Подтвердить').click()
        cy.wait(1000)
    });
  });
}

for (let i = 0; i < numbers.length; i++) {
  context("Demo Test for mail send from Gmail", () => {
    before(() => { 
      cy.visit('https://www.deepl.com/translator') //Ссылка на сайт
    });
    it('Input tests in Deepl Translator' + numbers[i], () => {
    cy.get('[_d-id="1"]').type('Привет')
    });
  });
}

// visit - переход на страницу
// get - получение элемента  
// type - ввод текста
// should - проверка значения
// click - клик по элементу
// contains - поиск элемента по тексту
// select - выбор элемента из списка
// last - выбор последнего элемента
// parents - поиск родительских элементов
// first - выбор первого элемента
// check - установка флага
// wait - ожидание
// force - принудительный клик

//5cd80e75ad58f6f0e7363272d6515735687757e8


// Path: cypress/e2e/DemoTest/Visit.cy.js