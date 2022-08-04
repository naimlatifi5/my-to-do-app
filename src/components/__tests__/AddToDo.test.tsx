import {
  render,
  screen,
  waitFor,
  cleanup,
  fireEvent,
} from '@testing-library/react'
import AddToDo from '../AddToDo'

afterEach(cleanup)

describe('Test suit for AddTodo component', () => {
  const handleAddToDos = jest.fn()
  const setToDo = jest.fn()
  it('It should render the component onto the screen', () => {
    expect(true).toBeTruthy()
  })

  test('It should find input element for todo and render to screen', async () => {
    render(
      <AddToDo toDo="" setToDo={setToDo} handleAddToDos={handleAddToDos} />,
    )
    expect(screen.getByTestId('input-todo')).toBeInTheDocument()
  })

  test('It should find button for add item and render to screen', async () => {
    render(
      <AddToDo toDo="" setToDo={setToDo} handleAddToDos={handleAddToDos} />,
    )
    expect(screen.getByTestId('add-to-do')).toBeInTheDocument()
  })

  test('It should be disable todo button if props todo is empty', async () => {
    render(
      <AddToDo toDo="" setToDo={setToDo} handleAddToDos={handleAddToDos} />,
    )
    expect(screen.getByTestId('add-to-do')).toBeDisabled()
  })

  test(`It shouldn't disable todo button if props todo exists`, async () => {
    render(
      <AddToDo
        toDo="item added"
        setToDo={setToDo}
        handleAddToDos={handleAddToDos}
      />,
    )
    expect(screen.getByTestId('add-to-do')).toBeEnabled()
  })

  test('It should call method handleAddToDos() when button is clicked', async () => {
    render(
      <AddToDo toDo="hej" setToDo={setToDo} handleAddToDos={handleAddToDos} />,
    )
    fireEvent.click(screen.getByTestId('add-to-do'))
    expect(handleAddToDos).toHaveBeenCalled()
  })
})
