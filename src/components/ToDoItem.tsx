import React, { useEffect, useRef, useState } from 'react'
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
const EditInput = styled.input`
  width: 150px;
  outline: none;
  border: none;
`
const IconWrap = styled.span`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
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
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [edit, setEditToDo] = useState<string>(item.todo)

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

  const editToDos = (id: number) => {
    console.log('id', id)
    setIsEditing(true)
  }

  const handleOnBlur = () => {
    setIsEditing(false)
  }

  const handleEditSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    // map through all toDos and if we find the onw with the id selected replace the toDo with new value

    let editTodos = allToDos.map((item) =>
      item.id === id ? { ...item, todo: edit } : item,
    )
    setAllToDos(editTodos)
    setIsEditing(false)
  }
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // make focus element when edit is editing mode
    inputRef.current?.focus()
  }, [isEditing])

  const editForm = (
    <>
      <form onSubmit={(e) => handleEditSubmit(e, item.id)}>
        <EditInput
          ref={inputRef}
          value={edit}
          onChange={(e) => setEditToDo(e.target.value)}
          onBlur={handleOnBlur}
        />
      </form>
    </>
  )

  const editIcons = (
    <>
      <span className="todo-item">{item.todo}</span>
      <IconWrap>
        <IconWrapper>
          <FiEdit onClick={() => editToDos(item.id)} />
        </IconWrapper>
        <IconWrapper>
          <AiFillDelete onClick={() => deleteToDos(item.id)} />
        </IconWrapper>
      </IconWrap>
    </>
  )

  return (
    <>
      <li data-testid="item">
        <>
          <Circle onClick={() => handleCompleted(item.id)}>
            {item.isDone ? <BsCheck2 /> : null}
          </Circle>

          {!item.isDone && isEditing ? (
            editForm
          ) : !item.isDone ? (
            editIcons
          ) : (
            <span className="done-item">{item.todo}</span>
          )}
        </>
      </li>
    </>
  )
}
export default ToDoItem
