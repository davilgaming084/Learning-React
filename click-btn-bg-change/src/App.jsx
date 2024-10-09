import React from 'react'
import { useState } from 'react'

const App = () => {
  let [color, setcolor] = useState("")
  let change = (e) => {
    console.log(e.target.value);
    setcolor(e.target.value)
  }
  return (
    <>
      <div className='h-screen ' style={{backgroundColor: color}}>

        <h1 className='text-red-500'>hi</h1>
        <div className='absolute inset-x-0 bottom-0'>
          <button onClick={change} className=" m-2 border-1 rounded-full pl-10 pr-10  bg-red-600 text-white" id="red" value="red">Red</button>
          <button onClick={change} className=" m-2 border-1 rounded-full pl-10 pr-10 bg-blue-700 text-white" id="blue" value="blue">Blue</button>
          <button onClick={change} className=" m-2 border-1 rounded-full pl-10 pr-10 bg-green-700 text-white" id="green" value="green">Green</button>
          <button onClick={change} className=" m-2 border-1 rounded-full pl-10 pr-10 bg-yellow-700 text-white" id="yellow" value="yellow">Yellow</button>
          <button onClick={change} className=" m-2 border-1 rounded-full pl-10 pr-10 bg-orange-700 text-white" id="orange" value="orange">Orange</button>
          <button onClick={change} className=" m-2 border-1 rounded-full pl-10 pr-10 bg-purple-700 text-white" id="purple" value="purple">Purple</button>
          <button onClick={change} className=" m-2 border-1 rounded-full pl-10 pr-10 bg-black text-white" id="black" value="black">Black</button>
        </div>

      </div>
    </>
  )
}

export default App