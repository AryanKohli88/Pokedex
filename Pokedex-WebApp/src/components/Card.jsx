import React from "react";
import Image from "./Image.jsx"
import Type from "./Type.jsx"
import FoundInGames from "./FoundInGames.jsx"
import Animation from "./Animation.jsx"
import Evolution from "./Evolution.jsx"
import KnowMore from "./KnowMore.jsx"
function Card(){
    return <div>
        <div class="up">
            <div class="left">
                <Image />
                <Type />
            </div>
            <div class="right">
                <FoundInGames />
            </div>
            <div class="right-animation">
                <Animation />
            </div>
        </div>
        <div class="down">
            <KnowMore />
        </div>          
    </div>
}

export default Card;