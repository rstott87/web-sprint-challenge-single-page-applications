describe('Form Test', () => {
    beforeEach(() => {
      // Each test needs fresh state!
      // Never rely on state left over from previous tests
      // Every test should work in isolation (MUST)
      cy.visit('http://localhost:3000/pizza')
    });
    const name = () => cy.get('input[name="name"]');
    const pepperoni = () => cy.get('input[name="pepperoni"]');
    const bacon= () => cy.get('input[name="bacon"]');
    const pineapple = () => cy.get('input[name="pineapple]');
    const vegetables = () => cy.get('input[name="vegetables"]');
    const submitBTN = () => cy.get('button[id="order-button"]');
    
    it('Checks to see if text boxes accept input', function (){
        name()
          .should('have.value', '')
          .type('Bobby')
          .should('have.value', 'Bobby')      
    })
    it('Checks if checkboxes can be checked', function(){
        pepperoni()
            .check()
            .uncheck()
        bacon()
            .check()
            .uncheck()
        pineapple()
            .check()
            .uncheck()
        vegetables()
            .check()
            .uncheck()
    })
    it(`Checks if 'place order can be clicked'`, function(){
       name()
        .should('have.value', '')
        .type('Bobby')
        .should('have.value', 'Bobby')  
       submitBTN()
        .click()
    })
})