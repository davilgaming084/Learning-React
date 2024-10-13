import React from 'react'
import Usestate from './Components/UseState Hook/Usestate'
import UseReducer from './Components/UseReducer Hook/UseReducer'
import UseEffect from './Components/UseEffect Hook/UseEffect'
import UseRef from './Components/UseRef hook/UseRef'
import IndianGoverment from './Components/UseContext Hook/IndianGoverment'
import Mycontext from './Components/UseContext Hook/Context/Mycontext'
import Money from './Components/UseContext Hook/Context/Money'
import UseLayout from './Components/UseLayoutEffect/UseLayout'
import USeCallback from './Components/UseCallBack hook/USeCallback'
const App = () => {
  return (
    <Money>
      {/* //  <Usestate/>
    // <UseReducer />
    // <UseEffect />
    // <UseRef /> */}
      {/* <IndianGoverment/> */}
      {/* <UseLayout /> */}
      <USeCallback />
    </Money>
  )
}

export default App