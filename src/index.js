import express from "express";
import morgan from 'morgan';
import routes from "./routes/index.js";

// Create express app
const app = express();

// Use middle wares
app.use(express.json());
app.use(morgan('dev'))

// Use Routes
app.use(routes);

export default app