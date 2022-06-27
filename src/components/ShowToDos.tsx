import React from 'react'
import { ToDo } from '../utils/model'
import ToDoItem from './ToDoItem'
import styled from 'styled-components'

interface Props {
  allToDos: ToDo[]
  setAllToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}
const List = styled.ul`
  padding: 0;
  margin: 0 0 48px 0;
  list-style: none;

  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
`

const ShowToDos: React.FC<Props> = ({ allToDos, setAllToDos }) => {
  let completedToDos = allToDos.filter((item) => item.isDone === true)
  let notCompletedToDos = allToDos.filter((item) => item.isDone === false)

  return (
    <>
      <List>
        {notCompletedToDos.length ? (
          notCompletedToDos.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                item={item}
                allToDos={allToDos}
                setAllToDos={setAllToDos}
              />
            )
          })
        ) : (
          <li>
            <em>No item added yet...</em>
          </li>
        )}
      </List>
      {completedToDos.length ? (
        <h4>COMPLETED {completedToDos.length}</h4>
      ) : null}
      <List>
        {completedToDos.map((item) => {
          return (
            <ToDoItem
              key={item.id}
              item={item}
              allToDos={allToDos}
              setAllToDos={setAllToDos}
            />
          )
        })}
      </List>
    </>
  )
}

export default ShowToDos
