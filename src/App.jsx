import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import VendingMachine from './VendingMachine'
import Cookies from './Cookies'
import Chips from './Chips'
import Soda from './Soda'


function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/cookies' element={<Cookies/>}></Route>
          <Route path='/chips' element={<Chips/>}></Route>
          <Route path='/soda' element={<Soda/>}></Route>
          <Route path='/' element={<VendingMachine/>}></Route>
          <Route path='*' element={<Navigate to='/'/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
