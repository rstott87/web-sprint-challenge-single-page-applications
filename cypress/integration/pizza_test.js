describe('Form Test', () => {
    beforeEach(() => {
      // Each test needs fresh state!
      // Never rely on state left over from previous tests
      // Every test should work in isolation (MUST)
      cy.visit('http://localhost:3000/pizza')
    });
    const name = () => cy.get('input[name="name"]');

    it('Checks to see if text boxes accept input', function (){
        name()
          .should('exist')
    })
})