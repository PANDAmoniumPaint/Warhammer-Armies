import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../store/userAuthContext";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  // Check useUserAuth for authentication status and access logout function
  const { logOut, isLoggedIn } = useUserAuth();

  // Set up navigate with useNavigate from react-router-dom
  const navigate = useNavigate();

  // Async logout function, redirects to root route (login page)
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message); //Catch and console.log any errors
    }
  };

  return (
    // ToDo: Set View Armies as a Link after it's set up
    // ToDo: Check login status to toggle shown/hidden buttons
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.title}>
          Warhammer Armies
        </div>
        <div>
          <button className={styles.button}>View Armies</button>

          {isLoggedIn && (
            <Link className={styles.button} to="/Submit">
              Submit Army
            </Link>
          )}

          {isLoggedIn && (
            <button className={styles.button} onClick={handleLogout}>
              Log Out
            </button>
          )}

          {!isLoggedIn && (
            <Link className={styles.button} to="Login">
              Log In
            </Link>
          )}
        </div>
      </header>
    </React.Fragment>
  );
};

export default MainHeader;
