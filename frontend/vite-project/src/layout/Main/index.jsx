import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'

const Main = () => {
  return (
<>
<Navbar/>
<Outlet/>
<Footer/>
</>  )
}

export default Main