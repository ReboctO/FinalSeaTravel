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
import { SwapHoriz, } from "@mui/icons-material";
import LatestOffers from "./LatestOffers";
import ContactUs from "./ContactUs";



export default function Home() {
  const [shippingLine, setShippingLine] = useState("Lite Ferries");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => setAdults(adults > 0 ? adults - 1 : 0);
  
  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => setChildren(children > 0 ? children - 1 : 0);

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
              borderRadius: "15px"
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
                  <Typography
                    variant="body2"
                    mr={1}
                    sx={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Adults
                    <br />
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "10px",
                        fontStyle: "italic",
                        fontFamily: "Roboto, sans-serif",
                        display: "block",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Age 6 and over
                    </Typography>
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "beige",
                      color: "black",
                      minWidth: "30px",
                    }}
                    onClick={decrementAdults}
                  >
                    -
                  </Button>
                  <Typography
                    variant="body1"
                    sx={{ margin: "0 10px", fontFamily: "Roboto, sans-serif" }}
                  >
                    {adults}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "beige",
                      color: "black",
                      minWidth: "30px",
                    }}
                    onClick={incrementAdults}
                  >
                    +
                  </Button>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    mr={1}
                    sx={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Children
                    <br />
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "10px",
                        fontStyle: "italic",
                        fontFamily: "Roboto, sans-serif",
                        display: "block",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      2-5 years old
                    </Typography>
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "beige",
                      color: "black",
                      minWidth: "30px",
                    }}
                    onClick={decrementChildren}
                  >
                    -
                  </Button>
                  <Typography
                    variant="body1"
                    sx={{ margin: "0 10px", fontFamily: "Roboto, sans-serif" }}
                  >
                    {children}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "beige",
                      color: "black",
                      minWidth: "30px",
                    }}
                    onClick={incrementChildren}
                  >
                    +
                  </Button>
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
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
              <Button variant="outlined" fullWidth sx={{borderColor:"rgba(80, 90, 91, 0.5)", 
                backgroundColor: "#0855b1", 
                color: "white", fontWeight: "bold", 
                "&:hover": { backgroundColor: "#505A5B" }, 
                gridColumn: "span 3", marginTop: "10px" }}>
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
