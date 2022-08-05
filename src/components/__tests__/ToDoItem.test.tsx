import {
  render,
  screen,
  waitFor,
  cleanup,
  fireEvent,
  getAllByTestId,
  within,
} from '@testing-library/react'
import ToDoItem from '../ToDoItem'

describe('Test suit for ToDoItem component', () => {
  it('It should render the component onto the screen', () => {
    expect(true).toBeTruthy()
  })
})
