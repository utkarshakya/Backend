import express from "express";

const app = express();

app.use("/about", (req, res) => {
    res.send("About Page")
})

app.use("/", (req, res) => {
    res.send("Home Page")
})

app.listen("8000", () => {
    console.log("Express is running at localhost:8000")
})