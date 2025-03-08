const express = require('express');
const cors = require('cors');
const app = express();

app.get("/api", (req, res) => {
    res.json({ fruits: ["apple", "oranges", "pears"]});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server started on port 8080");
});