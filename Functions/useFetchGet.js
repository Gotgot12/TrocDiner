import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../Screens/UserProvider';

function useFetchGet(link) {
  const [items, setItems] = useState([]);
  const { user } = useContext(UserContext);

  const headerRequest = new Headers();

  headerRequest.append('Content-Type', 'application/json');
  headerRequest.append('Accept', 'application/json');
  headerRequest.append('Authorization', `Bearer ${user.token}`);

  const requete = new Request(link);

  const getOptions = {
    method: 'GET',
    headers: headerRequest,
    cache: 'default',
  };

  useEffect(() => {
    fetch(requete, getOptions)
      .then((res) => {
        if (res.status > 400) {
          return false;
        }
        return res.json();
      })
      .then((result) => {
        setItems(result);
      });
  }, []);

  return items;
}

export default useFetchGet;
