import React from "react";
import Image from "./Image.jsx"
import FoundInGames from "./FoundInGames.jsx"
import Evolution from "./Evolution.jsx"
import KnowMore from "./KnowMore.jsx"
function Card(){
    return <div>
        <Image />
        <FoundInGames />
        <Evolution />
        <KnowMore />
    </div>
}

export default Card;