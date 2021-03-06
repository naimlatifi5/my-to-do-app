import React, { useRef } from 'react'
import styled from 'styled-components'
import { GrAdd } from 'react-icons/gr'

const Input = styled.input`
  padding: 16px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`

const FormWrapper = styled.form`
  position: relative;
`

const IconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
`
interface Props {
  toDo: string
  setToDo: React.Dispatch<React.SetStateAction<string>>
  handleAddToDos: (e: React.FormEvent) => void
}

const AddToDo: React.FC<Props> = ({ toDo, setToDo, handleAddToDos }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: React.FormEvent) => {
    handleAddToDos(e)
    // blur input after submitting the form
    inputRef.current?.blur()
  }

  return (
    <>
      <FormWrapper onSubmit={handleFormSubmit}>
        <Input
          ref={inputRef}
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="search"
          placeholder="Add an item..."
        />
        <IconWrapper onClick={handleAddToDos}>
          <GrAdd></GrAdd>
        </IconWrapper>
      </FormWrapper>
    </>
  )
}

export default AddToDo
