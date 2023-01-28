import React, { useState } from "react";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../store/userAuthContext";
import MainHeader from "../components/MainHeader";

const Signup = () => {
  // Email, Password, Error States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // Pull signUp function from userAuthContext's useUserAuth
  const { signUp } = useUserAuth();
  // Prep navigate from react-router-dom
  let navigate = useNavigate();

  // Handle signUp submission (async)
  const handleSubmit = async (event) => {
    // Prevent the page from reloading
    event.preventDefault();
    // Prep an error variable
    setError("");
    // Try signUp function with email, password values
    try {
      await signUp(email, password);
      // If signUp is successful, navigate to root route "Login"
      navigate("/");
      // If unsuccessful, catch the error and display it under the h2
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Card>
          <div>
            <h2>Warhammer Armies Signup</h2>
            {error && <p>Login failed</p>}
            <form className="form-control" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <button type="submit">Sign Up</button>
            </form>
          </div>
          <div className="p-4 box mt-3 text-center">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </Card>
      </main>
    </React.Fragment>
  );
};

export default Signup;
