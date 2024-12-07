import "module-alias/register";

import dotenv from "dotenv";

import app from "@/config/app";
import rfidRoutes from "@/features/radioFrequency";
import reservationRoutes from "@/features/reservation";
import globalErrorHandler from "@/middlewares/globalError";
import apiKey from "@/middlewares/apiKey";

dotenv.config();
const port = process.env.PORT || 3000;

app.use(apiKey);
app.use("/uid", rfidRoutes);
app.use("/reservation", reservationRoutes);

app.use(globalErrorHandler);
app.listen(3000, "192.168.1.27", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
