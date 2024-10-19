import React, { Fragment } from 'react'
import Inputdiv from "./Component/Inputdiv"
import { useState } from 'react'
import useCustomHook_as_currency_api from './Component/CustomHook_as_currency_api'
const App = () => {
  const [AMOUNT, setAMOUNT] = useState("")
  const [FROM, setFROM] = useState("usd")
  const [TO, setTO] = useState("inr")
  const [FInalREsult, setFInalREsult] = useState("")
 
  let api = useCustomHook_as_currency_api(FROM)
  let OPTIONS = Object.keys(api)
  const convert = () => {
    if (AMOUNT && api[TO] !== undefined) { // api[TO] !== undefind => checking api[to] not duble equal indefind => api[to] not be undefind 
      setFInalREsult(AMOUNT * api[TO]);
    } else {
      setFInalREsult("please enter a valid value");
    }
  };
  

  return (<>
    <div className='bg-black h-screen'>
      <div>
        <form action="" onSubmit={(E) => E.preventDefault()}>

          <Inputdiv LABLE={"From"} AMOUNT={AMOUNT} SET_ON_AMOUNT_CHNAGE={(e) => { setAMOUNT(e) }} SELECT_CURRENCY={OPTIONS} DEFAULT_SELECT_VALUE={FROM} SET_ON_DEFAULT_SELECT_VALUE={(e) => setFROM(e)} />
          <Inputdiv LABLE={"To"} AMOUNT={FInalREsult} READONLY={"TRUE"} SELECT_CURRENCY={OPTIONS} DEFAULT_SELECT_VALUE={TO} SET_ON_DEFAULT_SELECT_VALUE={(e) => setTO(e)} />
          <button onClick={convert} className='text-white border border-lime-700'>Convert </button>
        </form>
      </div>
      {/* <p className='text-white' >{AMOUNT} from - {FROM} </p> */}
      {/* <p className='text-white' >from - {TO}</p> */}

      <p className='text-white'>Result - {FInalREsult}</p>
    </div>

  </>
  )
}

export default App