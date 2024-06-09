import { render, fireEvent } from '@testing-library/react'
import { Counter } from './Counter'

test('renders initial value provided in props', () => {
  const { getByText } = render(<Counter initialValue={5} />)
  expect(getByText('Counter Value: 5')).toBeInTheDocument()
})

test('increments count on "increment" button click', () => {
  const { getByText } = render(<Counter initialValue={5} />)
  const incrementButton = getByText('Increment')
  fireEvent.click(incrementButton)
  expect(getByText('Counter Value: 6')).toBeInTheDocument()
})

test('decrements count on "decrement" button click', () => {
  const { getByText } = render(<Counter initialValue={5} />)
  const decrementButton = getByText('Decrement')
  fireEvent.click(decrementButton)
  expect(getByText('Counter Value: 4')).toBeInTheDocument()
})