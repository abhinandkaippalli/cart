import React from 'react'
import HomePage from './pages/HomePage'
import Books from './pages/Books'
import Electronics from './pages/Electronics'
import Kids from './pages/Kids'
import Sports from './pages/Sports'
import Cartlist from './pages/Cartlist'
import ProductSelect from './pages/ProductSelect'
import { Route, Routes } from 'react-router-dom'

function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='electronics' element={<Electronics />} />
            <Route path='books' element={<Books />} />
            <Route path='sports' element={<Sports />} />
            <Route path='kids' element={<Kids />} />
            <Route path='/select/:pId' element={<ProductSelect />} />
            <Route path='cartlist' element={<Cartlist />} />
        </Routes>
    </div>
  )
}

export default MainRouter