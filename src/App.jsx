import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicial from './pages/Inicial'
import SobreBookSpot from './pages/SobreBookSpot'

const App = () => {
  return (
    <BrowserRouter>
      <h1>BookSpot - Resenhas Literárias</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre-nos" element={<SobreBookSpot />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App