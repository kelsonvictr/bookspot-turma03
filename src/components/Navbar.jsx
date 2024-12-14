import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Inicial</Link><br/>
        <Link to="/sobre-nos">Sobre Nós</Link>
    </div>
  )
}

export default Navbar