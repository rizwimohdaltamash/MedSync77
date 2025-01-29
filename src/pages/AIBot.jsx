import React from 'react'
import locationFinderImage from '../images/ai.jpg'; 


const AIBot= () => {
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
              HealthCare AI
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.5",
                marginTop: "8px",
              }}
            >
              HealthCare AI believes in empowering you with cutting-edge AI technology to manage your health effortlessly and efficiently. 
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div style={{ paddingLeft: "12%" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>
           Introducing to you
            <span style={{ color: "darkblue" }}> Cura AI</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.6",
              marginTop: "8px",
            }}
          >
            Harness the power of advanced AI to get accurate reliable health info. Receive
            <br />
            customized health plans tailored to your lifestyle and medical history.
          </p>
          <a
            href="/bot"
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

export default AIBot
