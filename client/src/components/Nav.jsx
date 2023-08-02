import { useEffect, useState } from "react";
import { NavLink, Navigate } from 'react-router-dom'
import './navbar.css'
import Logo from '../Assets/Logo.webp';
import { Button, Image } from '@mantine/core';
import { isLoggedIn } from "../utils/auth";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("id_token");
    setLoggedIn(Boolean(token));
  }, []);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('id_token');
    setLoggedIn(false);
    window.location.assign('/');
  };

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
            {loggedIn &&
              <>
                <li>
                  <NavLink to="/Dashboard">Dashboard</NavLink>
                </li>
              </>}
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
            {loggedIn && <li>
              <Button onClick={handleLogout}>Logout</Button>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
