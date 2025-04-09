import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#003366",
          color: "white",
          boxShadow: "none",
          top: 0,
          zIndex: 1100,
          width: "100%",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
          {/* Logo */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
            component={Link}
            to="/"
          >
            <img
              src="src/images/Logo.png"
              alt="Ship Logo"
              style={{
                height: "80px",
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
                color: "white",
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
            <Button sx={{ color: "white", fontSize: "12px" }} component={Link} to="/">
              Home
            </Button>
            <Button sx={{ color: "white", fontSize: "12px" }} component={Link} to="/transaction">
              Transaction
            </Button>
            <Button sx={{ color: "white", fontSize: "12px" }} component={Link} to="/latestOffers">
              Latest Offers
            </Button>
            <Button sx={{ color: "white", fontSize: "12px" }} component={Link} to="/contactUs">
              Contact Us
            </Button>
            <span style={{ color: "white" }}>|</span>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                fontSize: "12px",
                "&:hover": { borderColor: "#CCC", color: "#CCC" },
              }}
              component={Link}
              to="/SignIn"
            >
              Sign In
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacer to prevent content from hiding under navbar */}
      <Box sx={{ height: "80px" }} />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ ".MuiDrawer-paper": { backgroundColor: "#003366" } }}
      >
        <List>
          {["Home", "Transaction", "Latest Offers", "Contact Us", "ID", "EN", "Sign In"].map(
            (text) => (
              <ListItem button key={text} onClick={() => setDrawerOpen(false)}>
                <ListItemText
                  primary={text}
                  sx={{ color: "white", textAlign: "center" }}
                />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </>
  );
}
