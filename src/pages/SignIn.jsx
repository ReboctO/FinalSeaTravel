// src/pages/SignIn.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, TextField, Typography, Snackbar, Alert } from "@mui/material";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [openError, setOpenError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Sign in failed");
            }

            // Store user data in localStorage or context
            localStorage.setItem("user", JSON.stringify(data.user));
            
            // Redirect to home page
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
            setOpenError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: 'url("src/images/BG.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: 4,
            }}
        >
            <Box
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: { xs: 3, sm: 4 },
                    borderRadius: 2,
                    boxShadow: 3,
                    width: "100%",
                    maxWidth: "400px",
                    margin: 2,
                    backdropFilter: "blur(5px)",
                }}
            >
                <Typography variant="h5" fontWeight="bold" color="white" textAlign="center">
                    Sign In
                </Typography>
                
                <Typography variant="body2" color="white" sx={{ mt: 1, textAlign: "center" }}>
                    Don't have an account?{" "}
                    <Link to="/signup" style={{ color: "#FFC107", textDecoration: "underline" }}>
                        Sign up now
                    </Link>
                </Typography>

                {/* Social Login Buttons */}
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
                    <Button 
                        variant="contained" 
                        sx={{ 
                            backgroundColor: "#1877F2", 
                            color: "white",
                            flex: 1,
                            textTransform: "none"
                        }}
                    >
                        <FacebookIcon sx={{ mr: 1 }} /> Facebook
                    </Button>
                    <Button 
                        variant="contained" 
                        sx={{ 
                            backgroundColor: "#DB4437", 
                            color: "white",
                            flex: 1,
                            textTransform: "none"
                        }}
                    >
                        <GoogleIcon sx={{ mr: 1 }} /> Google
                    </Button>
                </Box>

                <Typography variant="body2" color="white" textAlign="center" sx={{ mt: 2, mb: 1 }}>
                    — OR —
                </Typography>

                {/* Sign In Form */}
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        margin="normal"
                        InputLabelProps={{ style: { color: "white" } }}
                        InputProps={{ style: { color: "white" } }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.23)" },
                                "&:hover fieldset": { borderColor: "white" },
                            }
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                        margin="normal"
                        InputLabelProps={{ style: { color: "white" } }}
                        InputProps={{ style: { color: "white" } }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.23)" },
                                "&:hover fieldset": { borderColor: "white" },
                            }
                        }}
                    />
                    <Typography align="right" sx={{ mt: 1 }}>
                        <Link to="/forgot-password" style={{ color: "#FFC107", textDecoration: "underline" }}>
                            Forgot your password?
                        </Link>
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        disabled={isLoading}
                        sx={{ 
                            backgroundColor: "#FFC107", 
                            color: "black", 
                            mt: 3,
                            py: 1.5,
                            "&:hover": { backgroundColor: "#FFD700" },
                            "&:disabled": { backgroundColor: "#cccccc" }
                        }}
                    >
                        {isLoading ? "Signing In..." : "SIGN IN"}
                    </Button>
                </Box>

                <Typography variant="caption" color="white" sx={{ mt: 3, display: "block", textAlign: "center" }}>
                    © 2025.SeaTravels Cebu.All Rights Reserved
                </Typography>
            </Box>

            {/* Error Notification */}
            <Snackbar
                open={openError}
                autoHideDuration={6000}
                onClose={() => setOpenError(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={() => setOpenError(false)} severity="error" sx={{ width: "100%" }}>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default SignIn;