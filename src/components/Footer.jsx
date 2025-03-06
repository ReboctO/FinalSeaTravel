import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#f8f9fa", py: 4, px: 2, borderTop: "4px solid #003366" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={4}
      >
        {/* Company Address */}
        <Stack spacing={1} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body2" fontWeight="bold">
            PT SEAVENTURES (Persero) HQ
          </Typography>
          <Typography variant="body2">
            Jl. Gajah Mada No. 14, Jakarta Pusat, 10130 DKI Jakarta, Indonesia
          </Typography>
        </Stack>

        {/* Contact Info */}
        <Stack spacing={1} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body2" fontWeight="bold">
            PT SEAVENTURES (Persero) HQ
          </Typography>
          <Typography variant="body2">T. 162 (Jabodetabek)</Typography>
          <Typography variant="body2">F. +62 21 6385 4130</Typography>
          <Typography variant="body2">E. infosea162@seaventures.co.id</Typography>
        </Stack>

        {/* Social Media */}
        <Stack spacing={1} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body2" fontWeight="bold">
            Media Sosial
          </Typography>
          <Box display="flex" gap={1}>
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

        {/* Logo and Tagline */}
        <Box textAlign={{ xs: "center", md: "right" }}>
          <img src="/your-ship-logo.png" alt="Seaventures Logo" style={{ height: "50px" }} />
          <Typography variant="body2" fontWeight="bold" mt={1}>
            Easy Ship Booking
          </Typography>
        </Box>
      </Stack>

      {/* Footer Bottom Section */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2">
          &copy; 2018-2023 PT. Seaventures Indonesia. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
