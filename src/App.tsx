import React from 'react'
import './App.css'
import styled from 'styled-components'

// components

import AddToDo from './components/AddToDo'
import ToDos from './components/ToDos'

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
function App() {
  return (
    <PageWrapper>
      <Container>
        <ToDoListContainer>
          <AddToDo></AddToDo>
          <ToDos></ToDos>
        </ToDoListContainer>
      </Container>
    </PageWrapper>
  )
}

export default App
