import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./components/LoginSignup/LoginSignup"; // Adjust path as needed
import Dashboard from "./components/Dashboard/Dashboard";
 // A dummy page after login


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signUpReact" element={<LoginSignup  />} />
                <Route path="/login" element={<LoginSignup />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
