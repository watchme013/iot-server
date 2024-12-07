import express from "express";
import cors from "cors";
import helmet from "helmet";

import limiter from "@/config/rateLimiter";

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use(limiter);

app.get("/", (req, res) => {
  res.send("Jabal");
});

export default app;
