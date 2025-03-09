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
        backgroundColor: "white",
        py: 4,
        px: 2,
        borderTop: "4px solid #003366",
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
          <Typography variant="body2" fontWeight="bold">
            SEATRAVELS HQ
          </Typography>
          <Typography variant="body2">132 My Street, Kingston, Cebu City 6000</Typography>
        </Stack>

        {/* Contact Info */}
        <Stack spacing={1} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body2" fontWeight="bold">
            CONTACT US
          </Typography>
          <Typography variant="body2">091234567891</Typography>
          <Typography variant="body2">Seatravels@shippinglines.com</Typography>
        </Stack>

        {/* Social Media */}
        <Stack spacing={1} textAlign="center">
          <Typography variant="body2" fontWeight="bold">
            FOLLOW US
          </Typography>
          <Box display="flex" gap={2} justifyContent="center">
            <Link href="#" color="inherit">
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
            </Link>
          </Box>
        </Stack>

        {/* Logo & Tagline */}
        <Box textAlign="center">
          <img
            src="/images/Logo.png"
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
            }}
          >
            S E A T R A V E L S
          </Typography>
        </Box>
      </Stack>

      {/* Divider & Copyright */}
      <Divider sx={{ my: 3 }} />
      <Box textAlign="center">
        <Typography variant="body2">&copy; 2025 Seatravels Cebu City. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
