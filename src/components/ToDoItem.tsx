import React from 'react'
import { ToDo } from '../utils/model'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'

interface Props {
  item: ToDo
  allToDos: ToDo[]
  setAllToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoItem: React.FC<Props> = ({ item, allToDos, setAllToDos }) => {
  return (
    <>
      <li>
        <span>{item.todo}</span>
        <span>
          <AiFillDelete />
        </span>
        <span>
          <FiEdit />
        </span>
      </li>
    </>
  )
}
export default ToDoItem
