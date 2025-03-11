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
  InputAdornment,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", px: 3 }}
        >
          {/* Logo */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
            component={Link}
            to="/"
          >
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
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            <Button
              sx={{ color: "black", fontSize: "12px" }}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              sx={{ color: "black", fontSize: "12px" }}
              component={Link}
              to="/transaction"
            >
              Transaction
            </Button>
            <Button
              sx={{ color: "black", fontSize: "12px" }}
              component={Link}
              to="/latestOffers"
            >
              Latest Offers
            </Button>
            <Button
              sx={{ color: "black", fontSize: "12px" }}
              component={Link}
              to="/contactUs"
            >
              Contact Us
            </Button>
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
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          {[
            "Home",
            "Transaction",
            "Latest Offers",
            "Contact Us",
            "ID",
            "EN",
            "Sign In",
          ].map((text) => (
            <ListItem button key={text} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
