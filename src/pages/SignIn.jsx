import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signin", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      alert("Login successful");
      navigate("/dashboard"); // Redirect user to dashboard
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: 'url("src/images/BG.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: "350px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="white">
          Sign In
        </Typography>
        <Typography variant="body2" color="white" sx={{ mt: 1 }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "white", textDecoration: "underline" }}>
            Sign up now
          </Link>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
          <Button variant="contained" sx={{ backgroundColor: "#1877F2", color: "white" }}>
            <FacebookIcon sx={{ mr: 1 }} /> Facebook
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#DB4437", color: "white" }}>
            <GoogleIcon sx={{ mr: 1 }} /> Google
          </Button>
        </Box>

        {/* Form */}
        <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography align="right" sx={{ mt: 1 }}>
            <Link to="/forgot-password" style={{ color: "white", textDecoration: "underline" }}>
              Forgot your password?
            </Link>
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#FFC107", color: "black", mt: 2 }}
          >
            Sign In
          </Button>
        </Box>

        <Typography variant="caption" color="white" sx={{ mt: 3, display: "block" }}>
          © 2018-2023 PT. Seaventures Indonesia. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default SignIn;
