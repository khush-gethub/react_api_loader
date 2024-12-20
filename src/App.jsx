import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Product from './pages/Product'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element= {<Home/>}/>
        <Route path="/Product" element= {<Product />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
