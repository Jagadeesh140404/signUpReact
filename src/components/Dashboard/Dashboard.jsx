import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    // Logout Function
    const handleLogout = () => {
        localStorage.removeItem("user"); // Clear user data
        navigate("/login"); // Redirect to Login
    };

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Welcome to the Dashboard! 🎉</h1>
            <p>You have successfully logged in.</p>
            <button onClick={handleLogout} style={{
                padding: "10px 20px", background: "red", color: "white",
                border: "none", cursor: "pointer", borderRadius: "5px"
            }}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
