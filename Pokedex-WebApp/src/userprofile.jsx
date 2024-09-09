import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import TopBar from './components/TopBar';
// import TopBar from './components/TopBar.jsx'
import UserProfilePic from './components/profilepic'

function UserProfile() {
  const [user, setUser] = useState(null);
  const [teams, setTeams] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = Cookies.get('accessToken');
        if (!accessToken) {
          throw new Error('No access token found');
        }

        // Fetch user profile
        const userResponse = await fetch('http://localhost:5000/api/user/current/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch teams
        const teamsResponse = await fetch('http://localhost:5000/api/team/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!teamsResponse.ok) {
          throw new Error('Failed to fetch user teams');
        }
        const teamsData = await teamsResponse.json();

        // Create a 2D array to store Pokémon names
        const fetchPokemonNames = async () => {
          const names = await Promise.all(teamsData.map(async (team) => {
            const pokemonNamesPromises = team.pokemonArray.map(async (entry) => {
              const name = await fetchnames(entry);
              return name;
            });
            return Promise.all(pokemonNamesPromises);
          }));
          setPokemonNames(names);
        };

        await fetchPokemonNames();
        setTeams(teamsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchnames = async (entry) => {
      try {
        const info = await fetch(`https://pokeapi.co/api/v2/pokemon/${entry}`);
        if (!info.ok) throw new Error('Failed to fetch Pokémon name');
        const infojson = await info.json();
        return infojson.forms[0].name;
      } catch (e) {
        console.log(e);
        setError(e.message);
        return 'Unknown';
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <TopBar />
      {/* <UserAndTeamsDetails />  */}
      {/* only add and delete teams */}
      <UserProfilePic /> 
      {/* <LogoutAndDeleteUserProfile /> */}
      <h1>User Profile</h1>
      {user && (
        <div>
          <h2>Username: {user.username}</h2>
          <h3>Email: {user.email}</h3>
        </div>
      )}
      <h2>User Teams</h2>
      {teams.length > 0 ? (
        <ul>
          {teams.map((team, teamIndex) => (
            <li key={team._id}>
              <h3>Team Name: {team.team_name}</h3>
              <ul>
                {pokemonNames[teamIndex]?.map((name, pokedexIndex) => (
                  <li key={pokedexIndex}>{name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <div>No teams found</div>
      )}
    </div>
  );
}

export default UserProfile;
