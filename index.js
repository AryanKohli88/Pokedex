import express from "express"
const app = express();
const port = 5000;

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
import axios from "axios";
import bodyparser from "body-parser";
import { error } from "console";
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
var bcolor;
var types;
var colortype;
var games; // response.data.game_indices[0]["version"]["name"]; gives name of one game you can find it in 
var num; //response.data.id


app.post("/submit", (req,res)=>{
    // console.log(req.body);
    pok = req.body["pokemon"];
    console.log(pok);
    res.redirect("/info");
});

app.get("/info", async (req, res)=>{
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pok}`);
        types = response.data.types;
        colortype = response.data.types[0]["type"]["name"];
        bcolor = mapTypeToColor(colortype);
        games = response.data.game_indices;
        num = response.data.id;

        res.render("pokemon.ejs", {
            pokemon : pok, 
            bgcolor : bcolor, 
            type: types,
            colortype: colortype,
            ingames: games,
            id: num
         }); // this is causing error
        // console.log(response);  
        console.log(games);  

    } catch(er){

        if(er.code === "ERR_BAD_REQUEST" )
        {
          res.send(`<HTML><BODY><h1> ${pok} is not a pokemon</h1></BODY></HTML>`);
        }
        else{
            console.error(er);
            res.status(500).send("Failed");    
        }
    }
});


function mapTypeToColor(type) {
const typeColors = {
    normal: 'gray',
    fire: 'orangered',
    water: 'blue',
    grass: 'green',
    fighting: 'red',
    flying: 'skyblue',
    poison: 'purple',
    ground: 'saddlebrown',
    rock: 'sienna',
    bug: 'green',
    ghost: 'indigo',
    steel: 'slategray',
    electric: 'yellow',
    psychic: 'pink',
    ice: 'lightcyan',
    dragon: 'darkslateblue',
    dark: 'darkslategray',
    fairy: 'pink'
};
// Check if the type exists in the typeColors; if not, return a default color
return typeColors[type] || 'gray';
}

app.listen(port,()=>{
    console.log(`Listening at port ${port}`);
})
