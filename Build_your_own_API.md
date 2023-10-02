# Build Your Own API 🚀

" The reason why we use APIs because they make develpoment so much fast. Insted of building out everything from sratch and collecting data, cleaning dta or building up services,you can leverage other people's existing data, their services or their algorithmss in order to build a product on top of that existing API. "

## We are Building REST API

![image](https://github.com/aishwarya0714/FullStackWebDevelopment/assets/136805991/05b885da-d912-4431-90b8-f9453da3c9eb)

## 💡 Why REST API?

- 🖊️ Number one rule for making an API restful is that it uses standard HTTP methods. 
- 🖊️ It have standard data format that it responds with that is JSON format.
- 🖊️ Client-Server: both are seperate they are not on same system or same file. and they are able to message each other.
- 🖊️ Stateless: it means that each single request can be complete and each single response is also complete without need to know what happened previously.
- 🖊️ Resource-based: uses uri or url tp locate specific resources.

# 💡I am going to build API of Royal Enfield

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

// get random values
app.get("/random",(req,res)=>{
    let randomNumber=Math.floor(Math.random()*Royal_Enfield.length);
    res.json(Royal_Enfield[randomNumber]);
});
// get specified value
app.get("/Royal_Enfield/:id",(req,res)=>{
    let id=parseInt(req.params.id) -1 // -1 because array starts at zero and ids start with one
    const foundre = Royal_Enfield.find((re)=>re.id === id);
    res.json(foundre);
})
// use post methos

app.post("/Royal_Enfield",(req,res)=>{
    const newValues = {
        id: Royal_Enfield.length+1,
        model: req.body.text,
        price: req.body.text,
    };
    Royal_Enfield.push(newValues);
    console.log(Royal_Enfield.slice(-1));
    res.json(newValues);
});

// put request 
app.put("/Royal_Enfield/:id",(req,res)=>{
    let id=parseInt(req.params.id);
    const update = {
        id: id,
        model: req.body.text,
        price: req.body.text,
    };
    const actualValue = Royal_Enfield.findIndex((re)=>re.id === id);
    Royal_Enfield[actualValue] = update;
    res.json(update);
});

// patch 

app.patch("/Royal_Enfield/:id",(req,res)=>{
    let id=parseInt(req.params.id);
    const excistingValue = Royal_Enfield.find((re)=>re.id === id);
    const update = {
        id: id,
        model: req.body.text || excistingValue.text,
        price: req.body.text || excistingValue.text,
    };
    const actualValue = Royal_Enfield.findIndex((re)=>re.id === id);
    Royal_Enfield[actualValue] = update;
    console.log(Royal_Enfield[actualValue])
    res.json(update);
});

// delete
app.delete("/Royal_Enfield/:id",(req,res)=>{
    let id=parseInt(req.params.id);
    const excistingValue = Royal_Enfield.find((re)=>re.id === id);
    if(excistingValue>-1){
        Royal_Enfield.splice(excistingValue,1);
        res.sendStatus(200);
    }
});
var Royal_Enfield = [
    {
        id : 1,
        model: "Himalayan",
        price: "Rs. 2.15 Lakh"
    },
    {
        id : 2,
        model: "Meteor 350",
        price: "Rs. 2.03 Lakh"
    },
    {
        id : 3,
        model: "Interceptor 650",
        price: "Rs. 3.03 Lakh"
    },
    {
        id : 4,
        model: "Super Meteor 650",
        price: "Rs. 3.54 Lakh"
    },
    {
        id : 5,
        model: "Royal Enfield Hunter 350",
        price: "Rs. 1.49 Lakh"
    },
    {
        id : 6,
        model: "Royal Enfield Continental GT 650",
        price: "Rs. 3.19 - 3.45 Lakh "
    }
]




