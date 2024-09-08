import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the access token from cookies
        const accessToken = Cookies.get('accessToken');
        if (!accessToken) {
          throw new Error('No access token found');
        }
        console.log(`accessToken is ${accessToken}`);
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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    const fetchTeams = async () => {
      try {
        const accessToken = Cookies.get('accessToken');
        if (!accessToken) {
          throw new Error('No access token found');
        }
        console.log("trying");
        const teamsResponse = await fetch('http://localhost:5000/api/team/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!teamsResponse.ok) {
          throw new Error('Failed to fetch user teams');
        }
        const teamsData = await teamsResponse.json();
        console.log(teamsData);
        teamsData.map((team)=>{
          team.pokemonArray.map((entry) => {
            const name = fetchnames(entry);
            entry = name;
          })
        })
        setTeams(teamsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // WUT WRONG HERE??

    const fetchnames = async (entry) => {
      try{
        const info = await fetch(`https://pokeapi.co/api/v2/pokemon/${entry}`);
        const  infojson = info.json();
        // const { response } = info;
        console.log(infojson[PromiseResult]);
        // const n = infojson["forms"];
        // console.log(n);
        // return n;
      } catch (e) {
        console.log(e);
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
    fetchTeams();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
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
          {teams.map((team) => (
            <li key={team._id}>
              <h3>Team Name: {team.team_name}</h3>
              <ul>
                {team.pokemonArray.map((pokedexEntry) => (
                  <li key={pokedexEntry}>{pokedexEntry}</li>
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
