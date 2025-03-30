import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginSignup.css";
import user_icon from "../Assetss/person.png";
import email_icon from "../Assetss/email.png";
import password_icon from "../Assetss/password.png";

const LoginSignup = () => {
    const navigate = useNavigate(); // Initialize navigation
    const [action, setAction] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate inputs before submitting
    const validateForm = () => {
        let newErrors = {};

        if (action === "Sign Up" && name.trim() === "") {
            newErrors.name = "Name is required";
        }

        if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email format";
        }

        if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = () => {
        if (validateForm()) {
            setLoading(true);

            // Simulating API request delay
            setTimeout(() => {
                if (action === "Sign Up") {
                    // Store user data in localStorage
                    localStorage.setItem("user", JSON.stringify({ name, email, password }));
                    alert("Signup Successful! Redirecting to dashboard...");
                    setLoading(false);
                    navigate("/dashboard"); // Redirect to Dashboard
                } else {
                    // Simulate login (compare with stored user data)
                    const storedUser = JSON.parse(localStorage.getItem("user"));

                    if (storedUser && storedUser.email === email && storedUser.password === password) {
                        alert("Login Successful! Redirecting to dashboard...");
                        setLoading(false);
                        navigate("/dashboard"); // Redirect to Dashboard
                    } else {
                        alert("Invalid email or password!");
                        setLoading(false);
                    }
                }
            }, 1500);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={user_icon} alt="User Icon" />
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                )}
                {errors.name && <span className="error">{errors.name}</span>}

                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {errors.email && <span className="error">{errors.email}</span>}

                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {errors.password && <span className="error">{errors.password}</span>}
            </div>

            {action === "Login" && (
                <div className="forgot-password">
                    Lost Password? <span>Click Here!</span>
                </div>
            )}

            <div className="switch-auth">
                {action === "Sign Up" ? (
                    <p>
                        Already have an account?{" "}
                        <span className="auth-link" onClick={() => setAction("Login")}>
                            Login
                        </span>
                    </p>
                ) : (
                    <p>
                        Don't have an account?{" "}
                        <span className="auth-link" onClick={() => setAction("Sign Up")}>
                            Sign Up
                        </span>
                    </p>
                )}
            </div>

            <button
                className="submit-button"
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? "Processing..." : action}
            </button>

            {loading && <div className="loader"></div>}
        </div>
    );
};

export default LoginSignup;
