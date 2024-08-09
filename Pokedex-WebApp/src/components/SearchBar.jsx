import React from "react";

function SearchBar(props) {
  const year = new Date().getFullYear();

  return (
    <div>
        <p className="searchLabel">Search for a Pokemon</p>
        <form action="/submit" method="POST" className="form" id="pokemonForm"> 
         <label>Name: </label>
        <input placeholder="Name of the pokemon..." type="text" name="pokemon" className="text-box" required/>
        <input type="submit" className="btn" onClick={props.getPokemon}  required/>
        <button name="login" className="button"> Login </button>
    </form>
    </div>
  );
}

export default SearchBar;