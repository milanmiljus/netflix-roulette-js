import { render, fireEvent } from '@testing-library/react'
import { SearchForm } from './SearchForm'

test('renders an input with the initial value passed in props', () => {
  const { getByRole } = render(<SearchForm initialQuery="initial value" />)
  expect(getByRole('textbox')).toHaveValue('initial value')
})

test('calls onSearch prop with proper value after typing to the input and clicking Search button', () => {
  const handleSearch = jest.fn()
  const { getByRole } = render(<SearchForm initialQuery="" onSearch={handleSearch} />)
  const input = getByRole('textbox')
  const button = getByRole('button')

  fireEvent.change(input, { target: { value: 'new value' } })
  fireEvent.click(button)

  expect(handleSearch).toHaveBeenCalledWith('new value')
})

test('calls onSearch prop with proper value after typing to the input and pressing Enter key', () => {
  const handleSearch = jest.fn()
  const { getByRole } = render(<SearchForm initialQuery="" onSearch={handleSearch} />)
  const input = getByRole('textbox')

  fireEvent.change(input, { target: { value: 'new value' } })
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })

  expect(handleSearch).toHaveBeenCalledWith('new value')
})