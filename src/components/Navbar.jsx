import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Card, CardContent } from "@mui/material";
import { Search, Info } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-white text-gray-800 shadow-md">
      <Toolbar className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Box className="flex items-center">
          <img src="/your-ship-image.png" alt="Ship Logo" className="h-10 mr-2" />
          <Typography variant="h6" className="font-bold">
            SEAVENTURES
          </Typography>
        </Box>

        <Box className="flex items-center space-x-4">
          <Button color="inherit" className="hover:text-blue-500">Home</Button>
          <Button color="inherit" className="hover:text-blue-500">Transactions</Button>
          <Button color="inherit" className="hover:text-blue-500">Latest Offers</Button>
          <Button color="inherit" className="hover:text-blue-500">Contact Us</Button>
          <Button color="inherit" className="hover:text-blue-500">ID</Button>
          <Button color="inherit" className="hover:text-blue-500">EN</Button>
        </Box>

        <Button variant="outlined" className="border border-gray-400 rounded-md px-4 py-1 text-gray-800 hover:border-blue-500 hover:text-blue-500">
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const HeroSection = () => {
  return (
    <Box className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/background-image.jpg')" }}>
      <Container className="h-full flex flex-col justify-center items-center text-white text-center">
        <Typography variant="h4" className="font-bold">Find Your Trip</Typography>
        <Box className="flex space-x-4 bg-white p-4 rounded-md mt-4 shadow-lg">
          <input type="text" placeholder="From" className="p-2 border rounded-md" />
          <input type="text" placeholder="To" className="p-2 border rounded-md" />
          <input type="date" className="p-2 border rounded-md" />
          <Button variant="contained" color="primary">
            <Search className="mr-2" /> Find Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

const OffersSection = () => {
  return (
    <Container className="py-12">
      <Typography variant="h5" className="font-bold mb-4">Latest Offers</Typography>
      <Grid container spacing={3}>
        {[1, 2, 3].map((offer) => (
          <Grid item xs={12} md={4} key={offer}>
            <Card>
              <CardContent>
                <img src={`/offer-${offer}.jpg`} alt="Offer" className="w-full h-40 object-cover rounded-md" />
                <Typography variant="body1" className="mt-2 font-semibold">Special Discount - 30% OFF</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const PartnersSection = () => {
  return (
    <Container className="py-12">
      <Typography variant="h5" className="font-bold mb-4 text-center">Our Partners</Typography>
      <Grid container spacing={3} justifyContent="center">
        {[1, 2, 3, 4, 5].map((partner) => (
          <Grid item key={partner}>
            <img src={`/partner-${partner}.png`} alt="Partner Logo" className="h-12" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const Footer = () => {
  return (
    <Box className="bg-gray-900 text-white py-8">
      <Container>
        <Typography variant="body1" className="text-center">© 2024 SEAVENTURES. All Rights Reserved.</Typography>
      </Container>
    </Box>
  );
};

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OffersSection />
      <PartnersSection />
      <Footer />
    </>
  );
};

export default HomePage;
