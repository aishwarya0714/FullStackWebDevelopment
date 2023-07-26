// 1. import our express module
import express from "express";

//2. create app variable which is using express object
const app = express();
app.get("/", (req,res) => {
    console.log(req.rawHeaders);
    res.send("Hi!");
});

app.get("/contact", (req,res) => {
    console.log(req.rawHeaders);
    res.send("There!");
});

app.get("/about", (req,res) => {
    console.log(req.rawHeaders);
    res.send("it me!");
});
//3. in app method listens the port(3000) and callback(Console.log)
app.listen(3000, () => {
    console.log("Our server is running on port 3000.");
});

// using get method to sent request

