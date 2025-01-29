/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../firebase/Firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
  // Navigate
  const navigate = useNavigate();

  // User Login State
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  /**========================================================================
   *                          User Login Function
   *========================================================================**/
  const userLoginFunction = async () => {
    // Validation
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
      return;
    }

    try {
      const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

      try {
        const q = query(collection(fireDB, "user"), where("uid", "==", users?.user?.uid));
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");

          if (user.role === "user") {
            navigate("/generic");
          } else {
            navigate("/seller");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };

  return (
    <>
      <style>
        {`
          .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
           background: linear-gradient(135deg, #6a11cb, #2575fc); /* Correct syntax */
          }
          .login-form {
            background-color: #000; /* Black */
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            width: 80%;
            max-width: 400px;
          }
          .login-heading {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: gray; /* Orange-900 */
          }
          .input-field {
            background-color: #374151; /* Gray-700 */
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
          .login-button {
            background-color: darkblue; /* Red-900 */
            width: 100%;
            color: white;
            padding: 10px;
            font-weight: bold;
            border-radius: 6px;
            border: none;
            cursor: pointer;
          }
          .login-button:hover {
            background-color: blue; /* Red-700 */
          }
          .signup-text {
            text-align: center;
            color: white;
            margin-top: 10px;
          }
          .signup-link {
            color: darkblue; /* Red-600 */
            font-weight: bold;
            text-decoration: none;
          }
        `}
      </style>

      <div className="login-container">
        {/* Login Form */}
        <div className="login-form">
          {/* Top Heading */}
          <div className="mb-5">
            <h2 className="login-heading">Login</h2>
          </div>

          {/* Input Fields */}
          <input
            type="email"
            placeholder="Email Address"
            value={userLogin.email}
            onChange={(e) =>
              setUserLogin({
                ...userLogin,
                email: e.target.value,
              })
            }
            className="input-field"
          />

          <input
            type="password"
            placeholder="Password"
            value={userLogin.password}
            onChange={(e) =>
              setUserLogin({
                ...userLogin,
                password: e.target.value,
              })
            }
            className="input-field"
          />

          {/* Login Button */}
          <button type="button" onClick={userLoginFunction} className="login-button">
            Login
          </button>

          {/* Signup Link */}
          <div className="signup-text">
            <h2>
              Don't Have an account?{" "}
              <Link className="signup-link" to={"/signup"}>
                Signup
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
