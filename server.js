require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const acronymRoutes = require('./routes/acronymRoutes');
const connectDB = require("./config/db");

app.use(express.json());

app.use(cors());

connectDB();

app.use('/acronym', acronymRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
