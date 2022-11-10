const express = require("express");

const app = express();

// all time health api ti create kora laagbe! karon amra jokhon host kori website ti tokhon oi host site ti amader site er health check kore:

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "OK" });
});

module.exports = app;
