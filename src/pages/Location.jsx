// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import locationFinderImage from '../images/locationfinder.png'; 

// const Location = () => {
//   return (
//     <div style={{display: 'flex',alignItems: 'center',}}>
//         <div style={{
//         display: 'flex',
//         // justifyContent: 'center',
//         alignItems: 'center',
//         height: '85vh', // This makes the div take the full height of the viewport
//         paddingLeft: '10%', 
        
//       }}>
//      <Card style={{ width: '22rem' }}>
//       <Card.Img variant="top" src={locationFinderImage} style={{ width: '100%', height: 'auto',padding:"5%" }} />
//       <Card.Body>
//         <Card.Title>Location Tracker</Card.Title>
//         <Card.Text>
//         Discover nearby Health Care Centers with ease! Our Location Tracker utilizes cutting-edge technology to pinpoint medical facilities in your vicinity.
//         </Card.Text>
//       </Card.Body>
     
     
//     </Card>
//     </div>

   
//       <div style={{paddingLeft:"12%"}}>
//         <h2>Connecting with <span style={{color:"darkblue"}}>Healthcare Navigator</span></h2>
//         <p>Quickly identifies health care centres and clinics in your nearby location with address, <br /> you just need to type Place Hospitals.  </p>
        
//         <Button style={{background:"darkblue"}} href="/location/map">Click Me</Button>
//       </div>
      
      

      
//          </div>

  

//   )
// }

// export default Location;


import React from "react";
import locationFinderImage from "../images/locationfinder.png";

const Location= () => {
  return (
    <>
      {/* Inline CSS for hiding the card */}
      <style>
        {`
          .hide-on-mobile {
            display: block; /* Default is visible */
          }

          @media (max-width: 768px) {
            .hide-on-mobile {
              display: none; /* Hide the card on screens smaller than 768px */
            }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "85vh", // Occupies 85% of the viewport height
          paddingLeft: "10%",
          paddingRight: "10%",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Left Side Card */}
        <div
          style={{
            width: "22rem",
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            overflow: "hidden",
            marginRight: "5%",
          }}
          className="hide-on-mobile" // Add the class name
        >
          <img
            src={locationFinderImage}
            alt="Vaccine Reminder"
            style={{
              width: "100%",
              height: "auto",
              padding: "5%",
              backgroundColor: "#e3f2fd",
              borderRadius: "8px 8px 0 0",
            }}
          />
          <div style={{ padding: "16px" }}>
            <h3
              style={{ fontSize: "1.5rem", fontWeight: "600", color: "#333" }}
            >
              Location Tracker
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.5",
                marginTop: "8px",
              }}
            >
              Discover nearby Health Care Centres with ease! Our Location Tracker utilizes cutting-edge technology to pinpoint medical facilities in your vicinity.
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div style={{ paddingLeft: "12%" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>
           Connecting with 
            <span style={{ color: "darkblue" }}> Healthcare Navigator</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.6",
              marginTop: "8px",
            }}
          >
            Quickly identifies healthcare centres and clinics in your nearby location with address
            <br />
            You just need to type Place Hospitals.
          </p>
          <a
            href="/location/map"
            style={{
              display: "inline-block",
              marginTop: "16px",
              padding: "12px 24px",
              backgroundColor: "darkblue",
              color: "white",
              fontWeight: "600",
              borderRadius: "8px",
              textDecoration: "none",
              textAlign: "center",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#002d75")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "darkblue")}
          >
            Click Me
          </a>
        </div>
      </div>
    </>
  );
};


export default Location;
