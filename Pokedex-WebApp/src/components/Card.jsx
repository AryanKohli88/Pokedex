import React from "react";
import Image from "./Image.jsx"
import Type from "./Type.jsx"
import FoundInGames from "./FoundInGames.jsx"
import Animation from "./Animation.jsx"
import Evolution from "./Evolution.jsx"
import KnowMore from "./KnowMore.jsx"
function Card(props){
    // const pok = props.pokemonName;
    // console.log(pok);
    // let response;

    // const getInfo = async (ip)=>{
    //     response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ip}`);
    // }

    const data = props.pokemonData;
    let id = -1;
    if(data)
    {
        console.log(data.id);
        id = data.id;
    }
    else
    console.log("No data")
    
    // console.log(`ID ::  ${data.id}`);
    return <div>
        
        <div className="up">
            <div className="left">
                <Image id={id}/> 
                <Type data={data}/>
            </div>
            <div className="right">
                <FoundInGames />
            </div>
            <div className="right-animation">
                <Animation />
            </div>
        </div>
        <div className="down">
            <KnowMore />
        </div>          
    </div>
}

export default Card;