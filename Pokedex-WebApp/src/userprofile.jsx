import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function UserProfile() {
  // State variables to store user data and teams
  const [user, setUser] = useState(null);
  const [teams, setTeams] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let teamsData;
  useEffect(() => {
  const fetchData = async () => {
    try {
      // Get the access token from cookies
      const accessToken = Cookies.get('accessToken');
      if (!accessToken) {
        throw new Error('No access token found');
      }
      console.log(`accessToken is ${accessToken}`);

      // Fetch user profile information
      //post request
      const userResponse = await fetch('http://localhost:5000/api/user/current/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!userResponse.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const userData = await userResponse.json();
      // console.log(userData);
      setUser(userData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

    try{
      // Fetch user teams
      console.log("trying");
      const teamsResponse = userData.pokemonArray;
      // get request
       await fetch('http://localhost:5000/api/team/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!teamsResponse.ok) {
        throw new Error('Failed to fetch user teams');
      }

      teamsData = await teamsResponse.json();
      console.log("fs\ndf");
      console.log(teamsData);
      setTeams(teamsData);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
},[]);

  return (
    <div>
      <h1>User Profile</h1>
      {user && (
        <div>
          <h2>Username: {user.username}</h2>
          <h3>Email: {user.email}</h3>
          <h3>Email: {user.pokemonArray}</h3>
        </div>
      )}
      <h2>User Teams</h2>
      <ul>
        {teams.length > 0 ? (
          teamsData.forEach((name, index) => (
            <li key={index}> {name} </li>
          ))
        ) : (
          <li>No teams found</li>
        )}
      </ul>
    </div>
  );
}

export default UserProfile;
  // const fetchPokemonNames = async (teamsData) => {
  //   const namesPromises = teamsData.map(async (pokemonid) => {
  //     const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`);
  //     if (!pokemonResponse.ok) {
  //       throw new Error('Failed to fetch Pokémon data');
  //     }
  //     const pokemonData = await pokemonResponse.json();
  //     return pokemonData.forms[0].name; // Get the Pokémon's name
  //   });

    // const names = await Promise.all(namesPromises);
    // setPokemonNames(names);
  // };

  // fetchPokemonNames();
  // });
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;