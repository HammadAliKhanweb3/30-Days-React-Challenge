import { useState } from 'react'
import Password from './Password'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Password/>
    </>
  )
}

export default App
