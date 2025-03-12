import React, { useRef, useEffect } from "react";
import {
  Typography,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Container
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function LatestOffers() {
  const scrollRef = useRef(null);
  let autoScrollInterval = useRef(null);

  const offers = [
    { title: "High-speed sailings to scenic destinations", img: "/src/images/Off1.jpg" },
    { title: "Up to 20% OFF with Cokaliong Shipping Lines for passengers with cars", img: "/src/images/Off2.jpg" },
    { title: "Samar Island: up to 10% OFF with Kho Shipping", img: "/src/images/Off3.jpg" },
    { title: "Bicol: 10% OFF the return of Golden Star Ferries", img: "/src/images/Off4.jpg" },
  ];

  const infiniteOffers = [...offers, ...offers, ...offers];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 3;
    scrollContainer.scrollLeft = scrollWidth;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollWidth * 2) {
          scrollContainer.scrollLeft = scrollWidth;
        } else if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollWidth;
        }
      }
    };

    autoScrollInterval.current = setInterval(autoScroll, 20);

    return () => clearInterval(autoScrollInterval.current);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      clearInterval(autoScrollInterval.current);
      scrollRef.current.scrollBy({ left: direction * 300, behavior: "smooth" });

      setTimeout(() => {
        autoScrollInterval.current = setInterval(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollLeft += 1;
          }
        }, 20);
      }, 3000);
    }
  };

  return (
    <Box sx={{ backgroundColor: "Lightgrey", py: 4 }}>
      <Container>
        <Box sx={{ position: "relative" }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} px={3}>
            <Typography variant="h5" fontWeight="bold" display="flex" alignItems="center">
              <span style={{ marginRight: 8 }}>🏷️</span> Latest Offers
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#F5F5F5", color: "#000", textTransform: "none" }}>
              View All Special Offers
            </Button>
          </Box>

          <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: 2,
                zIndex: 2,
              }}
              onClick={() => scroll(-1)}
            >
              <ArrowBackIos />
            </IconButton>

            <Box
              ref={scrollRef}
              sx={{
                display: "flex",
                gap: 15,
                overflowX: "scroll",
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
                width: "100%",
              }}
            >
              {infiniteOffers.map((offer, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: 250,
                    minHeight: 250,
                    borderRadius: 3,
                    boxShadow: 3,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia component="img" height="250" image={offer.img} alt="Offer" sx={{ objectFit: "cover" }} />
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: "rgba(0, 51, 102, 0.8)",
                      color: "white",
                      p: 2,
                      textAlign: "center",
                      textWrap: "stable",
                    }}
                  >
                    <Typography variant="caption" fontWeight="bold" display="block">
                      🏷️ Offers and Promotions
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {offer.title}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: 2,
                zIndex: 2,
              }}
              onClick={() => scroll(1)}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
