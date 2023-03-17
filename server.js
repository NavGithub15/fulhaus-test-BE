const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const routes = require('./routes/routes');

app.use(express.json());
app.use(cors());

app.use('/api/acronyms', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
