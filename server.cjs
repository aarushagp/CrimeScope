// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const crimeRoutes = require("./routes/crimeRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/crime", crimeRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});