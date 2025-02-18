import express from "express";
import userRoute from "./src/routes/UserRoute";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { resturentRoute } from "./src/routes/ResturentRoutes";
import orderRoute from "./src/routes/orderRoute";
import menuRoute from "./src/routes/MenuRoute";
import connectDB from "./src/utils/DB";
import path from "path";
import { Request, Response } from "express";

connectDB();

const app = express(); // Create an express application
const PORT = process.env.PORT || 5200; // Define the port number

// Middleware for parsing JSON requests
app.use(bodyParser.json({ limit: "10mb" })); // Parse application/json use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

let corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOption));

const _dirname = path.resolve();

// Routes

app.use("/api/v1/auth", userRoute);
app.use("/api/v1/resturent", resturentRoute);
app.use("/api/v1/menu", menuRoute);
app.use("/api/v1/order", orderRoute);

// const FRONTEND_PATH = path.join(__dirname, "../../front/dist");

app.use(express.static(path.join(_dirname, "/front/dist")));

// Serve index.html for all unknown routes
app.get("*", (_, res) => {
  res.sendFile(path.join(_dirname, "/front/dist/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
