import React from 'react'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header/Header'

const Root_layout = () => {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer/>
    </>
    
  )
}

export default Root_layout