import  { useState, useEffect } from 'react';

export function useGithubUser( {username} ) {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  async function fetchData(username) {
    try{
      setLoading(true)
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
   {user, error,loading}
  )
  }
