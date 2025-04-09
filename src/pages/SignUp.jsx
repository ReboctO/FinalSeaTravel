// src/pages/SignUp.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, TextField, Typography, Snackbar, Alert } from "@mui/material";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        contactNumber: "",
        address: ""
    });
    const [errors, setErrors] = useState({});
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
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
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required";
        if (!formData.address) newErrors.address = "Address is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            const response = await fetch("http://localhost:5000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                    contactNumber: formData.contactNumber,
                    address: formData.address
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Signup failed");
            }

            setOpenSuccess(true);
            setTimeout(() => navigate("/signin"), 2000);
        } catch (error) {
            setErrorMessage(error.message);
            setOpenError(true);
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: 'url("/images/BG.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
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
                    maxWidth: "450px",
                    margin: 2,
                    backdropFilter: "blur(5px)",
                }}
            >
                <Typography variant="h5" fontWeight="bold" color="white" textAlign="center">
                    Create Account
                </Typography>
                
                <Typography variant="body2" color="white" sx={{ mt: 1, textAlign: "center" }}>
                    Already have an account?{" "}
                    <Link to="/signin" style={{ color: "#FFC107", textDecoration: "underline" }}>
                        Sign in
                    </Link>
                </Typography>

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

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
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
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.23)" },
                                    "&:hover fieldset": { borderColor: "white" },
                                }
                            }}
                        />
                    </Box>

                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
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

                    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
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
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            InputLabelProps={{ style: { color: "white" } }}
                            InputProps={{ style: { color: "white" } }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.23)" },
                                    "&:hover fieldset": { borderColor: "white" },
                                }
                            }}
                        />
                    </Box>

                    <TextField
                        fullWidth
                        label="Contact Number"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        error={!!errors.contactNumber}
                        helperText={errors.contactNumber}
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
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        error={!!errors.address}
                        helperText={errors.address}
                        margin="normal"
                        multiline
                        rows={3}
                        InputLabelProps={{ style: { color: "white" } }}
                        InputProps={{ style: { color: "white" } }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "rgba(255, 255, 255, 0.23)" },
                                "&:hover fieldset": { borderColor: "white" },
                            }
                        }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        sx={{ 
                            backgroundColor: "#FFC107", 
                            color: "black", 
                            mt: 3,
                            py: 1.5,
                            "&:hover": { backgroundColor: "#FFD700" }
                        }}
                    >
                        Sign Up
                    </Button>
                </Box>

                <Typography variant="caption" color="white" sx={{ mt: 3, display: "block", textAlign: "center" }}>
                    © 2018-2023 PT. Seaventures Indonesia. All Rights Reserved
                </Typography>
            </Box>

            {/* Success Notification */}
            <Snackbar
                open={openSuccess}
                autoHideDuration={3000}
                onClose={() => setOpenSuccess(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={() => setOpenSuccess(false)} severity="success" sx={{ width: "100%" }}>
                    Sign Up Successful! Redirecting to login...
                </Alert>
            </Snackbar>

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

export default SignUp;