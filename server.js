require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT 
const cors = require("cors");
const routes = require('./routes/routes');
const connectDB = require("./config/db");

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/acronyms', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
