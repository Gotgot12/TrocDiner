import { useState, useEffect } from 'react';

function FetchGet(token, link) {
  const [items, setItems] = useState([]);

  const headerRequest = new Headers();
  headerRequest.append('Authorization', `Bearer${token}`);
  headerRequest.append('Content-Type', 'application/json');
  headerRequest.append('Accept', 'application/json');

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
