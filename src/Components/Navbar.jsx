import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <h2>React</h2>
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Service</li>
      </ul>
      <button>LogOut</button>
    </div>
  )
}

export default Navbar