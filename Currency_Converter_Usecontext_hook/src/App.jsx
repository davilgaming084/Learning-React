import React, { useContext } from 'react'
import Input from './Componenets/Input'
import InputContext from './Contexts/InputContext'
import { useState } from 'react'
import useCustomHook_as_currency_api from './Componenets/CustomHook_as_currency_api'
const App = () => {
  const [FromInputValue, setFromInputValue] = useState('')
  const [ValueOfFrom, setValueOfFrom] = useState('usd')
  const [ValueOfTo, setValueOfTo] = useState('inr')
  const [finalvalue, setfinalvalue] = useState('')
  let api = useCustomHook_as_currency_api(ValueOfFrom)
  const OPtions = Object.keys(api)
  const calcullation = () => {
    setfinalvalue(FromInputValue * api[ValueOfTo])
  }
  console.log(finalvalue);

  return (
    <InputContext.Provider value={{ OPtions, }} >
      <div className='h-screen  p-1' style={{
        backgroundImage: 'url("https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>


        <Input lable={"From"} FromInputValue={FromInputValue} setFromInputValue={setFromInputValue} ValueOfFrom={ValueOfFrom} setValueOfFrom={setValueOfFrom} /> <br />
        <Input lable={"To"} FromInputValue={finalvalue} setfinalvalue={setfinalvalue} ValueOfFrom={ValueOfTo} setValueOfFrom={setValueOfTo} readOnly={true} />

        <button onClick={calcullation} class="relative bg-blue-500 bg-opacity-30 dark:bg-blue-700 dark:bg-opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-filter backdrop-blur-lg border border-white dark:border-gray-800 hover:bg-opacity-50 dark:hover:bg-opacity-70 shadow-lg">
          Click Me
        </button>

      </div>
    </InputContext.Provider>
  )
}

export default App