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
} from "@mui/material";
import { SwapHoriz } from "@mui/icons-material";
import LatestOffers from "./LatestOffers";
import ContactUs from "./ContactUs";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [shippingLine, setShippingLine] = useState("Lite Ferries");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => setAdults(adults > 0 ? adults - 1 : 0);

  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => setChildren(children > 0 ? children - 1 : 0);

  const handleFindTicket = () => {
    navigate(
      `/transaction?origin=${origin}&destination=${destination}&date=${departureDate}&shippingLine=${shippingLine}&adults=${adults}&children=${children}`
    );
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: 'url("src/images/BG.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          margin: "0px",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "rgba(0, 51, 102, 0.5)",
              padding: "10px",
              textAlign: "center",
              color: "white",
              maxWidth: "550px",
              margin: "auto",
              fontFamily: "Roboto, sans-serif",
              borderRadius: "15px",
            }}
          >
            <Typography variant="h4" fontWeight="bold" mb={5} margin={2.5}>
              Find Your Trip
            </Typography>
            <Typography variant="subtitle1" mb={3}>
              Set Your Arrival and Departure Schedule at the Port
            </Typography>

            <Box
              sx={{
                display: "grid",
                gap: "10px",
                gridTemplateColumns: "1fr 40px 1fr",
                alignItems: "center",
                padding: "16px",
                borderRadius: "8px",
                margin: "10px",
              }}
            >
              <Typography gridColumn="span 3" variant="body1" fontSize="12px">
                Travel Destination
              </Typography>
              <TextField
                label="Enter Origin City/Port"
                variant="outlined"
                size="small"
                fullWidth
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "black" },
                  },
                }}
                InputLabelProps={{ sx: { color: "black" } }}
                inputProps={{ sx: { color: "black" } }}
              />
              <SwapHoriz sx={{ fontSize: "30px", color: "white" }} />
              <TextField
                label="Enter Destination City/Port"
                variant="outlined"
                size="small"
                fullWidth
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "black" },
                  },
                }}
                InputLabelProps={{ sx: { color: "black" } }}
                inputProps={{ sx: { color: "black" } }}
              />

              <Typography gridColumn="span 3" variant="body1" fontSize="12px">
                Departure Date
              </Typography>
              <TextField
                type="date"
                InputLabelProps={{ shrink: true, sx: { color: "black" } }}
                variant="outlined"
                size="small"
                fullWidth
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                sx={{
                  gridColumn: "span 3",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
                inputProps={{ sx: { color: "black" } }}
              />

              <Typography gridColumn="span 3" variant="body1" fontSize="12px">
                Select Shipping Lines
              </Typography>
              <Select
                value={shippingLine}
                onChange={(e) => setShippingLine(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  gridColumn: "span 3",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  color: "black",
                }}
              >
                <MenuItem value="Blue Star Ferries">Blue Star Ferries</MenuItem>
                <MenuItem value="Lite Ferries">Lite Ferries</MenuItem>
                <MenuItem value="Cokaliong Shipping Lines">
                  Cokaliong Shipping Lines
                </MenuItem>
                <MenuItem value="Other Shipping Line">
                  Other Shipping Line
                </MenuItem>
              </Select>

              {/* Passenger Count */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gridColumn: "span 3",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body2" mr={1}>
                    Adults
                  </Typography>
                  <Button onClick={decrementAdults}>-</Button>
                  <Typography variant="body1" sx={{ margin: "0 10px" }}>
                    {adults}
                  </Typography>
                  <Button onClick={incrementAdults}>+</Button>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body2" mr={1}>
                    Children
                  </Typography>
                  <Button onClick={decrementChildren}>-</Button>
                  <Typography variant="body1" sx={{ margin: "0 10px" }}>
                    {children}
                  </Typography>
                  <Button onClick={incrementChildren}>+</Button>
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
                onClick={handleFindTicket}
                sx={{
                  backgroundColor: "#0855b1",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#505A5B" },
                  gridColumn: "span 3",
                  marginTop: "10px",
                }}
              >
                Find Your Ticket
              </Button>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: "rgba(80, 90, 91, 0.5)",
                  backgroundColor: "#0855b1",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#505A5B" },
                  gridColumn: "span 3",
                  marginTop: "10px",
                }}
              >
                Manage My Bookings
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <LatestOffers />
      <ContactUs />
    </>
  );
}
