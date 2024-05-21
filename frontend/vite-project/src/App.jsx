import React from 'react'
import './App.css'
import Courses from './pages/CoursesPage/Courses'
import Element from './pages/ElementsPage/Element'
import About from './pages/AboutPage/About'
import Home from './pages/HomePage/Home'
import Main from './layout/Main'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Main/>}>
          <Route path ='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Courses' element={<Courses/>}></Route>
          <Route path='/Element' element={<Element/>}></Route>
        </Route>
        
      </Routes>
    </>
  )
}

export default App
