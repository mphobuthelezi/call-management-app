const express = require("express");
const cors = require("cors");
const data = require("./db.json");

const app = express();
app.use(cors());

// Endpoint to fetch calls
app.get('/api/calls', (req, res) => {
    res.json(calls);
  });

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
