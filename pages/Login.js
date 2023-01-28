import React, { useState } from "react";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../store/userAuthContext";
import MainHeader from "../components/MainHeader";

const Login = () => {
  // Email, Password, Error States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // Pull logIn function from userAuthContext's useUserAuth
  const { logIn } = useUserAuth();
  // Prep navigate from react-router-dom
  const navigate = useNavigate();

  // Handle logIn submission (async)
  const handleSubmit = async (event) => {
    // Prevent the page from reloading
    event.preventDefault();
    // Prep an error variable
    setError("");
    // Try logIn function with email, password values
    try {
      await logIn(email, password);
      // If logIn is successful, navigate to "Home"
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
            <h2>Warhammer Armies Login</h2>
            {error && <p>Login failed</p>}
            <form className="form-control" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  type="email"
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
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <button type="submit">Log In</button>
            </form>
          </div>
          <hr />
          {/* <div>
            <button>Google</button>
          </div> */}
          <div>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </Card>
      </main>
    </React.Fragment>
  );
};

export default Login;
