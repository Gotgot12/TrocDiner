import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../Navigation/SideNav';

function FetchGet(link) {
  const [items, setItems] = useState([]);
  const token = useContext(TokenContext);

  const headerRequest = new Headers();
  console.log(token);
  headerRequest.append('Content-Type', 'application/json');
  headerRequest.append('Accept', 'application/json');
  headerRequest.append('Authorization', `Bearer ${token}`);

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

export default FetchGet;
