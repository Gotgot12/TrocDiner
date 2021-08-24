import { useState, useEffect } from 'react';

function FetchPost(body, link = 'http://localhost:8000/api/login', token = '') {
  const [response, setResponse] = useState([]);

  const headerRequest = new Headers();
  headerRequest.append('Content-Type', 'application/json');
  headerRequest.append('Accept', 'application/json');

  if (token !== '') {
    headerRequest.append('Authorization', `Bearer ${token}`);
  }

  const postOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headerRequest,
    cache: 'default',
  };

  const requete = new Request(link);

  useEffect(() => {
    fetch(requete, postOptions)
      .then((res) => {
        if (res.status > 400) {
          return false;
        }
        return res.json();
      })
      .then((res) => {
        setResponse(res);
      });
  }, []);

  return response;
}

export default FetchPost;
