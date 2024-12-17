const express = require("express");
const cors = require("cors");
const dataRoutes = require("./routes/reservations.routes.js");
const errorHandler = require("./middlewares/errorHandler.js");
const logger = require("./middlewares/logger.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", dataRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  logger.info("Server is running on port 3000");
});
