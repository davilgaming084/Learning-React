import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Component/Card'
import Theme_Context
  from './Contexts/Theme_Context'
function App() {
  const [themeMode, setthemeMode] = useState("light")
  const darkTheme = () => {
    setthemeMode('dark')
  }
  const whiteTheme = () => {
    setthemeMode('light')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <Theme_Context.Provider value={{ themeMode, darkTheme, whiteTheme }}>
      <Card />
    </Theme_Context.Provider>
  )
}

export default App
