import React from 'react'
import { useState } from 'react'

const App = () => {
  let [username, setusername] = useState('')
  let HandleForm = (e) => {
    e.preventDefault()
    console.log(username);
  }
  return (
    <div>
      <form onSubmit={(e) => { HandleForm(e) }}>
        <input value={username} onChange={(e)=>{setusername(e.target.value)}} type="text" className='bg-white p-2 m-4 text-black' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App