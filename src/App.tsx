import React, { useState } from 'react'
import './App.css'
import styled from 'styled-components'

// components

import AddToDo from './components/AddToDo'
import ShowToDos from './components/ShowToDos'

// model with interface

import { ToDo } from './utils/model'

const PageWrapper = styled.div`
  background-color: rgba(238, 245, 255, 1);
  width: 100%;
  height: 100vh;
  display: flex;
`
const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ToDoListContainer = styled.div`
  background-color: #ffff;
  padding: 48px;
  box-shadow: 0px 15px 41px 3px rgba(180, 180, 227, 0.3);
  border-radius: 54px;
  width: calc(100% - 48px);
`
const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>('')
  const [allToDos, setAllToDos] = useState<ToDo[]>([])

  const handleAddToDos = (e: React.FormEvent) => {
    e.preventDefault()
    if (toDo.length > 0) {
      setAllToDos([{ id: Date.now(), todo: toDo, isDone: false }, ...allToDos])
      // empty input after submit
      setToDo('')
    }
  }

  return (
    <PageWrapper>
      <Container>
        <h1>My Todo App</h1>
        <ToDoListContainer>
          <AddToDo
            toDo={toDo}
            setToDo={setToDo}
            handleAddToDos={handleAddToDos}
          ></AddToDo>
          <ShowToDos allToDos={allToDos} setAllToDos={setAllToDos}></ShowToDos>
        </ToDoListContainer>
      </Container>
    </PageWrapper>
  )
}

export default App
