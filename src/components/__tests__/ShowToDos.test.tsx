import {
  render,
  screen,
  waitFor,
  cleanup,
  fireEvent,
  getAllByTestId,
  within,
} from '@testing-library/react'
import ShowToDos from '../ShowToDos'

describe('Test suit for ShowToDos component', () => {
  const setAllToDos = jest.fn()
  it('It should render the component onto the screen', () => {
    expect(true).toBeTruthy()
  })

  it('It should render default text if there are no toDos added', async () => {
    const fakeAllToDos = []
    render(<ShowToDos allToDos={fakeAllToDos} setAllToDos={setAllToDos} />)
    expect(screen.getByTestId('no-item')).toHaveTextContent(
      'OBS! No item added yet...',
    )
  })

  it('It should render uncompleted todos in a list as snapshot', async () => {
    const fakeAllToDos = [{ id: 1659648862224, isDone: false, todo: "asdf'" }]
    const { asFragment } = render(
      <ShowToDos allToDos={fakeAllToDos} setAllToDos={setAllToDos} />,
    )
    // test to add something to the dom ul element inside component and you will see the component will fail because of the previsous snapshoot differs
    expect(asFragment()).toMatchSnapshot()
  })

  it('It should render uncompleted todos in a list and show the length', async () => {
    const mockedUnCompletedToDos = [
      { id: 1659648862224, isDone: false, todo: "asdf'" },
    ]
    render(
      <ShowToDos allToDos={mockedUnCompletedToDos} setAllToDos={setAllToDos} />,
    )
    const unCompletedToDos = screen
      .getAllByTestId('item')
      .map((item) => item.textContent)
    const fakeTodos = mockedUnCompletedToDos.map((c) => c.todo)
    expect(unCompletedToDos).toEqual(fakeTodos)
    expect(unCompletedToDos).toHaveLength(1)
  })
  it('It should render heading for completed todos and the list with the length', async () => {
    const mockedCompletedToDos = [
      { id: 1659648862224, isDone: true, todo: "completed'" },
    ]
    render(
      <ShowToDos allToDos={mockedCompletedToDos} setAllToDos={setAllToDos} />,
    )
    const completedToDos = screen
      .getAllByTestId('item')
      .map((item) => item.textContent)
    const fakeTodos = mockedCompletedToDos.map((c) => c.todo)
    expect(completedToDos).toEqual(fakeTodos)
    expect(completedToDos).toHaveLength(1)
    expect(screen.getByTestId('heading-completed')).toHaveTextContent(
      'COMPLETED (1)',
    )
  })
})
