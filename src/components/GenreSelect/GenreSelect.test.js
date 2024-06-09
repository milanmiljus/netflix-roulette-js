import { render, fireEvent } from '@testing-library/react'
import { GenreSelect } from './GenreSelect'

test('renders all genres passed in props', () => {
  const genres = ['Genre1', 'Genre2', 'Genre3']
  const { getByText } = render(<GenreSelect genres={genres} />)
  genres.forEach(genre => {
    expect(getByText(genre)).toBeInTheDocument()
  })
})

test('highlights selected genre passed in props', () => {
  const { getByText } = render(<GenreSelect genres={['Genre1', 'Genre2']} selectedGenre="Genre2" />)
  expect(getByText('Genre2')).toHaveStyle({ color: 'red' })
})

test('calls onSelect callback with correct genre after a click event on a genre button', () => {
  const handleSelect = jest.fn()
  const { getByText } = render(<GenreSelect genres={['Genre1', 'Genre2']} onSelect={handleSelect} />)
  fireEvent.click(getByText('Genre1'))
  expect(handleSelect).toHaveBeenCalledWith('Genre1')
})