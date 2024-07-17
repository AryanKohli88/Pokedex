import React from "react";

function SearchBar() {
  const year = new Date().getFullYear();
  return (
    <div>
        <p>Search for a Pokemon</p>
        <form action="/submit" method="POST" class="form" id="pokemonForm"> 
         <label>Name: </label>
        <input placeholder="Name of the pokemon..." type="text" name="pokemon" class="text-box" required/>
        <input type="submit" class="btn" required/>
    </form>
    </div>

  );
}

export default SearchBar;
