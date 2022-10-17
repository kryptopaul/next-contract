import React from 'react';
import './App.css';
import { Container, Input, Button, Title } from '@mantine/core'
import { Results } from './Results';

function App() {
  return (
    <Container>
        <Title order={1}>Future contract addresses</Title>
        <Input placeholder="Address" />
        <Button>Submit</Button>
        <Results />
    </Container>
  );
}

export default App;
