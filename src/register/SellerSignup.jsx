/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

const SellerSignup = () => {
  const navigate = useNavigate();
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const userSignupFunction = async () => {
    if (!userSignup.name || !userSignup.email || !userSignup.password) {
      toast.error("All Fields are required");
      return;
    }
    try {
      const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      };
      await addDoc(collection(fireDB, "user"), user);
      localStorage.setItem("users", JSON.stringify(user));
      setUserSignup({ name: "", email: "", password: "" });
      toast.success("Signup Successfully");
      navigate("/seller");
    } catch (error) {
      console.log(error);
      toast.error("Signup Failed");
    }
  };

  return (
    <>
      <style>
        {`
          .signup-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
           background: linear-gradient(135deg, #6a11cb, #2575fc); /* Correct syntax */
          }
          .signup-form {
            background-color: #000;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            width: 80%;
            max-width: 400px;
          }
          .signup-heading {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: gray;
          }
          .input-field {
            background-color: #374151;
            color: white;
            padding: 10px;
            width: 100%;
            border-radius: 6px;
            outline: none;
            border: none;
            margin-bottom: 12px;
          }
          .input-field::placeholder {
            color: white;
          }
          .signup-button {
            background-color: darkblue;
            width: 100%;
            color: white;
            padding: 10px;
            font-weight: bold;
            border-radius: 6px;
            border: none;
            cursor: pointer;
          }
          .signup-button:hover {
            background-color: blue;
          }
          .login-text {
            text-align: center;
            color: white;
            margin-top: 10px;
          }
          .login-link {
            color:darkblue;
            font-weight: bold;
            text-decoration: none;
          }
        `}
      </style>

      <div className="signup-container">
        <div className="signup-form">
          <h2 className="signup-heading">Signup</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={userSignup.name}
            onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={userSignup.email}
            onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value })}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={userSignup.password}
            onChange={(e) => setUserSignup({ ...userSignup, password: e.target.value })}
            className="input-field"
          />
          <button type="button" onClick={userSignupFunction} className="signup-button">
            Signup
          </button>
          <div className="login-text">
            <h2>
              Have an account? <Link className="login-link" to={'/sellerlogin'}>Login</Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerSignup;
