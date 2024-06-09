describe('GenreSelect', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  const genreAll = '[data-testid="genre-All"]'
  const genreHorror = '[data-testid="genre-Horror"]'

  it('renders all genres passed in props', () => {
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    genres.forEach(genre => {
      cy.contains(genre);
    });
  });

  it('highlights selected genre passed in props', () => {
    cy.get(genreAll).should('have.text','All').should('have.css', 'color', 'rgb(255, 0, 0)');
  });

  it('calls onSelect callback with correct genre after a click event on a genre button', () => {
    cy.get(genreHorror).should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.get(genreHorror).click();
    cy.get(genreHorror).should('have.css', 'color', 'rgb(255, 0, 0)');
  });
});