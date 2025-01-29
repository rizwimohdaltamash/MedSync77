// import React, { useState } from "react";
// import locationFinderImage from '../images/contact.png'; 


// const Contact = () => {
//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     address: "",
//     message: "",
//   });

//   let name, value;
//   const postUserData = (event) => {
//     name = event.target.name;
//     value = event.target.value;

//     setUserData({ ...userData, [name]: value });
//   };

//   // connect with firebase
//   const submitData = async (event) => {
//     event.preventDefault();
//     const { firstName, lastName, phone, email, address, message } = userData;

//     if (firstName && lastName && phone && email && address && message) {
//       const res = fetch(
//         "https://contactform-ad31c-default-rtdb.firebaseio.com/userDataRecords.json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             firstName,
//             lastName,
//             phone,
//             email,
//             address,
//             message,
//           }),
//         }
//       );

//       if (res) {
//         setUserData({
//           firstName: "",
//           lastName: "",
//           phone: "",
//           email: "",
//           address: "",
//           message: "",
//         });
//         alert("Data Stored");
//       } else {
//         alert("plz fill the data");
//       }
//     } else {
//       alert("plz fill the data");
//     }
//   };

//   return (
//     <>
//       <section className="contactus-section " style={{display:"flex",alignItems:"center",minHeight:"100vh"}}>
//         <div className="container">
//           <div className="row">
//             <div className="col-12 col-lg-10 mx-auto">
//               <div className="row">
//                 <div className="contact-leftside col-12 col-lg-5">
//                   <h1 className="main-heading fw-bold" >
//                     <span style={{color:"#424244"}}>Get in Touch with Our</span>
                  
//                   <span style={{color:'#001c5e'}}> Medical Experts</span>
//                   </h1>
//                   <p className="main-hero-para">
//                   We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
//                   </p>
//                   <figure>
//                     <img
//                       src={locationFinderImage}
//                       alt="contatUsImg"
//                       className="img-fluid"
//                     />
//                   </figure>
//                 </div>

//                 {/* right side contact form  */}
//                 <div className="contact-rightside col-12 col-lg-7">
//                   <form method="POST">
//                     <div className="row">
//                       <div className="col-12 col-lg-6 contact-input-feild mb-5">
//                         <input
//                           type="text"
//                           name="firstName"
//                           id=""
//                           className="form-control"
//                           placeholder="First Name"
//                           value={userData.firstName}
//                           onChange={postUserData}
//                         />
//                       </div>
//                       <div className="col-12 col-lg-6 contact-input-feild mb-5">
//                         <input
//                           type="text"
//                           name="lastName"
//                           id=""
//                           className="form-control"
//                           placeholder="Last Name"
//                           value={userData.lastName}
//                           onChange={postUserData}
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-12 col-lg-6 contact-input-feild mb-5">
//                         <input
//                           type="text"
//                           name="phone"
//                           id=""
//                           className="form-control"
//                           placeholder="Phone Number "
//                           value={userData.phone}
//                           onChange={postUserData}
//                         />
//                       </div>
//                       <div className="col-12 col-lg-6 contact-input-feild mb-5">
//                         <input
//                           type="text"
//                           name="email"
//                           id=""
//                           className="form-control"
//                           placeholder="Email ID"
//                           value={userData.email}
//                           onChange={postUserData}
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-12 contact-input-feild mb-5">
//                         <input
//                           type="text"
//                           name="address"
//                           id=""
//                           className="form-control"
//                           placeholder="Add Address"
//                           value={userData.address}
//                           onChange={postUserData}
//                         />
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-12 mb-4">
//                         <input
//                           type="text"
//                           name="message"
//                           id=""
//                           className="form-control"
//                           placeholder="Enter Your Message"
//                           value={userData.message}
//                           onChange={postUserData}
//                         />
//                       </div>
//                     </div>
//                     <div class="form-check form-checkbox-style ">
//                       <input
//                         class="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="flexCheckChecked"
//                       />
//                       <label
//                         class="form-check-label"
//                         className="main-hero-para">
//                         I agree that the Medsync members   may contact me at the
//                         email address or phone number above
//                       </label>
//                     </div>

//                     <button
//                       style={{backgroundColor:'#021753',color:"whitesmoke"}}
//                       type="submit"
//                       className="btn btn-style w-100"
//                       onClick={submitData}>
//                       Submit
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import locationFinderImage from '../images/contact.png';

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // Connect with Firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://contactform-ad31c-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("Please fill in the data");
      }
    } else {
      alert("Please fill in the data");
    }
  };

  const styles = {
    section: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f4f4",
      padding: "20px",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "100%",
      maxWidth: "1200px",
    },
    leftSide: {
      flex: 1,
      padding: "20px",
      maxWidth: "50%",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#424244",
    },
    subheading: {
      color: "#001c5e",
    },
    paragraph: {
      fontSize: "1rem",
      marginBottom: "20px",
    },
    image: {
      width: "100%",
      maxWidth: "400px",
      borderRadius: "8px",
    },
    form: {
      flex: 1,
      padding: "20px",
      borderRadius: "8px",
      
      maxWidth: "50%",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    checkboxLabel: {
      fontSize: "0.9rem",
      marginLeft: "8px",
    },
    button: {
      padding: "12px",
      backgroundColor: "#021753",
      color: "whitesmoke",
      fontSize: "1rem",
      fontWeight: "600",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      width: "100%",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#003366",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left Side */}
        <div style={styles.leftSide}>
          <h1 style={styles.heading}>
            <span style={styles.subheading}>Get in Touch with Our</span>
            <br />
            <span style={{ color: "#001c5e" }}>Medical Experts</span>
          </h1>
          <p style={styles.paragraph}>
            We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
          </p>
          <figure>
            <img
              src={locationFinderImage}
              alt="Contact Us"
              style={styles.image}
            />
          </figure>
        </div>

        {/* Right Side Contact Form */}
        <div style={styles.form}>
          <form method="POST">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={userData.firstName}
                onChange={postUserData}
                style={styles.input}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={userData.lastName}
                onChange={postUserData}
                style={styles.input}
              />
            </div>

            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={userData.phone}
                onChange={postUserData}
                style={styles.input}
              />
              <input
                type="text"
                name="email"
                placeholder="Email ID"
                value={userData.email}
                onChange={postUserData}
                style={styles.input}
              />
            </div>

            <div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={userData.address}
                onChange={postUserData}
                style={styles.input}
              />
            </div>

            <div>
              <input
                type="text"
                name="message"
                placeholder="Enter Your Message"
                value={userData.message}
                onChange={postUserData}
                style={styles.input}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="flexCheckChecked" />
              <label style={styles.checkboxLabel}>
                I agree that the Medsync members may contact me at the email
                address or phone number above.
              </label>
            </div>

            <button
              type="submit"
              style={styles.button}
              onClick={submitData}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
