
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
// rest objects
const app = express()

// config env
dotenv.config();

// database config
connectDB();


// middleware
app.use(express.json())
app.use(morgan('dev'))


// routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get('/', (req, res) => {
    res.send('<h1>Welcome to ecommerce apps </h1>');
})
// port
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
    console.log(`Server is Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
