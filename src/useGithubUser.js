import  { useState, useEffect } from 'react';

export function useGithubUser( {username} ) {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  async function fetchData(username) {
    try{
      const response = await fetch (`https://api.github.com/users/${username}`);
      const data= await response.json();
      setUser(data);
      }catch(error){
     setError(error)
      }
    }

  useEffect(() => {
    fetchData(username);
  }, [username])
  return (
   {user, error}
  )
  }
