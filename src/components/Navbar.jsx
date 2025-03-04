import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/ship.avif";

const Navbar = React.memo(() => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <AppBar
      position="static"
      className="bg-white text-black shadow-none border-b border-gray-200 px-8"
    >
      <Toolbar className="flex justify-between items-center p-0">
        {/* Logo and Title */}
        <Box className="flex items-center">
          <img src={logo} alt="Seaventures Logo" className="h-12 mr-4" />
          <Typography variant="body1" className="text-gray-600 font-medium">
            Easy Ship Booking
          </Typography>
        </Box>

        {/* Navigation Links */}
        {isMobile ? (
          <IconButton aria-label="menu" color="inherit">
            <MenuIcon />
          </IconButton>
        ) : (
          <Box className="flex items-center gap-4">
            {[
              "Home",
              "Transaction",
              "Latest Offers",
              "Contact Us",
              "ID",
              "EN",
            ].map((item) => (
              <Button
                key={item}
                className="text-black text-base font-medium px-4 hover:bg-transparent hover:underline"
              >
                {item}
              </Button>
            ))}
            <Button className="bg-black text-white border border-black rounded-md text-base font-medium px-6 py-2 hover:bg-gray-800">
              Sign In
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default Navbar;
