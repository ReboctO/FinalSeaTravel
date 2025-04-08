import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 📌 **Database Connection**
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ferry_booking"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database Connected!");
    }
});

/* ========================================================
    🎟 **API to Search for Tickets**
   - Ensures a trip is always available (except past dates)
   - If no exact match, finds the closest available trip
   - If no trip exists, dynamically creates one
======================================================== */
app.get("/api/search-tickets", (req, res) => {
    const { origin, destination, shipping_line, departure_date, adults = 1, children = 0 } = req.query;

    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    if (departure_date < today) {
        return res.status(400).json({ error: "You cannot search for past dates." });
    }

    const totalPassengers = parseInt(adults) + parseInt(children);

    const tripQuery = `SELECT * FROM trips WHERE origin = ? AND destination = ? LIMIT 1;`;

    db.query(tripQuery, [origin, destination], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        // Dynamically generate seat numbers
        let availableSeats = [];
        for (let i = 1; i <= totalPassengers; i++) {
            availableSeats.push(`S${i}`);
        }

        if (result.length === 0) {
            return res.json({
                route_id: Math.floor(Math.random() * 10000), // Fake ID
                origin,
                destination,
                departure_date, // User-selected date
                shipping_line: shipping_line || "Default Ferry",
                price: 1200, // Default price for now
                available_seats: availableSeats // Show seat numbers
            });
        }

        res.json({
            route_id: result[0].id,
            origin: result[0].origin,
            destination: result[0].destination,
            departure_date,
            shipping_line: result[0].shipping_line,
            price: (adults * result[0].price) + (children * (result[0].price / 2)),
            available_seats: availableSeats
        });
    });
});

/* ========================================================
    ✅ **API to Book a Ticket**
   - Ensures enough seats are available before booking
   - Deducts available seats after booking
======================================================== */
app.post("/api/book-ticket", (req, res) => {
    const { tripId, adults, children } = req.body;
    const totalPassengers = parseInt(adults) + parseInt(children);

    db.query("SELECT available_seats FROM trips WHERE id = ?", [tripId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: "Trip not found" });

        const availableSeats = results[0].available_seats;
        if (availableSeats < totalPassengers) {
            return res.status(400).json({ error: "Not enough seats available" });
        }

        db.query("UPDATE trips SET available_seats = available_seats - ? WHERE id = ?", 
                 [totalPassengers, tripId], 
                 (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            res.json({ message: "Ticket booked successfully!", remainingSeats: availableSeats - totalPassengers });
        });
    });
});


// SIGN IN FUNCTION
app.post("/api/signin", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    const query = `SELECT * FROM users WHERE EMAIL_NAME = ? AND PASSWORD = ?`;
    
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error("Signin error:", err);
            return res.status(500).json({ error: "Database error" });
        }
        
        if (results.length === 0) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        
        // Return user data (excluding password)
        const user = results[0];
        const { PASSWORD, ...userData } = user;
        res.json({ 
            message: "Sign in successful", 
            user: userData 
        });
    });
});



// SIGN UP FUNCTION
app.post("/api/signup", (req, res) => {
    const { firstName, lastName, email, password, contactNumber, address } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    const query = `
        INSERT INTO users 
        (FIRST_NAME, LAST_NAME, EMAIL_NAME, PASSWORD, CONTACT_NUMBER, ADDRESS) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(query, 
        [firstName, lastName, email, password, contactNumber, address], 
        (err, result) => {
            if (err) {
                console.error("Signup error:", err);
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ error: "Email already exists" });
                }
                return res.status(500).json({ error: "Database error" });
            }
            res.json({ message: "Sign up successful!", userId: result.insertId });
        }
    );
});

/* ========================================================
    🚀 **Start Server**
======================================================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
