import React from 'react'
import { useState } from 'react'
import Inputdiv from './Component/Inputdiv'

export const App = () => {
  const [defauldAmount, setdefauldAmount] = useState(0)

  const handledefault = (newamount) => {
    setdefauldAmount(newamount)
  }
  return (
    <div className='h-screen bg-black'>

      <Inputdiv from={"From"} defauldAmount={defauldAmount} handledefaut={handledefault} />
      <Inputdiv from={`   To   `} defauldAmount={defauldAmount} />
    </div>
  )
}

export default App