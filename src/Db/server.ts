import express from "express";
import { AppDataSource } from "./config/data-source";
import { User } from "./users/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => console.log(err));

const SECRET_KEY = "your_secret_key"; // Change this in production

// Sign In Route
app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;

  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.json({ token, user: { email: user.email } });
});

// Sign Up Route (for new users)
app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;

  const userRepo = AppDataSource.getRepository(User);
  const existingUser = await userRepo.findOneBy({ email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = userRepo.create({ email, password: hashedPassword });

  await userRepo.save(newUser);

  res.status(201).json({ message: "User registered successfully" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
