import React from "react";
import { Box, Button, Typography, Container, Card, CardContent, Grid } from "@mui/material";

export default function ContactUs() {
  return (
    <Container sx={{ mt: 4, mb: 4, p: 0 }}>
      {/* Contact Us Section */}
      <Card sx={{ boxShadow: 2 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Contact Us
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={2}>
            Have questions? Reach out to us and we’ll be happy to help!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#007BFF",
              color: "white",
              textTransform: "none",
              "&:hover": { backgroundColor: "#0056b3" },
            }}
          >
            Get in Touch
          </Button>
        </CardContent>
      </Card>

      {/* Why Use SEAVENTURES Section */}
      <Box
        sx={{
          backgroundColor: "#1E3A5F",
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" color="white" fontWeight="bold" textAlign="center" mb={3}>
          Why use SEAVENTURES?
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
          {/* Feature 1 */}
          <Card sx={{ boxShadow: 2, width: 280 }}>
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="h4">⛴️</Typography>
              <Typography variant="body1">
                Ferries from <strong>4412 routes</strong> and <strong>901 ports</strong> worldwide
              </Typography>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card sx={{ boxShadow: 2, width: 280 }}>
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="h4">👥</Typography>
              <Typography variant="body1">
                Trusted by over <strong>2.5 million customers</strong>
              </Typography>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card sx={{ boxShadow: 2, width: 280 }}>
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="h4">🏷️</Typography>
              <Typography variant="body1">
                We check up to <strong>1 million prices</strong> for our customers daily
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Our Partners Section */}
      <Box sx={{ textAlign: "center", backgroundColor: "olive", p: 3 }}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Our Partners
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            "Fast Ferries",
            "Blue Star Ferries",
            "Buquebus",
            "Colonia Express",
            "DFDS",
            "Hellenic Seaways",
            "Interislander",
            "P&O Ferries",
            "Seajets",
          ].map((partner, index) => (
            <Grid item key={index}>
              <Box
                sx={{
                  width: 120,
                  height: 50,
                  backgroundColor: "White",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 1,
                }}
              >
                <Typography variant="body2">{partner}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Customer Service Section with Background Image */}
      <Box
        sx={{
          backgroundImage: "url('/src/images/BG.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          p: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        {/* Overlay to improve readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            ❓ Customer Service
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 500 }}>
            Visit our customer service page to find useful information on traveling by ferry, our FAQs, and how to
            contact us for help with your booking.
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "1px solid #ccc",
            textTransform: "none",
            position: "relative",
            zIndex: 2,
            "&:hover": { backgroundColor: "#e6e6e6" },
          }}
        >
          Need Help?
        </Button>
      </Box>
    </Container>
  );
}
