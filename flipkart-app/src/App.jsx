import React from 'react'
import { useState, useEffect } from 'react'
import Obito from './Componenets/obito'
import ProductApi from './Componenets/ProductApi'
const App = () => {
  let soneobj = {
    user: "satish", age: "20"
  }

  return (
    <>

      <ProductApi index="0" />
      <ProductApi index="1" />
      <ProductApi index="2" />
      <ProductApi index="3" />
      <ProductApi index="4" />
      <ProductApi index="5" />
      <ProductApi index="5" />
      <ProductApi index="7" />
      <ProductApi index="8" />
      <ProductApi index="9" />
      <ProductApi index="10" />
      <ProductApi index="11" />
    </>
  )
}

export default App