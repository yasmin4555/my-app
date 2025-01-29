import React, { useState } from 'react';
import { Navbar as NavbarBs, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // Manages the dropdown menu state
  const [token, setToken] = useState(true); // Simulating token for user login state
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(false); // Simulate logout
    setShowMenu(false); // Hide the dropdown menu
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <NavbarBs sticky="top" className="bg-light shadow-sm mb-3">
      <Container>
        <NavbarBs.Brand as={Link} to="/">
          <img className="w-44 cursor-pointer" src={assets.logo} alt="Logo" width={"20%"} />
          Jomnas Clinic
        </NavbarBs.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/contact us">Contact Us</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/Doctors/:speciality">All Doctors</Nav.Link>
        </Nav>

        <div className="d-flex align-items-center gap-4">
          {token ? (
            <div className="d-flex align-items-center position-relative cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
              <img className="w-8 rounded-full" src={assets.profile} alt="Profile" style={{ width: '30px' }} />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              <img className="navbar-dropdown-icon" src={assets.arrow_icon} alt="Arrow icon" />

              {showMenu && (
                <div className="position-absolute bg-white shadow-sm p-2" style={{ top: '50px', right: '0px', zIndex: 20 }}>
                  <p onClick={() => { setShowMenu(false); navigate('/profile'); }}>My Profile</p>
                  <p onClick={() => { setShowMenu(false); navigate('/appointments'); }}>My Appointments</p>
                  <p onClick={handleLogout}>Logout</p>
                </div>
              )}
            </div>
          ) : (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </div>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
