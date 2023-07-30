import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../Assets/Logo.webp';
import { Image } from '@mantine/core';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <Image maw={50} mx="auto" radius="md" src={Logo} alt="Tutorific Logo" />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Assignments">Assignments</NavLink>
            </li>
            <li>
              <NavLink to="/Attendance">Attendance</NavLink>
            </li>
            <li>
              <NavLink to="/Modules">Modules</NavLink>
            </li>
            <li>
              <NavLink to="/Dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
