import React from 'react';
import './App.css';
import { Container, Input, Button, Title } from '@mantine/core'
import { Results } from './Results';
import {ethers} from 'ethers'
import {RLP} from 'ethers/lib/utils'
import { useState } from 'react'
import { getContractAddress } from "ethers/lib/utils"



function App() {

  const [displayResults, setDisplayResults] = useState('none')
  const [results, setResults] = useState<Result[]>([])

  function getFutureAddresses(address:string, nonceFrom:number, nonceTo:number){

    setResults([]);

    for (let nonce = nonceFrom; nonce <= nonceTo; nonce++){
        const contract = getContractAddress({from: address, nonce: nonce})
        setResults(prev => [...prev, {nonce: nonce, address: contract}])
        console.log(contract)
    }

    console.log(results)
    
  }

  return (
    <Container>
        <Title order={1}>Future contract addresses</Title>
        <Input placeholder="Address" />
        <Button onClick={() => [getFutureAddresses('0x10A8Fc644A4135EF9f11A56b05Ab7c5eA7888c33', 44, 50)]}>Submit</Button>
        <div className='results' style={{display: 'none'}}>
          <Results />
        </div>
    </Container>
  );
}

export default App;
