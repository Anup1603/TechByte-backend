const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db/connectDB")
const dummyData = require("./dummyData")
const newsRouter = require("./routes/newsRoute");

const app = express();
const PORT = process.env.PORT || 3000;

// middle-ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("<h1>Server is connected</h1>");
});

app.use("/api", newsRouter);


const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server connected successfully @ http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(`Somethings went wrong : ${err.message}`)
    }
}

startServer();