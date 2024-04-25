/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8080/')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    cy.visit('http://localhost:8080/pokemon/ivysaur/')
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
  /* it('pokemon page can be navigated to', function() {
    cy.visit()
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  }) */
})