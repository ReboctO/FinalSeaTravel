import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-white text-gray-800 shadow-none">
      <Toolbar className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Box className="flex items-center">
          <img
            src="/your-ship-image.png"
            alt="Ship Logo"
            className="h-10 mr-2"
          />
          <Typography variant="h6" className="font-bold">
            AVENTURES
          </Typography>
          <Typography variant="body2" className="ml-2 text-xs">
            Easy Ship Booking
          </Typography>
        </Box>

        <Box className="flex items-center space-x-4 absolute left-1/2 -translate-x-1/2">
          <Button color="inherit" className="hover:text-blue-500">
            Home
          </Button>
          <Button color="inherit" className="hover:text-blue-500">
            Transaction
          </Button>
          <Button color="inherit" className="hover:text-blue-500">
            Latest Offers
          </Button>
          <Button color="inherit" className="hover:text-blue-500">
            Contact Us
          </Button>
          <Button color="inherit" className="hover:text-blue-500 underline">
            ID
          </Button>
          <Button color="inherit" className="hover:text-blue-500 underline">
            EN
          </Button>
        </Box>

        <Button
          variant="outlined"
          className="border border-gray-400 rounded-md px-4 py-1 text-gray-800 hover:border-blue-500 hover:text-blue-500"
        >
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
