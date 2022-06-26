import React from 'react'
import { ToDo } from '../utils/model'
import ToDoItem from './ToDoItem'

interface Props {
  allToDos: ToDo[]
  setAllToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ShowToDos: React.FC<Props> = ({ allToDos, setAllToDos }) => {
  return (
    <ul>
      {allToDos.map((item) => {
        return (
          <ToDoItem
            key={item.id}
            item={item}
            allToDos={allToDos}
            setAllToDos={setAllToDos}
          />
        )
      })}
    </ul>
  )
}

export default ShowToDos
