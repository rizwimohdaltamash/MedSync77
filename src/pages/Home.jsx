import React from 'react';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)', // Gradient background
      height: '100vh', // Full viewport height
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      textAlign: 'center',
      color: '#ffffff',
      zIndex: 10,
      marginBottom: '20px',
    },
    heading: {
      fontSize: '2.5rem', // Mobile
      fontWeight: 'bold',
      marginBottom: '20px',
      '@media (min-width: 768px)': {
        fontSize: '3.5rem', // Larger screens
      },
    },
    paragraph: {
      fontSize: '1.1rem',
      marginBottom: '30px',
      maxWidth: '600px',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
    },
    button: {
      padding: '15px 30px',
      fontSize: '1rem',
      fontWeight: '600',
      backgroundColor: '#000000',
      color: '#ffffff',
      border: '2px solid #ffffff',
      borderRadius: '50px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0066ff',
      color: '#ffffff',
    },
  };

  return (
    <div style={styles.container}>
      {/* Content with Typewriter Effect */}
      <div style={styles.content}>
        <h1 style={styles.heading}>
          <Typewriter
            options={{
              strings: ['Welcome to Our Medical Care', 'Your Health, Our Priority'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p style={styles.paragraph}>
          Providing the best healthcare solutions for you and your family.
        </p>
      </div>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.color = styles.buttonHover.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.color = styles.button.color;
          }}
          onClick={() => navigate('/login')}
        >
          Generic Med.
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.color = styles.buttonHover.color;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.color = styles.button.color;
          }}
          onClick={() => navigate('/sellerlogin')}
        >
          Seller Login
        </button>
      </div>
    </div>
  );
};

export default Home;
