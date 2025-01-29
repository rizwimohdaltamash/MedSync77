// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import locationFinderImage from '../images/vax.png'; 

// const VRmain = () => {
//   return (
//     <div style={{display: 'flex',alignItems: 'center',}}>
//     <div style={{
//     display: 'flex',
//     // justifyContent: 'center',
//     alignItems: 'center',
//     height: '85vh', // This makes the div take the full height of the viewport
//     paddingLeft: '10%', 
    
//   }}>
//  <Card style={{ width: '22rem' }}>
//   <Card.Img variant="top" src={locationFinderImage} style={{ width: '100%', height: 'auto',padding:"5%",backgroundColor:"#e3f2fd",borderRadius:"7px" }} />
//   <Card.Body>
//     <Card.Title>Vaccine Reminder</Card.Title>
//     <Card.Text>
//      "One Dose at a Time",From personalized schedules to informative insights, empowering individuals to take charge of their health with confidence and clarity.
//     </Card.Text>
//   </Card.Body>
 
 
// </Card>
// </div>


//   <div style={{paddingLeft:"12%"}}>
//     <h2>Introducing to you <span style={{color:"darkblue"}}>VaxTrack3000</span></h2>
//     <p> With its elegant design and comprehensive approach, VaxTrack3000 transcends mere <br />reminders,offering a holistic solution to vaccination management.  </p>
    
//     <Button style={{background:"darkblue"}} href="/vreminder">Click Me</Button>
//   </div>
  
  

  
//      </div>

//   )
// }

// export default VRmain

import React from "react";
import locationFinderImage from "../images/vax.png";

const VRmain = () => {
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
              Vaccine Reminder
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.5",
                marginTop: "8px",
              }}
            >
              "One Dose at a Time," From personalized schedules to informative
              insights, empowering individuals to take charge of their health
              with confidence and clarity.
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div style={{ paddingLeft: "12%" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>
            Introducing to you{" "}
            <span style={{ color: "darkblue" }}>VaxTrack3000</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.6",
              marginTop: "8px",
            }}
          >
            With its elegant design and comprehensive approach, VaxTrack3000
            transcends mere
            <br />
            reminders, offering a holistic solution to vaccination management.
          </p>
          <a
            href="/vreminder"
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

export default VRmain;
