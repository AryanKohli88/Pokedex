import React from "react";

function Type(props) {
  const typeColors = {
    normal: 'gray',
    fire: 'orangered',
    water: 'lightblue',
    grass: 'green',
    fighting: 'red',
    flying: 'skyblue',
    poison: 'rgb(210, 20, 102)', // MAKE ALL LIKE THIS ONLY
    ground: 'saddlebrown',
    rock: 'sienna',
    bug: 'green',
    ghost: 'indigo',
    steel: 'slategray',
    electric: 'yellow',
    psychic: 'lightpink',
    ice: 'lightcyan',
    dragon: 'darkslateblue',
    dark: 'darkslategray',
    fairy: 'pink'
};
  let type;
  if(props.data)
  {
    type = props.data.types;
    type.forEach(element => {
      console.log(element["type"]["name"]);
    });
  }
  else{
    type = "No Pokemon"
  }
  return (
<div>
 <button style={{backgroundColor: "lightblue"}} >
      water
    </button> 
  </div>
  );
}
// <div className="type">
//   {( type.length > 0) ? (type.forEach(element => {
//   (<button style={{ backgroundColor: typeColors[element] }}>
//         {element}
//       </button>
//     )}
//   )) : (<p>No Pokémon</p>)}
//   </div>
export default Type;
