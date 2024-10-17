import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [Range, setRange] = useState(8)
  const [Numberallowd, setNumberallowd] = useState(false)
  const [CharactorAllow, setCharactorAllow] = useState(false)
  const [Password, setPassword] = useState("wefw")

  let passwordGenrator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (Numberallowd) str += "0123456789"
    if (CharactorAllow) str += "~!@#$%^&*()_-?/\|"
    for (let index = 0; index < Range; index++) {
      let randomNumber = Math.floor(Math.random() * str.length)
      pass += str.charAt(randomNumber)
    }
    setPassword(pass)
  }, [Range, Numberallowd, CharactorAllow])

  useEffect(() => {
    passwordGenrator()
  }, [Range, Numberallowd, CharactorAllow])
  return (
    <>
      <h1 className='text-4xl text-center'>Password Genrator </h1><br />
      <input type="text" className='text-4xl text-center text-black' value={Password} readOnly />
      <button className='text-4xl text-center'>Copy</button><br />
      <input type="range" value={Range} min={8} max={100} onChange={(e) => { setRange(e.target.value) }} /> <label htmlFor="">Length {Range} </label>   <br />
      <input type="checkbox" value={Numberallowd} onChange={() => { setNumberallowd((prev) => !prev) }} /> <label htmlFor="">Number</label><br />
      <input type="checkbox" value={CharactorAllow} onChange={() => { setCharactorAllow((prev) => !prev) }} /> <label htmlFor="">Charactor</label>
      <p>{Numberallowd ? "true" : "false"}</p>
      <p>{CharactorAllow ? "true" : "false"}</p>
    </>
  )
}

export default App
