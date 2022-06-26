import React from 'react';
import './App.css';
import styled from 'styled-components'

const PageWrapper = styled.div`
 background-color: rgba(238, 245, 255, 1);
 width: 100%;
 height: 100vh;
 display: flex;
 
`
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
function App() {
  return (
    <PageWrapper>
      <Container>
        hej my to do lsist app
      </Container>
    </PageWrapper>
  );
}

export default App;
