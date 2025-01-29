// import { blue } from '@mui/material/colors';
// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import navIcon from '../images/navicon.jpg'; 

// const MyNavbar = () => {
//   return (
//     <Navbar  data-bs-theme="dark" style={{backgroundColor:"#092652"}}>
//         <Container>
//         <img 
//             src={navIcon} 
//             alt="MedSync Icon" 
//             style={{ width: '30px', height: '30px', marginRight: '10px',borderRadius:"50%" }} 
//           />
//           <Navbar.Brand href="#home">MedSync</Navbar.Brand>
          
            
//           <Nav className="me-auto"></Nav>
           
         
         

//           <Nav>

//              <Nav.Link href="/">Home</Nav.Link>
//              {/* <Nav.Link href="/about">About</Nav.Link> */}
 
//              <NavDropdown title="Services" id="basic-nav-dropdown">

//               <NavDropdown.Item href="/calorie">Calorimeter</NavDropdown.Item>
//               <NavDropdown.Item href="/location">Location</NavDropdown.Item>
//               <NavDropdown.Item href="/vrmain">Vaccine Reminder</NavDropdown.Item>
//               <NavDropdown.Item href="/aibot">AI BOT</NavDropdown.Item>

//             </NavDropdown>
            
//             <Nav.Link href="/contact">Contact</Nav.Link>
//           </Nav>

//         </Container>
//       </Navbar>
//   )
// }

// export default MyNavbar;


import React, { useState } from "react";
import navIcon from '../images/navicon.jpg'; 

const MyNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const styles = {
    navbar: {
      backgroundColor: "#092652",
      color: "#ffffff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
    },
    logoImage: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    logoText: {
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none",
      color: "#ffffff",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    navLink: {
      textDecoration: "none",
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      padding: "5px 10px",
      borderRadius: "5px",
      transition: "background-color 0.3s",
    },
    navLinkHover: {
      backgroundColor: "#0b3a79",
    },
    dropdown: {
      position: "absolute",
      backgroundColor: "#0b3a79",
      color: "#ffffff",
      borderRadius: "5px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      marginTop: "10px",
    },
    dropdownItem: {
      padding: "10px",
      fontSize: "14px",
      cursor: "pointer",
      textDecoration: "none",
      color: "#ffffff",
      display: "block",
      transition: "background-color 0.3s",
    },
    dropdownItemHover: {
      backgroundColor: "#0d4a9f",
    },
    mobileMenuButton: {
      display: "none",
      cursor: "pointer",
    },
    mobileMenu: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      backgroundColor: "#0b3a79",
      padding: "10px",
    },
    "@media (max-width: 768px)": {
      navLinks: {
        display: "none",
      },
      mobileMenuButton: {
        display: "block",
      },
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <img
          src={navIcon} // Replace with your navIcon path
          alt="MedSync Icon"
          style={styles.logoImage}
        />
        <a href="/" style={styles.logoText}>
          MedSync
        </a>
      </div>

      {/* Navigation Links */}
      <div style={styles.navLinks}>
       
        <div style={{ position: "relative" }}>
          <button
            style={styles.navLink}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.navLinkHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = "")}
          >
            Services
          </button>
          {isDropdownOpen && (
            <div style={styles.dropdown}>
              <a
                href="/calorie"
                style={styles.dropdownItem}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.dropdownItemHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = "")}
              >
                Calorimeter
              </a>
              <a
                href="/location"
                style={styles.dropdownItem}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.dropdownItemHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = "")}
              >
                Location
              </a>
              <a
                href="/vrmain"
                style={styles.dropdownItem}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.dropdownItemHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = "")}
              >
                Vaccine Reminder
              </a>
              <a
                href="/aibot"
                style={styles.dropdownItem}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.dropdownItemHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = "")}
              >
                AI BOT
              </a>
            </div>
          )}
        </div>
        <a
          href="/contact"
          style={styles.navLink}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.navLinkHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = "")}
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div
        style={styles.mobileMenuButton}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <a href="/" style={styles.navLink}>
            Home
          </a>
          <a href="/calorie" style={styles.navLink}>
            Calorimeter
          </a>
          <a href="/location" style={styles.navLink}>
            Location
          </a>
          <a href="/vrmain" style={styles.navLink}>
            Vaccine Reminder
          </a>
          <a href="/aibot" style={styles.navLink}>
            AI BOT
          </a>
          <a href="/contact" style={styles.navLink}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default MyNavbar;
