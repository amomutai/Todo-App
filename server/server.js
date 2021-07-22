
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");

const todo = require("./routes/todo");

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false}));
app.get("/", (req, res) => {
    res.send("Server up");
});

app.use("/api/todo", todo);

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
});
