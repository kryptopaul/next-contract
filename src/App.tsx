import React from 'react';
import './App.css';
import { Container, Input, Button, Title, NumberInput } from '@mantine/core'
import { Results } from './Results';
import {ethers} from 'ethers'
import {isAddress} from 'ethers/lib/utils'
import { useState } from 'react'
import { getContractAddress } from "ethers/lib/utils"


// 0x10A8Fc644A4135EF9f11A56b05Ab7c5eA7888c33

function App() {

  const [address, setAddress] = useState('')
  const [fromNonce, setFromNonce] = useState<number | undefined>(0)
  const [toNonce, setToNonce] = useState<number | undefined>(0)

  const [displayResults, setDisplayResults] = useState('none')
  const [results, setResults] = useState<Result[]>([])
  

  function getFutureAddresses(address:string, nonceFrom:number | undefined , nonceTo:number | undefined){

    // Validate address
    if(!isAddress(address)){
      alert('Invalid address')
      return
    }

    // Validate Nonce

    if (typeof nonceFrom !== 'number' || typeof nonceTo !== 'number'){
      alert('Invalid nonce')
      return
    }

    if(nonceFrom > nonceTo){
      alert('Invalid nonce range')
      return
    }

    if (nonceFrom < 0 || nonceTo < 0){
      alert('Nonce cannot be negative')
      return
    }

    setResults([]);

    for (let nonce = nonceFrom; nonce <= nonceTo; nonce++){
        const contract = getContractAddress({from: address, nonce: nonce})
        setResults(prev => [...prev, {nonce: nonce, address: contract}])
        console.log(contract)
    }

    setDisplayResults('block')
    
  }

  return (
    <Container>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>  
        <Title order={1}>Future contract addresses</Title>
        <Input placeholder="Address" style={{width: '40%', marginTop: '10px', marginBottom: '10px'}} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)} />

        <div style={{display: 'flex'}}>
        <NumberInput 
          value={fromNonce} 
          onChange={(val) => setFromNonce(val)} 
          min={0}
          placeholder="From"
          label="From"
          description="Enter your next transaction nonce."
          style={{marginRight: '10px'}}
        />

        <NumberInput 
          value={toNonce} 
          onChange={(val) => setToNonce(val)} 
          min={0}
          placeholder="To"
          label="To"
          description="Enter the max transaction nonce."
          style={{marginLeft: '10px'}}
        />
        </div>

        <Button 
          onClick={() => [getFutureAddresses(address, fromNonce, toNonce)]}
          style={{marginTop: '20px', marginBottom: '10px'}}
          >Submit</Button>
        <div className='results' style={{display: displayResults}}>
          <Results arr={results} />
        </div>
        </div>
    </Container>
  );
}

export default App;
