import React from "react";
import { Box, Typography, Stack, Link, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
<<<<<<< HEAD
        backgroundColor: "#505A5B",
        py: 4,
        px: 2,
        color: "white", // Ensure all text is white
=======
        backgroundColor: "white",
        py: 4,
        px: 2,
        borderTop: "4px solid #003366",
>>>>>>> 674093177fd36da428e70274671d35bf2cccaebc
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 3, md: 5 }}
      >
        {/* Company Address */}
        <Stack spacing={1} textAlign={{ xs: "center", md: "left" }}>
<<<<<<< HEAD
          <Typography variant="body2" fontWeight="bold" color="white">
            SEATRAVELS HQ
          </Typography>
          <Typography variant="body2" color="white">
            132 My Street, Kingston, Cebu City 6000
=======
          <Typography variant="body2" fontWeight="bold">
            SEATRAVELS HQ
>>>>>>> 674093177fd36da428e70274671d35bf2cccaebc
          </Typography>
          <Typography variant="body2">132 My Street, Kingston, Cebu City 6000</Typography>
        </Stack>

        {/* Contact Info */}
        <Stack spacing={1} textAlign={{ xs: "center", md: "left" }}>
<<<<<<< HEAD
          <Typography variant="body2" fontWeight="bold" color="white">
            CONTACT US
          </Typography>
          <Typography variant="body2" color="white">091234567891</Typography>
          <Typography variant="body2" color="white">Seatravels@shippinglines.com</Typography>
=======
          <Typography variant="body2" fontWeight="bold">
            CONTACT US
          </Typography>
          <Typography variant="body2">091234567891</Typography>
          <Typography variant="body2">Seatravels@shippinglines.com</Typography>
>>>>>>> 674093177fd36da428e70274671d35bf2cccaebc
        </Stack>

        {/* Social Media */}
        <Stack spacing={1} textAlign="center">
<<<<<<< HEAD
          <Typography variant="body2" fontWeight="bold" color="white">
=======
          <Typography variant="body2" fontWeight="bold">
>>>>>>> 674093177fd36da428e70274671d35bf2cccaebc
            FOLLOW US
          </Typography>
          <Box display="flex" gap={2} justifyContent="center">
            <Link href="#" color="inherit">
<<<<<<< HEAD
              <InstagramIcon fontSize="medium" sx={{ color: "white" }} />
            </Link>
            <Link href="#" color="inherit">
              <TwitterIcon fontSize="medium" sx={{ color: "white" }} />
            </Link>
            <Link href="#" color="inherit">
              <FacebookIcon fontSize="medium" sx={{ color: "white" }} />
            </Link>
            <Link href="#" color="inherit">
              <YouTubeIcon fontSize="medium" sx={{ color: "white" }} />
=======
              <InstagramIcon fontSize="medium" />
            </Link>
            <Link href="#" color="inherit">
              <TwitterIcon fontSize="medium" />
            </Link>
            <Link href="#" color="inherit">
              <FacebookIcon fontSize="medium" />
            </Link>
            <Link href="#" color="inherit">
              <YouTubeIcon fontSize="medium" />
>>>>>>> 674093177fd36da428e70274671d35bf2cccaebc
            </Link>
          </Box>
        </Stack>

        {/* Logo & Tagline */}
        <Box textAlign="center">
          <img
<<<<<<< HEAD
            src="src/images/Logo.png"
=======
            src="/images/Logo.png"
>>>>>>> 674093177fd36da428e70274671d35bf2cccaebc
            alt="Seatravels Logo"
            style={{
              height: "80px",
              width: "100px",
              display: "block",
              margin: "0 auto",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "italic",
              mt: 1,
<<<<<<< HEAD
              color: "white",
=======
>>>>>>> 674093177fd36da428e70274671d35bf2cccaebc
            }}
          >
            S E A T R A V E L S
          </Typography>
        </Box>
      </Stack>

      {/* Divider & Copyright */}
<<<<<<< HEAD
      <Divider sx={{ my: 3, backgroundColor: "white" }} />
      <Box textAlign="center">
        <Typography variant="body2" color="white">
          &copy; 2025 Seatravels Cebu City. All Rights Reserved.
        </Typography>
=======
      <Divider sx={{ my: 3 }} />
      <Box textAlign="center">
        <Typography variant="body2">&copy; 2025 Seatravels Cebu City. All Rights Reserved.</Typography>
>>>>>>> 674093177fd36da428e70274671d35bf2cccaebc
      </Box>
    </Box>
  );
};

export default Footer;
