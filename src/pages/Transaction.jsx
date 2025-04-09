import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Button,
    Card,
    Typography,
    CircularProgress,
    Alert,
    Box,
    Divider,
    TextField,
    Grid // Added Grid for better layout control
} from "@mui/material";

const Transaction = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showTickets, setShowTickets] = useState(false);
    const [pastDateError, setPastDateError] = useState(null);
    const [showCustomerForm, setShowCustomerForm] = useState(false);
    const [customerData, setCustomerData] = useState({
        fullName: '',
        age: '',
        email: '',
        contactNumber: '',
        address: ''
    });

    const origin = queryParams.get("origin");
    const destination = queryParams.get("destination");
    const departureDate = queryParams.get("date");
    const shippingLine = queryParams.get("shippingLine");
    const adults = parseInt(queryParams.get("adults")) || 0;
    const children = parseInt(queryParams.get("children")) || 0;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerData(prev => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (showTickets) fetchTickets();
    }, [showTickets]);

    const fetchTickets = async () => {
        setLoading(true);
        setError(null);
        setPastDateError(null);

        const today = new Date().toISOString().split("T")[0];
        if (departureDate < today) {
            setPastDateError("You cannot search for tickets on past dates.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/search-tickets?origin=${origin}&destination=${destination}&departure_date=${departureDate}&shipping_line=${shippingLine}&adults=${adults}&children=${children}`
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to fetch tickets");
            }

            const data = await response.json();
            setTickets(Array.isArray(data) ? data : [data]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ 
            display: 'flex', 
            minHeight: '50vh',
            p: 2,
            backgroundImage: "url(src/images/BG2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            {/* Main content container with Grid for proper alignment */}
            <Grid container spacing={15}>
                {/* Left side - Ticket cards (takes 7 columns on large screens) */}
                <Grid item xs={5} md={5} marginLeft={4}>
                    {/* Search Card */}
                    <Card
                        sx={{
                            width: '100%',
                            p: 3,
                            mb: 2,
                            textAlign: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            border: '1px solid #e0e0e0',
                            marginTop: 3,
                        }}
                    >
                        <Typography 
                            variant="h6" 
                            gutterBottom
                            sx={{
                                color: '#1976d2',
                                fontWeight: 'bold',
                                fontSize: '1.25rem',
                                mb: 2
                            }}
                        >
                            {origin} → {destination}
                        </Typography>

                        <Divider sx={{ 
                            my: 2, 
                            borderColor: '#e0e0e0',
                            borderWidth: '1px'
                        }} />
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ color: '#555', fontSize: '1rem' }}>
                                <strong>Departure Date:</strong> {departureDate}
                            </Typography>
                            <Typography sx={{ color: '#555', fontSize: '1rem' }}>
                                <strong>Shipping Line:</strong> {shippingLine}
                            </Typography>
                            <Typography sx={{ color: '#555', fontSize: '0.9rem', mt: 1 }}>
                                Passengers: {adults} Adult(s), {children} Child(ren)
                            </Typography>
                        </Box>

                        <Button
                                        variant="contained"
                                        color="success"
                                        sx={{ 
                                        width: '100%',
                                        py: 1,
                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                        borderRadius: '5px',
                                        textTransform: 'uppercase',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                        }
                            }}
                            onClick={() => setShowTickets(true)}
                            disabled={loading}
                        >
                            AVAILABLE TICKET
                        </Button>
                    </Card>

                    {/* Loading and Error States */}
                    {loading && <CircularProgress sx={{ my: 2 }} />}
                    {pastDateError && (
                        <Alert severity="error" sx={{ 
                            mb: 2, 
                            width: '100%',
                            borderRadius: '8px'
                        }}>
                            {pastDateError}
                        </Alert>
                    )}
                    {error && (
                        <Alert severity="error" sx={{ 
                            mb: 2, 
                            width: '100%',
                            borderRadius: '8px'
                        }}>
                            {error}
                        </Alert>
                    )}

                    {/* Ticket Results Card */}
                    {showTickets && (
                        <Card
                            sx={{
                                width: '100%',
                                p: 3,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                borderRadius: '8px',
                                backgroundColor: 'white',
                                border: '1px solid #e0e0e0',
                                marginBottom: 3
                            }}
                        >
                            {tickets.length > 0 ? (
                                tickets.map((ticket) => (
                                    <Box key={ticket.route_id}>
                                        <Typography 
                                            variant="h6" 
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: '1.1rem',
                                                color: '#333',
                                                mb: 1
                                            }}
                                        >
                                            Available Seats: {Array.isArray(ticket.available_seats)
                                                ? ticket.available_seats.join(", ")
                                                : ticket.available_seats || "--"}
                                        </Typography>

                                        <Divider sx={{ 
                                            my: 2, 
                                            borderColor: '#e0e0e0',
                                            borderWidth: '1px'
                                        }} />

                                        <Typography sx={{ color: '#555', fontSize: '1rem' }}>
                                            {origin} → {destination}
                                        </Typography>
                                        <Typography sx={{ color: '#555', fontSize: '1rem', mb: 2 }}>
                                            <strong>Departure Date:</strong> {ticket.departure_date || "null"}
                                        </Typography>

                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: '#d32f2f',
                                                fontWeight: 'bold',
                                                my: 2,
                                                fontSize: '1.5rem'
                                            }}
                                        >
                                            Php {(adults * ticket.price) + (children * (ticket.price / 2)) || 0}
                                        </Typography>

                                        <Button
                                            variant="contained"
                                            color="success"
                                            sx={{ 
                                                width: '100%',
                                                py: 1,
                                                fontSize: '15px',
                                                fontWeight: 'bold',
                                                borderRadius: '5px',
                                                textTransform: 'uppercase',
                                                boxShadow: 'none',
                                                '&:hover': {
                                                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                                }
                                            }}
                                            onClick={() => setShowCustomerForm(true)}
                                        >
                                            BOOK TICKET
                                        </Button>
                                    </Box>
                                ))
                            ) : (
                                <Typography sx={{ color: '#555' }}>
                                    No tickets available for your selected route.
                                </Typography>
                            )}
                        </Card>
                    )}
                </Grid>

                {/* Right side - Customer Form (takes 5 columns on large screens, hidden on mobile when not shown) */}
                {showCustomerForm && (
                    <Grid item xs={5} md={6}>
                        <Card
                            sx={{
                                maxWidth: "550px",
                                p: 5,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                borderRadius: '8px',
                                backgroundColor: "rgba(0, 51, 102, 0.8)",
                                marginTop: 3 , // Different margin on mobile vs desktop
                            }}
                        >
                            <Typography 
                                variant="h5" 
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    mb: 4,
                                    textAlign: 'center'
                                }}
                            >
                                Passenger Information
                            </Typography>

                            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 4}}>
                                <Box sx={{ display: 'flex', gap: 2, }}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="fullName"
                                        value={customerData.fullName}
                                        onChange={handleInputChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            backgroundColor: "white",
                                            borderRadius: "5px",
                                            "& .MuiOutlinedInput-root": {
                                              "& fieldset": { borderColor: "white" },
                                            },
                                          }}
                                          InputLabelProps={{ sx: { color: "black" } }}
                                          inputProps={{ sx: { color: "black" } }}
                                    />

                                <TextField
                                        fullWidth
                                        label="Age"
                                        name="age"
                                        value={customerData.age}
                                        onChange={handleInputChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            backgroundColor: "white",
                                            borderRadius: "5px",
                                            "& .MuiOutlinedInput-root": {
                                              "& fieldset": { borderColor: "white" },
                                            },
                                          }}
                                          InputLabelProps={{ sx: { color: "black" } }}
                                          inputProps={{ sx: { color: "black" } }}
                                    />

                                </Box>

                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={customerData.email}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        backgroundColor: "white",
                                        borderRadius: "5px",
                                        "& .MuiOutlinedInput-root": {
                                          "& fieldset": { borderColor: "white" },
                                        },
                                      }}
                                      InputLabelProps={{ sx: { color: "black" } }}
                                      inputProps={{ sx: { color: "black" } }}
                                />

                                <TextField
                                    fullWidth
                                    label="Contact Number"
                                    name="contactNumber"
                                    value={customerData.contactNumber}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        backgroundColor: "white",
                                        borderRadius: "5px",
                                        "& .MuiOutlinedInput-root": {
                                          "& fieldset": { borderColor: "white" },
                                        },
                                      }}
                                      InputLabelProps={{ sx: { color: "black" } }}
                                      inputProps={{ sx: { color: "black" } }}
                                />

                                <TextField
                                        fullWidth
                                        label="Address"
                                        name="address"
                                        value={customerData.address}
                                        onChange={handleInputChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            backgroundColor: "white",
                                            borderRadius: "5px",
                                            "& .MuiOutlinedInput-root": {
                                              "& fieldset": { borderColor: "white" },
                                            },
                                          }}
                                          InputLabelProps={{ sx: { color: "black" } }}
                                          inputProps={{ sx: { color: "black" } }}
                                    />

                                    <Button
                                        variant="contained"
                                        color="success"
                                        sx={{
                                            backgroundColor: "#0855b1",
                                            color: "white",
                                            fontWeight: "bold",
                                            "&:hover": { backgroundColor: "#505A5B" },
                                            gridColumn: "span 3",
                                            marginTop: "10px",
                                            width: '100%',
                                            py: 1,
                                            fontSize: '15px',
                                            borderRadius: '5px',
                                            textTransform: 'uppercase',
                                            boxShadow: 'none',
                                          }}
                                        onClick={() => setShowCustomerForm(true)}
                                        >
                                        CONFIRM BOOKING
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default Transaction;