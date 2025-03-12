import React from "react";
import { Box, Button, Typography, Container, Card, CardContent } from "@mui/material";

export default function Transaction() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      {/* Route Info Section */}
      <Box
        sx={{
          backgroundImage: 'url("src/images/BG.jpg")',
          backgroundColor: "#F8F9FA",
          borderRadius: 2,
          padding: 3,
          mb: 4,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Cebu City ➝ Calbayog City
        </Typography>
        <Typography color="textSecondary">16 June 2023, Fri</Typography>
        <Typography color="textSecondary">Regular • 2 Adult • 1 Children</Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "white",
            color: "black",
            border: "1px solid #ccc",
            textTransform: "none",
            "&:hover": { backgroundColor: "#e6e6e6" },
          }}
        >
          Find Ticket
        </Button>
      </Box>

      {/* Ticket Details Section */}
      <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Available Seat (238)
          </Typography>
          <Typography variant="subtitle1">
            <strong>Cebu City</strong> ➝ <strong>Calbayog City</strong>
          </Typography>
          {/* Date & Shipping Line */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, mb: 2 }}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Departure Date
              </Typography>
              <Typography>16 June 2023, Fri</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Shipping Lines
              </Typography>
              <Typography>Lite Ferries</Typography>
            </Box>
          </Box>

          {/* Price & Book Ticket Button */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h5" color="red" fontWeight="bold">
              Php 1000.00
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4CAF50",
                color: "white",
                textTransform: "none",
                "&:hover": { backgroundColor: "#45A049" },
              }}
            >
              Book Ticket
            </Button>
          </Box>

          {/* Pricing & Terms */}
          <Typography variant="body2" mt={2} color="textSecondary">
            <a href="#" style={{ color: "green", textDecoration: "none" }}>
              Pricing Details
            </a>{" "}
            | Trip Details | Terms and Conditions
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
