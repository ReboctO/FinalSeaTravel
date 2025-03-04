import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#f0f0f0", py: 4, px: 2 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        {/* Company Address */}
        <Stack spacing={1} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body2" color="text.primary" fontWeight="bold">
            PT SEAVENTURES (Persero) HQ
          </Typography>
          <Typography variant="body2" color="text.primary">
            Jl. Gajah Mada No. 14, Jakarta Pusat, 10130 DKI Jakarta, Indonesia
          </Typography>
        </Stack>

        {/* Contact Info */}
        <Stack spacing={1} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body2" color="text.primary" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.primary">
            T. 162 (Jabodetabek)
          </Typography>
          <Typography variant="body2" color="text.primary">
            F. +62 21 6385 4130
          </Typography>
          <Typography variant="body2" color="text.primary">
            E. infosea162@seaventures.co.id
          </Typography>
        </Stack>

        {/* Social Media */}
        <Stack spacing={1} alignItems={{ xs: "center", md: "flex-end" }}>
          <Typography variant="body2" color="text.primary" fontWeight="bold">
            Follow Us
          </Typography>
          <Box display="flex" gap={1}>
            <Link href="#" color="inherit">
              <InstagramIcon />
            </Link>
            <Link href="#" color="inherit">
              <TwitterIcon />
            </Link>
            <Link href="#" color="inherit">
              <FacebookIcon />
            </Link>
            <Link href="#" color="inherit">
              <YouTubeIcon />
            </Link>
          </Box>
        </Stack>
      </Stack>

      {/* Footer Bottom Section */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="text.primary">
          &copy; 2018-2023 PT. Seaventures Indonesia. All Rights Reserved
        </Typography>
      </Box>

      {/* Logo and Tagline */}
      <Box mt={2} textAlign="center">
        <img
          src="/your-ship-logo.png"
          alt="Seaventures Logo"
          style={{ height: "50px" }}
        />
        <Typography variant="body2" color="text.primary" mt={1}>
          Easy Ship Booking
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
