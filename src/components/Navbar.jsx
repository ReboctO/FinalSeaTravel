import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  InputAdornment
} from "@mui/material";
import { Menu as MenuIcon, SwapHoriz } from "@mui/icons-material";



const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="/images/Logo.png"
              alt="Ship Logo"
              style={{
                height: "70px",
                width: "80px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontFamily: "Poppins",
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
                fontStyle: "italic",
              }}
            >
              S E A T R A V E L S
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
            <Button sx={{ color: "black", fontSize: "12px" }}>Home</Button>
            <Button sx={{ color: "black", fontSize: "12px" }}>Transaction</Button>
            <Button sx={{ color: "black", fontSize: "12px" }}>Latest Offers</Button>
            <Button sx={{ color: "black", fontSize: "12px" }}>Contact Us</Button>
            <Button sx={{ color: "black", fontSize: "12px" }}>ID</Button>
            <span>|</span>
            <Button sx={{ color: "black", fontSize: "12px" }}>EN</Button>
            <Button
              variant="outlined"
              sx={{
                color: "black",
                borderColor: "black",
                fontSize: "12px",
                "&:hover": { borderColor: "#666", color: "#666" },
              }}
            >
              Sign In
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          {["Home", "Transaction", "Latest Offers", "Contact Us", "ID", "EN", "Sign In"].map((text) => (
            <ListItem button key={text} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

const HeroSection = () => {
  const [shippingLine, setShippingLine] = useState("Blue Star Ferries");

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: 'url("/images/BG.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
            padding: "16px",
            borderRadius: "20px",
            textAlign: "center",
            color: "white", 
            maxWidth: "550px",
            margin: "auto",
            fontFamily: "Roboto, sans-serif", // Applied globally in this Box
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ fontFamily: "Roboto, sans-serif" }}>
            Find Your Trip
          </Typography>
          <Typography variant="subtitle1" mb={3} sx={{ fontFamily: "Roboto, sans-serif" }}>
            Set Your Arrival and Departure Schedule at the Port
          </Typography>

          {/* Form */}
          <Box
            sx={{
              display: "grid",
              gap: "10px",
              gridTemplateColumns: "1fr 40px 1fr",
              alignItems: "center",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <Typography gridColumn="span 3" variant="body1" fontSize="12px" textAlign="left">
              Travel Destination
            </Typography>
            <TextField
              label="Enter Origin City/Port"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
              InputLabelProps={{ sx: { color: "white" } }}
              inputProps={{ sx: { color: "white", fontFamily: "Roboto, sans-serif" } }}
            />
            <SwapHoriz sx={{ fontSize: "30px", color: "white" }} />
            
            <TextField
              label="Enter Destination City/Port"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
              InputLabelProps={{ sx: { color: "white" } }}
              inputProps={{ sx: { color: "white", fontFamily: "Roboto, sans-serif" } }}
            />

            <Typography gridColumn="span 3" variant="body1" fontSize="12px" textAlign="left">
              Departure Date
            </Typography>
            <TextField
              type="date"
              InputLabelProps={{ shrink: true, sx: { color: "white" } }}
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                gridColumn: "span 3",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
              inputProps={{ sx: { color: "white", fontFamily: "Roboto, sans-serif" } }}
            />

            <Typography gridColumn="span 3" variant="body1" fontSize="12px" textAlign="left">
              Select Shipping Lines
            </Typography>
            <Select
              value={shippingLine}
              onChange={(e) => setShippingLine(e.target.value)}
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                gridColumn: "span 3",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "5px",
                color: "white",
                fontFamily: "Roboto, sans-serif",
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
              }}
            >
              <MenuItem value="Blue Star Ferries">Blue Star Ferries</MenuItem>
              <MenuItem value="Lite Ferries">Lite Ferries</MenuItem>
              <MenuItem value="Cokaliong Shipping Lines">Cokaliong Shipping Lines</MenuItem>
              <MenuItem value="Other Shipping Line">Other Shipping Line</MenuItem>
            </Select>

            <Box sx={{ display: "flex", justifyContent: "space-between", gridColumn: "span 3" }}>
              <Box sx={{ display: "flex", alignItems:"center"}}>
                    <Typography variant="body2" mr={1} sx={{ fontFamily: "Roboto, sans-serif" }}>
                      Adults
                    <br/>
                    <Typography variant="caption" sx={{ fontSize:"10px", fontStyle:"italic", fontFamily: "Roboto, sans-serif", display: "block", color: "rgba(255,255,255,0.7)" }}>
                      Age 6 and over
                    </Typography>
                    </Typography>
                <Button variant="contained" size="small" sx={{backgroundColor:"beige", color:"black", minWidth: "30px" }}>-</Button>
                <Typography variant="body1" sx={{ margin: "0 10px", fontFamily: "Roboto, sans-serif" }}>0</Typography>
                <Button variant="contained" size="small" sx={{backgroundColor:"beige", color:"black", minWidth: "30px" }}>+</Button>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" mr={1} sx={{ fontFamily: "Roboto, sans-serif" }}>
                      Children
                    <br/>
                    <Typography variant="caption" sx={{ fontSize:"10px", fontStyle:"italic", fontFamily: "Roboto, sans-serif", display: "block", color: "rgba(255,255,255,0.7)" }}>
                     2-5 years old
                    </Typography>
                    </Typography>
                <Button variant="contained" size="small" sx={{ backgroundColor:"beige", color:"black", minWidth: "30px" }}>-</Button>
                <Typography variant="body1" sx={{ margin: "0 10px", fontFamily: "Roboto, sans-serif" }}>0</Typography>
                <Button variant="contained" size="small" sx={{ backgroundColor:"beige", color:"black", minWidth: "30px" }}>+</Button>
              </Box>
            </Box>
              
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#A2EB51",
                color: "#000",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#90D841" },
                gridColumn: "span 3",
                marginTop: "10px",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Find Your Ticket
            </Button>

            <Button
              variant="outlined"
              fullWidth
              sx={{
                color: "#fff",
                borderColor: "#A2EB51",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(162, 235, 81, 0.2)" },
                gridColumn: "span 3",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Manage My Bookings
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
};

export default HomePage;
