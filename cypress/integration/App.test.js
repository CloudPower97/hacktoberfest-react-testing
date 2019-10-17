describe('App', () => {
  beforeEach(() => {
    cy.visit('/intro')
  })

  it('Does not do much!', function () {
    cy.get('.btn-wrapper a').click()
  })
})
