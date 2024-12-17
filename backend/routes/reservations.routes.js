const express = require("express");
const {
  getProcessedData,
} = require("../controllers/reservations.controller.js");

const router = express.Router();
router.get("/reservations", getProcessedData);

module.exports = router;
