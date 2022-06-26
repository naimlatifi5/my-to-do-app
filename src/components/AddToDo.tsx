import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 16px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dbd5ec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`
const AddToDo = () => {
  return (
    <div>
      <form>
        <Input type="search" placeholder="Add an item..." />
      </form>
    </div>
  )
}

export default AddToDo
