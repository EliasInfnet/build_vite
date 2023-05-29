import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mantine/core'
import { getData } from './utils/dataClient'

function App() {

  return (
    <>
      <Button onClick={getData}>Click</Button>
    </>
  )
}

export default App
