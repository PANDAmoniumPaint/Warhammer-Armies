import { Routes, Route } from "react-router-dom";
import "./App.css";
import SubmitArmy from "./pages/SubmitArmy";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./store/userAuthContext";
import React from "react";

// UserAuthContextProvider holds state for the entire app
// Routes wraps all individual page routes for react-router-dom
// Individual Routes can be wrapped in the ProtectedRoute component to require authentication
  // Routes include a route path (url)
  // Routes include an element (Page)

function App() {
  return (
    <React.Fragment>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/submit"
            element={ 
              <ProtectedRoute>
                <SubmitArmy />
              </ProtectedRoute>
            }/>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </React.Fragment>
  );
}

export default App;
