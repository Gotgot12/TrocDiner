import { useState, useEffect } from 'react'

function FetchPost(body, link='http://localhost:8000/api/login', token="") {
    const [response,setResponse] = useState([]);

    let entetes = new Headers();
    entetes.append('Content-Type', 'application/json')
    entetes.append('Accept', 'application/json')
    
    if (token !== "") {
        entetes.append('Authorization', 'Bearer ' + token);
    }

    const postOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: entetes,
        mode: 'cors',
        cache: 'default'
    }

    let requete = new Request(link);

    useEffect(() => {
        fetch(requete, postOptions)
        .then(function (res) {
            if (res.status > 400) {
                return false
            }
            else {
                return res.json();
            }
        })
        .then(
            (res) => {
                setResponse(res);
            }
        )
      }, [])
    
    return response
}

export default FetchPost
