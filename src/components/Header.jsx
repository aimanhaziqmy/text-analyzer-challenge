import React from 'react'
import { Link } from 'react-router'
import './header.css'

function Header() {
  return (
  <header className="header">
    <h1>Text Analyzer Challenge</h1>
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
  )
}

export default Header
