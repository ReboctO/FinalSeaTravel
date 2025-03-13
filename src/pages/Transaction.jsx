import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Card, Typography, CircularProgress, Alert } from "@mui/material";

const Transaction = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showTickets, setShowTickets] = useState(false);
    const [pastDateError, setPastDateError] = useState(null);

    const origin = queryParams.get("origin");
    const destination = queryParams.get("destination");
    const departureDate = queryParams.get("date");
    const shippingLine = queryParams.get("shippingLine");
    const adults = parseInt(queryParams.get("adults")) || 0;
    const children = parseInt(queryParams.get("children")) || 0;

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
        <div>
            <Card style={{ padding: "20px", marginBottom: "20px", textAlign: "center" }}>
                <Typography variant="h5" fontWeight="bold">
                    {origin} → {destination}
                </Typography>
                <Typography>Departure Date: {departureDate}</Typography>
                <Typography>Shipping Line: {shippingLine}</Typography>
                <Typography>Passengers: <strong>{adults}</strong> Adult(s), <strong>{children}</strong> Child(ren)</Typography>

                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                    onClick={() => setShowTickets(true)}
                >
                    Available Ticket
                </Button>
            </Card>

            {loading && <CircularProgress />}
            {pastDateError && <Alert severity="error">{pastDateError}</Alert>}
            {error && <Alert severity="error">{error}</Alert>}

            {showTickets && tickets.length > 0 ? (
                tickets.map((ticket) => (
                    <Card key={ticket.route_id} style={{ padding: "20px", marginTop: "20px" }}>
                        <Typography variant="h6" fontWeight="bold">
                            Available Seats: {Array.isArray(ticket.available_seats) ? ticket.available_seats.join(", ") : ticket.available_seats}
                        </Typography>
                        <Typography>{origin} → {destination}</Typography>
                        <Typography>Departure Date: {ticket.departure_date}</Typography>

                        <Typography variant="h5" color="error" fontWeight="bold">
                            Php {(adults * ticket.price) + (children * (ticket.price / 2))}
                        </Typography>

                        <Button variant="contained" color="success" style={{ marginTop: "10px" }}>
                            Book Ticket
                        </Button>
                    </Card>
                ))
            ) : (
                showTickets && <Alert severity="info">No tickets available for your selected route.</Alert>
            )}
        </div>
    );
};

export default Transaction;
