import express from "express"
const app = express();
const port = 5000;

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
import axios from "axios";
import bodyparser from "body-parser";
app.use(bodyparser.urlencoded(
    {
      extended: true
    }
));
  

app.get("/", (req,res)=>{
    // res.render("pokemon.ejs", {pokemon : req.body["pokemon"]}); // this is causing error
    res.sendFile(__dirname + "/index.html");
});

var pok;
app.post("/submit", (req,res)=>{
    console.log(req.body);
    pok = req.body["pokemon"];
    console.log(pok);
    res.redirect("/info");
});

app.get("/info", async (req, res)=>{
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pok}`);
        res.render("pokemon.ejs", {pokemon : pok}); // this is causing error

    } catch(er){
        console.error(er);
        res.status(500).send("Failed");
    }
});

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})
