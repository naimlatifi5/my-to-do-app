import React from 'react'
import { ToDo } from '../utils/model'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { BsCheck2 } from 'react-icons/bs'
import styled from 'styled-components'

interface Props {
  item: ToDo
  allToDos: ToDo[]
  setAllToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Circle = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 24px;
  border: 1px solid #3b3b71;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    width: 25px;
    height: 25px;
  }
`

const IconWrapper = styled.span`
  margin-right: 6px;
  &:last-child {
    margin-right: 0;
  }
  > svg {
    width: 18px;
    height: 18px;
  }
`

const ToDoItem: React.FC<Props> = ({ item, allToDos, setAllToDos }) => {
  const handleCompleted = (id: number) => {
    let completedToDos = allToDos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item,
    )
    setAllToDos(completedToDos)
  }

  const deleteToDos = (id: number) => {
    let deletedClickedTodo = allToDos.filter((item) => item.id !== id)
    setAllToDos(deletedClickedTodo)
  }
  return (
    <>
      <li>
        <ToDoWrapper>
          <Circle onClick={() => handleCompleted(item.id)}>
            {item.isDone ? <BsCheck2 /> : null}
          </Circle>

          <span>{item.todo}</span>
        </ToDoWrapper>
        <span>
          <IconWrapper>
            <FiEdit />
          </IconWrapper>
          <IconWrapper>
            <AiFillDelete onClick={() => deleteToDos(item.id)} />
          </IconWrapper>
        </span>
      </li>
    </>
  )
}
export default ToDoItem
