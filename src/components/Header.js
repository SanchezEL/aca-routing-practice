import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <p>this is the header</p>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/bio">Bio</Link>
      <Link to="/secret">Secret</Link>
    </ul>
    
  </div>
)

export default Header