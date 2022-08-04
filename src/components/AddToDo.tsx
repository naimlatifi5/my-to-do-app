import React, { useRef } from 'react'
import styled from 'styled-components'
import { GrAdd } from 'react-icons/gr'
import { Props } from '../utils/model'
const Input = styled.input`
  padding: 16px;
  width: calc(100% - 36px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
  border-radius: 30px;
  border: 1px solid #3b3b71;
`

const FormWrapper = styled.form`
  position: relative;
`

const IconWrapper = styled.button`
  position: absolute;
  top: 18px;
  right: 15px;
  border: none;
  background: none;
`

const AddToDo: React.FC<Props> = ({ toDo, setToDo, handleAddToDos }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: React.FormEvent) => {
    console.log(e)
    handleAddToDos(e)
    // blur input after submitting the form
    inputRef.current?.blur()
  }

  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      <Input
        data-testid="input-todo"
        ref={inputRef}
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        type="text"
        placeholder="Add an item..."
      />
      <IconWrapper
        data-testid="add-to-do"
        disabled={toDo.length === 0}
        type="button"
        onClick={handleAddToDos}
      >
        <GrAdd />
      </IconWrapper>
    </FormWrapper>
  )
}

export default AddToDo
